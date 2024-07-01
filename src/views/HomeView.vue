<template lang="">
  <div class="home-page">
  <!-- <NavBarComp/> -->
      <div class="hero-section">
        <h1>Welcome to My Portfolio!</h1>
          <p ref="typingText"></p>
          <router-link to="/projects">
      <button>Explore My Work</button>
        </router-link>
    </div>
    <div class="projects-section">
      <h2>Featured Projects</h2>
      <ul>
        <li data-aos="fade-up" data-aos-duration="1000">
          <img src="https://tyra-parring.github.io/host-/image/rgbtohex.png" alt="Project 1 Thumbnail">
          <h3>Project 1: RGB to HEX Convertor</h3>
          <p>The RGB to HEX converter is a tool that changes RGB color values into HEX codes</p>
          <a href="https://github.com/tyra-parring/rgbtohex" target="_blank">
            <button>GitHub</button>
          </a>
          <a href="https://rgbtohex-nine.vercel.app/" target="_blank">
          <button>Visit</button>
          </a>
        </li>
        <li data-aos="fade-up" data-aos-duration="1000">
          <img src="https://tyra-parring.github.io/host-/image/agetodays.png" alt="Project 2 Thumbnail">
          <h3>Project 2: Age to Days Calculator</h3>
          <p>The Age to Days converter is a tool that converts a users age into days</p>
          <a href="https://github.com/tyra-parring/agetodays" target="_blank">
            <button>GitHub</button>
          </a>
          <a href="https://agetodays-iota.vercel.app/" target="_blank">
          <button>Visit</button>
          </a>
        </li>
      </ul>
      </div>
      </div>
  <!-- <FooterComp/> -->
        
</template>

<script>
  import AOS from 'aos';
  import 'aos/dist/aos.css';

export default {
    components: {
      
    },
    mounted() {
    const text = "Hi there! I’m Tyra Parring, an aspiring web developer dedicated to creating intuitive and visually appealing user experiences. Browse through my work to see how I blend design and technology to craft engaging digital solutions!";
    const typingText = this.$refs.typingText;
    let charIndex = 0;
    function type() {
      if (charIndex < text.length) {
        typingText.textContent += text[charIndex];
        charIndex++;
        setTimeout(type, 60);
      }
    }
    type();
    AOS.init({
      duration: 1000,
      once: true,
    });
  },
}
</script>
<style scoped>
body{
  display: block;
  margin: 0px;
}

.hero-section {
  background-color: #f7f7f7;
  text-align: center;
  margin: 0;
  padding: 0;
  background-image: url('https://tyra-parring.github.io/host-/image/8186284-hd_1920_1080_30fps-ezgif.com-optimize.gif');
  background-size: cover;
  height: 450px;
  background-repeat: no-repeat;
  background-attachment: fixed;
  filter: brightness(1.3);
  padding-top: 90px;
}

.hero-section h1 {
  font-size: 40px;
  margin-bottom: 33px;
  margin-top: 85px;
}

.hero-section p {
  font-size: 26px;
  margin-bottom: 33px;
  margin-left: 50px;
  margin-right: 50px;
}

.hero-section button {
  background-color: 	#6bb120;
  color: #ffffff;
  padding: 10px 20px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  margin-bottom: 20px;
}

.hero-section button:hover {
  background-color: 	#ffffff;
  cursor: pointer;
  color: #000000;
}

.projects-section {
  margin-top: 40px;
  text-align: center;
}

.projects-section h2 {
  margin-bottom: 20px;
  margin-bottom: 70px;
  margin-top: 70px;
  font-size: xx-large;
}

.projects-section h3 {
  font-size: 40px;
  margin-top: 0;
  margin-left: 20px;
}

.projects-section ul {
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
  justify-content: center;
  margin-bottom: 70px
}

.projects-section li {
  margin-bottom: 0 20px;
}

.projects-section img {
  width: 100px;
  height: 100px;
  margin-right: 20px;
  border-radius: 5px;
  filter: grayscale(100%);
  transition: filter 0.4s ease-in-out;
}

.projects-section img:hover {
  filter: grayscale(0%); 
}

.projects-section button {
  background-color: 	#6bb120;
  color: #ffffff;
  padding: 10px 20px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  margin-bottom: 20px;
  margin-left: 15px;
}

.projects-section button:hover {
  background-color: 	#ffffff;
  cursor: pointer;
  color: #000000;
}

.aos-animate {
  transition-property: transform, opacity;
  transition-duration: 1000ms;
  transition-timing-function: ease-in-out;
}

@media (max-width: 768px) {
  .hero-section {
    background-attachment: scroll; 
    padding-top: 70px;
    height: auto;
  }

  .hero-section h1 {
    font-size: 28px;
    margin-top: 60px;
  }

  .hero-section p {
    font-size: 18px;
    margin-left: 20px;
    margin-right: 20px;
  }

  .hero-section button {
    padding: 8px 16px;
    font-size: 14px;
  }

  .projects-section ul {
    flex-direction: column;
    align-items: center;
  }

  .projects-section li {
    margin-bottom: 20px;
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  .projects-section img {
    width: 80px;
    height: 80px;
    margin-bottom: 10px;
    margin-right: 0;
    filter: grayscale(100%);
    transition: filter 0.4s ease-in-out;
}

.projects-section img:hover {
  filter: grayscale(0%); 
}

  .projects-section h3 {
    margin-left: 0;
    text-align: center;
  }

  .projects-section p {
    text-align: center;
    padding: 0 20px;
  }
}

@media (max-width: 480px) {
  .hero-section {
    padding-top: 50px;
  }

  .hero-section h1 {
    font-size: 24px;
    margin-top: 50px;
  }

  .hero-section p {
    font-size: 16px;
    margin-left: 10px;
    margin-right: 10px;
  }

  .hero-section button {
    padding: 6px 12px;
    font-size: 12px;
  }

  .projects-section ul {
    margin-bottom: 50px;
  }

  .projects-section li {
    margin-bottom: 15px;
  }

  .projects-section img {
    width: 60px;
    height: 60px;
    filter: grayscale(100%);
    transition: filter 0.4s ease-in-out;
}

.projects-section img:hover {
  filter: grayscale(0%); 
}

  .projects-section h3 {
    font-size: 16px;
  }
}
</style>
