<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: "App",
  components: {}
};
</script>

<style>
#app {
  /* font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px; */
  height: 100%;
}
selector::-webkit-scrollbar {
  width: 0;
}
.chart-box {
  width: 100%;
  height: 100%;
}
.interval {
  margin-bottom:16px !important;
}
/* .info {
  box-sizing: border-box;
  padding: 15px;
  font-size: 14px;
  text-align: center;
  color: #efefef;
  background: #00c0ef;
} */
.infoCard {
  box-sizing: border-box;
  padding: 15px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.12), 0 0 6px rgba(0, 0, 0, 0.04);
  border-left: 5px solid #cdcdcd;
  font-size: 14px;
  background: #fff;
}
.card {
  border: 1px solid #dcdfe6;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.12), 0 0 6px rgba(0, 0, 0, 0.04);
  background: #fff;
}
.chartTitle {
  font-size: 18px;
  line-height: 20px;
  font-weight: bolder;
}
.chartTitleCenter{
  text-align: center;
}
</style>
