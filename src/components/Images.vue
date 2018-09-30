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

      <b-carousel-slide img-src="https://picsum.photos/1024/480/?image=58">
      </b-carousel-slide>

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
  data() {
    return {
      slide: 0,
      sliding: null,
      topic_: '',
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
      images.getImages(this.topic_).then(rawImages => console.log(rawImages));
    }
  },
  computed: {
    topic: {
      get: function() {
        return this.topic_;
      },
      set: function(topic) {
        console.log(topic);
        this.topic_ = topic;
        this.updateImages();
      }
    }
  }
};
</script>

<style>
</style>
