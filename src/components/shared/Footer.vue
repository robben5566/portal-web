<template>
  <footer>
    <ArticleList></ArticleList>
    <p class="copy-right">Copyright © Portal-Web Reserved</p>
  </footer>
</template>

<script>
import ArticleList from '@/components/shared/ArticleList.vue';
export default {
  name: 'Footer',
  props: {},
  components: {
    ArticleList
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
footer {
  position: fixed;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 93px;
  background-color: #333;
}
.copy-right {
  color: #fff;
  font-size: 12px;
  text-align: center;
}
</style>
