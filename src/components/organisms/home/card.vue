<template>
  <div class="card-container" @click="click(product)">
    <figure>
      <img :src="product.image">
    </figure>
    <section>
      <P>商品名: {{product.name}}</P>
      <p>価格: {{product.price}}</p>
      <p>説明: {{product.detail}}</p>
    </section>
  </div>
</template>

<script lang="ts">
import Vue, { PropType } from 'vue';
import { Product } from '../../../@types/Product';

export default Vue.extend({
  props: {
    product: Object as PropType<Product>,
    click: Function,
  },
});
</script>

<style>
.card-container {
  border: 1px solid;
  width: 20vw;
  height: 60vh;
  margin: 5vw;
}

.card-container figure {
  margin: 0;
  width: 20vw;
  text-align: center;
}

.card-container section {
  height: 30vh;
  padding: 2.5px;
}

.card-container p {
  width: 15vw;
}
</style>