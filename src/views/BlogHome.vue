<template>
    <div class="flex flex-col items-center justify-center pt-20">
        <div class="flex flex-col mx-auto w-4/5 xl:w-260 p-2">
            <div class="text-7xl text-center text-lilac-strong">The Notebook</div>
            <div class="py-5">
                <div class="text-lg text-gray-700 text-center">
                    Share my thoughts, experiences, and insights on various topics.
                </div>
            </div>
            <!-- A Border with only top and bottom line -->
            <div class="border-t-1 border-b-1 border-gray-300 py-5 flex justify-center">
                ABC
            </div>

            <div v-for="post in posts" :key="post.slug" class="">
                <div class="pt-6 pb-8 border-b-1 border-gray-300">
                    <router-link :to="`/blog/${post.slug}`" class="text-3xl hover:text-lilac-strong pb-3">
                        {{ post.title }}
                    </router-link>
                    <p class="description">{{ new Date(post.date).toLocaleDateString('en-US', {
                        year: 'numeric', month:
                            'long', day: 'numeric'
                    }) }}</p>
                    <div class="flex flex-wrap gap-2 mt-2">
                        <span v-if="post.category" class="flex items-center rounded px-2 py-0.5 text-xs gap-1">
                            <div class="w-3 h-3">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
                                    <path d="M0 80L0 229.5c0 17 6.7 33.3 18.7 45.3l176 176c25 25 65.5 25 90.5 0L418.7 317.3c25-25 25-65.5 0-90.5l-176-176c-12-12-28.3-18.7-45.3-18.7L48 32C21.5 32 0 53.5 0 80zm112 32a32 32 0 1 1 0 64 32 32 0 1 1 0-64z"/>
                                </svg>
                            </div>
                            <div>
                            {{
                                post.category
                            }}
                            </div>
                            </span>
                        <span v-for="tag in post.tags ?? []" :key="tag"
                            class="inline-block rounded px-2 py-0.5 text-xs gap-1">
                            <i class="fa-solid fa-hashtag"></i>
                            {{ tag }}</span>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import { posts } from '../blog/posts.js';
</script>