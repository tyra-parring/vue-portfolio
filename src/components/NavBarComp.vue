<template lang="">
    <div>
      <nav>
        <div class="logo">
          <img src="https://tyra-parring.github.io/host-/image/job204-wan-20.jpg" alt="Logo" width="60" height="55">
        </div>
        <ul class="nav-links">
          <li><router-link to="/">Home</router-link></li>
          <li><router-link to="/about">About</router-link></li>
          <li><router-link to="/resume">Resume</router-link></li>
          <li><router-link to="/skills">Skills</router-link></li>
          <li><router-link to="/testimonials">Testimonials</router-link></li>
          <li><router-link to="/projects">Projects</router-link></li>
          <li><router-link to="/contact">Contact Me</router-link></li>
        </ul>
      </nav>
    </div>
  </template>
  
  <script>
  export default {
    
  }
  </script>
  
  <style >
 body{
  display: block;
  margin: 0px;
  overflow-x: hidden;
}

main {
  padding-top: 85px;
}

nav {
    background-color: rgb(35, 35, 35); 
    color: #fff; 
    height: 85px;
    display: flex; 
    justify-content: space-between; 
    align-items: center; 
    transition: background-color 0.5s;
    max-width: 100vw; 
    position: sticky; 
    top: 0; 
    left: 0; 
    z-index: 1000; 
    padding: 0 20px;
    overflow-x: hidden;
 }

 .nav-links {
  display: flex; 
  justify-content: flex-end;
}

.nav-links li {
  margin-left: 2rem;
  margin-right: 12px;
  position: relative;
  overflow: hidden;
}

.nav-links a {
    color: #fff;
    text-decoration: none;
    position: relative;
    display: inline-block;
    padding: 0.5rem 0; 
    transition: color 0.5s;
}

.nav-links a::before,
.nav-links a::after {
  content: '';
  position: absolute;
  width: 0;
  height: 1px; 
  background: #fff;
  transition: all 0.1s ease; 
}

.nav-links a::before {
  top: 0; 
  left: 50%;
}

.nav-links a::after {
  bottom: 0;
  right: 50%;
}

.nav-links a:hover::before {
  left: 0;
  width: 100%; 
}

.nav-links a:hover::after {
  right: 0;
  width: 100%; 
}

.nav-links a::before,
.nav-links a::after {
  transition: width 0.3s ease, left 0.3s ease, right 0.3s ease; 
}

.nav-links a:hover::before,
.nav-links a:hover::after {
  transition-delay: 0s; 
}

  .logo {
    margin-right: 2rem; 
  }
  
  ul {
    list-style: none; 
    margin: 0;
    padding: 0; 
    display: flex; 
    justify-content: flex-end;
  }
  
  li {
    margin-left: 2rem; 
  }
  
  a {
    color: #fff; 
    text-decoration: none; 
  }
  
  a:hover {
    color: #f3e9e9; 
  }

  </style>

