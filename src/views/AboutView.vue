<template>
  <NavBarComp/>
  <div class="about-page">
    <div class="blur-overlay"></div>
    <div class="about-section">
      <h2>About Me</h2>
      <SpinnerComp v-if="loading" />
      <div v-else>
        <img src="https://tyra-parring.github.io/host-/image/InShot_20240424_205858533.jpg" alt="Tyra Parring" width="300" height="" class="profilepic">
        <p>{{ about }}</p>
        <p>{{ bio }}</p>
        <h3>Fun Facts</h3>
        <ul class="fun-facts" data-aos="fade-up" data-aos-duration="1000">
          <li v-for="(fact, index) in funFacts" :key="index">
            <img :src="fact.icon" alt="Icon" class="fact-icon" :style="{ width: '80px', height: '80px' }">
            {{ fact.fact }}
          </li>
        </ul>
      </div>
      <div v-if="error" class="error">Failed to load data.</div>
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
      loading: true,
      error: false,
      about: '',
      bio: '',
      funFacts: []
    };
  },
  mounted() {
    this.fetchAboutData();
    AOS.init({
      duration: 1000,
      once: true,
    });
  },
  methods: {
    fetchAboutData() {
      fetch('https://tyra-parring.github.io/first_api/data/data.json')
        .then(response => {
          if (!response.ok) {
            throw new Error('Failed to fetch data');
          }
          return response.json();
        })
        .then(data => {
          const baseURL = `${window.location.origin}/icons/`;

          data.funFacts = data.funFacts.map(fact => ({
            ...fact,
            icon: `${baseURL}${fact.icon}`
          }));
          console.log(data)
          this.about = data.about;
          this.bio = data.bio;
          this.funFacts = data.funFacts;
          this.loading = false;
        })
        .catch(error => {
          console.error('Error fetching data:', error);
          this.error = true;
          this.loading = false;
        });
    }
  }
};
</script>

<style scoped>
.about-page{
  background-image: url(https://tyra-parring.github.io/host-/image/beautiful-tropical-leaves-white-background-poster-banner-postcard-template.jpg);
  background-size: cover;
  background-repeat: no-repeat;
  position: relative;
}

.blur-overlay {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  /* background-image: url(https://tyra-parring.github.io/host-/image/beautiful-tropical-leaves-white-background-poster-banner-postcard-template.jpg); */
  background-size: cover;
  background-repeat: no-repeat;
  backdrop-filter: blur(6px);
}

.about-section {
  text-align: center;
  position: relative; 
}

.about-section h3 {
  display: flex;
  justify-content: center;
  font-size: 65px;
  font-weight: 549px;
  animation: fade-in 5s;
}

.about-section h2 {
  max-width: 800px;
  margin: 0 auto;
  padding: 20px;
  display: flex;
  justify-content: center;
  font-size: 65px;
  font-weight: 549px;
  animation: fade-in 5s;
  padding-top: 100px;
}

.about-section p {
  font-size: 20px;
  margin-right: 40px;
  margin-left: 40px;
}

.about-section img {
  display: block;
  justify-content: center;
  margin: 0 auto;
  margin-top: 40px;
  margin-bottom: 50px;
  animation: fade-in 3s;
}

@keyframes fade-in {
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
}

.fun-facts {
  font-size: 30px;
  padding-bottom: 65px;
}


</style>
