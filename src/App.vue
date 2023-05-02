<template>
  <MainHeader id="header" @scrollTo="scrollMeTo" />
  <MainHero id="hero" />
  <MainAbout id="about" v-motion-fade-visible />
  <MainCases id="cases" v-motion-fade-visible />
  <MainContact id="contact" v-motion-fade-visible />
  <ScrollToTop @scrollTo="scrollMeTo" />
</template>

<script>

import MainHeader from './components/MainHeader.vue'
import MainHero from './components/MainHero.vue'
import MainAbout from './components/MainAbout.vue'
import MainCases from './components/MainCases.vue'
import MainContact from './components/MainContact.vue'
import ScrollToTop from './components/ScrollToTop.vue'

export default {
  components: {
    MainHeader,
    MainHero,
    MainAbout,
    MainCases,
    MainContact,
    ScrollToTop
  },
  mounted() {
    window.scrollTo(0, 1)
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