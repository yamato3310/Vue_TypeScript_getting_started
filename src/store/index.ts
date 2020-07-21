import Vue from 'vue';
import Vuex from 'vuex';
import { Product } from '@/@types/Product';
import { GroupeByProductsId } from '@/@types/GroupeByProductsId';

Vue.use(Vuex);

interface State {
  products: Product[];
}

const initState: State = {
  products: [],
};


export default new Vuex.Store({
  state: initState,
  mutations: { // stateに対しての操作
    addProduct: (state, product: Product) => {
      state.products.push(product);
    },
    cancelProduct: (state, product: Product) => {
      const idx = state.products.map((product: Product) => product.id).indexOf(product.id);
      state.products.splice(idx, 1);
    },
  },
  actions: { // mutationsを使い一連の操作を行うことができる
  },
  modules: {
  },
  getters: { // データを加工をして取り出したいときに使う
    groupeByProductsId(state): GroupeByProductsId[] {
      return state
      .products
      .map((product: Product) => product.id)
      .filter((x, i, self) => { // 重複削除
        return self.indexOf(x) === i;
      })
      .map((productId) => { // データの整形
        return {
          [productId]: state.products.filter((product: Product) => product.id === productId),
        };
      });
    },
  },
});
