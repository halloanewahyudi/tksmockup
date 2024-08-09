<script setup>
import Navbar from './Navbar.vue'
import Slideshow from './Slideshow.vue'
import Info from '../../components/icons/Info.vue'
</script>
<template>
    <div class="relative w-full min-h-screen top-0 left-0  bg-primary-950">
        <Slideshow class="absolute top-0 left-0 w-full z-10" />
        <Navbar class="absolute top-0 left-0 w-full" />
        <div class="layer-hero min-h-screen w-full h-full  absolute left-0 top-0 z-20"></div>
        <div class="w-full p-4 bg-primary-950 text-primary-50 flex justify-center lg:pl-56 font-semibold">
            <div class="flex gap-5">
               <div class="flex items-center gap-2"> <Info /> Important News </div>
               <div class="border-l border-white lg:px-5 max-w-[680px]">
                Beware of "Spoofing Emails" from Fake Employees of Takasago Thermal Engineering and Our Group Companies（105.9 KB）
               </div>
            </div>
        </div>
    </div>
</template>
<style scoped>
.layer-hero {
    background-image: url('../../assets/layer-hero.png');
    background-repeat: no-repeat;
    background-position-x: -110px;
}
</style>