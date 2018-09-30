<template>
  <div id="app">
    <SearchBar @searchRequested="onSearchRequested($event)" />
    <Info :topic="topic" />
    <Images :topic="topic" />
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
  },
  data() {
    return {
      topic: ''
    };
  },
  methods: {
    onSearchRequested(topic) {
      this.topic = topic;
    }
  }
}
</script>

<style>

</style>
