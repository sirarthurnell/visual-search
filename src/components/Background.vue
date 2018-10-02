<template>
  <div class="background" v-bind:style="{ backgroundImage: 'url(' + imageUrl + ')' }">
    
  </div>
</template>

<script>
export default {
  props: {
    imageUrl: String
  }
};
</script>

<style>
.background {
  width: 100%;
  height: 100%;
  background-size: cover;
  background-position: center center;
  z-index: -1;
  position: fixed;
  top: 0; 
  filter: blur(20px);
}

.background::before {
  content: ' ';
  position: absolute;
  width: 100%;
  height: 100%;
  background-color: rgba(255, 255, 255, .75);
}
</style>
