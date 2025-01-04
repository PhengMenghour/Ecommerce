import { defineStore } from "pinia";

export const useProductsStore = defineStore('products', {
    state: () => ({
        products: [
            {
                id: "1",
                name: "IPhone 16 Pro Max",
                price: 1499,
                category: "Phone",
                stock: 30,
                image: ["", ""]
            },
            {
                id: "2",
                name: "IPhone 16 Pro",
                price: 1299,
                category: "Phone",
                stock: 15,
                image: ["", ""]
            },
            {
                id: "3",
                name: "IPhone 15 Pro Max",
                price: 1399,
                category: "Phone",
                stock: 25,
                image: ["", ""]
            }
        ],

        getters: {
            getProductById: (state) => (id) => {
                return state.products.find((product) => product.id === id);
            },

            getProductsByCategory: (state) => (category) => {
                return state.products.filter((product) => product.category === category)
            }

        },

        actions: {
            addProduct(product) {
                this.products.push(product);
            },

            updateProduct(id, updatedFields) {
                const product = this.products.find((product) => product.id === id)
                if (product) {
                    Object.assign(product, updatedFields);
                }
            },

            deleteProduct(id) {
                this.products = this.products.filter((product) => product.id !== id)
            }
        }
    })
})