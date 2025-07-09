import { createRouter, createWebHistory } from 'vue-router';
import Home from '../views/Home.vue';      // Your Home component
import BlogHome from '../views/BlogHome.vue';   // Blog list
import BlogPost from '../views/BlogPost.vue';   // Blog post

const routes = [
  { path: '/', component: Home },
  { path: '/blog', component: BlogHome },
  { path: '/blog/:slug', component: BlogPost },
  // more routes...
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;