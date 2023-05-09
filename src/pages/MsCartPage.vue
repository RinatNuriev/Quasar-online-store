<template>
  <h2 class="flex justify-center MsTitle">Cart</h2>
  <q-page class="flex justify-center">
    <h2 v-if="!items.length">Your cart is empty :(</h2>
    <div v-else>
      <div class="flex justify-between cart_btns">
        <q-btn class="q-ma-xs" color="grey" @click="dialog = true">Buy</q-btn>
        <q-btn class="q-ma-xs" to="/" label="Back to catalog"></q-btn>
      </div>
      <div class="q-pa-md row justify-center q-gutter-md">
        <ms-card
          v-for="item in items"
          :key="item.id"
          :item="item"
          :lable="btnLable"
          :func="remoteFromCart"
        />
      </div>
    </div>
  </q-page>
  <div class="q-pa-md q-gutter-sm">
    <q-dialog
      v-model="dialog"
      persistent
      :maximized="maximizedToggle"
      transition-show="slide-up"
      transition-hide="slide-down"
    >
      <q-card class="text-white">
        <q-bar>
          <q-space></q-space>

          <q-btn
            dense
            flat
            icon="minimize"
            @click="maximizedToggle = false"
            :disable="!maximizedToggle"
          >
            <q-tooltip v-if="maximizedToggle" class="bg-white text-primary"
              >Minimize</q-tooltip
            >
          </q-btn>
          <q-btn
            dense
            flat
            icon="crop_square"
            @click="maximizedToggle = true"
            :disable="maximizedToggle"
          >
            <q-tooltip v-if="!maximizedToggle" class="bg-white text-primary"
              >Maximize</q-tooltip
            >
          </q-btn>
          <q-btn dense flat icon="close" v-close-popup>
            <q-tooltip class="bg-white text-primary">Close</q-tooltip>
          </q-btn>
        </q-bar>

        <q-card-section class="text-center">
          <div class="text-h6 text-grey">Please enter details</div>
        </q-card-section>

        <q-card-section class="q-pt-none flex justify-center">
          <div class="q-gutter-md" style="min-width: 700px">
            <q-form>
              <q-input v-model="text" label="Country"></q-input>
              <q-input v-model="text" label="City"></q-input>
              <q-input v-model="text" label="Address"></q-input>
              <q-select
                v-model="model"
                :options="options"
                label="Payment details"
              ></q-select>
              <q-input
                v-if="model === 'Credit card'"
                v-model="text"
                label="Card details"
              ></q-input>
              <q-input
                v-if="model === 'Postal order'"
                v-model="text"
                label="Postal order details"
              ></q-input>
              <q-input
                v-if="model === 'With your smile'"
                v-model="text"
                label="Give me a smile"
              ></q-input>
            </q-form>
          </div>
        </q-card-section>
        <div class="text-center">
          <q-btn label="Go!" v-close-popup color="grey"></q-btn>
        </div>
      </q-card>
    </q-dialog>
  </div>
</template>

<script>
import MsCard from "src/components/MsCard.vue";
import { useStore } from "../store/filter";
import { computed, ref } from "vue";

export default {
  name: "CartPage",
  components: {
    MsCard,
  },
  data() {
    return {
      items: [],
    };
  },
  setup() {
    const store = useStore();
    const items = computed(() => store.cart ?? []);

    const btnLable = "Delete";

    const remoteFromCart = (id) => {
      store.removeFromCart(id);
    };

    return {
      items,
      btnLable,
      dialog: ref(false),
      maximizedToggle: ref(true),
      model: ref(null),
      options: [
        "Credit card",
        "Postal order",
        "Cash to courier",
        "With your smile",
      ],
      remoteFromCart,
    };
  },
};
</script>

<style></style>
