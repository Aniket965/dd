<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png">
    <Footer/>
  </div>
</template>

<script>

import Footer from './components/Footer.vue';

export default {
  name: 'app',
  components: {
    Footer,
  },
};
</script>

<style lang="scss">
@import url('https://fonts.googleapis.com/css?family=Poppins:400,500,700&display=swap');
html,body {
  margin:0;
  padding: 0;
}

#app {
  font-family: 'Poppins', sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
</style>
