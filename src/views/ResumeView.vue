<template>
    <div class="background-img">
      <div class="overlay">
        <div class="container">
          <section class="edu">
            <h1 class="resu">Resume</h1>
            <h2>Education</h2>
            <div class="education-content">
              <div class="edu-item" data-aos="fade-up" data-aos-duration="1000">
                <h3>2019 - 2022</h3>
                <p>I completed my schooling career at Bonteheuwel High School.</p>
              </div>
              <div class="edu-item" data-aos="fade-up" data-aos-duration="1000">
                <h3>2021</h3>
                <p>Completed a Reading and Writing Tutoring Workshop under the Amy Biehl Foundation.</p>
              </div>
              <div class="edu-item" data-aos="fade-up" data-aos-duration="1000">
                <h3>2024 - 2025</h3>
                <p>I joined a Coding Bootcamp program that provided the fundamentals of Web Development, including learning coding languages such as HTML, CSS, JavaScript, and more. The bootcamp also taught interpersonal and self-development skills to help us grow both professionally and personally.</p>
              </div>
            </div>
          </section>
  
          <section class="work">
            <h2>Work Experience</h2>
            <div class="work-content">
              <div class="work-item">
                <h3>2022 - FUTUR-ED E-LEARNING CENTRES</h3>
                <p>Completed a job shadowing programme at a contact centre, promoting products to customers.</p>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  </template>  
  
  <script>
  import AOS from 'aos';
  import 'aos/dist/aos.css';
  
  export default {
    mounted() {
      AOS.init();
    }
  }
  </script>
  <style scoped>
  .background-img {
    background-image: url('https://tyra-parring.github.io/host-/image/monstera-leaf-coffee-laptop-pencil-diary-marble-textured-backdrop.jpg');
    background-size: cover;
    background-repeat: no-repeat;
    min-height: 100vh;
    flex-direction: column;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
  }
  
  .overlay {
    background: rgba(0, 0, 0, 0.192); 
    backdrop-filter: blur(6px); 
    width: 100%;
    min-height: 100%;
    position: relative; 
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 20px;
  }
  
  .container {
    /* background: #6bb120; */
    border-radius: 15px;
    padding: 20px;
    max-width: 800px;
    max-height: calc(100vh - 100px);
    width: 100%;
    margin: auto;
    z-index: 1; 
    overflow-y: auto;
    margin-top: 30px;
    height: 100vh;
    scrollbar-width: thin;
    scrollbar-color: transparent transparent;
    animation: fade-in 3s;
    backdrop-filter: blur(6px);
    /* filter: blur(5px);  */
    background: rgba(0, 0, 0, 0.129);
    overflow: hidden;
  }

  @keyframes fade-in {
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
}

  .container::-webkit-scrollbar {
  width: 8px;
}

.container::-webkit-scrollbar-track {
  background: transparent;
}

.container::-webkit-scrollbar-thumb {
  background-color: rgba(0, 0, 0, 0.1); 
  border-radius: 20px;
  border: 3px solid transparent; 
}

.container:hover::-webkit-scrollbar-thumb {
  background-color: rgba(0, 0, 0, 0.5);
}
  
  .edu, .work {
    margin-bottom: 40px;
  }
  
  h1.resu {
    text-align: center;
    font-size: 2.5em;
    margin-bottom: 20px;
    animation: fade-in 3s;
  }
  
  h2 {
    font-size: 1.8em;
    margin-bottom: 15px;
    color: #000000;
    display: flex;
    justify-content: center;
    margin-top: 50px;
  }
  
  .education-content, .work-content {
    display: flex;
    flex-direction: column;
    gap: 20px;
  }
  
  .edu-item, .work-item {
    background: #f9f9f98e;
    border-radius: 10px;
    padding: 15px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  }
  
  .edu-item h3, .work-item h3 {
    margin: 0;
    font-size: 1.2em;
    color: #000000;
  }
  
  p {
    margin: 10px 0 0;
    font-size: 1.2em;
    line-height: 1.5;
  }
  
  @media (max-width: 600px) {
    .container {
      padding: 15px;
    }
  
    h1.resu {
      font-size: 2em;
    }
  
    h2 {
      font-size: 1.5em;
    }
  
    .edu-item, .work-item {
      padding: 10px;
    }
  
    p {
      font-size: 0.9em;
    }
  }
  
  </style>
  