  <template>
    <footer class="footer-section">
      <!-- Top Section -->
      <div class="subscription-section">
        <div class="subscription-content">
          <div class="subscription-text">
            <i class="ri-mail-send-line"></i>
            <!-- <img src="@/assets/images/ftEvelop.png" alt="Subscribe" class="icon" /> -->
            <div>
              <h2>Fear Of Missing Out?</h2>
              <p>Get the latest deals, updates & more</p>
            </div>
          </div>
          <form class="subscription-form" @submit.prevent="subscribe">
            <input
              type="email"
              v-model="email"
              placeholder="Your email address"
              required
            />
            <button type="submit">Subscribe ➤</button>
          </form>
          <div class="social-icons">
            <p>Follow us</p>
            <div class="icons">
              <a href="#" target="_blank"><i class="fab fa-facebook"></i></a>
              <a href="#" target="_blank"><i class="fab fa-twitter"></i></a>
              <a href="#" target="_blank"><i class="fab fa-instagram"></i></a>
              <a href="#" target="_blank"><i class="fab fa-tiktok"></i></a>
            </div>
          </div>
        </div>
      </div>
  
      <!-- Bottom Section -->
      <div class="footer-links">
        <div class="footer-column">
          <h4>COMPANY</h4>
          <ul>
            <li><a href="#">About Us</a></li>
            <li><a href="#">Affiliates</a></li>
            <li><a href="#">Blog</a></li>
            <li><a href="#">Contact Us</a></li>
          </ul>
        </div>
        <div class="footer-column">
          <h4>SHOP</h4>
          <ul>
            <li><a href="#">Phones</a></li>
            <li><a href="#">Computer</a></li>
            <li><a href="#">Accessories</a></li>
            <li><a href="#">Laptops</a></li>
            <li><a href="#">Monitors</a></li>
            <li><a href="#">Network</a></li>
            <li><a href="#">Headphone</a></li>
          </ul>
        </div>
        <div class="footer-column">
          <h4>HELP</h4>
          <ul>
            <li><a href="#">Customer Service</a></li>
            <li><a href="#">My Account</a></li>
            <li><a href="#">Find a Store</a></li>
            <li><a href="#">Legal & Privacy</a></li>
            <li><a href="#">Contact</a></li>
          </ul>
        </div>
        <div class="footer-column">
          <h4>MY ACCOUNT</h4>
          <ul>
            <li><a href="#">My Profile</a></li>
            <li><a href="#">My Order History</a></li>
            <li><a href="#">My Wish List</a></li>
            <li><a href="#">Order Tracking</a></li>
          </ul>
        </div>
        <div class="footer-column">
          <h4>CONTACT INFO</h4>
          <ul>
            <li>+855 12 345 678</li>
            <li>Mon to Sun: 10AM to 6PM</li>
            <li>smartsphere@support.com</li>
            <li>Phnom Penh, Cambodia</li>
          </ul>
        </div>
      </div>
  
      <!-- Footer Bottom Section -->
      <div class="footer-bottom">
        <p>Copyright© 2024 SmartSphere. All rights reserved</p>
        <div class="footer-bottom-links">
          <a href="#">Privacy</a> | 
          <a href="#">Terms & Conditions</a> | 
          <a href="#">Cookie</a>
        </div>
        <div class="payment-icons">
          <!-- <img src="@/assets/visa-icon.png" alt="Visa" />
          <img src="@/assets/mastercard-icon.png" alt="MasterCard" />
          <img src="@/assets/paypal-icon.png" alt="PayPal" /> -->
        </div>
      </div>
    </footer>
  </template>
  
  <script>
  export default {
    data() {
      return {
        email: "",
      };
    },
    methods: {
      subscribe() {
        alert(`Subscribed with: ${this.email}`);
      },
    },
  };
  </script>
  
  <style scoped>
  /* Footer Styling */
  .footer-section {
    font-family: Arial, sans-serif;
  }
  
  /* Top Subscription Section */
  .subscription-section {
    background-color: #efd5d1;
    padding: 20px 40px;
  }
  
  .subscription-content {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  
  .subscription-text {
    display: flex;
    align-items: center;
    gap: 10px;
  }
  
  .subscription-text .icon {
    width: 40px;
    height: 40px;
  }
  
  .subscription-text h2 {
    margin: 0;
    font-size: 18px;
    color: #000;
  }
  
  .subscription-text p {
    margin: 0;
    color: #555;
    font-size: 14px;
  }

  .subscription-text i {
    font-size: 40px;
  }
  
  .subscription-form {
    display: flex;
    align-items: center;
    gap: 10px;
  }
  
  .subscription-form input {
    padding: 10px;
    border: 1px solid #ccc;
    border-radius: 5px;
    width: 300px;
  }
  
  .subscription-form button {
    padding: 10px 20px;
    background-color: #f45d5a;
    color: white;
    border: none;
    border-radius: 5px;
    cursor: pointer;
  }
  
  .subscription-form button:hover {
    background-color: #e04b4a;
  }
  
  .social-icons {
    display: flex;
    align-items: center;
    gap: 10px;
  }
  
  .social-icons .icons a {
    font-size: 18px;
    color: #000;
  }

  .icons {
    display: flex;
    gap: 10px;
  }
  
  /* Footer Links */
  .footer-links {
    display: grid;
    grid-template-columns: repeat(5, 1fr);
    padding: 20px 40px;
    background-color: #f9f9f9;
  }
  
  .footer-column h4 {
    font-size: 16px;
    color: #000;
  }
  
  .footer-column ul {
    list-style: none;
    padding: 0;
    margin: 0;
  }
  
  .footer-column ul li {
    font-size: 14px;
    color: #555;
    margin: 5px 0;
  }
  
  .footer-column ul li a {
    text-decoration: none;
    color: inherit;
  }
  
  .footer-column ul li a:hover {
    color: #f45d5a;
  }
  
  /* Footer Bottom Section */
  .footer-bottom {
    padding: 10px 40px;
    text-align: center;
    font-size: 14px;
    background-color: #f9f9f9;
    color: #555;
  }
  
  .footer-bottom-links a {
    text-decoration: none;
    color: inherit;
    margin: 0 5px;
  }
  
  .footer-bottom-links a:hover {
    color: #f45d5a;
  }
  
  .payment-icons img {
    width: 40px;
    margin: 0 5px;
  }
  </style>
  