<style scoped>
.clearAllContainer {
  width: 8.5rem;
  height: 50px;
  line-height: 50px;
  background-color: white;
  border-radius: 5px;
  margin: 0 auto;
}

.clearAllBtn {
  color: #e20303;
  display: block;
}
</style>

<template>
  <div class="clearAllContainer">
    <span class="clearAllBtn" v-on:click="clearAll">Clear All</span>
  </div>
</template>

<script>
export default {
  /* pdtmc^2w */

  //template: ``,
  methods: {
    clearAll(e) {
      console.log(e.target);
      debugger;
      this.$emit('clearAll', e);
    },
  },
};
</script>
