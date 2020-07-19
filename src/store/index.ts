import Vue from 'vue';
import Vuex from 'vuex';
import { Product } from '@/@types/Product';

Vue.use(Vuex);

type State = {
  products: Product[];
}

const initState: State = {
  products: []
}

export default new Vuex.Store({
  state: initState,
  mutations: { // stateに対しての操作
    addProduct(state, product: Product) {
      state.products.push(product)
    },
  },
  actions: { // mutationsを使い一連の操作を行うことができる
  },
  modules: {
  },
  getters: { // データを加工をして取り出したいときに使う
  },
});
