import './assets/main.css';
import 'github-markdown-css/github-markdown-light.css';
import 'highlight.js/styles/github.css';

import { createApp } from 'vue';
import App from './App.vue';
import router from './router';

createApp(App).use(router).mount('#app');