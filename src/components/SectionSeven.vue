<script setup>
import ArrowRight from "./icons/ArrowRight.vue";
</script>
<template>
<section class="secseven px-6 lg:px-10 py-20 min-h-[400px] text-white group relative">
  <div class="max-w-screen-lg mx-auto">
    <div class="grid grid-cols-1 lg:grid-cols-4">
      <div class="lg:col-span-3 pt-10">
        <h4 class="mb-10">Investor Relations</h4>
        <p class="text-xl font-semibold">Read about the Management Plan and latest IR materials, etc.</p>
      </div>
      <div class="hidden group-hover:flex duration-300 flex-col h-full justify-center items-center text-2xl  ">
        <div class="triangle absolute top-0 opacity-55 h-full">
        </div>
        <div class="relative flex flex-col justify-center items-center top-20">
          <button>Readmore</button>
          <ArrowRight class="text-5xl" />
        </div>
    
      </div>
    </div>
  </div>
</section>
</template>
<style scoped>
.secseven{
  background: url('https://www.tte-net.com/top/images/ir_bg.jpg')no-repeat;
  background-size: cover;
}
.triangle {
   width: 0px;
   height: 0px;
   border-style: solid;
   border-width:  0 200px 400px 200px;
   border-color: transparent transparent #003488 transparent;
   transform: rotate(0deg);
}
</style>