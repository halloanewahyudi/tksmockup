<script setup>
import ArrowRightVue from './icons/ArrowRight.vue'
import Link from './icons/Link.vue'
</script>
<template>
  <footer class="pt-20">
    <div class="container mx-auto">
      <div class="grid grid-cols-1 lg:grid-cols-3 gap-5 lg:gap-12">
        <div class="flex flex-col gap-2">
          <button class="btn-footer">
            <span> Technology & Services
              <ArrowRightVue />
            </span>
          </button>
          <button class="btn-footer">
            <span> Projects
              <ArrowRightVue />
            </span>
          </button>
          <button class="btn-footer">
            <span> R & D
              <ArrowRightVue />
            </span>
          </button>
          <ul class="flex flex-col gap-2 ">
            <li><a href="#"> Research and Development Policy </a></li>
            <li><a href="#"> Areas of Activity </a></li>
            <li><a href="#">About the PT. PT. Takasago Thermal Engineering </a></li>
            <li><a href="#">Innovation Center </a></li>
            <li><a href="#"> Owned Patents </a></li>
          </ul>
        </div> <!-- end col 1 -->
        <div class="flex flex-col gap-2">
          <div class="flex flex-col gap-2">
          <button class="btn-footer">
            <span> About PT. Takasago Thermal Engineering
              <ArrowRightVue />
            </span>
          </button>

          <ul class="flex flex-col gap-2 ">
            <li><a href="#"> Message from the President </a></li>
            <li><a href="#"> Corporate Philosophy </a></li>
            <li><a href="#">Company Outline </a></li>
            <li><a href="#">Organization Chart and Executives </a></li>
            <li><a href="#"> Company History </a></li>
            <li><a href="#"> Offices </a></li>
            <li><a href="#"> Group Companies </a></li>
            <li><a href="#"> Awards </a></li>
            <li><a href="#"> Videos and Advertisements </a></li>
          </ul>
          <button class="btn-footer">
            <span> Investor Relations
              <ArrowRightVue />
            </span>
          </button>
          <ul class="flex flex-col gap-2 ">
            <li><a href="#"> To Our Shareholders and Investors </a></li>
            <li><a href="#"> Quick Guide to PT. Takasago Thermal Engineering </a></li>
            <li><a href="#"> Management Plan </a></li>
            <li><a href="#"> Performance Highlights </a></li>
            <li><a href="#"> Financial Results </a></li>
            <li><a href="#"> Stock Information </a></li>
            <li><a href="#"> IR Calendar </a></li>
          </ul>
        </div>
        </div> <!-- end col 2 -->
        <div class="flex flex-col gap-2">
          <button class="btn-footer">
            <span> Sustainability
              <ArrowRightVue />
            </span>
          </button>
          <ul class="flex flex-col gap-2 ">
            <li><a href="#"> Sustainability Management </a></li>
            <li><a href="#"> Environment</a></li>
            <li><a href="#"> Social </a></li>
            <li><a href="#"> Governance</a></li>
            <li><a href="#"> ESG Data </a></li>
            <li><a href="#"> Corporate Report (Integrated Report) </a></li>
            <li><a href="#"> IR Calendar </a></li>
          </ul>
          <button class="btn-footer">
            <span> Inquiries
              <Link />
            </span>
          </button>
        </div> <!-- end cpl-3 -->
      </div>
    </div>
    <div class="bg-neutral-100 "> <!-- scetoin bawah -->
      <div class="container mx-auto py-8 mt-16">
        <div class="flex gap-4 justify-between items-center ">
          <div>
            <img src="../assets/logolg.png" alt="" srcset="" class="w-[160px] h-auto ">
          </div>
          <div class="flex items-center divide-x  divide-neutral-400 text-sm">
            <a href="#" class="py-1 px-2">Site Map </a>
            <a href="#" class="py-1 px-2">Getting Started</a>
            <a href="#" class="py-1 px-2">About the handling of personal information </a>
          </div>
        </div>
      </div>
    </div>
    <div class="bg-neutral-800 text-neutral-50 text-center text-sm p-2">
      Copyright © PT. Takasago Thermal Engineering Co., Ltd. All Rights Reserved.
    </div>
  </footer>
</template>
<style scoped>
footer{
  @apply text-sm;
}
.btn-footer {
  @apply block w-full;
}

.btn-footer span {
  @apply flex justify-between items-center py-4 w-full text-xl font-semibold
}

.btn-footer:after {
  content: '';
  @apply w-full border-b border-primary-950 block group-hover:w-0 duration-300
}

.btn-footer:hover:after {
  @apply w-0 duration-300
}

/* footer ul li a:after{
  content:'';
  @apply  border-b border-primary-950 block  w-max
} */
</style>