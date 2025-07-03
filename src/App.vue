<template>
  <div id="app">
    <MenuBar />
     <div class="h-16"></div>
    <Home />
  </div>
</template>

<script>
import Home from './components/Home.vue';
import MenuBar from './components/MenuBar.vue';

export default {
  name: 'App',
  components: {
    Home,
    MenuBar
  }
}
</script>