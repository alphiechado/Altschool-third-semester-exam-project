<template>
  <div class="App">
    <NavBar/>
    <router-view/>
  </div>
</template>

<script>
import NavBar from '@/components/NavBar.vue'
import store from './components/store';

export default {
  name: 'App',
  components:{
    NavBar
  },
  provide() {
    return {
      store
    }
  }
};
</script>

<style>
* {
  margin: 0;
  padding: 0;
}
.App{
  background-image: url(./assets/Bg\ image2.png);
  min-height: 100%;
  background-size: cover;
  background-position: center;
}
</style>
