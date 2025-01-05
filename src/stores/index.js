import { createStore } from "pinia";

const store = createStore({
  state() {
    return {
      cartItems: [
        { name: "Bose QuietComfort Ultra Noise", price: 619, quantity: 1 },
        { name: "DualSense Wireless Controller", price: 49.99, quantity: 2 },
        { name: "Xiaomi 14 Ultra", price: 899.99, quantity: 1 },
      ],
    };
  },
  mutations: {
    updateQuantity(state, { index, quantity }) {
      state.cartItems[index].quantity = quantity;
    },
    removeItem(state, index) {
      state.cartItems.splice(index, 1);
    },
  },
  actions: {
    updateQuantity({ commit }, payload) {
      commit("updateQuantity", payload);
    },
    removeItem({ commit }, index) {
      commit("removeItem", index);
    },
  },
});

export default store;