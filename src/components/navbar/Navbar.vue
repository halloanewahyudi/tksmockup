<script setup>
import Youtube from '../icons/Youtube.vue'
import Linkedin from '../icons/LinkedIn.vue'
import Email from '../icons/Email.vue'
import { onMounted, ref } from 'vue'

const sosIcon = ref(null)
const iconEnter = () => {
    if (sosIcon.value) {
        sosIcon.value.classList.add('dihover');
    }
}
const iconLeave = () => {
    if (sosIcon.value) {
        sosIcon.value.classList.remove('dihover');
    }
}

onMounted(() => {
    window.addEventListener('scroll', function () {
        var navbar = document.getElementById('navbar');
        if (window.scrollY > 500) {
            navbar.classList.add('nav-scrolled');
        } else {
            navbar.classList.remove('nav-scrolled');
        }
    });
})

</script>
<template>
    <div ref="sosIcon" class="nav-utama flex justify-between items-start  top-0 left-0 z-50  ">
        <nav id="navbar" @mouseenter="iconEnter" @mouseleave="iconLeave"
            class="navbar flex group  items-center justify-between w-full relative z-50 p-6 hover:bg-white duration-300">
            <img src="../../assets/logo.svg" alt="" class="w-[200px] h-auto">
            <div class="menu flex flex-col gap-2 items-end text-white group-hover:text-secondary-950">
                <div class="lang flex divide-x divide-white border border-white max-w-max  font-bold">
                    <button class="py-1 px-2 text-sm">
                        ID
                    </button>
                    <button class="py-1 px-2 text-sm">
                        JP
                    </button>
                    <button class="py-1 px-2 text-sm active ">
                        EN
                    </button>
                </div>
                <ul class="flex  gap-10 font-medium">
                    <li> <a href="#"> Project</a></li>
                    <li> <a href="#"> Secrvices</a></li>
                    <li> <a href="#"> Product</a></li>
                    <li> <a href="#"> Customers</a></li>
                    <li> <a href="#"> Network</a></li>
                    <li> <a href="#"> About</a></li>
                    <li> <a href="#"> Sustainability</a></li>
                </ul>

            </div>
        </nav>
        <!--  sosmed -->
        <div
            class="menu-icon border-l border-white border-opacity-60  flex flex-col text-center  items-center w-full  max-w-[100px] min-h-screen h-full  shrink-0 ">
            <div
                class="icon text-white flex flex-col items-center p-5 group-hover:bg-gradient-to-t from-primary-950 to-primary-400">
                <a href="#">
                    <Email class="text-white w-7 h-7" />
                </a>
                <span>contact</span>
            </div>
            <div
                class="icon text-white flex flex-col items-center  p-5 group-hover:bg-gradient-to-t from-primary-950 to-primary-400 ">
                <a href="#">
                    <Linkedin class="w-7 h-7" />
                </a>
                <span>LinkedIn</span>
            </div>
            <div
                class="icon text-white flex flex-col items-center  p-5 group-hover:bg-gradient-to-t from-primary-950 to-primary-400 ">
                <a href="#">
                    <Youtube class="w-7 h-7" />
                </a>
                <span>Youtube</span>
            </div>
            <div class="mt-32 mb-10 text-white hidden lg:flex gap-5 justify-center items-center rotate-90 p-4 w-auto">
                <span class=" bg-white opacity-60 h-0.5 w-20 block ">
                </span>
                Scroll
            </div>
        </div>

    </div>

</template>
<style scoped>
.navbar.nav-scrolled {
    @apply bg-white text-primary-950 fixed top-0 left-0 w-full duration-200 transition-all;
}

.navbar.nav-scrolled li a {
    @apply text-primary-950;
}

.navbar.nav-scrolled .lang {
    @apply border-primary-950 divide-primary-950 text-primary-950;
}

.navbar.nav-scrolled .lang .active {
    @apply text-white bg-primary-950;
}

.dihover .icon,
.icon:hover {
    @apply bg-gradient-to-t from-primary-950 to-primary-900
}

.lang button.active {
    @apply bg-white text-primary-950
}

.dihover .lang {
    @apply border-primary-950 divide-primary-950;
}

.dihover .lang button.active {
    @apply text-white bg-primary-950;
}

.menu-icon .icon {
    @apply border-b border-white border-opacity-60
}
</style>