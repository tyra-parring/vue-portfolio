<template>
    <div class="page-background">
      <div class="overlay"></div>
      <h1 class="page-heading">Projects</h1>
      <div class="projects-view">
        <div class="project-card" v-for="project in projects" :key="project.name" data-aos="fade-up" data-aos-duration="1000">
          <div class="card-background">
            <img :src="project.image" alt="Project Image" class="background-img">
          </div>
          <div class="card-content">
            <img :src="project.image" alt="Project Image" class="project-img">
            <div class="button-container">
              <a :href="project.github" target="_blank" rel="noopener noreferrer" class="button"> {{ name }} GitHub</a>
              <a :href="project.vercel" target="_blank" rel="noopener noreferrer" class="button"> {{ name }} Vercel</a>
            </div>
            <p> {{ project.name }} </p>
            <p> {{ project.description }} </p>
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
        projects: []
      };
    },
    async mounted() {
      await this.fetchProjects();
      AOS.init();
    },
    methods: {
      async fetchProjects() {
        try {
          const url = 'https://tyra-parring.github.io/first_api/data/data.json';
          const response = await fetch(url);
          if (!response.ok) {
            throw new Error('Network response was not ok');
          }
          const data = await response.json();
          this.projects = data.projects;
        } catch (error) {
          console.error('Error fetching projects:', error);
        }
      }
    }
  };
  </script>
  
  <style scoped>
  body{
  display: block;
  margin: 0px;
}

.page-background {
  position: relative;
  background-image: url('https://tyra-parring.github.io/host-/image/beautiful-tropical-leaves-white-background-poster-banner-postcard-template.jpg'); 
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 20px;
}

.overlay {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.247);
  z-index: 2;
  filter: blur(6px); 
}

.page-heading {
  position: relative;
  z-index: 2;
  color: rgb(0, 0, 0);
  font-size: 2.8em;
  margin-bottom: 40px;
  text-align: center;
  animation: fade-in 3s;
  margin-bottom: 60px;
}

@keyframes fade-in {
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
}


.projects-view {
  position: relative;
  z-index: 2;
  display: flex;
  flex-wrap: wrap;
  gap: 30px;
  justify-content: center;
}

.project-card {
  flex: 1 1 calc(33.333% - 40px); 
  max-width: calc(33.333% - 40px);
  position: relative;
  width: 300px;
  height: 460px;
  overflow: hidden;
  border-radius: 10px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s;
  background: rgba(255, 255, 255, 0.8); 
}

.project-card:hover {
  transform: scale(1.03);
}

.card-background {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: -1;
}

.background-img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  filter: grayscale(100%) blur(6px);
  transition: filter 0.3s ease-in-out;
}

.project-card:hover .background-img {
  filter: grayscale(0%) blur(6px);
}

.card-content {
  position: relative;
  z-index: 1;
  padding: 20px;
  text-align: center;
  font-size: 1.1em;
  font-weight: 400;
}

.project-img {
  width: 100%;
  height: auto;
  margin-bottom: 10px;
  filter: grayscale(100%);
  transition: filter 0.3s ease-in-out;
}

.project-card:hover .project-img {
  filter: grayscale(0%);
}

.button-container {
  display: flex;
  justify-content: space-between;
  margin-top: 10px;
}

.button {
  padding: 10px 20px;
  background-color: #6bb120;
  color: white;
  border: none;
  cursor: pointer;
  border-radius: 5px;
  text-decoration: none;
  transition: background-color 0.3s ease-in-out, color 0.3s ease-in-out;
}

.button:hover {
  background-color: #ffffff;
  color: black;
}
</style>