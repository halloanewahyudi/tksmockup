<script setup>
import ArrowRight from "./icons/ArrowRight.vue";
</script>
<template>
  <section class="secthree flex justify-end items-center min-h-screen pt-20 pb-40 relative">
    <div class="max-w-[720px] p-6 lg:p-12 flex flex-col gap-4">
      <div>
        <p class="text-secondary-600 tracking-wide text-lg font-medium"> Our Products</p>
        <h4 class="text-primary-950 font-semibold">SWIT Thermal Stratification</h4>
      </div>
    
      <p class="text-xl ">
        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s
      </p>
      <button
        class="p-3 w-full max-w-[400px] border border-primary-950 flex justify-between gap-10 items-center text-primary-950 hover:bg-primary-950 hover:text-white text-xl duration-300">
        Read More
        <ArrowRight class="h-5 w-8  " />
      </button>
    </div>
    <div class="w-full max-w-[100vw] bg-primary-950 h-24 absolute bottom-0 opacity-60"></div>
  </section>

</template>

<style scoped>
 
.secthree {
  background:#f2f2f2 url('../assets/swit.jpg')no-repeat -280px center;

}

</style>