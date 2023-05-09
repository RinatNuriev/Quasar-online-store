<template>
  <q-layout view="lhh LpR lFf" class="bg-blue-grey-1">
    <q-header elevated class="bg-teal-6 text-blue-grey-1 aling-center q-pt-sm">
      <q-toolbar>
        <q-btn dense flat round icon="menu" @click="toggleLeftDrawer" />
        <q-toolbar-title class="flex items-center">
          <h4 class="text-blue-grey-2 cursor-pointer" @click="toMainPage">
            myShop
          </h4>
          <q-avatar>
            <q-icon name="font_download"></q-icon>
          </q-avatar>
        </q-toolbar-title>
        <q-item id="auth-links">
          <q-btn
            color="white text-black"
            size="sm"
            style="width: 75px"
            dense
            label="Login"
            to="/catalog"
            type="button"
            @click="login"
          />
        </q-item>
        <div class="q-ml-md">
          <div id="user-button"></div>
        </div>

        <q-btn to="/cart" color="primary" class="q-ml-md"
          ><q-icon name="shopping_cart"></q-icon> {{ cart.length }}</q-btn
        >
      </q-toolbar>
      <div class="text-right q-pa-sm">
        <span class="">Total price: {{ totalPrice }}</span>
      </div>
    </q-header>

    <q-drawer
      show-if-above
      v-model="leftDrawerOpen"
      side="left"
      bordered
      class="column wrap justify-start items-start q-pa-xl MsMainLayoutDrawer"
    >
      <q-btn to="/" color="secondary" label="Catalog" class="q-mb-sm"></q-btn>
      <q-btn
        color="secondary"
        label="Add product"
        to="/add"
        class="q-mb-sm"
      ></q-btn>

      <q-btn-dropdown class="glossy" color="primary" label="Categories">
        <div class="row no-wrap q-pa-md">
          <q-form @submit="onSubmit">
            <div class="column">
              <q-toggle
                name="clothes"
                v-model="tshirt"
                label="T-shirt"
                true-value="T-shirt"
              ></q-toggle>
              <q-toggle
                name="clothes"
                v-model="shoes"
                label="Shoes"
                true-value="Shoes"
              ></q-toggle>
              <q-toggle
                name="clothes"
                v-model="underwear"
                label="Underwear"
                true-value="Underwear"
              ></q-toggle>
            </div>
            <div class="flex justify-end">
              <q-btn label="Submit" type="submit" color="secondary"></q-btn>
            </div>
          </q-form>
          <div>
            <q-btn label="All" color="secondary" @click="getAllItems"></q-btn>
          </div>
        </div>
      </q-btn-dropdown>
    </q-drawer>

    <q-page-container class="q-pa-xl">
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script>
const publishableKey =
  "pk_test_YXBwYXJlbnQtY2hpZ2dlci00Ny5jbGVyay5hY2NvdW50cy5kZXYk";

const script = document.createElement("script");
script.setAttribute("data-clerk-publishable-key", publishableKey);
script.async = true;
script.src = `https://cdn.jsdelivr.net/npm/@clerk/clerk-js@latest/dist/clerk.browser.js`;
script.crossOrigin = "anonymous";
script.addEventListener("load", async function () {
  await window.Clerk.load();

  const userButton = document.getElementById("user-button");
  const authLinks = document.getElementById("auth-links");

  window.Clerk.addListener(({ user }) => {
    authLinks.style.display = user ? "none" : "";
  });

  if (window.Clerk.user) {
    window.Clerk.mountUserButton(userButton);
    userButton.style.margin = "auto";

    localStorage.setItem("session_id", window.Clerk.session.id);
  }
});
document.body.appendChild(script);

import { computed, onMounted, ref } from "vue";
import { useQuery, provideApolloClient } from "@vue/apollo-composable";
import { queries } from "src/graphql/queries";
import { useStore } from "../store/filter";
import apolloClient from "../apollo/client.js";
import { useRouter } from "vue-router";

provideApolloClient(apolloClient);

export default {
  setup() {
    const logout = async () => {
      await window.Clerk.signOut();
    };

    const login = async ({ email, password }) => {
      window.Clerk.openSignIn();
    };

    const leftDrawerOpen = ref(false);

    const tshirt = ref(null);
    const shoes = ref(null);
    const underwear = ref(null);

    const store = useStore();
    const cart = computed(() => store.cart ?? []);
    const router = useRouter();

    let totalPrice = computed(() =>
      store.cart?.reduce((acc, item) => acc + item.price, 0)
    );

    const setFilter = (param) => {
      const getAll = useQuery(() => queries.filter, { type: param });
      if (param.length === 0) {
        tshirt.value = null;
        shoes.value = null;
        underwear.value = null;
        store.types = [];
        const getAll = useQuery(() => queries.filter, {
          type: ["Shoes", "Underwear", "T-shirt"],
        });
        store.items = computed(() => getAll.result.value?.my_shop ?? []);
        return;
      }
      store.items = computed(() => getAll.result.value?.my_shop ?? []);
    };
    onMounted(() => {
      const { result } = useQuery(queries.getAll);
      store.items = computed(() => result.value?.my_shop ?? []);
      totalPrice;
    });
    const onSubmit = (evt) => {
      const formData = new FormData(evt.target);
      const data = [];
      for (const [name, value] of formData.entries()) {
        data.push(value);
      }
      store.types = data;
      setFilter(data);
    };

    const toMainPage = () => {
      router.push({ path: "/" });
    };
    const getAllItems = (evt) => {
      tshirt.value = null;
      shoes.value = null;
      underwear.value = null;
      store.types = [];

      const getAll = useQuery(() => queries.getAll);
      store.items = computed(() => getAll.result.value?.my_shop ?? []);
    };

    return {
      leftDrawerOpen,
      toggleLeftDrawer() {
        leftDrawerOpen.value = !leftDrawerOpen.value;
      },
      tshirt,
      shoes,
      underwear,
      store,
      onSubmit,
      cart,
      totalPrice,
      toMainPage,
      getAllItems,
      login,
      logout,
    };
  },
};
</script>

<style></style>
