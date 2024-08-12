<script setup>
import ArrowRight from '../components/icons/ArrowRight.vue'
import { Splide, SplideSlide } from '@splidejs/vue-splide';
import '@splidejs/vue-splide/css';

import sl1 from '../assets/sl-1.jpg'
import sl2 from '../assets/sl-2.jpg'
import { onMounted, ref } from 'vue';

const slides = [
  {
    title: ' Contributing to the environment and the future through hydrogen',
    description: ' Using power derived from recyclable energy that contributes to decarbonization, PT. Takasago Thermal Engineering is manufacturing green hydrogen and helping to create added value for customers by linking the generation, storage, and usage of power.',
    image: sl1
  },

  {
    title: 'T-Base® Project Topics <br> <small>Innovating the construction process at work sites</small>',
    description: 'T-Base® is a platform for the innovation of construction processes.With the launch of the T-Base® facility that handles core processes such as planning, production, and distribution, we will standardize the processes at each work site, develop and manufacture new unit construction methods, and also develop a central production system that links partner companies, suppliers, and work sites',
    image: sl2
  }
]

const splideRef = ref(null);
const activeIndex = ref(0);

const goToSlide = (index) => {
  if (splideRef.value) {
    splideRef.value.splide.go(index);  // Mengakses instance Splide untuk navigasi
  }
};

const nextSlide = () =>{
  splideRef.value.splide.go('>'); 
}
onMounted(async () => {
  // await nextTick(); // Pastikan komponen sudah ter-mount

  // Dapatkan instance Splide setelah komponen ter-mount
  if (splideRef.value) {
    const splideInstance = splideRef.value.splide;
    splideInstance.on('moved', (newIndex) => {
      activeIndex.value = newIndex;
    });
  }
});

function onArrowsMounted(splide, prev, next) {
  console.log(splide.length);
}

</script>
<template>
  <section class="sectwo text-white relative min-h-screen ">
    <div class="grid grid-col-1 lg:grid-cols-3 diablue items-center relative z-10">
      <div class="lg:col-span-1 flex flex-col justify-center items-center p-6 lg:py-20">
        <div class="max-w-[340px] flex flex-col gap-4 py-10">
          <h4>Topics</h4>
          <Splide :options="{
            type: 'fade',
            perPage: 1,
            autoplay: true,
            arrows: false,
            pagination: false,
            rewind: true,
            focus: 0,
            autoScroll: {
              speed: 3,
            },
            classes: {
              pagination: 'custom-pagination',
            },
          }">
            <SplideSlide v-for="(item, index) in slides" :key="index" class="flex flex-col gap-4">
              <h4 v-html="item.title"></h4>
              <p class="text-lg font-medium" v-html="item.description"></p>
              <button
                class="p-3 w-full border border-white flex justify-between items-center trxt-white hover:bg-primary-950 text-xl">
                Read More
                <ArrowRight class="h-5 w-8" />
              </button>
            </SplideSlide>
          </Splide>
        </div>
      </div>
      <div class="lg:col-span-2 relative pb-[173px]">
        <Splide ref="splideRef" :options="{
          type: 'slide',
          perPage: 2,
          gap: 30,
          focus: 0,
          height: '400px',
          autoWidth: true,
          autoplay: true,
          rewind: true,
          autoScroll: {
            speed: 2.5,
          },
          arrows: false,
          pagination: false
        }" class="flex">
          <SplideSlide v-for="(item, index) in slides" :key="index" class="">
            <img :src="item.image" alt="" srcset="" class="w-[600px] h-[400px] object-cover">
          </SplideSlide>
        </Splide>
        <!-- <button @click="nextSlide" class="text-xl absolute top-36 right-64 italic underline shadow-lg">Next</button> -->
        <ul class="custom-pagination flex gap-5 text-3xl font-bold absolute bottom-0 left-20 ">
          <li v-for="(slide, index) in slides" :key="index">
            <button class="btn-page italic" :class="{ active: activeIndex === index }" @click="goToSlide(index)"> 0{{
              index + 1 }}
            </button>
          </li>
        </ul>
      </div>
    </div>
<div class="w-full bg-primary-950 h-24 absolute bottom-0 z-0"></div>
  </section>
</template>


<style scoped>
.sectwo {
  background-image: url('../assets/awan.jpg');
  background-repeat: no-repeat;
  background-size: cover;
}

.diablue {
  background-image: url('../assets/diablue.svg');
  background-repeat: no-repeat;
  background-position-x: 230px;
  background-size: cover;
}

.btn-page {
  width: 60px;
  opacity: .3;
}

.btn-page.active {
  opacity: 1;
}

.btn-page::after {
  content: '';
  display: block;
  width: 100%;
  height: 6px;
  background: #fff;
  clip-path: polygon(5% 0%, 100% 0%, 95% 100%, 0% 100%);
}
</style>