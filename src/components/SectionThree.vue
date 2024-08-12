<script setup>
import ArrowRight from "./icons/ArrowRight.vue";
</script>
<template>
  <section class="secthree flex justify-end items-center min-h-screen pt-20 pb-40 relative">
    <div class="max-w-[720px] p-6 lg:p-12 flex flex-col gap-4">
      <p class="text-primary-700 tracking-wide"> Our Pproducts</p>
      <h4 class="text-primary-950 font-semibold">SWIT thermal Stratification</h4>
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
  background: url('../assets/bg-sec3.png')no-repeat -280px center;

}

</style>