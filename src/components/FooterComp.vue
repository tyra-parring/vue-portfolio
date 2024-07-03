<template lang="">
    <div>
        <footer class="footer-container">
        <div class="social-media-icons">
            <a href="https://www.facebook.com/profile.php?id=61553927065200" aria-label="Facebook" target="_blank">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-3 7h-1.924c-.615 0-1.076.252-1.076.889v1.111h3l-.238 3h-2.762v8h-3v-8h-2v-3h2v-1.923c0-2.022 1.064-3.077 3.461-3.077h2.539v3z"/>
            </svg>
            </a>
            <a href="https://www.linkedin.com/in/tyra-parring-b76767307/" aria-label="LinkedIn" target="_blank">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
            </svg>
            </a>
            <a href="https://github.com/tyra-parring" aria-label="GitHub" target="_blank">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-4.466 19.59c-.405.078-.534-.171-.534-.384v-2.195c0-.747-.262-1.233-.55-1.481 1.782-.198 3.654-.875 3.654-3.947 0-.874-.312-1.588-.823-2.147.082-.202.356-1.016-.079-2.117 0 0-.671-.215-2.198.82-.64-.18-1.324-.267-2.004-.271-.68.003-1.364.091-2.003.269-1.528-1.035-2.2-.82-2.2-.82-.434 1.102-.16 1.915-.077 2.118-.512.56-.824 1.273-.824 2.147 0 3.064 1.867 3.751 3.645 3.954-.229.2-.436.552-.508 1.07-.457.204-1.614.557-2.328-.666 0 0-.423-.768-1.227-.825 0 0-.78-.01-.055.487 0 0 .525.246.889 1.17 0 0 .463 1.428 2.688.944v1.489c0 .211-.129.459-.528.385-3.18-1.057-5.472-4.056-5.472-7.59 0-4.419 3.582-8 8-8s8 3.581 8 8c0 3.533-2.289 6.531-5.466 7.59z"/>
            </svg>
            </a>
      </div>

      <div class="footer-nav">
        <ul>
          <li><a href="./home">Home</a></li>
          <li><a href="./about">About</a></li>
          <li><a href="./resume">Resume</a></li>
          <li><a href="./skills">Skills</a></li>
          <li><a href="./testimonials">Testimonials</a></li>
          <li><a href="./projects">Projects</a></li>
          <li><a href="./contact">Contact Me</a></li>
        </ul>
      </div>
    
    <div class="footer-bottom">
        <p><span>Copyright ©{{ year }} | Tyra Parring</span></p>
    </div>
    </footer>
    </div>
</template>
<script>
export default {
    data(){
        return{
            year: new Date().getFullYear()
        }
    }
}
</script>
<style>
   footer {
  background-color: rgb(35, 35, 35);
  color: white;
  padding: 20px;
  text-align: center;
  z-index: 1;
}

.footer-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  padding: 0;
  margin: 0;
  box-sizing: border-box;
  z-index: 1;
}

.social-media-icons {
  display: flex;
  justify-content: center;
  gap: 10px;
  margin-bottom: 15px;
  margin-top: 15px;
}

.social-media-icons a {
  color: white;
  transition: color 0.3s ease;
}

.social-media-icons a:hover {
  color: #f3e9e9;
}

.social-media-icons a:hover svg {
  fill: #f3e9e9;
}

.footer-nav {
  display: flex;
  justify-content: center;
  margin-bottom: 15px;
}

.footer-nav ul {
  display: flex;
  list-style: none;
  padding: 0;
  margin: 0;
  gap: 10px;
}

.footer-nav a {
  color: white;
  text-decoration: none;
  transition: color 0.3s ease;
}

.footer-nav a:hover {
  color: #f3e9e9;
}

.footer-bottom {
  display: flex;
  justify-content: center;
}

.footer-bottom span {
  color: white;
}

#footerS {
  position: fixed;
  bottom: 0;
  width: 100%;
}

</style>