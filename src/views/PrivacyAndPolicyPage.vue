<template>
    <div class="banner">
        <h3>STUDENT NOW GET 10% OFF: GET OFFER</h3>
    </div>

    <div class="breadcrumb-container">
        <div class="text-container">
            <nav class="breadcrumb">
                <span><a href="/">Home</a></span>
                <span> | </span>
                <span><a href="/pages">Pages</a></span>
                <span> | </span>
                <span>Privacy and Policy</span>
            </nav>
            <h1>Privacy and Policy</h1>
        </div>
        <div class="image-container">
            <img src="/src/assets/images/homepod.png" alt="">
        </div>
    </div>

    <div class="main-container">
        <div class="text-container">
            <h3 class="header">This Privacy policy was published on January 1st, 2025</h3>
            <hr>
        </div>
        <div class="text-container">
            <h3 class="header">GDPR compliance</h3>
            <p>We are committed to complying with the General Data Protection Regulation (GDPR). This includes ensuring
                your data is handled securely, transparently, and lawfully.</p>
        </div>
        <div class="text-container">
            <h3 class="header">About SmartSphere</h3>
            <p>SmartSphere is a leading e-commerce platform providing cutting-edge electronic products. We value your
                trust and prioritize the security of your personal data.</p>
        </div>
        <div class="text-container">
            <h3 class="header">When we collect personal data about you</h3>
            <p>We collect data when you interact with our website, register an account, place an order, or contact
                customer support.</p>
        </div>
        <div class="text-container">
            <h3 class="header">Why we collect and use personal data</h3>
            <p>Your data is collected to improve our services, process transactions, communicate updates, and offer
                personalized recommendations.</p>
        </div>
        <div class="text-container">
            <h3 class="header">Type of personal data collected</h3>
            <p>We may collect your name, email address, phone number, payment details, and browsing history to provide a
                seamless shopping experience.</p>
        </div>
        <div class="text-container">
            <h3 class="header">Information we collect automatically</h3>
            <p>When you visit our site, we automatically gather technical data such as your IP address, browser type,
                and operating system to improve functionality and user experience.</p>
        </div>
        <div class="text-container">
            <h3 class="header">The use of cookies and web beacons</h3>
            <p>Cookies and web beacons help us understand your preferences, deliver personalized content, and analyze
                site performance.</p>
        </div>
        <div class="text-container">
            <h3 class="header">How long we keep your data</h3>
            <p>We retain your data only as long as necessary for the purposes outlined in this policy, unless a longer
                retention period is required by law.</p>
        </div>
        <div class="text-container">
            <h3 class="header">Your rights to your personal data </h3>
            <p>You have the right to access, correct, or delete your personal data. You can also request restrictions on
                or object to the processing of your data.</p>
        </div>
        <div class="text-container">
            <h3 class="header">Changes to this Privacy Policy</h3>
            <p>We may update this policy periodically to reflect changes in our practices. Please review it regularly to
                stay informed.</p>
        </div>
    </div>
    <FooterComponent/>
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
    font-family: "Poppins";
    
}

.breadcrumb {
    font-size: 22px;
    font-family: "Poppins";
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

.main-container {
    padding: 0 10% 0 10%;
    font-family: "Poppins";
    margin: 30px 0 30px 0;
}

hr {
    border: 2px solid #3577f0;
}

.main-container .header{
    font-weight: 600;
    font-size: 26px;
}

.main-container p {
    font-size: larger;
}

.text-container{
    margin: 50px 0px 50px 0px;
}
</style>