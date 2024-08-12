<script setup>
import { Splide, SplideSlide } from '@splidejs/vue-splide';
import '@splidejs/vue-splide/css';
import slideOne from '../../assets/slider2.jpg';
import slidetwo from '../../assets/slider.jpg';
const slides = [
    {
        nama: 'Slides One',
        image: slideOne,
        description: 'With our revolutionary environmental innovations, we activate the Earth’s future'
    },
    {
        nama: '',
        image: slidetwo,
        description: 'PT. Takasago Thermal Engineering <br> Lorem Ipsum is simply dummy text of the printing and typesetting industry.'
    }
];
</script>
<template>
      <div class="absolute z-10 top-0 left-0 w-full h-full bg-gradient-to-t from-transparent to-black opacity-30"></div>
     <!--  slideshow -->
     <Splide class="bg-gradient " ref="splideRef" :options="{
            type: 'slide',
            autoplay: true,
            rewind: true,
            autoScroll: {
                speed: 4,
            },
            arrows: false,
            pagination: false
        }" aria-label="My Favorite Images">
      
            <SplideSlide v-for="(item, index) in slides" :key="index" class="min-h-screen ">
                <div :style="{ backgroundImage: `url(${item.image})` }"
                    class="slide min-h-screen w-full flex flex-col justify-end items-center lg:p-20 bg-no-repeat bg-center bg-cover slide-content">
                   <div class="max-w-[560px] mx-auto slide-content">
                    <p v-html="item.description" class="text-3xl text-white ">
                    </p>
                   </div>
                   
                    </div>           
            </SplideSlide>
        </Splide>
</template>
<style scoped>
.slide > .slide-content{
    text-shadow: 1px 5px 5px #000;
    font-weight: 500;
    color: #fff;
    @apply opacity-0 scale-75 -translate-x-60  
}

.splide__slide.is-active .slide >  .slide-content{
   @apply opacity-100 scale-100 translate-x-0 delay-200 duration-500
}
</style>