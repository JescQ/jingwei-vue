<template>
  <a-tabs
    type="card"
    style="height:100%"
    @tabClick="returnCurTabName"
    v-model="currentTabName"
  >
    <a-tab-pane
      v-for="(tab) in tabMenuConfig"
      :tab="tab.name"
      :key="tab.pageName"
      style="padding:0 0px 15px;"
    >
      <!-- 动态加载slot -->
      <!-- 解决图表放在tab里width=100px的情况 -->
      <slot v-if="changeReload&&curTabName == tab.pageName" :name="tab.pageName"></slot>
      <slot v-if="!changeReload" :name="tab.pageName"></slot>
    </a-tab-pane>
  </a-tabs>
</template>
<script>
export default {
  name: "TabMenu",
  components: {},
  props: {
    curTabName: {
      // 当前显示的pageNage
      type: String,
      required: true
    },
    tabMenuConfig: {
      type: Array,
      required: true
    },
    changeReload: {
      // 切换页面是否重新加载
      type: Boolean
    }
  },
  model: {
    prop: "curTabName",
    event: "returnBack"
  },
  data() {
    return {
      currentTabName: null
    };
  },
  methods: {
    returnCurTabName(data) {
      this.$emit("returnBack", data);
    }
  },
  computed: {},
  watch: {},
  created() {},
  mounted() {
    // 动态赋值,激活watch事件
    if (!this.curTabName) {
      this.currentTabName = this.tabMenuConfig[0].pageName;
      // 传入的curTabName为null时，手动传参
      this.$emit("returnBack", this.currentTabName);
    } else {
      this.currentTabName = this.curTabName;
    }
  },
  destroyed() {}
};
</script>
