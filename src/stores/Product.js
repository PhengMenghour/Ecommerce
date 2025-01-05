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
                images: [
                    "./src/assets/images/iphone-13-pro-max.jpg",
                    "./src/assets/images/iphone-side1.jpg",
                    "./src/assets/images/iphone-side2.jpg",
                    "./src/assets/images/iphone16.png",
                ],
                discount: 20,
                review: 10,
                description: "The iPhone 13 Pro Max display has rounded corners that follow a beautiful curved design...",
                colors: [
                    "#d8e3f3",
                    "#f3ece1",
                    "#d4d4d4",
                    "#333333",
                ],
                sizes: [
                    "128GB",
                    "256GB",
                    "512GB",
                ],
                selectedImage: "./src/assets/images/iphone-13-pro-max.jpg",
                selectedColor: "#d8e3f3",
                selectedSize: "128GB",
                quantity: 1,
            },
            {
                id: "2",
                name: "IPhone 16 Pro",
                price: 1299,
                category: "Phone",
                stock: 15,
                images: [
                    "./src/assets/images/iphone-13-pro-max.jpg",
                    "./src/assets/images/iphone-side1.jpg",
                    "./src/assets/images/iphone-side2.jpg",
                    "./src/assets/images/iphone16.png",
                ],
                discount: 10,
                review: 15,
                description: "The iPhone 13 Pro Max display has rounded corners that follow a beautiful curved design...",
                colors: [
                    "#d8e3f3",
                    "#f3ece1",
                    "#d4d4d4",
                    "#333333",
                ],
                sizes: [
                    "128GB",
                    "256GB",
                    "512GB",
                ],
                selectedImage: "./src/assets/images/iphone-13-pro-max.jpg",
                selectedColor: "#d8e3f3",
                selectedSize: "128GB",
                quantity: 1,
            },
            {
                id: "3",
                name: "IPhone 15 Pro Max",
                price: 1399,
                category: "Phone",
                stock: 25,
                images: [
                    "./src/assets/images/iphone-13-pro-max.jpg",
                    "./src/assets/images/iphone-side1.jpg",
                    "./src/assets/images/iphone-side2.jpg",
                    "./src/assets/images/iphone16.png",
                ],
                discount: 10,
                review: 5,
                description: "The iPhone 13 Pro Max display has rounded corners that follow a beautiful curved design...",
                colors: [
                    "#d8e3f3",
                    "#f3ece1",
                    "#d4d4d4",
                    "#333333",
                ],
                sizes: [
                    "128GB",
                    "256GB",
                    "512GB",
                ],
                selectedImage: "./src/assets/images/iphone-13-pro-max.jpg",
                selectedColor: "#d8e3f3",
                selectedSize: "128GB",
                quantity: 1,
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