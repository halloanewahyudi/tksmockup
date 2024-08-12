<script setup>
import ArrowRight from "./icons/ArrowRight.vue";
</script>
<template>
  <section class="secfive py-20 flex justify-end">
    <div class="max-w-[600px] p-6 lg:p-10 flex flex-col gap-5">
      <h4 class="text-primary-950 leading-snug">PT. Takasago Thermal Engineering
        Management Policy </h4>

      <p class="leading-snug text-xl">
        This is an introduction of
        PT. Takasago Thermal Engineering Group’s strategies,
        and the direction we want to head going forward.
      </p>
      <button
        class="p-3 w-full max-w-[400px] border border-primary-950 flex justify-between gap-10 items-center text-primary-950 hover:bg-primary-950 hover:text-white text-xl duration-300">
        Management Plan
        <ArrowRight class="h-5 w-8  " />
      </button>
    </div>
  </section>
</template>

<style scoped>
.secfive {
  background: url('../assets/bg-secfive.png')no-repeat;
  background-size: cover;
}
</style>