<template>
  <div id="app">
    <MenuBar />
    <div class="h-16"></div>
    <router-view />
    <div class="h-16"></div>
    <!-- Footer -->
    <footer class="text-center text-xs py-2 bg-lilac-pale">
      <span>© 2025 Tracy Wong</span>
      <br>
      <span>
        Built with <a href="https://vuejs.org/" target="_blank" class="website-link">Vue.js</a> and
        <a href="https://tailwindcss.com/" target="_blank" class="website-link">Tailwind CSS</a>.
      </span>
    </footer>
  </div>
</template>

<script>
import MenuBar from './components/MenuBar.vue';

export default {
  name: 'App',
  components: {
    MenuBar
  }
}
</script>