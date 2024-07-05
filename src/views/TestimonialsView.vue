<template>
  <div class="testimonial-section">
    <h2 class="section-heading">Testimonials</h2>
    <div class="testimonial-cards" data-aos="fade-up" data-aos-duration="1000">
      <div class="card" v-for="(testimonial, index) in testimonials" :key="index">
        <div class="card-content" data-aos="fade-up" data-aos-duration="1000">
          <img v-if="testimonial.image" :src="testimonial.image" alt="Testimonial Image" class="testimonial-image" />
          <div class="testimonial-text" data-aos="fade-up" data-aos-duration="1000">
            <p> {{ testimonial.message }} </p>
            <p class="testimonial-name"> {{ testimonial.name }} </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import AOS from 'aos';
import 'aos/dist/aos.css';

export default {
  data() {
    return {
      testimonials: [], 
      error: null 
    };
  },
  mounted() {
    this.fetchTestimonials();
    AOS.init();
  },
  methods: {
    async fetchTestimonials() {
      try {
        const response = await fetch('https://tyra-parring.github.io/first_api/data/data.json');
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const data = await response.json();
        this.testimonials = Array.isArray(data.testimonials) ? data.testimonials : [];
      } catch (error) {
        this.error = 'Error fetching testimonials. Please try again later.';
        console.error('Error fetching testimonials:', error);
      }
    }
  }
};
</script>


<style scoped>
.section-heading {
    display: flex;
    justify-content: center;
    font-size: 65px;
    font-weight: 549px;
    margin: 1;
    z-index: 2;
    position: relative;
    margin-top: 1;
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

.testimonial-section {
    background: url('https://tyra-parring.github.io/host-/image/flat-lay-monstera-other-leaves.jpg');
    background-size: cover;
    background-repeat: no-repeat; 
    min-height: 100vh;
    overflow: hidden;
}

.testimonial-section::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 1531px;
    z-index: 1;
    /* position: relative; */
    background-color: rgba(0, 0, 0, 0.238);
    backdrop-filter: blur(6px); 
}


.testimonial-cards {
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
  justify-content: center;
  padding: 20px;
  position: relative;
  z-index: 2;
}

.card {
  flex: 1 1 calc(33% - 40px);
  max-width: calc(33% - 40px);
  background-color: #f9f9f9;
  border-radius: 8px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  padding: 20px;
  text-align: center;
  margin: 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
  z-index: 2;
}

.card-content {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.testimonial-image {
  width: 100px;
  height: 100px;
  object-fit: cover;
  border-radius: 20%;
  margin-bottom: 15px;
}

.testimonial-text {
  font-size: 1em;
  color: #555;
}

.testimonial-name {
  font-style: italic;
  margin-top: 10px;
  color: #333;
}

/* @media (max-width: 768px) {
  .card {
    flex: 1 1 calc(100% - 40px);
    max-width: calc(100% - 40px);
  }
} */
</style>
