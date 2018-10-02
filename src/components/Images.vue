<template>
  <div class="images">
    <b-carousel controls
                indicators
                :interval="4000"
                v-model="slide"
                @sliding-start="onSlideStart"
                @sliding-end="onSlideEnd"
    >

      <b-carousel-slide v-for="(url, index) in imageUrls" :img-src="url" :key="index"/>

    </b-carousel>

  </div>
</template>

<script>
import { ImagesService } from '../services/images.service.js';

export default {
  props: {
    topic: String
  },
  data() {
    return {
      slide: 0,
      sliding: null,
      imageUrls: []
    };
  },
  methods: {
    onSlideStart(slide) {
      this.sliding = true;
    },
    onSlideEnd(slide) {
      this.sliding = false;
    },
    updateImages() {
      const images = new ImagesService();
      images.getImages(this.topic).then(rawImages => {
        console.log(rawImages);
        const urls = rawImages.body.items.map(item => item.media.m.replace('_m.', '_c.'));
        this.imageUrls = urls;
        this.$emit('imagesLoaded', [].concat(this.imageUrls));
      });
    }
  },
  watch: {
    topic: function(newTopic, oldTopic) {
        this.updateImages();
    }
  }
};
</script>

<style scoped>
.images {
  border-radius: 2rem;
  overflow: hidden;
  outline: none;
}
</style>
