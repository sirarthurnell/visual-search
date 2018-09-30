<template>
    <b-card :title="topic"
          img-src="https://picsum.photos/600/300/?image=25"
          img-alt="Image"
          img-top
          tag="article"
          style="max-width: 20rem;"
          class="mb-2">
    <p class="card-text">
      Some quick example text to build on the card title and make up the bulk of the card's content.
    </p>
    <b-button href="#" variant="primary">Go somewhere</b-button>
  </b-card>
</template>

<script>
import { WikipediaService } from "../services/wikipedia.service.js";

export default {
  props: {
    topic: String
  },
  data: function() {
    return {};
  },
  mounted() {
    const wikipedia = new WikipediaService();
    wikipedia.getInfo();
  }
};
</script>

<style scoped> 
</style>
