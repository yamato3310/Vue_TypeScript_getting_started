<template>
  <div class="home__container">
    <section id="card-list">
      <card 
        class="card-container--margin"
        v-for="product in products" 
        :key="product.id" 
        :product="product"
        :click="clickCard"
      /> 
    </section>
    <modal
      v-if="selectProduct"
      :product="selectProduct"
      :click="modalDelete"
    >
      <button @click="addStoreProduct(selectProduct)">購入</button>
    </modal>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import Card from '../organisms/home/card.vue';
import Modal from '../organisms/home/modal.vue';
import { getProducts } from '../../helper/getProducts';
import { Product } from '../../@types/Product';

interface State {
  selectProduct: Product | null;
}

export default Vue.extend({
  // importしてきたコンポーネントはここで定義をしないと使えない
  components: {
    Card,
    Modal,
  },
  methods: {
    clickCard(product: Product) {
      this.selectProduct = product;
    },
    modalDelete() {
      this.selectProduct = null;
    },
    addStoreProduct(product: Product) {
      this.$store.commit('addProduct', product);
      this.selectProduct = null;
    },
  },
  data(): State {
    return {
      selectProduct: null,
    };
  },
  computed: {
    // 何でもかんでもdataに置くのでなく、不変なものをcomputedに切り出す
    products(): Product[] {
      return getProducts(10);
    },
  },
  mounted() {
    // console.log(this.products);
  },
});
</script>

<style>
#card-list {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
}

.card-container--margin {
  margin: 5vw;
}

.home__container {
  position: relative;
}
</style>