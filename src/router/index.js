import { createRouter, createWebHistory } from 'vue-router';
import Home from '../views/Home.vue';      // Your Home component
import BlogHome from '../views/BlogHome.vue';   // Blog list
import BlogPost from '../views/BlogPost.vue';   // Blog post
import { pages } from '../page/pages.js';
import PageView from '../views/PageView.vue';
import ListPage from '../views/ListPage.vue'
import CategoryArchive from '../views/CategoryArchive.vue';
import TagArchive from '../views/TagArchive.vue';

const routes = [
    { path: '/', component: Home },
    { path: '/blog', component: BlogHome },
    { path: '/blog/:slug', component: BlogPost },
    { path: '/page', component: ListPage },
    {
        path: '/page/:slug',
        component: PageView,
        props: route => {
            const page = pages.find(p => p.slug === route.params.slug);
            return page ? { page } : {};
        }
    },
    {
      path: '/blog/category/:category',
      component: CategoryArchive,
      props: true,
    },
    {
      path: '/blog/tag/:tag',
      component: TagArchive,
      props: true,
    },
  // more routes...
];

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
});

export default router;