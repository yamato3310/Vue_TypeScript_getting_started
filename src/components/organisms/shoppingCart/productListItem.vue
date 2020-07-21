<template>
  <li @click="click(product)" class="product-list__item">
    <P>商品名: {{product.name}} | </P>
    <p>価格: {{product.price}} | </p>
    <p>個数: {{productCount}} | </p>
    <p>合計: {{productCount * product.price}}円</p>
  </li>
</template>

<script lang="ts">
import Vue, { PropType } from 'vue';
import { Product } from '../../../@types/Product';

export default Vue.extend({
  props: {
    product: Object as PropType<Product>,
    productCount: Number,
    click: Function,
  },
});
</script>

<style scoped>
.product-list__item {
  display: flex;
}
</style>