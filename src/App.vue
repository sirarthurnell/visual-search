<template>
  <div id="app" class="app">
    <Background :imageUrl="backgroundImage" />
    <SearchBar class="search-bar-component" @searchRequested="onSearchRequested($event)" />
    <Info class="info-component" :topic="topic" />
    <Images class="images-component" :topic="topic" @imagesLoaded="onImagesLoaded($event)" />
  </div>
</template>

<script>
import Background from './components/Background';
import SearchBar from './components/SearchBar.vue';
import Info from './components/Info.vue';
import Images from './components/Images.vue';

export default {
  name: 'app',
  components: {
    Background,
    SearchBar,
    Info,
    Images
  },
  data() {
    return {
      topic: '',
      backgroundImage: ''
    };
  },
  methods: {
    onSearchRequested(topic) {
      this.topic = topic;
    },
    onImagesLoaded(imageUrls) {
      this.backgroundImage = imageUrls.shift();
    }
  }
};
</script>

<style>
body {
  background-color: rgb(248, 248, 248);
}

.search-bar-component {
  position: absolute;
  left: 50%;
  top: 5em;
  transform: translateX(-50%);
  width: 50%;
}

.info-component {
  margin: 0 auto;
  margin-top: 10rem;
  width: 90%;
  max-height: 50%;
}

.images-component {
  margin: 0 auto;
  margin-top: 5rem;
  max-width: 90%;
}
</style>
