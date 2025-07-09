<template>
  <div class="flex flex-col items-center justify-center pt-10">
    <div class="mx-auto w-4/5 xl:w-260 p-2">
      <router-link to="/blog" class="text-blue-600 hover:underline">← Back to Blog</router-link>
      <h1 class="text-3xl font-bold mt-4 mb-2">{{ post.title }}</h1>
      <p class="text-sm text-gray-500 mb-6">{{ post.date }}</p>
      <article v-html="htmlContent" class="prose markdown-body"></article>
    </div>

  </div>
</template>

<script setup>
import { useRoute } from 'vue-router';
import { posts } from '../blog/posts.js';
import md from '../markdown.js'; // <-- use your new markdown-it + MathJax instance
import { ref, computed, watchEffect } from 'vue';

const route = useRoute();

const post = computed(() =>
  posts.find(p => p.slug === route.params.slug)
);

const htmlContent = ref('');

// Use watchEffect to update when post changes
watchEffect(() => {
  if (post.value) {
    // Remove frontmatter before rendering
    const markdown = post.value.raw.replace(/^---\n[\s\S]+?\n---/, '');
    htmlContent.value = md.render(markdown);
  } else {
    htmlContent.value = '';
  }
});
</script>

<style>
.prose {
  /* optional: Tailwind's typography plugin styles */
  max-width: 100%;
}

.prose .katex {
  font-size: 1em;
}

mjx-container svg {
  display: inline !important;
  vertical-align: middle;
}
</style>