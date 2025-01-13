import { defineStore } from "pinia";

export const useProductsStore = defineStore('products', {
    state: () => ({
        products: [
            {
                id: 1,
                name: "IPhone 16 Pro Max",
                price: 1499,
                mainCategory: "phones",
                category: "iPhone",
                stock: 30,
                image: "/src/assets/images/iphone_16_promax.jpg",
                additionalImages: [
                    "/src/assets/images/ip16_white.jpg",
                    "/src/assets/images/ip16_white (3).jpg",
                    "/src/assets/images/ip16_white (2).jpg",
                ],
                discount: 20,
                review: 10,
                description: "The iPhone 16 Pro Max display has rounded corners that follow a beautiful curved design...",
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
                mainCategory: "phones",
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
                description: "The Samsung Galaxy S24 Ultra display has rounded corners that follow a beautiful curved design...",
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
                mainCategory: "computers",
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
                description: "The Dell Optiplex display has high specs...",
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
                mainCategory: "phones",
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
                description: "The Xiaomi Mi 14 Ultra display has rounded corners that follow a beautiful curved design...",
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
                mainCategory: "phones",
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
                description: "The Oppo Find X6 Pro display has rounded corners that follow a beautiful curved design...",
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
                mainCategory: "phones",
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
                description: "The Vivo X100 Pro display has rounded corners that follow a beautiful curved design...",
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
                mainCategory: "computers",
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
                description: "The HP Pro Desk 600 G3 display has high specs...",
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
                selectedImage: "/src/assets/images/p_prodesk_600_g3_sff.jpg",
                selectedColor: "#d8e3f3",
                selectedSize: "128GB",
                quantity: 0,
            },
            {
                id: 8,
                name: "Lenovo Legion Tower",
                price: 899,
                mainCategory: "computers",
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
                description: "The Lenovo Legion Tower display with high specs...",
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
                mainCategory: "computers",
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
                description: "The Asus Rox Strix display has high specs and best for working and gaming...",
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
                mainCategory: "accessories",
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
                description: "The Anker Power Bank display with portable design...",
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
                mainCategory: "accessories",
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
                description: "The Anker Fast Charger is best choice for your phones...",
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
                mainCategory: "accessories",
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
                description: "The PS5 Controller display with easy and fast game play...",
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
                mainCategory: "laptops",
                category: "Apple",
                stock: 25,
                image: "/src/assets/images/macbook_pro_m1.png",
                additionalImages: [
                    "/src/assets/images/mac2.jpg",
                    "/src/assets/images/mac1.jpg",
                    "/src/assets/images/mac3.jpg",
                ],
                discount: 10,
                review: 5,
                description: "The MacBook Peo M1 display has rounded corners that follow a beautiful curved design...",
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
                selectedImage: "/src/assets/images/macbook_pro_m1.png",
                selectedColor: "#d8e3f3",
                selectedSize: "128GB",
                quantity: 0,
            },
            {
                id: 14,
                name: "Microsoft Surface Laptop 5",
                price: 899,
                mainCategory: "laptops",
                category: "Microsoft",
                stock: 25,
                image: "/src/assets/images/microsoft_surface_laptop_5.jpg",
                additionalImages: [
                    "/src/assets/images/microsoft1.jpg",
                    "/src/assets/images/microsoft2.jpg",
                    "/src/assets/images/microsoft3.jpg",
                ],
                discount: 10,
                review: 5,
                description: "The Microsoft Surface Laptop 5 display has rounded corners that follow a beautiful curved design...",
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
                selectedImage: "/src/assets/images/microsoft_surface_laptop_5.jpg",
                selectedColor: "#d8e3f3",
                selectedSize: "128GB",
                quantity: 0,
            },
            {
                id: 15,
                name: "Acer Swift 3 OLED",
                price: 899,
                mainCategory: "laptops",
                category: "Acer",
                stock: 25,
                image: "/src/assets/images/acer_swift_3_oled.jpg",
                additionalImages: [
                    "/src/assets/images/swift1.jpg",
                    "/src/assets/images/swift2.jpg",
                    "/src/assets/images/swift3.jpg",
                ],
                discount: 10,
                review: 5,
                description: "The Acer Swift 3 OLED display has rounded corners that follow a beautiful curved design...",
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
                selectedImage: "/src/assets/images/acer_swift_3_oled.jpg",
                selectedColor: "#d8e3f3",
                selectedSize: "128GB",
                quantity: 0,
            },
            {
                id: 16,
                name: "LG 22MK600M",
                price: 899,
                mainCategory: "monitors",
                category: "LG-Monitors",
                stock: 25,
                image: "/src/assets/images/lg_monitor.jpg",
                additionalImages: [
                    "/src/assets/images/lgmk1.jpeg",
                    "/src/assets/images/lg_monitor.jpg",
                    "/src/assets/images/lgmk2.png",
                ],
                discount: 10,
                review: 5,
                description: "The LG 22MK600M display has rounded corners that follow a beautiful curved design...",
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
                selectedImage: "/src/assets/images/lg_monitor.jpg",
                selectedColor: "#d8e3f3",
                selectedSize: "128GB",
                quantity: 0,
            },
            {
                id: 17,
                name: "Samsung 34 Odyssey G5 Ultra",
                price: 899,
                mainCategory: "monitors",
                category: "Samsung-Monitors",
                stock: 25,
                image: "/src/assets/images/samsung_odyssey.jpg",
                additionalImages: [
                    "/src/assets/images/samsung_odyssey.jpg",
                    "/src/assets/images/ody2.jpg",
                    "/src/assets/images/ody1.png",
                ],
                discount: 10,
                review: 5,
                description: "The Samsung Odyssey G5 Ultra display has rounded corners that follow a beautiful curved design...",
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
                selectedImage: "/src/assets/images/samsung_odyssey.jpg",
                selectedColor: "#d8e3f3",
                selectedSize: "128GB",
                quantity: 0,
            },
            {
                id: 18,
                name: "Dell Sync 2024",
                price: 899,
                mainCategory: "monitors",
                category: "Dell-Monitors",
                stock: 25,
                image: "/src/assets/images/dell_sync_2024.jpg",
                additionalImages: [
                    "/src/assets/images/dell_sync_2024.jpg",
                    "/src/assets/images/dell2.jpg",
                    "/src/assets/images/dell1.jpg",
                ],
                discount: 10,
                review: 5,
                description: "The Dell Sync 2024 display has rounded corners that follow a beautiful curved design...",
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
                selectedImage: "/src/assets/images/dell_sync_2024.jpg",
                selectedColor: "#d8e3f3",
                selectedSize: "128GB",
                quantity: 0,
            },
            {
                id: 19,
                name: "Netgear Nighthawk AX12",
                price: 899,
                mainCategory: "networking",
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
                description: "The Netgear Nighthwk AX12 display has strong ability...",
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
                mainCategory: "networking",
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
                description: "The Cisco Catalyst 9200L display has strong ability...",
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
                mainCategory: "headphones",
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
                description: "The Sony WF-1000XM5 display has high quality sound and follow a beautiful curved design...",
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
                mainCategory: "headphones",
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
                description: "The Bose QuietComfort has high quality sound and follow a beautiful curved design...",
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
                mainCategory: "headphones",
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
                description: "The JBL Tune 760NC display has high quality sound and follow a beautiful curved design...",
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

        setProducts(newProducts) {
            this.products = newProducts; // This will trigger reactivity if the products array is replaced
          },

    }

})