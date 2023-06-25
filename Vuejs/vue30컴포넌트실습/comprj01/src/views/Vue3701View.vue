<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>

<template>
  <div id="app">
    <h2>{{ msg }}</h2>
    <child1 />
    <child2 />
  </div>
</template>

<script>
// vuex 라이브러리에서 mapActions, mapMutations, mapState, mapGetters 함를 가져옵니다.
// import { mapActions, mapMutations, mapState, mapGetters } from 'vuex';
import Compchild1 from '../components/vue3701/CompChild1.vue';
import Compchild2 from '../components/vue3701/CompChild2.vue';
export default {
  /* pdtmc^2w */
  props: [],
  data() {
    /* 컴포넌트 안에서 사용되는 변수 등록. 개별 변수 */
    return {
      msg: 'Welcome Vue.js Aoo',
    };
  },
  //template: ``,
  methods: {},
  components: {
    child1: Compchild1,
    child2: Compchild2,
  },
};
</script>
