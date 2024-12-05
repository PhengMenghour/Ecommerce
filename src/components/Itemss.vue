<template>
  <div class="item-list">
    <div class="item" v-for="item in items" :key="item.id">
      <div class="item-image">
        <img :src="item.image" :alt="item.name" />
      </div>
      <div class="item-details">
        <div class="rating">
          <span>⭐️⭐️⭐️⭐️☆</span>
          <span>{{ item.reviews }}+ Reviews</span>
        </div>
        <h3 class="item-name">{{ item.name }}</h3>
        <p class="item-price">${{ item.price }}</p>
      </div>
      <div class="item-actions">
        <button @click="addToCart(item.id)" class="add-to-cart">
          🛒
        </button>
        <button @click="addToWishlist(item.id)" class="add-to-wishlist">
          ❤️
        </button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Item",
  data() {
    return {
      items: [
        {
          id: 1,
          name: "Playstation 5",
          price: 499.99,
          reviews: 100,
          image: "/src/assets/images/playstation.png", // Replace with actual image URL
        },
        // Add more items if necessary
        {
          id: 2,
          name: "Playstation 5",
          price: 499.99,
          reviews: 100,
          image: "/src/assets/images/playstation.png",
        },
      ],
    };
  },
  methods: {
  addToCart(id) {
    console.log(`Item ${id} added to cart.`);
  },
  addToWishlist(id) {
    console.log(`Item ${id} added to wishlist.`);
  },
},

};
</script>

<style scoped>
/* Container for all items */
.item-list {
display: flex; /* Display items side-by-side */
flex-wrap: wrap; /* Allow wrapping if items don't fit in one row */
gap: 20px; /* Space between items */
justify-content: center; /* Center items horizontally */
align-items: center; /* Center items vertically if they wrap */
padding: 20px; /* Optional: Add padding around the container */
}

/* Individual item */
.item {
display: flex; /* Horizontal alignment of image, details, and actions */
align-items: center;
justify-content: space-between;
border: 1px solid #ddd;
border-radius: 8px;
padding: 16px;
background-color: #fff;
max-width: 560px; /* Adjust the width as needed */
width: 100%; /* Makes it responsive */
box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
}

/* Image Section */
.item-image {
flex: 1;
display: flex;
justify-content: center;
align-items: center;
}

.item-image img {
max-width: 80px; /* Resize image */
height: auto;
}

/* Details Section */
.item-details {
flex: 2;
text-align: center;
margin: 0 16px; /* Add spacing between image and details */
}

.rating {
font-size: 14px;
margin-bottom: 8px;
}

.item-name {
font-size: 16px;
font-weight: bold;
margin: 8px 0;
}

.item-price {
font-size: 18px;
color: #333;
margin-bottom: 12px;
}

/* Actions Section */
.item-actions {
flex: 1;
display: flex;
flex-direction: column;
align-items: center;
gap: 10px;
}

.item-actions button {
border: none;
background: none;
cursor: pointer;
font-size: 18px;
}

.item-actions .add-to-cart:hover {
color: green;
}

.item-actions .add-to-wishlist:hover {
color: red;
}
</style>
