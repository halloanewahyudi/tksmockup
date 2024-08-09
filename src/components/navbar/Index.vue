<script setup>
import Navbar from './Navbar.vue'
import Slideshow from './Slideshow.vue'
import Info from '../../components/icons/Info.vue'
</script>
<template>
    <div class="secone relative w-full min-h-screen top-0 left-0  bg-primary-950">
        <Slideshow class="absolute top-0 left-0 w-full z-10" />
        <Navbar class="absolute top-0 left-0 w-full" />
        <div class="layer-hero min-h-screen w-full h-full -translate-x-80 absolute left-0 top-0 z-20"></div>
        <div class="w-full p-4 bg-primary-950 text-primary-50 flex justify-center lg:pl-10 font-semibold">
            <div class="flex flex-wrap gap-5">
               <div class="flex items-center gap-2"> <Info /> Important News </div>
               <div class="lg:border-l border-white lg:px-5 max-w-[680px]">
                Beware of "Spoofing Emails" from Fake Employees of Takasago Thermal Engineering and Our Group Companies（105.9 KB）
               </div>
            </div>
        </div>
    </div>
</template>
<style scoped>
 .layer-hero {
   /*  background-image: url('../../assets/layer-hero.png');
    background-repeat: no-repeat;
    background-position-x: -120px; */

    background: repeating-linear-gradient(
    -63.35deg,
    transparent 0%,
    transparent 49.15%,
    rgba(0,124,207,1) 49.15%,
    rgba(0,124,207,1) 55.4%,
    rgba(0,50,136,1) 55.4%,
    rgba(0,50,136,1) 62.4%,
    #fff 62.4%,
    #fff 100%
  );
} 

.secone::before {
    position: absolute;
    z-index: 1000;
    left: 0;
    bottom: calc(-1 * var(--imp_swiper_height_px));
    top: auto;
    content: "";
    background: repeating-linear-gradient(
    -63.35deg,
    transparent 0%,
    transparent 49.15%,
    rgba(0,124,207,1) 49.15%,
    rgba(0,124,207,1) 55.4%,
    rgba(0,50,136,1) 55.4%,
    rgba(0,50,136,1) 62.4%,
    #fff 62.4%,
    #fff 100%
  );
    height: 1800px;
    width: calc(1800px*var(--tan) + 225px);
    clip-path: polygon(
    0% 100%,
    0% 0%,
    91.5% 0%,
    11.5% 100%
  );
}
</style>