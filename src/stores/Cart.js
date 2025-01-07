import { defineStore } from "pinia";

export const useCartStore = defineStore("cart", {
  state: () => ({
    cartItems: [],
  }),


  actions: {
    // updateQuantity(index, quantity) {
    //   if (this.cartItems[index]) {
    //     this.cartItems[index].quantity = quantity;
    //   }
    // },
    // removeItem(index) {
    //   this.cartItems.splice(index, 1);
    // },

    addToCart(product){
      const existingProduct = this.cartItems.find(item => item.id.id === product.id);
      if (existingProduct) {
        existingProduct.quantity += 1;
      } else {
        this.cartItems.push({...product, quantity: 1});
      }
    },

    removeFromCart(productId){
      this.cartItems = this.cartItems.filter(item => item.id !== productId);
    },

    updateQuantity(id, quantity) {
      const item = this.cartItems.find(item => item.id === id);
      if (item) {
        item.quantity = quantity;
      }
    },
    
    clearCart(){
      this.cartItems = [];
    }

  },
});
