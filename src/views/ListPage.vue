<template>
  <div class="flex flex-col items-center pt-10">
    <div class="flex mx-auto w-4/5 xl:w-260 p-2">
      <ul>
        <li v-for="page in pages" :key="page.slug">
          <router-link :to="`/page/${page.slug}`">{{ page.title }}</router-link>
        </li>
      </ul>
    </div>
  </div>
  </template>
  
  <script setup>
  import { pages } from '../page/pages.js';
  </script>