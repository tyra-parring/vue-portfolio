<template>
  <div class="testimonial-section">
    <h2 class="section-heading">Testimonials</h2>
    <div class="testimonial-cards">
      <div class="card" v-for="(testimonial, index) in testimonials" :key="index">
        <div class="card-content">
          <img v-if="testimonial.image" :src="testimonial.image" alt="Testimonial Image" class="testimonial-image" />
          <div class="testimonial-text">
            <p> {{ testimonial.message }} </p>
            <p class="testimonial-name"> {{ testimonial.name }} </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      testimonials: [], 
      error: null 
    };
  },
  mounted() {
    this.fetchTestimonials();
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
}

/* .testimonial-section {
    background: url('https://tyra-parring.github.io/host-/image/flat-lay-monstera-other-leaves.jpg');
    height: 100vh;
    background-size: cover;
    background-repeat: no-repeat;
} */


.testimonial-cards {
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
  justify-content: center;
  padding: 20px;
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
