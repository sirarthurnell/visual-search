<template>

<b-input-group size="lg" append="[enter]" class="search-bar" @keyup.enter="searchRequested($event)">
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
</style>
