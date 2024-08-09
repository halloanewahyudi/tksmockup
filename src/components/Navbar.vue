<script setup>
import Youtube from '../components/icons/Youtube.vue'
import Linkedin from '../components/icons/LinkedIn.vue'
import Email from '../components/icons/Email.vue'

</script>
<template>
    <div class="min-h-screen w-full relative top-0 left-0 bg-primary-950">
        <!--       menunya -->
        <div class="flex justify-between items-start relative top-0 left-0 z-50">
            <nav class="flex  items-center justify-between w-full relative z-50 p-4">
                <img src="../assets/logo.svg" alt="" class="w-[200px] h-auto">

                <div class="menu text-white">
                    <ul class="flex gap-4 font-medium">
                        <li> <a ref="#"> Project</a></li>
                        <li> <a ref="#"> Secrvices</a></li>
                        <li> <a ref="#"> Product</a></li>
                        <li> <a ref="#"> Customers</a></li>
                        <li> <a ref="#"> Network</a></li>
                        <li> <a ref="#"> About</a></li>
                        <li> <a ref="#"> Sustainability</a></li>
                    </ul>
                </div>
            </nav>
            <!--  sosmed -->
            <div
                class="border-l border-white border-opacity-60  flex flex-col text-center  items-center w-full  max-w-[80px] min-h-screen h-full  shrink-0 divide-y divide-white divide-opacity-60">
                <div class=" text-white flex flex-col items-center p-2 ">
                    <a ref="#">
                        <Email class="text-white w-7 h-7" />
                    </a>
                    <span>contact</span>
                </div>
                <div class=" text-white flex flex-col items-center  p-2 ">
                    <a ref="#">
                        <Linkedin class="w-7 h-7" />
                    </a>
                    <span>LinkedIn</span>
                </div>
                <div class=" text-white flex flex-col items-center  p-2 ">
                    <a ref="#">
                        <Youtube class="w-7 h-7" />
                    </a>
                    <span>Youtube</span>
                </div>

            </div>
        </div>

        <div class="layer-hero min-h-screen w-full h-full block absolute left-0 top-0 z-20"> </div>
    </div>
</template>

<style scoped>
.layer-hero {
    background-image: url('../assets/layer-hero.png');
    background-repeat: no-repeat;
    background-position-x: -110px;
}
</style>