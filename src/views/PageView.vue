<template>
    <div class="flex flex-col items-center pt-10">
        <div class="mx-auto w-4/5 xl:w-260 p-2">
            <router-link to="/" class="text-blue-600 hover:underline">← Back to Home</router-link>
            <h1 class="text-3xl font-bold mt-4 mb-2">{{ page.title }}</h1>
            <article v-if="page" v-html="compiled" class="prose markdown-body"></article>
            <div v-else class="text-red-500">Page not found</div>
        </div>

    </div>
</template>

<script setup>
import { ref, watchEffect } from 'vue';
import md from '../markdown.js'; // your markdown-it instance

const props = defineProps({ page: Object });
const compiled = ref('');

watchEffect(() => {
    if (props.page) {
        compiled.value = md.render(props.page.raw.replace(/^---[\s\S]+?---/, ''));
    } else {
        compiled.value = '';
    }
});
</script>