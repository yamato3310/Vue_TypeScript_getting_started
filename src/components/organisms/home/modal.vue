<template>
    <div class="modal">
      <div class="modal__background" @click="click"></div>
      <section class="modal__container">
        <section class="modal__detail">
          <figure class="detail__product-image">
            <img :src="product.image">
          </figure>
          <section class="detail__product-propaty-list">
            <P>商品名: {{product.name}}</P>
            <p>価格: {{product.price}}</p>
            <p>説明: {{product.detail}}</p>
          </section>
        </section>
        <slot></slot>
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

<style scoped>
.modal {
  position: fixed;
  width: 100vw;
  height: 100vh;
  left: 0;
  top: 0;
}
.modal__background {
  width: 100vw;
  height: 100vh;
  background-color: black;
  opacity: 0.8;
  position: absolute;
}

.modal__detail {
  display: flex;
  flex-direction: row;
}

.modal__container {
  width: 80vw;
  height: 80vh;
  position: absolute;
  background-color: white;
  left: 9.5%;
  top: 9.5%;
  padding: 1vw;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

.product-propaty-list {
  justify-content: center;
}
</style>