<template>

    <div class="banner">
        <h3>STUDENT NOW GET 10% OFF: GET OFFER</h3>
    </div>

    <div class="breadcrumb-container">
        <div class="text-container">
            <nav class="breadcrumb">
                <span><a href="/">Home</a></span>
                <span> | </span>
                <span>Contact</span>
            </nav>
            <h1>Contact With Us</h1>
        </div>
        <div class="image-container">
            <img src="/src/assets/images/homepod.png" alt="">
        </div>
    </div>

    <div class="form-container">
        <div class="form">
            <div class="text">
                <h3>We would love to hear from you.</h3>
                <p>If you've got great products your making or looking to work with us the drop us a line.</p>
            </div>
            <div class="fill-form">
                <form action="" class="first-form">
                    <div class="input-container">
                        <input type="text" id="name" class="input-field" placeholder=" " required>
                        <label for="name">Name <span class="required">*</span></label>
                    </div>
                    <div class="input-container">
                        <input type="text" id="Phone" class="input-field" placeholder=" " required>
                        <label for="phone">Phone <span class="required">*</span></label>
                    </div>
                    <div class="input-container">
                        <input type="text" id="email" class="input-field" placeholder=" " required>
                        <label for="email">E-mail <span class="required">*</span></label>
                    </div>

                </form>
                <form action="" class="second-form">
                    <textarea name="message" id="message" placeholder="Your message"></textarea>
                </form>
            </div>
        </div>
        <div class="information">
            <div>
                <h3>Our Store</h3>
                <p>Address</p>
                <p>Phone: +123 456 789</p>
                <p>Email: smartsphere@support.com</p>
            </div>
            <div>
                <h3>Careers</h3>
                <p>Instead of buying six things, one that you really like.</p>
            </div>
            <div>
                <h3>Opening Hours:</h3>
                <p>Monday to Sunday: 10AM to 6PM</p>
            </div>
        </div>
    </div>



    <FooterComponent />
</template>
<script>
import FooterComponent from '@/components/FooterComponent.vue';

export default {
    components: {
        FooterComponent
    }
}
</script>
<style scoped>
.banner {
    display: flex;
    justify-content: center;
    background: rgb(2, 0, 36);
    background: linear-gradient(90deg, rgba(2, 0, 36, 1) 37%, rgba(233, 0, 255, 1) 100%);
}

.banner h3 {
    font-weight: 500;
    font-family: "Poppins";
    color: #fff;
}

.breadcrumb-container {
    display: flex;
    justify-content: space-between;
    align-items: center;
    background-color: #f8f8f8;
    padding: 0 10% 0 10%;
}

.breadcrumb {
    font-size: 22px;
}

.text-container h1 {
    font-family: "Poppins";
    font-weight: 600;
}

.text {
    font-family: "Poppins";
}

.text h3 {
    font-weight: 500;
}

.image-container {
    display: flex;
    justify-content: end;
}

.image-container img {
    width: 50%;
}

.form-container {
    display: flex;
    justify-content: space-between;
    padding: 0 10% 0 10%;
    margin: 20px 0 20px 0;
}

.fill-form {
    display: flex;
    flex-direction: column;
    gap: 20px;
    margin-top: 30px;
}

.first-form {
    display: flex;
    justify-content: space-between;
    gap: 15px;
    font-family: "Poppins";
    /* Space between inputs */
}

.first-form input {
    flex: 1;
    /* Equal width for inputs */
    padding: 10px;
    border: 1px solid #ccc;
    border-radius: 5px;
    font-size: 16px;
}


.second-form textarea {
    width: 90%;
    height: 150px;
    padding: 10px;
    border: 1px solid #ccc;
    border-radius: 5px;
    font-size: 16px;
    resize: none;
    font-family: "Poppins";

    /* Disable resizing */

}

input:focus {
    outline: none;
    border-color: #007BFF;
    box-shadow: 0 0 5px rgba(0, 123, 255, 0.5);
}

.input-container {
    position: relative;
    width: 300px;
}

label {
    position: absolute;
    top: 50%;
    left: 12px;
    transform: translateY(-50%);
    background: #fff;
    padding: 0 4px;
    font-size: 14px;
    color: #6c757d;
    transition: 0.3s ease;
    pointer-events: none;
}

.required {
    color: #d9534f;
}

.input-field {
    width: 70%;
    padding: 12px 12px;
    font-size: 16px;
    border: 1px solid #ced4da;
    border-radius: 4px;
    outline: none;
    transition: border-color 0.3s ease;
}

.input-field:focus {
    border-color: #80bdff;
    box-shadow: 0 0 0 2px rgba(0, 123, 255, 0.25);
}

.input-field:focus+label,
.input-field:not(:placeholder-shown)+label {
    top: -8px;
    left: 8px;
    font-size: 12px;
    color: #495057;
}

.information {
    font-family: "Poppins";
}

.information h3 {
    font-weight: 600;
}
</style>