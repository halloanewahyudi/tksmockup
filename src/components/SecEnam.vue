<script setup>
import ArrowRight from "./icons/ArrowRight.vue";
</script>
<template>
<section class="secsix px-6 lg:px-10 py-20 min-h-[400px] text-white group relative">
  <div class="max-w-screen-lg mx-auto">
    <div class="grid grid-cols-1 lg:grid-cols-4">
      <div class="lg:col-span-3 pt-10">
        <h4 class="mb-10">The Company History</h4>
<!--         <p class="text-xl font-semibold">Read about the Company Outline and History, etc.</p> -->
      </div>
      <div class="opacity-0 group-hover:opacity-100 group-hover:flex duration-300 flex-col justify-center items-center text-2xl  ">
        <div class="w-max flex flex-col items-center justify-center mx-auto relative z-10 left-8 translate-x-1/2">
          <button>Readmore</button>
          <ArrowRight class="text-5xl" />
        </div>
        <div class="triangle absolute top-0 right-0 opacity-55 h-full">
        </div>
      </div>
    </div>
  </div>
</section>
</template>
<style scoped>
.secsix{
  background: url('https://www.tte-net.com/top/images/corporate_bg.jpg')no-repeat;
  background-size: cover;
}
.secsix:after{
  content: '';
  position: absolute;
  display: block;
  top: 0;
  right: 0;
  width: 400px;
  height: 100%;
  min-height: 500px;
  background: url('../assets/triangle.png')no-repeat;
}
.triangle {
   width: 0px;
   height: 0px;
   border-style: solid;
   border-width: 400px 200px 0 200px;
   border-color: #003488 transparent transparent transparent;
   transform: rotate(0deg);
}


</style>