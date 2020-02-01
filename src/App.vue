<template>
  <div id="app">
    <!-- <img alt="Vue logo" src="./assets/logo.png"> -->
    <home/>
    <Footer/>
  </div>
</template>

<script>

import Footer from './components/Footer.vue';
import home from './pages/home.vue';

export default {
  name: 'app',
  components: {
    home,
    Footer,
  },
};
</script>

<style lang="scss">
@import url('https://fonts.googleapis.com/css?family=Julius+Sans+One|Poppins:400,500,700&display=swap');
html,body {
  margin:0;
  padding: 0;
}

#app {
  font-family: 'Poppins', sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  --swiper-theme-color: #b89a51;
}
.emptyspace {
  width: 100%;
  height: 2rem;
}
.center-child {
  display: flex;
  justify-content: center;
  align-items: center;
}
.vnb-button {
    background: #b89a51;
     &:hover { 
          background: darken(#b89a51, 10%);
     }
  }

</style>
