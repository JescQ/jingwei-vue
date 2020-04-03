<template>
  <a-row>
    <header-bar class="interval" />
    <query class="interval card" />
    <realtime-active-elec class="interval card" />
    <info class="interval card" />
  </a-row>
</template>
<script>
import HeaderBar from "./header";
import Query from "./query/index";
import RealtimeActiveElec from "./realtimeActiveElec";
import Info from "./info/index";

export default {
  components: {
    HeaderBar,
    Query,
    RealtimeActiveElec,
    Info
  },
  data() {
    return {
      form: {
        point: ""
      }
    };
  }
};
</script>
<style lang="less" scoped>
</style>