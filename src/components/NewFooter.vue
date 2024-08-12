<script setup>
import ArrowRightVue from './icons/ArrowRight.vue'
import Link from './icons/Link.vue'
</script>
<template>
    <footer class="pt-20">
        <div class="container mx-auto">
            <div class="grid grid-cols-1 lg:grid-cols-3 gap-5 lg:gap-12">
                <div class="flex flex-col gap-2">
                    <h4> Main Office</h4>
                    <address>
                        Gedung Mugi Griya
                        Jl. MT. Haryono Kav. 10, 5th Floor, Unit 506
                        Tebet, Jakarta Selatan 12810, Indonesia <br>
                    </address>
                    <div>
                        <span>TEL : +62 21 83708518/19</span>
                    </div>
                </div> <!-- end col 1 -->
                <div class="flex flex-col gap-2">
                    <h4> Menu </h4>
                    <ul class="flex flex-col gap-2 ">
                        <li> <a href="#"> Project Services</a></li>
                        <li> <a href="#"> Product</a></li>
                        <li> <a href="#"> Customers</a></li>
                        <li> <a href="#"> About</a></li>
                        <li> <a href="#"> Sustainability</a></li>
                    </ul>
                </div> <!-- end col 2 -->
                <div class="flex flex-col gap-2 justify-center h-full">
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
            Copyright © PT. Takasago Thermal Engineering All Rights Reserved.
        </div>
    </footer>
</template>
<style scoped>
footer {
    @apply text-sm;
}

footer h4 {
    @apply text-xl
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