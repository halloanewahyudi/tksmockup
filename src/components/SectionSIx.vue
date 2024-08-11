<script setup>
import ArrowRight from "./icons/ArrowRight.vue";
</script>
<template>
<section class="secsix px-6 lg:px-10 py-20 min-h-[400px] text-white group relative">
  <div class="max-w-screen-lg mx-auto">
    <div class="grid grid-cols-1 lg:grid-cols-4">
      <div class="lg:col-span-3 pt-10">
        <h4 class="mb-10">About Takasago Thermal Engineering</h4>
        <p class="text-xl font-semibold">Read about the Company Outline and History, etc.</p>
      </div>
      <div class="hidden group-hover:flex duration-300 flex-col justify-center items-center text-2xl  ">
        <div class="triangle absolute top-0 opacity-55 h-full">
        </div>
        <div class="relative flex flex-col justify-center items-center">
          <button>Readmore</button>
          <ArrowRight class="text-5xl" />
        </div>
    
      </div>
    </div>
  </div>
  <div class="triangle"></div>
</section>
</template>
<style scoped>
.secsix{
  background: url('https://www.tte-net.com/top/images/corporate_bg.jpg')no-repeat;
  background-size: cover;
}
.secsix:before{
  content: '';
  position: absolute;
  display: block;
  top: 0;
  right: 0;
  width: 400px;
  height: 100%;
  min-height: 500px;
  z-index: 100;
  background: url('../assets/triangle.png')no-repeat;
}
.secsix:after{
  content: '';
  display: block;
  position: absolute;
   width: 0px;
   height: 0px;
   border-style: solid;
   border-width: 400px 200px 0 200px;
   border-color: #003488 transparent transparent transparent;
   transform: rotate(90deg);
   
}
.triangle {
  position: absolute;
  display: block;
  top: 0;
  right: 0;
  width: 400px;
  height: 100%;
  min-height: 500px;
  z-index: 100;
  background:#dedede url('../assets/triangle.png') no-repeat;
}
</style>