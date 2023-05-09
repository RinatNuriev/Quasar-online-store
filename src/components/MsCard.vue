<template>
  <q-card class="my-card" style="cursor: pointer">
    <img
      class="MsCardImg"
      :src="`${item.img}`"
      :id="item.id"
      @click="toProductCard"
    />

    <q-card-section :id="item.id" @click="toProductCard">
      <div class="text-h6">{{ item.type }}</div>
      <div class="text-subtitle2">
        Price:
        <strong>{{
          new Intl.NumberFormat("ru", {
            style: "currency",
            currency: "RUB",
          }).format(item.price)
        }}</strong>
      </div>
    </q-card-section>

    <q-card-section class="q-pt-none MsCardDesc">
      {{ item.description }}
    </q-card-section>
    <div class="text-right">
      <q-btn
        color="white"
        :id="item.id"
        class="q-ma-sm"
        text-color="black"
        @click="handleClick"
        >{{ lable }}</q-btn
      >
    </div>
  </q-card>
</template>

<script>
import { storeToRefs } from "pinia";
import { useStore } from "../store/filter";
import { useRouter } from "vue-router";

export default {
  name: "MsCard",
  props: {
    item: {
      type: Object,
      default() {},
    },
    lable: {
      type: String,
    },
    func: {
      type: Function,
    },
  },
  setup(props) {
    const store = useStore();
    const { cart } = storeToRefs(store);
    const router = useRouter();

    const toProductCard = (e) => {
      router.push({ name: "productPage", params: { id: e.currentTarget.id } });
    };
    const handleClick = (e) => {
      const add = props.func;
      add(e.currentTarget.id);
    };
    return {
      cart,
      handleClick,
      toProductCard,
    };
  },
};
</script>

<style>
.MsCardImg {
  height: 250px;
  object-fit: contain;
}
.my-card {
  min-width: 250px;
}
.MsCardDesc {
  height: 40px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}
</style>
