<template>

<b-input-group size="lg" append="search" class="search-bar" @keyup.enter="searchRequested($event)">
  <b-form-input></b-form-input>
</b-input-group>

</template>

<script>

export default {
  name: "SearchBar",
  methods: {
    searchRequested(event) {
      const topic = event.target.value;
      this.$emit('searchRequested', topic);
    }
  }
};

</script>

<style scoped>
.search-bar {
  position: absolute;
  left: 50%;
  top: 5em;
  transform: translateX(-50%);
  width: 25%;
}
</style>
