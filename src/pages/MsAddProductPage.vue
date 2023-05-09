<template>
  <div class="q-pa-md q-gutter-sm">
    <q-card-section class="q-pt-none flex justify-center">
      <div class="q-gutter-md" style="min-width: 700px">
        <q-form @submit="onSubmit">
          <q-select
            v-model="form.model"
            :options="form.options"
            label="Product type"
          ></q-select>
          <q-input
            v-if="form.model === 'New'"
            v-model="form.newType"
            label="Type"
          ></q-input>
          <q-input v-model="form.price" type="number" label="Price"></q-input>
          <q-input v-model="form.description" label="Description"></q-input>
          <q-input v-model="form.image" label="Image link"></q-input>
          <div class="text-center q-ma-xl">
            <q-btn label="Add" type="submit"></q-btn>
          </div>
        </q-form>
      </div>
    </q-card-section>
  </div>
</template>

<script>
import { computed, onMounted, ref } from "vue";
import { useMutation, useQuery } from "@vue/apollo-composable";
import { queries } from "src/graphql/queries";
import { useStore } from "src/store/filter";
export default {
  name: "MsAddProduct",
  setup() {
    const store = useStore();

    const { mutate: addClothes } = useMutation(queries.addClothes);

    const form = ref({
      model: ref(null),
      options: ["T-shirt", "Shoes", "Underwear", "New"],
      price: ref(null),
      description: ref(null),
      image: ref(null),
      newType: ref(null),
    });

    const onSubmit = async () => {
      if (form.value.model === "New") {
        const { data } = await addClothes({
          type: form.value.newType,
          description: form.value.description,
          price: form.value.price,
          img: form.value.image,
        });
      } else {
        const { data } = await addClothes({
          type: form.value.model,
          description: form.value.description,
          price: form.value.price,
          img: form.value.image,
        });
      }
      form.value.model = null;
      form.value.description = null;
      form.value.price = null;
      form.value.image = null;
      form.value.newType = null;

      const getAll = useQuery(() => queries.getAll);
      store.items = computed(() => getAll.result.value?.my_shop ?? []);
    };

    return {
      form,
      onSubmit,
    };
  },
};
</script>

<style></style>
