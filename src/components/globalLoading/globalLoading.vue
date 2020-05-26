<template>
  <div class="loading">
    <img src="../../assets/img/loading.gif" alt="">
  </div>
</template>
 
<script>
export default {
  name: "LOADING",
  data() {
    return {};
  }
};
</script>
<style scoped>
.loading {
  position: fixed;
  top: 0;
  left: 0;
  z-index: 9999;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.3);
  display: table-cell;
  vertical-align: middle;
  text-align: center;
}
.loading img {
  width: 3rem;
  height: 3rem;
  margin: 45vh auto 0;
}
</style>