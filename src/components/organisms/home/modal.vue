<template>
  <div id="modal-wrapper" v-show="isShowContent">
    <div id="overlay" @click="$emit('closeModal')" />
    <div id="content">
      <div class="card-container">
        <figure>
          <img :src="selectedItemData.image" />
        </figure>
        <section>
          <P>商品名:{{selectedItemData.name}}</P>
          <p>価格:{{selectedItemData.price}}</p>
          <p>説明:{{selectedItemData.detail}}</p>
        </section>
      </div>
      <button class="modal-closeButton" @click="$emit('closeModal')">閉じる</button>
    </div>
  </div>
</template>

<script lang="ts">
import Vue, { PropType } from "vue";
import { Product } from "../../../@types/Product";

export default Vue.extend({
  props: {
    isShowContent: Boolean,
    selectedItemData: Object as PropType<Product>
  }
});
</script>

<style scope>
#overlay {
  z-index: 1;

  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);

  display: flex;
  align-items: center;
  justify-content: center;
}

#modal-wrapper {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
}

#content {
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 100;
  width: 23vw;
  height: 70vh;
  padding: 1em;
  background-color: #fff;
}

.modal-closeButton {
  position: absolute;
  bottom: 10px;
  left: 10px;
}
</style>
