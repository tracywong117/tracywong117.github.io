<template>
    <ul>
      <li v-for="page in pages" :key="page.slug">
        <router-link :to="`/page/${page.slug}`">{{ page.title }}</router-link>
      </li>
    </ul>
  </template>
  
  <script setup>
  import { pages } from '../page/pages.js';
  </script>