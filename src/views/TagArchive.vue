<template>
    <div class="flex flex-col items-center pt-10">
        <div class="mx-auto w-4/5 xl:w-260 p-2">
            <h1 class="text-2xl font-bold mb-4">
                Posts tagged: <span class="text-green-600">{{ tag }}</span>
            </h1>
            <div v-if="filtered.length">
                <div v-for="post in filtered" :key="post.slug" class="mb-6">
                    <router-link :to="`/blog/${post.slug}`" class="text-xl font-medium hover:underline">
                        {{ post.title }}
                    </router-link>
                    <div class="text-sm text-gray-500">{{ post.date }}</div>
                </div>
            </div>
            <div v-else>
                <em>No posts with this tag yet.</em>
            </div>
        </div>
    </div>
</template>

<script setup>
import { posts } from '../blog/posts.js';
import { computed } from 'vue';

const props = defineProps(['tag']);

const filtered = computed(() =>
    posts.filter(p => (p.tags ?? []).some(t => t.toLowerCase() === props.tag.toLowerCase()))
);
</script>