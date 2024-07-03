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
      <h3>Soft Skills</h3>
      <ul class="soft-skills-list">
        <li v-for="(softSkill, index) in softSkills" :key="index" class="soft-skill-item" data-aos="fade-up" data-aos-duration="1000">
          <!-- <img :src="`/icons/${softSkill.icon}`" alt="Soft Skill Icon" class="soft-skill-icon" /> -->
          <span>{{ softSkill.name }}</span>
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
        skills: [],
        softSkills: []
      };
    },
    mounted() {
      AOS.init();
      this.fetchSkillsData();
      this.fetchSoftSkills();
    },
    methods: {
      fetchSkillsData() {
        fetch('https://tyra-parring.github.io/first_api/data/data.json')
          .then(response => {
            if (!response.ok) {
              throw new Error('Failed to fetch skills data');
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
            AOS.refresh();
          })
          .catch(error => {
            console.error('Error fetching skills data:', error);
            this.error = true;
            this.loading = false;
          });
      },
      fetchSoftSkills() {
        fetch('https://tyra-parring.github.io/first_api/data/data.json')
          .then(response => {
            if (!response.ok) {
              throw new Error('Failed to fetch soft skills data');
            }
            return response.json();
          })
          .then(data => {
            this.softSkills = data.softSkills;
          })
          .catch(error => {
            console.error('Error fetching soft skills data:', error);
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
  min-height: 100vh; 
}

.skills-page::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.1); 
  backdrop-filter: blur(5px);
  z-index: 1;
}

.skill-item:hover .skill-icon,
.soft-skill-item:hover .soft-skill-icon {
  fill: #6bb120;
}
  
.skills-page h2,
.skills-page h3,
.skills-list,
.soft-skills-list,
.spinner,
.error {
  z-index: 2;
  position: relative;
}

.skills-page h2 {
  font-size: 4rem !important; 
  padding-top: 60px;
  animation: fade-in 3s
}

.skills-page h3 {
  margin-bottom: 25px;
  padding-top: 87px;
  font-size: 4rem !important;
  animation: fade-in 3s
}

.skills-list,
.soft-skills-list {
  list-style: none;
  padding: 0;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  margin-top: 20px;
}

.soft-skills-list {
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.skill-item,
.soft-skill-item {
  display: flex;
  align-items: center;
  margin: 10px;
  padding: 10px;
  border: 1px solid #000;
  border-radius: 10px;
  transition: transform 0.3s;
}

.skill-item:hover,
.soft-skill-item:hover {
  transform: scale(1.09);
  color: #6bb120;
  border-color: #6bb120;
}

.skill-icon {
  width: 80px;
  height: 90px;
  margin-right: 10px;
}

@keyframes fade-in {
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
}

@media (max-width: 575.98px) {
  .skills-page h2 {
    font-size: 2rem;
    padding-top: 30px;
  }
  .skills-page h3 {
    font-size: 1.5rem;
    margin-top: 20px;
  }
  .skill-icon,
  .soft-skill-icon {
    width: 40px;
    height: 45px;
    margin-right: 5px;
  }
}

@media (min-width: 576px) and (max-width: 767.98px) {
  .skills-page h2 {
    font-size: 2.5rem;
    padding-top: 50px;
  }
  .skills-page h3 {
    font-size: 2rem;
    margin-top: 25px;
  }
  .skill-icon,
  .soft-skill-icon {
    width: 60px;
    height: 70px;
    margin-right: 8px;
  }
}

@media (min-width: 768px) {
  .skills-page h2 {
    font-size: 4rem; 
    padding-top: 60px;
  }
  .skills-page h3 {
    font-size: 2.5rem;
    margin-top: 30px;
  }
}
</style>
  