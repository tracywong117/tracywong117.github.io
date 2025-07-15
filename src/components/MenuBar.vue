<template>
    <header class="fixed top-0 left-0 w-full z-30 shadow-sm bg-black">
        <div class="flex items-center justify-center">
            <nav class="flex items-center justify-between py-3 w-4/5 xl:w-260">
                <div class="text-white px-2 text-2xl"></div>
                <div class="flex gap-5">
                    <div class="flex items-center gap-5">
                        <button
                            v-for="item in menu"
                            :key="item.text"
                            class="cursor-pointer text-gray-500 transition px-1 text-xl"
                            :class="{ 'text-white': current === item.text }"
                            @click="goTo(item)"
                        >
                            {{ item.text }}
                        </button>
                        <a href="https://github.com/tracywong117" target="_blank">
                            <i class="fa-brands fa-github text-white text-2xl"></i>
                        </a>
                        <a href="https://www.linkedin.com/in/tracywong117/" target="_blank">
                            <i class="fa-brands fa-linkedin text-white text-2xl"></i>
                        </a>
                        <a href="mailto:tracywong117@gmail.com" target="_blank">
                            <i class="fa-solid fa-envelope text-white text-2xl"></i>
                        </a>
                    </div>
                </div>
            </nav>
        </div>
        <!-- Progress bar -->
        <div
            class="h-[2px] bg-lilac-soft transition-all duration-200"
            :style="{ width: scrollPercent + '%' }"
        ></div>
    </header>
</template>

<script>
export default {
    name: "MenuBar",
    data() {
        return {
            scrollPercent: 0,
            menu: [
                { text: "about", route: "/" },
                { text: "blog", route: "/blog" },
            ],
        };
    },
    computed: {
        current() {
            const path = this.$route.path;
            if (path === "/") return "about";
            if (path === "/blog") return "blog";
            return "nothing"; // No highlight for any other path
        },
    },
    mounted() {
        setTimeout(() => {
            window.addEventListener("scroll", this.handleScroll, { passive: true });
            this.handleScroll();
        }, 50);
    },
    beforeUnmount() {
        window.removeEventListener("scroll", this.handleScroll);
    },
    methods: {
        handleScroll() {
            const scrollTop =
                window.pageYOffset ||
                document.documentElement.scrollTop ||
                document.body.scrollTop ||
                0;
            const docHeight =
                document.documentElement.scrollHeight -
                document.documentElement.clientHeight;
            this.scrollPercent =
                docHeight > 0
                    ? Math.min((scrollTop / docHeight) * 100, 100)
                    : 0;
        },
        goTo(item) {
            this.$router.push(item.route);
        },
    },
};
</script>