import { defineStore } from "pinia";

export const useCartStore = defineStore("cart", {
  state: () => ({
    cartItems: [
      {
        name: "Bose QuietComfort Ultra Noise",
        price: 619,
        quantity: 1
      },
      {
        name: "DualSense Wireless Controller",
        price: 49.99,
        quantity: 2
      },
      {
        name: "Xiaomi 14 Ultra",
        price: 899.99,
        quantity: 1
      },
    ],
  }),
  actions: {
    updateQuantity(index, quantity) {
      if (this.cartItems[index]) {
        this.cartItems[index].quantity = quantity;
      }
    },
    removeItem(index) {
      this.cartItems.splice(index, 1);
    },
  },
});
