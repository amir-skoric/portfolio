<template>
  <MainHeader id="header" @scrollTo="scrollMeTo" />
  <MainHero id="hero" />
  <MainAbout id="about" />
  <MainCases id="cases" />
  <MainContact id="contact"  />
  <ScrollToTop @scrollTo="scrollMeTo" />
</template>

<script>

import { defineAsyncComponent } from "vue"

const MainHeader = defineAsyncComponent(() => import('./components/MainHeader.vue'))
const MainHero = defineAsyncComponent(() => import('./components/MainHero.vue'))
const MainAbout = defineAsyncComponent(() => import('./components/MainAbout.vue'))
const MainCases = defineAsyncComponent(() => import('./components/MainCases.vue'))
const MainContact = defineAsyncComponent(() => import('./components/MainContact.vue'))
const ScrollToTop = defineAsyncComponent(() => import('./components/ScrollToTop.vue'))

export default {
  components: {
    MainHeader,
    MainHero,
    MainAbout,
    MainCases,
    MainContact,
    ScrollToTop
  },

  methods: {
    //scroll to section
    scrollMeTo(id) {
      let element = document.getElementById(id)
      const y = element.getBoundingClientRect().top + window.pageYOffset;
      window.scrollTo({ top: y, behavior: 'smooth' });
    },
  }

}

</script>