<script setup>
import NavbarVue from "./components/navbar/Index.vue";
import FooterVue from "./components/Footer.vue";
import SectionSevenVue from "./components/SectionSeven.vue";
import SecEnamVue from './components/SecEnam.vue';
import SectionFiveVue from "./components/SectionFive.vue";
import SectionFourVue from "./components/SectionFour.vue";
import SectionThreeVue from "./components/SectionThree.vue";
import SectionTwoVue from "./components/SectionTwo.vue";
import SectionOneVue from "./components/SectionOne.vue";
import Topic from './components/Topic.vue'
</script>
<template>
    <div class="max-w-screen-2xl mx-auto">
        <NavbarVue />
        <SectionTwoVue />
        <SectionThreeVue />
        <SectionFourVue />
        <SectionFiveVue />
        <SecEnamVue/>
        <FooterVue />
    </div>
</template>