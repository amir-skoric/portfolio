<script setup>
import MainHero from './components/MainHero.vue'
import MainHeader from './components/MainHeader.vue'
import MainAbout from './components/MainAbout.vue'
import MainContact from './components/MainContact.vue'

import { onMounted } from 'vue'
onMounted(() => {
  window.scrollTo(0, 1)
})

</script>

<template>
  <MainHeader />
  <MainHero />
  <MainAbout v-motion-fade-visible />
  <MainContact v-motion-fade-visible />
</template>