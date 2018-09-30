<template>

<b-input-group size="lg" append="search" class="search-bar">
  <b-form-input></b-form-input>
</b-input-group>

</template>

<script>

export default {
  name: "SearchBar",
  props: {
    msg: String
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
