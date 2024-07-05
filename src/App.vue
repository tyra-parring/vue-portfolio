<template>
  <div id="app">
    <NavBarComp />
    <router-view /> 
    <SpinnerComp/>
    <FooterComp />
  </div>
</template>

<script>
import NavBarComp from './components/NavBarComp.vue';
import FooterComp from './components/FooterComp.vue';
import SpinnerComp from './components/SpinnerComp.vue'

export default {
  name: 'App',
  components: {
    NavBarComp,
    FooterComp,
    SpinnerComp
  }
};
</script>
<style>

</style>
