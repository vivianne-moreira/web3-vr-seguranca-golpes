<script setup lang="ts">
import NavBar from '@/components/NavBar.vue'
import FooterSection from '@/components/FooterSection.vue'
</script>

<template>
  <div class="pointer-events-none fixed inset-0 -z-0 overflow-hidden" aria-hidden="true">
        <div class="absolute -left-16 -top-16 h-48 w-48 rounded-full bg-wave/30 blur-[60px] sm:-left-40 sm:-top-40 sm:h-[34rem] sm:w-[34rem] sm:blur-[110px]"></div>
        <div class="absolute -right-12 top-1/3 h-44 w-44 rounded-full bg-volt/15 blur-[60px] sm:-right-32 sm:h-[30rem] sm:w-[30rem] sm:blur-[110px]"></div>
        <div class="absolute -bottom-16 left-1/4 h-40 w-40 rounded-full bg-wine/50 blur-[65px] sm:-bottom-40 sm:h-[28rem] sm:w-[28rem] sm:blur-[120px]"></div>
  </div>
  <NavBar />
  <main class="relative z-10"><RouterView /></main>
  <FooterSection />
</template>