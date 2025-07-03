<template>
    <header class="fixed top-0 left-0 w-full z-30 shadow-sm bg-black">
        <!-- Menu bar -->
        <nav class="flex items-center justify-between px-4 py-3">
            <div></div>
            <div class="flex items-center gap-5">
                <button v-for="item in menu" :key="item.text" class="cursor-pointer text-gray-200 transition px-1 text-xl"
                    :class="{'font-bold': current === item.text }" @click="goTo(item)">{{ item.text
                    }}</button>
            </div>
            <div class="flex gap-5 px-4">
                <a href="https://github.com/tracywong117" target="_blank">
                    <i class="fa-brands fa-github text-white text-2xl"></i>
                </a>
                <a href="https://linkedin.com/tracywong117" target="blank">
                    <i class="fa-brands fa-linkedin text-white text-2xl"></i>
                </a>
                <a href="mailto:tracywong117@gmail.com" target="blank">
                    <i class="fa-solid fa-envelope text-white text-2xl"></i>
                </a>
            </div>
        </nav>
        <!-- Progress bar -->
        <div class="h-[2px] bg-pink-300 transition-all duration-200" :style="{ width: scrollPercent + '%' }"></div>
    </header>
</template>

<script>
export default {
    name: "MenuBar",
    data() {
        return {
            scrollPercent: 0,
            current: "About",
            menu: [
                { text: "About", href: "" },
                { text: "Blog", href: "/blog" },
            ]
        };
    },
    mounted() {
        window.addEventListener("scroll", this.handleScroll, { passive: true });
        this.handleScroll();
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
            this.scrollPercent = docHeight > 0 ? Math.min((scrollTop / docHeight) * 100, 100) : 0;
        },
        goTo(item) {
            this.current = item.text;
            this.$router.push(item.route);
        }
    }
};
</script>
