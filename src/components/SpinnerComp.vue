<template>
    <div class="spinner-container">
      <div class="spinner" v-for="i in 3" :key="i"></div>
    </div>
  </template>
  
  <script>
  export default {
    name: "SpinnerComp"
  }
  </script>
  
  <style scoped>
  .spinner {
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
    width: 24px;
    height: 24px;
    margin: 0 auto;
  }
  
  .spinner-dot {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 8px;
    height: 8px;
    border-radius: 50%;
    background-color: #000; 
    animation: pulse 1s ease-in-out infinite;
  }
  
.spinner-container {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh; /* or any other height you want */
}
  </style>