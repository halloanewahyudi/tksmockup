<script setup>

// swiper js
import { Autoplay } from 'swiper/modules'
import {Swiper, SwiperSlide } from 'swiper/vue'
import 'swiper/css'
import 'swiper/css/autoplay'

import ArrowRight from '../components/icons/ArrowRight.vue'
import sl1 from '../assets/sl-1.jpg'
import sl2 from '../assets/sl-2.jpg'

const slides = [
  {
    title: ' Contributing to the environment and the future through hydrogen',
    description: ' Using power derived from recyclable energy that contributes to decarbonization, Takasago Thermal Engineering is manufacturing green hydrogen and helping to create added value for customers by linking the generation, storage, and usage of power.',
    image: sl1
  },

  {
    title: 'T-Base® Project Topics <br> <small>Innovating the construction process at work sites</small>',
    description: 'T-Base® is a platform for the innovation of construction processes.With the launch of the T-Base® facility that handles core processes such as planning, production, and distribution, we will standardize the processes at each work site, develop and manufacture new unit construction methods, and also develop a central production system that links partner companies, suppliers, and work sites',
    image: sl2
  }
]

</script>
<template>
    <section>
        <div class="grid grid-cols-1 lg:grid-cols-3">
            <div class="lg:col-span-1">
          
            </div> <!-- end col 1 -->
            <div class="lg:col-span-2">
       <Swiper 
       class="w-full flex"
       :modules="[Autoplay]"
       :space-between="10"
       :loop="true"
       :slides-per-view="2"
       :centered-slides="true"
       :autoplay="{
        delay:2000
       }">
        <SwiperSlide class=" w-full max-w-[800px] flex" v-for="(item,index) in slides" :key="index" v-slot="{ isActive }">
            <img :src="item.image" alt="" srcset="" class="w-full  h-[400px] object-cover">
            <div>Current slide is {{ isActive ? 'active' : 'not active' }}</div>
        </SwiperSlide>
       </Swiper>
            </div> <!-- end col-2 -->
        </div>
    </section>
</template>
<style scoped>

.swiper {
  width: 100%;
  height: 100%;
}

.swiper-slide {
  text-align: center;
  font-size: 18px;
  background: #fff;

  /* Center slide text vertically */
  display: flex;
  justify-content: center;
  align-items: center;
}

.swiper-slide img {
  display: block;
  width: 100%;
  max-width: 800px;
  height: 400px;
  object-fit: cover;
}

.swiper-slide {
  width: 80%;
}

.swiper-slide:nth-child(2n) {
  width: 60%;
}

.swiper-slide:nth-child(3n) {
  width: 40%;
}

</style>