<template>
  <div id="app">
    <SearchBar />
    <Info topic="hello" />
    <Images />
  </div>
</template>

<script>
import SearchBar from './components/SearchBar.vue'
import Info from './components/Info.vue'
import Images from './components/Images.vue'

export default {
  name: 'app',
  components: {
    SearchBar,
    Info,
    Images
  }
}
</script>

<style>

</style>
