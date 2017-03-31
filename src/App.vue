<template>
  <div id="app">
    <md-toolbar>
      <h1 class="md-title">{{ title }}</h1>
    </md-toolbar>
    <router-view></router-view>
    <md-bottom-bar class="bottom-bar">
      <md-bottom-bar-item md-icon="group" v-bind:md-active="currentCat === 'patients'"
                          href="#/patients">Patients</md-bottom-bar-item>
      <md-bottom-bar-item md-icon="home" v-bind:md-active="currentCat === ''"
                          href="#/">Accueil</md-bottom-bar-item>
      <md-bottom-bar-item md-icon="check_box" v-bind:md-active="currentCat === 'fournitures'"
                          href="#/fournitures">Fournitures</md-bottom-bar-item>
    </md-bottom-bar>
  </div>
</template>

<script>
export default {
  name: 'app',
  computed: {
    currentCat: function () {
      let [, cat] = this.$route.path.split('/')
      return cat
    },
    title: function () {
      return this.$route.name
    }
  }
}
</script>

<style>
#app {
}
  .bottom-bar {
    position:fixed !important;
    bottom:0;
  }
</style>
