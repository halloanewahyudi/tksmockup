<script setup>
import ArrowRight from '../components/icons/ArrowRight.vue'
import { Splide, SplideSlide } from '@splidejs/vue-splide';
import '@splidejs/vue-splide/css';

import sl1 from '../assets/sl-1.jpg'
import sl2 from '../assets/sl-2.jpg'
import { onMounted, ref } from 'vue';

const slides = [
  { image: sl1 },
  { image: sl2 }
]

const splideRef = ref(null);
const activeIndex = ref(0);

const goToSlide = (index) => {
    if (splideRef.value) {
        splideRef.value.splide.go(index);  // Mengakses instance Splide untuk navigasi
    }
};

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
</script>
<template>
  <section class="sectwo text-white ">
    <div class="grid grid-col-1 lg:grid-cols-3 diablue items-center">
      <div class="lg:col-span-1 flex flex-col justify-center items-center p-6 lg:py-20">
        <div class="max-w-[340px] flex flex-col gap-4">
          <h4>Topics</h4>
          <h4>
            Contributing to the environment and the future through hydrogen
          </h4>
          <p>
            Using power derived from recyclable energy that contributes to decarbonization, Takasago Thermal Engineering
            is manufacturing green hydrogen and helping to create added value for customers by linking the generation,
            storage, and usage of power.
          </p>
          <button
            class="p-3 w-full border border-white flex justify-between items-center trxt-white hover:bg-primary-950 text-xl">
            Read More
            <ArrowRight class="h-5 w-8" />
          </button>
        </div>
      </div>
      <div class="lg:col-span-2">
        <Splide ref="splideRef" :options="{
          type: 'slide',
          perPage:2,
          gap:30,
          focus  : 0,
          height   : '400px',
          autoWidth: true,
          autoplay: true,
          rewind: true,
          autoScroll: {
            speed: 4,
          },
          arrows: false,
          pagination: false
        }" aria-label="My Favorite Images" class="flex">
          <SplideSlide v-for="(item, index) in slides" :key="index" class="">
            <img :src="item.image" alt="" srcset="" class="w-[600px] h-[400px] object-cover">
          </SplideSlide>
        </Splide>
      </div>
      <ul class="custom-pagination">
            <li v-for="(slide, index) in slides" :key="index">
                <button :class="{ active: activeIndex === index }" @click="goToSlide(index)">
                </button>
            </li>
        </ul>
    </div>
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
  background-position-x: right;
  background-size: cover;
}
</style>