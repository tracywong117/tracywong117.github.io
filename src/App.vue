<template>
  <div id="app">
    <MenuBar />
    <div class="h-16"></div>
    <Home />
    <div class="h-16"></div>
    <!-- Footer -->
    <footer class="text-center text-gray-500 text-xs">
      <p>© 2025 Tracy Wong</p>
      <p>
        Built with <a href="https://vuejs.org/" target="_blank" class="website-link">Vue.js</a> and
        <a href="https://tailwindcss.com/" target="_blank" class="website-link">Tailwind CSS</a>.
      </p>
    </footer>
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