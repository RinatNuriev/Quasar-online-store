<template>
  <h2 class="flex justify-center MsTitle">Catalog</h2>
  <div v-if="!items.length">
    <q-linear-progress query></q-linear-progress>
    <h3 class="flex justify-center">Loading...</h3>
  </div>
  <q-page v-else class="column items-center">
    <div>
      <q-btn class="btn q-ma-xs" @click="sortByType">Sort by type</q-btn>
      <q-btn class="btn q-ma-xs" @click="sortByPrice">Sort by price</q-btn>
    </div>
    <div class="q-pa-md row items-start justify-center q-gutter-md">
      <ms-card
        v-for="item in items"
        :key="item.id"
        :item="item"
        :lable="btnLable"
        :func="addToCart"
      />
    </div>
  </q-page>
</template>

<script>
import { defineComponent, ref } from "vue";
import MsCard from "src/components/MsCard.vue";
import { useStore } from "../store/filter";
import { computed } from "vue";
import { queries } from "src/graphql/queries";
import { useQuery } from "@vue/apollo-composable";

export default defineComponent({
  name: "MsCatalogPage",
  components: {
    MsCard,
  },
  setup() {
    const store = useStore();
    const items = computed(() => store.items ?? []);

    const btnLable = "Add to cart";

    const addToCart = (id) => {
      store.addToCart(id);
    };

    const sortByType = () => {
      if (store.types.length) {
        const { result } = useQuery(queries.sort, {
          type: store.types,
          sort: { type: "asc" },
        });
        store.items = computed(() => result.value?.my_shop ?? []);
        return;
      }
      const { result } = useQuery(queries.sortByType);
      store.items = computed(() => result.value?.my_shop ?? []);
    };

    const sortByPrice = () => {
      if (store.types.length) {
        const { result } = useQuery(queries.sort, {
          type: store.types,
          sort: { price: "asc" },
        });
        store.items = computed(() => result.value?.my_shop ?? []);
        return;
      }
      const { result } = useQuery(queries.sortByPrice);
      store.items = computed(() => result.value?.my_shop ?? []);
    };

    return {
      items,
      sortByType,
      sortByPrice,
      btnLable,
      addToCart,
    };
  },
});
</script>

<style>
.my-card {
  max-width: 250px;
}
</style>
