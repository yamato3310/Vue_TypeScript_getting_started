<template>
  <div>
    <ul>
      <product-list-item
        v-for="(groupByProduct, index) in groupByProducts"
        :key="index"
        :product="removingProduct(groupByProduct)"
        :productCount="groupByProductsCount(groupByProduct)"
        :click="listItemClick"
      >
      </product-list-item>
    </ul>
    <p>合計| {{ shoppingCartTotalPrice }}円</p>
    <modal
      v-if="selectProduct"
      :product="selectProduct"
      :click="modalDelete"
    >
      <div class="store-button__container">
        <button @click="deleteStoreProduct(selectProduct)">取り消す</button>
        <button @click="addStoreProduct(selectProduct)">追加購入</button>
      </div>
    </modal>
  </div>
</template>

<script lang="ts">
import Vue, { PropType } from 'vue';
import ProductListItem from '../organisms/shoppingCart/productListItem.vue';
import { Product } from '../../@types/Product';
import { GroupeByProductsId } from '@/@types/GroupeByProductsId';
import Modal from '../organisms/home/modal.vue';
import { prototype } from 'vue/types/umd';

interface State {
  selectProduct: Product | null;
}

export default Vue.extend({
  components: {
    ProductListItem,
    Modal,
  },
  computed: {
    groupByProducts(): GroupeByProductsId[] {
      return this.$store.getters.groupeByProductsId;
    },
    shoppingCartTotalPrice(): number {
      const reducer = (total: number, groupByProductId: GroupeByProductsId) => {
        const products: Product[] = Object.values(groupByProductId)[0];

        return total + products.length * products[0].price;
      };
      // reduceは配列の各要素に関数を適用して、単一の結果値にする。　第二引数は初期値
      return this.$store.getters.groupeByProductsId.reduce(reducer, 0);
    },
  },
  methods: {
    listItemClick(product: Product) {
      this.selectProduct = product;
    },
    modalDelete() {
      this.selectProduct = null;
    },
    deleteStoreProduct(product: Product) {
      this.$store.commit('cancelProduct', product);
      this.selectProduct = null;
    },
    addStoreProduct(product: Product) {
      this.$store.commit('addProduct', product);
      this.selectProduct = null;
    },
    removingProduct(groupByProduct: GroupeByProductsId): Product {
      return Object.values(groupByProduct)[0][0];
    },
    groupByProductsCount(groupByProduct: GroupeByProductsId): number {
      return Object.values(groupByProduct)[0].length;
    },
  },
  data(): State {
    return {
      selectProduct: null,
    };
  },
});
</script>

<style scoped>
.store-button__container {
  display: flex;
  justify-content: space-around;
  width: 20vw;
}
</style>