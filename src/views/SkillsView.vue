<template>
    <div class="skills-page">
      <h2>My Skills</h2>
      <div v-if="loading" class="spinner">
        <SpinnerComp />
      </div>
      <div v-if="error" class="error">
        Failed to load skills data.
      </div>
      <ul class="skills-list" v-else>
        <li v-for="(skill, index) in skills" :key="index" class="skill-item" data-aos="fade-up" data-aos-duration="1000">
          <img :src="skill.icon" alt="Skill Icon" class="skill-icon" />
          <span>{{ skill.name }}</span>
        </li>
      </ul>
    </div>
  </template>
  
  <script>
  import SpinnerComp from '../components/SpinnerComp.vue';
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
        skills: []
      };
    },
    mounted() {
      AOS.init();
      this.fetchSkillsData();
    },
    methods: {
      fetchSkillsData() {
        fetch('https://tyra-parring.github.io/first_api/data/data.json')
          .then(response => {
            if (!response.ok) {
              throw new Error('Failed to fetch data');
            }
            return response.json();
          })
          .then(data => {
            const baseURL = `${window.location.origin}/icons/`;
            data.skills = data.skills.map(skill => ({
              ...skill,
              icon: `${baseURL}${skill.icon}`
            }));
            this.skills = data.skills;
            this.loading = false;
            // Refresh AOS after updating data
            AOS.refresh();
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
  .skills-page {
    text-align: center;
    padding: 20px;
    background-image: url('https://tyra-parring.github.io/host-/image/top-view-monstera-other-leaves-with-copy-space.jpg');
    background-size: cover;
    background-repeat: no-repeat;
    position: relative;
    height: 100vh;
  }
  
  .skills-page h2 {
    font-size: 2rem;
    margin-bottom: 30px;
    margin-top: 300px; 
    font-size: 70px
  }
  
  .skills-list {
    list-style: none;
    padding: 0;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
  }
  
  .skill-item {
    display: flex;
    align-items: center;
    margin: 10px;
    padding: 10px;
    border: 1px solid #000000;
    border-radius: 10px;
    transition: transform 0.3s;
  }
  
  .skill-item:hover {
    transform: scale(1.05);
  }
  
  .skill-icon {
    width: 50px;
    height: 50px;
    margin-right: 10px;
  }
  
  @media (max-width: 480px) {
    .skills-page h2 {
      font-size: 1.5rem;
    }
  
    .skill-icon {
      width: 30px;
      height: 30px;
    }
  }
  
  @media (max-width: 768px) {
    .skills-page h2 {
      font-size: 1.75rem;
    }
  
    .skill-icon {
      width: 40px;
      height: 40px;
    }
  }
  </style>
  