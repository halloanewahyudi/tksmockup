<script setup>
import ArrowRight from "./icons/ArrowRight.vue";
</script>
<template>
  <section class="secfive py-20 flex justify-end">
    <div class="max-w-[600px] p-6 lg:p-10 flex flex-col gap-5">
      <h4 class="text-primary-950 leading-snug">About the Company History</h4>

      <p class="leading-snug text-xl">
        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s
      </p>
      <button
        class="p-3 w-full max-w-[400px] border border-primary-950 flex justify-between gap-10 items-center text-primary-950 hover:bg-primary-950 hover:text-white text-xl duration-300">
       Read More
        <ArrowRight class="h-5 w-8  " />
      </button>
    </div>
  </section>
</template>

<style scoped>
.secfive {
  background:#f2f2f2 url('../assets/swit.jpg')no-repeat;
  background-position-x: -600px;
  background-size: cover;
}
</style>