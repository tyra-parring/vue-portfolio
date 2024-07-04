<template>
    <div class="contact-page">
        <div class="contact-info">
            <div class="info-item">
        <img src="https://tyra-parring.github.io/host-/image/e181b7cb6dec98c4d8efb94cfa77471c.jpg" alt="Location Icon" class="icon">
        <p>Bonteheuwel, <br> Cape Town</p>
      </div>
      <div class="info-item">
        <img src="https://tyra-parring.github.io/host-/image/c0e0b7943467b75673693c93384c0606.jpg" alt="Phone Icon" class="icon">
        <p>066 036 5740</p>
      </div>
      <div class="info-item">
        <img src="https://tyra-parring.github.io/host-/image/ff58b812e92fe5dd769665156d14bd84.png" alt="Email Icon" class="icon">
        <p>parringt@gmail.com</p>
      </div>
    </div>
      <div class="container">
        <h1 class="title">Get in Touch</h1>
        <p class="subtitle">Let's chat about your next project!</p>
        <form @submit.prevent="handleSubmit" action="https://formspree.io/f/xrgnrzgz" method="POST">
          <div class="form-group">
            <label for="name">Name:</label>
            <input type="text" id="name" placeholder="Jane Doe" v-model="name" required>
          </div>
          <div class="form-group">
            <label for="email">Email:</label>
            <input type="email" id="email" placeholder="email@email.com" v-model="email" required>
          </div>
          <div class="form-group">
            <label for="message">Message:</label>
            <textarea id="message" placeholder="Insert message here" v-model="message" required></textarea>
          </div>
          <button type="submit">Send Message</button>
        </form>
        <SpinnerComp v-if="loading" />
        <p v-if="success" class="success">Message sent successfully!</p>
      </div>
    </div>
  </template>
  
  <script>
  import SpinnerComp from '../components/SpinnerComp.vue'
  import AOS from 'aos';
  import 'aos/dist/aos.css';
  
  export default {
    components: {
      SpinnerComp
    },
    data() {
      return {
        name: '',
        email: '',
        message: '',
        loading: false,
        success: false
      }
    },
    mounted() {
    this.fetchAboutData();
    AOS.init({
      duration: 1000,
      once: true,
    });
  },
    methods: {
      handleSubmit() {
        this.loading = true
        // Add your email sending logic here
        // For example, you can use EmailJS or a backend API to send the email
        setTimeout(() => {
          this.loading = false
          this.success = true
        }, 2000)
      }
    }
  }
  </script>
  
  <style>
  .contact-page {
    background: url('https://tyra-parring.github.io/host-/image/4884233-hd_1920_1080_30fps-ezgif.com-optimize.gif');
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
    background-size: cover;
    flex-direction: column;
  }
  
  .container {
    width: 900px;
    padding: 70px;
    height: auto; 
    background-color: #fff;
    border-radius: 5px; 
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
    background-color: rgba(0, 0, 0, 0.247);
    text-align: center;
    backdrop-filter: blur(5px);
    /* margin-top: 20px; */
    margin-bottom: 7em;
    z-index: 0;
  }
  
  .title {
    font-size: 35px;
    font-weight: bold;
    margin-bottom: 10px;
    display: flex;
    justify-content: center;
  }
  
  .subtitle {
    font-size: 20px;
    font-weight: 500;
    color: #000000;
    margin-bottom: 20px;
    display: flex;
    justify-content: center;
  }
  
  .form-group {
    margin-bottom: 20px;
  }
  
  label {
    display: block;
    margin-bottom: 10px;
  }
  
  input, textarea {
    width: 100%;
    padding: 10px;
    border: 1px solid #ccc;
    border-radius: 5px;
    background-color: rgb(255, 255, 255);
  }
  
  button[type="submit"] {
    background-color: #6bb120;
    color: #fff;
    padding: 10px 20px;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    align-self: center;
  }
  
  button[type="submit"]:hover {
    background-color: #ffffff;
    color: black;
  }
  
  .success {
    color: #6bb120;
    font-size: 18px;
    margin-top: 20px;
  }

  .contact-info {
  display: flex;
  justify-content: space-between;
  margin-bottom: 20px;
}

  .info-item {
    margin: 0 10px;
  }

  .info-item img {
  width: 90px;
  height: 90px;
  margin-bottom: 10px;
}

.info-item p {
  font-size: 16px;
  margin-bottom: 0;
}

.contact-info {
  display: flex;
  justify-content: space-around; 
  margin-bottom: 20px;
  width: 100%;
  max-width: 900px; /* Ensure it matches .container width */
}

.info-item {
  display: flex;
  align-items: center;
  margin: 20px;
}

.info-item img {
  width: 70px; 
  height: 70px; 
  margin-right: 10px;
  margin-top: 100px;
}

.info-item p {
  font-size: 16px;
  margin-bottom: 20px;
  margin-top: 100px;
  color: #000000; 
}
  </style>