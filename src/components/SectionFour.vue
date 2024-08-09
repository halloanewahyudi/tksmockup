<script setup>
import ArrowRight from "./icons/ArrowRight.vue";
</script>

<template>
  <section class="secfour py-20 px-6 lg:p-12 min-h-[90vh] flex items-center ">
    <div class="max-w-[980px] p-10 flex flex-col gap-4">
      <h4 class="text-primary-950 leading-snug">
        With environmental solutions for a decarbonized society,
        we will support the entire life cycle of buildings,
        including their efficient operation and management.
      </h4>
      <p class="text-xl leading-snug">
        Challenging ourselves to create new value,
        using a century of accumulated core technologies in HVAC systems.
      </p>
      <div class="flex flex-col lg:flex-row gap-10 items-center">
        <button
          class="p-3 w-full max-w-[400px] border border-primary-950 flex justify-between gap-10 items-center text-primary-950 hover:bg-primary-950 hover:text-white text-xl duration-300">
          Tecnology & Sercvices
          <ArrowRight class="h-5 w-8  " />
        </button>
        <button
          class="p-3 w-full max-w-[400px] border border-primary-950 flex justify-between gap-10 items-center text-primary-950 hover:bg-primary-950 hover:text-white text-xl duration-300">
          R & D
          <ArrowRight class="h-5 w-8  " />
        </button>
      </div>

    </div>
  </section>
</template>


<style scoped>
.secfour{
  background: url('../assets/bg-aer.png') no-repeat  112% center ;
}
</style>