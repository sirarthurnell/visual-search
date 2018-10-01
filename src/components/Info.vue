<template>
  <div class="info">
    <h1 class="info__title" v-html="title"></h1>
    <p class="info__text" v-html="info"></p>
  </div>
</template>

<script>
import { WikipediaService } from "../services/wikipedia.service.js";

export default {
  props: {
    topic: String
  },
  data: function() {
    return {
      info: 'Write something on the search box and press enter.',
      title: 'Search'
    };
  },
  mounted() {
    const wikipedia = new WikipediaService();
    wikipedia.getInfo();
  },
  methods: {
    updateInfo() {
      const info = new WikipediaService();
      info.getInfo(this.topic).then(rawInfo => {
        this.extractText(rawInfo.bodyText);
      });
    },
    extractText(rawInfo) {
      const infoObject = JSON.parse(rawInfo);
      const pagesObject = infoObject['query']['pages'];
      const pagesKeys = Object.keys(pagesObject);
      const firstPage = pagesObject[pagesKeys.shift()];
      this.title = firstPage['title'];
      this.info = firstPage['extract'];
    }
  },
  watch: {
    topic: function(newTopic, oldTopic) {
      this.updateInfo();
    }
  }
};
</script>

<style scoped>
  .info {
    border-radius: 2rem;
    box-shadow: 0.3rem 0.3rem 0.5rem 0rem rgba(40, 40, 40, 0.75);
    padding: 3rem;
    color: rgb(40, 40, 40);
    border: 1px solid rgb(224, 224, 224);
    background-color: white;
    opacity: 0.85;
  }

  .info > * {
    opacity: 1;
  }

  .info__title {
    font-size: 3rem;
    font-weight: bold;
    margin-bottom: 3rem;
  }

  .info__text {
    font-size: 1.6rem;
    font-family: Verdana, Geneva, Tahoma, sans-serif;
  }
</style>
