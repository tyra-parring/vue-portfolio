<template>
  <div id="app">
    <NavBarComp />
    <router-view /> 
    <FooterComp />
  </div>
</template>

<script>
import NavBarComp from './components/NavBarComp.vue';
import FooterComp from './components/FooterComp.vue';

export default {
  name: 'App',
  components: {
    NavBarComp,
    FooterComp
  }
};
</script>
<style scoped>

</style>
