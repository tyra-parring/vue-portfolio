<template>
    <div class="spinner">
      <div class="spinner-dot" v-for="i in 3" :key="i"></div>
    </div>
  </template>
  
  <script>
  export default {
    name: "SpinnerComp"
  }
  </script>
  
  <style scoped>
  .spinner {
    display: inline-block;
    position: relative;
    width: 24px;
    height: 24px;
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
  
  .spinner-dot:nth-child(1) {
    animation-delay: 0s;
  }
  
  .spinner-dot:nth-child(2) {
    animation-delay: 0.3s;
  }
  
  .spinner-dot:nth-child(3) {
    animation-delay: 0.6s;
  }
  
  @keyframes pulse {
    0% {
      transform: scale(0.5);
      opacity: 0;
    }
    100% {
      transform: scale(1);
      opacity: 1;
    }
  }
  </style>