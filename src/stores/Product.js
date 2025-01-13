import { defineStore } from "pinia";

export const useProductsStore = defineStore('products', {
    state: () => ({
        products: [
            {
                id: 1,
                name: "IPhone 16 Pro Max",
                price: 1499,
                mainCategory: "Phones",
                category: "iPhone",
                stock: 30,
                image: "/src/assets/images/iphone_16_promax.jpg",
                additionalImages: [
                    "/src/assets/images/ip16_white.jpg",
                    "/src/assets/images/ip16_black.jpg",
                    "/src/assets/images/ip16_pink.jpg",
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
                selectedImage: "/src/assets/images/iphone_16_promax.jpg",
                selectedColor: "#d8e3f3",
                selectedSize: "128GB",
                quantity: 0,
            },
            {
                id: 2,
                name: "Samsung S24 Ultra",
                price: 1299,
                mainCategory: "Phones",
                category: "Samsung",
                stock: 15,
                image: "/src/assets/images/galaxy_s24_ultra.jpg",
                additionalImages: [
                    "/src/assets/images/s24ultra_white.jpg",
                    "/src/assets/images/s24ultra_black.jpg",
                    "/src/assets/images/s24ultra_purple.jpg",
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
                selectedImage: "/src/assets/images/galaxy_s24_ultra.jpg",
                selectedColor: "#d8e3f3",
                selectedSize: "128GB",
                quantity: 0,
            },
            {
                id: 3,
                name: "Dell Optiplex",
                price: 1399,
                mainCategory: "Computers",
                category: "Dell",
                stock: 25,
                image: "/src/assets/images/dell_optiplex.jpg",
                additionalImages: [
                    "/src/assets/images/dell_optiplex_green.jpg",
                    "/src/assets/images/dell_optiplex_yellow.jpg",
                    "/src/assets/images/dell_optiplex_blue.jpg",
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
                selectedImage: "/src/assets/images/dell_optiplex.jpg",
                selectedColor: "#d8e3f3",
                selectedSize: "128GB",
                quantity: 0,
            },
            {
                id: 4,
                name: "Xiaomi Mi 14 Ultra",
                price: 999,
                mainCategory: "Phones",
                category: "Xiaomi",
                stock: 25,
                image: "/src/assets/images/xiaomi_14ultra.jpg",
                additionalImages: [
                    "/src/assets/images/xiaomi_14ultra.jpg",
                    "/src/assets/images/xiaomi_black.jpg",
                    "/src/assets/images/xiaomi_blue.jpg",
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
                selectedImage: "/src/assets/images/xiaomi_14ultra.jpg",
                selectedColor: "#d8e3f3",
                selectedSize: "128GB",
                quantity: 0,
            },
            {
                id: 5,
                name: "Oppo Find X6 Pro",
                price: 899,
                mainCategory: "Phones",
                category: "Oppo",
                stock: 25,
                image: "/src/assets/images/oppo_find_x6_pro.jpg",
                additionalImages: [
                    "/src/assets/images/oppo_green.jpg",
                    "/src/assets/images/oppo_orange.jpg",
                    "/src/assets/images/oppo_black.jpg",
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
                selectedImage: "/src/assets/images/oppo_find_x6_pro.jpg",
                selectedColor: "#d8e3f3",
                selectedSize: "128GB",
                quantity: 0,
            },
            {
                id: 6,
                name: "Vivo X100 Pro",
                price: 899,
                mainCategory: "Phones",
                category: "Vivo",
                stock: 25,
                image: "/src/assets/images/vivo_x100pro.jpg",
                additionalImages: [
                    "/src/assets/images/vivo_orange.png",
                    "/src/assets/images/vivo_black.jpg",
                    "/src/assets/images/vivo_white.jpg",
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
                selectedImage: "/src/assets/images/vivo_x100pro.jpg",
                selectedColor: "#d8e3f3",
                selectedSize: "128GB",
                quantity: 0,
            },
            {
                id: 7,
                name: "HP ProDesk 600 G3 SFF",
                price: 899,
                mainCategory: "Computers",
                category: "HP",
                stock: 25,
                image: "/src/assets/images/hp_prodesk_600_g3_sff.jpg",
                additionalImages: [
                    "/src/assets/images/hp_prodesk_600_g3_sff.jpg",
                    "/src/assets/images/hp_prodesk_600_g3_sff.jpg",
                    "/src/assets/images/hp_prodesk_600_g3_sff.jpg",
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
                selectedImage: "/src/assets/images/dell_optiplex.jpg",
                selectedColor: "#d8e3f3",
                selectedSize: "128GB",
                quantity: 0,
            },
            {
                id: 8,
                name: "Lenovo Legion Tower",
                price: 899,
                mainCategory: "Computers",
                category: "Lenovo",
                stock: 25,
                image: "/src/assets/images/lenovo_legion_tower_7ig8w.jpg",
                additionalImages: [
                    "/src/assets/images/legion1.jpg",
                    "/src/assets/images/legion2.jpg",
                    "/src/assets/images/legion3.jpg",
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
                selectedImage: "/src/assets/images/lenovo_legion_tower_7ig8w.jpg",
                selectedColor: "#d8e3f3",
                selectedSize: "128GB",
                quantity: 0,
            },
            {
                id: 9,
                name: "Asus ROG Strix GA35CA",
                price: 899,
                mainCategory: "Computers",
                category: "Asus",
                stock: 25,
                image: "/src/assets/images/asus_rog_strix.jpg",
                additionalImages: [
                    "/src/assets/images/rog1.jpg",
                    "/src/assets/images/rog2.jpg",
                    "/src/assets/images/rog3.jpg",
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
                selectedImage: "/src/assets/images/asus_rog_strix.jpg",
                selectedColor: "#d8e3f3",
                selectedSize: "128GB",
                quantity: 0,
            },
            {
                id: 10,
                name: "Anker Power Bank",
                price: 899,
                mainCategory: "Accessories",
                category: "PowerBanks",
                stock: 25,
                image: "/src/assets/images/anker_ank_powerbank.jpg",
                additionalImages: [
                    "/src/assets/images/pb3.jpg",
                    "/src/assets/images/pb2.jpg",
                    "/src/assets/images/pb1.jpg",
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
                selectedImage: "/src/assets/images/anker_ank_powerbank.jpg",
                selectedColor: "#d8e3f3",
                selectedSize: "128GB",
                quantity: 0,
            },
            {
                id: 11,
                name: "Anker Fast Charger",
                price: 899,
                mainCategory: "Accessories",
                category: "Chargers",
                stock: 25,
                image: "/src/assets/images/anker_fast_charger.jpg",
                additionalImages: [
                    "/src/assets/images/charger1.jpg",
                    "/src/assets/images/charger2.jpg",
                    "/src/assets/images/charger3.jpg",
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
                selectedImage: "/src/assets/images/anker_fast_charger.jpg",
                selectedColor: "#d8e3f3",
                selectedSize: "128GB",
                quantity: 0,
            },
            {
                id: 12,
                name: "PS5 Controller",
                price: 899,
                mainCategory: "Accessories",
                category: "Controllers",
                stock: 25,
                image: "/src/assets/images/ps5.png",
                additionalImages: [
                    "/src/assets/images/ps51.png",
                    "/src/assets/images/ps52.png",
                    "/src/assets/images/ps5.png",
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
                selectedImage: "/src/assets/images/ps5.png",
                selectedColor: "#d8e3f3",
                selectedSize: "128GB",
                quantity: 0,
            },
            {
                id: 13,
                name: "MacBook Pro M1",
                price: 899,
                mainCategory: "Laptops",
                category: "Apple",
                stock: 25,
                image: "/src/assets/images/macbook_pro_m1.png",
                additionalImages: [
                    "/src/assets/images/iphone-side1.jpg",
                    "/src/assets/images/iphone-side2.jpg",
                    "/src/assets/images/iphone16.png",
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
                selectedImage: "/src/assets/images/dell_optiplex.jpg",
                selectedColor: "#d8e3f3",
                selectedSize: "128GB",
                quantity: 0,
            },
            {
                id: 14,
                name: "Microsoft Surface Laptop 5",
                price: 899,
                mainCategory: "Laptops",
                category: "Microsoft",
                stock: 25,
                image: "/src/assets/images/microsoft_surface_laptop_5.jpg",
                additionalImages: [
                    "/src/assets/images/iphone-side1.jpg",
                    "/src/assets/images/iphone-side2.jpg",
                    "/src/assets/images/iphone16.png",
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
                selectedImage: "/src/assets/images/dell_optiplex.jpg",
                selectedColor: "#d8e3f3",
                selectedSize: "128GB",
                quantity: 0,
            },
            {
                id: 15,
                name: "Acer Swift 3 OLED",
                price: 899,
                mainCategory: "Laptops",
                category: "Acer",
                stock: 25,
                image: "/src/assets/images/acer_swift_3_oled.jpg",
                additionalImages: [
                    "/src/assets/images/iphone-side1.jpg",
                    "/src/assets/images/iphone-side2.jpg",
                    "/src/assets/images/iphone16.png",
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
                selectedImage: "/src/assets/images/dell_optiplex.jpg",
                selectedColor: "#d8e3f3",
                selectedSize: "128GB",
                quantity: 0,
            },
            {
                id: 16,
                name: "LG 22MK600M",
                price: 899,
                mainCategory: "Monitors",
                category: "LG-Monitors",
                stock: 25,
                image: "/src/assets/images/lg_monitor.jpg",
                additionalImages: [
                    "/src/assets/images/iphone-side1.jpg",
                    "/src/assets/images/iphone-side2.jpg",
                    "/src/assets/images/iphone16.png",
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
                selectedImage: "/src/assets/images/dell_optiplex.jpg",
                selectedColor: "#d8e3f3",
                selectedSize: "128GB",
                quantity: 0,
            },
            {
                id: 17,
                name: "Samsung 34 Odyssey G5 Ultra",
                price: 899,
                mainCategory: "Monitors",
                category: "Samsung-Monitors",
                stock: 25,
                image: "/src/assets/images/samsung_odyssey.jpg",
                additionalImages: [
                    "/src/assets/images/iphone-side1.jpg",
                    "/src/assets/images/iphone-side2.jpg",
                    "/src/assets/images/iphone16.png",
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
                selectedImage: "/src/assets/images/dell_optiplex.jpg",
                selectedColor: "#d8e3f3",
                selectedSize: "128GB",
                quantity: 0,
            },
            {
                id: 18,
                name: "Dell Sync 2024",
                price: 899,
                mainCategory: "Monitors",
                category: "Dell-Monitors",
                stock: 25,
                image: "/src/assets/images/dell_sync_2024.jpg",
                additionalImages: [
                    "/src/assets/images/iphone-side1.jpg",
                    "/src/assets/images/iphone-side2.jpg",
                    "/src/assets/images/iphone16.png",
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
                selectedImage: "/src/assets/images/dell_optiplex.jpg",
                selectedColor: "#d8e3f3",
                selectedSize: "128GB",
                quantity: 0,
            },
            {
                id: 19,
                name: "Netgear Nighthawk AX12",
                price: 899,
                mainCategory: "Networking",
                category: "Routers",
                stock: 25,
                image: "/src/assets/images/netgear_nighthawk_ax12.jpg",
                additionalImages: [
                    "/src/assets/images/iphone-side1.jpg",
                    "/src/assets/images/iphone-side2.jpg",
                    "/src/assets/images/iphone16.png",
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
                selectedImage: "/src/assets/images/dell_optiplex.jpg",
                selectedColor: "#d8e3f3",
                selectedSize: "128GB",
                quantity: 0,
            },
            {
                id: 20,
                name: "Cisco Catalyst 9200L",
                price: 899,
                mainCategory: "Networking",
                category: "Switches",
                stock: 25,
                image: "/src/assets/images/cisco_catalyst_9200l.jpg",
                additionalImages: [
                    "/src/assets/images/iphone-side1.jpg",
                    "/src/assets/images/iphone-side2.jpg",
                    "/src/assets/images/iphone16.png",
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
                selectedImage: "/src/assets/images/dell_optiplex.jpg",
                selectedColor: "#d8e3f3",
                selectedSize: "128GB",
                quantity: 0,
            },
            {
                id: 21,
                name: "Sony WF-1000XM5",
                price: 899,
                mainCategory: "Headphones",
                category: "Sony",
                stock: 25,
                image: "/src/assets/images/sony_1000xm5.jpg",
                additionalImages: [
                    "/src/assets/images/iphone-side1.jpg",
                    "/src/assets/images/iphone-side2.jpg",
                    "/src/assets/images/iphone16.png",
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
                selectedImage: "/src/assets/images/dell_optiplex.jpg",
                selectedColor: "#d8e3f3",
                selectedSize: "128GB",
                quantity: 0,
            },
            {
                id: 22,
                name: "Bose QuietComfort 45",
                price: 899,
                mainCategory: "Headphones",
                category: "Bose",
                stock: 25,
                image: "/src/assets/images/bose_quietcomfort_45.jpg",
                additionalImages: [
                    "/src/assets/images/iphone-side1.jpg",
                    "/src/assets/images/iphone-side2.jpg",
                    "/src/assets/images/iphone16.png",
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
                selectedImage: "/src/assets/images/dell_optiplex.jpg",
                selectedColor: "#d8e3f3",
                selectedSize: "128GB",
                quantity: 0,
            },
            {
                id: 23,
                name: "JBL Tune 760NC",
                price: 899,
                mainCategory: "Headphones",
                category: "JBL",
                stock: 25,
                image: "/src/assets/images/jbl_tune_760nc.jpg",
                additionalImages: [
                    "/src/assets/images/iphone-side1.jpg",
                    "/src/assets/images/iphone-side2.jpg",
                    "/src/assets/images/iphone16.png",
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
                selectedImage: "/src/assets/images/dell_optiplex.jpg",
                selectedColor: "#d8e3f3",
                selectedSize: "128GB",
                quantity: 0,
            },

        ],
        comments: [
            {
                imageSrc: 'https://via.placeholder.com/50',
                name: 'Jeffrey',
                rating: 5,
                comment:
                    'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent at congue turpis, sed auctor nunc. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent at congue turpis, sed auctor nunc. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent at congue turpis, sed auctor nunc.',
            },
            {
                imageSrc: 'https://via.placeholder.com/50',
                name: 'Emily',
                rating: 4,
                comment:
                    'Donec bibendum orci quis magna ultrices porta. Morbi sagittis felis turpis, vitae molestie ligula viverra. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent at congue turpis, sed auctor nunc. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent at congue turpis, sed auctor nunc.',
            },
            {
                imageSrc: 'https://via.placeholder.com/50',
                name: 'Michael',
                rating: 3,
                comment:
                    'Nullam at sem vel neque finibus sollicitudin et eget enim. Fusce ac venenatis quam, sed aliquet est. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent at congue turpis, sed auctor nunc. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent at congue turpis, sed auctor nunc.',
            },
        ],

    }),
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
        },

    }

})