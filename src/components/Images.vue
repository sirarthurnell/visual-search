<template>
  <div>
    <b-carousel id="carousel1"
                style="text-shadow: 1px 1px 2px #333;"
                controls
                indicators
                background="#ababab"
                :interval="4000"
                img-width="1024"
                img-height="480"
                v-model="slide"
                @sliding-start="onSlideStart"
                @sliding-end="onSlideEnd"
    >

      <b-carousel-slide v-for="(url, index) in imageUrls" :img-src="url" :key="index"/>

    </b-carousel>

    <p class="mt-4">
      Slide #: {{ slide }}<br>
      Sliding: {{ sliding }}
    </p>

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
      images.getImages(this.topic_).then(rawImages => {
        const urls = rawImages.body.items.map(item => item.media.m);
        this.imageUrls = urls;
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

<style>
</style>
