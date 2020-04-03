<template>
  <div class="chart-box" id="areasRankedByEnergyChart"></div>
</template>
<script>
import G2 from "@antv/g2";
export default {
  props:{
    curTabBtn: String
  },
  data() {
    return {
      data: [
        { type: "汽车", value: 34 },
        { type: "建材家居", value: 85 },
        { type: "住宿旅游", value: 103 },
        { type: "建筑房地产", value: 251 },
        { type: "金融保险", value: 1300 },
        { type: "教育", value: 367 },
        { type: "IT 通讯电子", value: 491 },
        { type: "社会公共管理", value: 672 },
        { type: "社会公共管理1", value: 672 },
        { type: "社会公共管理2", value: 672 },
        { type: "医疗卫生", value: 868 },
        { type: "金融保险1", value: 1300 }
      ],
      chart: null
    };
  },
  computed:{
    dataTop_10(){
      const top_10 = [...this.data].sort((a,b)=>a.value-b.value).slice(-10)
      return top_10
    }
  },
  watch: {
    curTabBtn: function(cur) {
      console.log(cur)
      this.chart.clear();
      this.renderChart({
        chart: this.chart,
        data: this.dataTop_10
      });
    }
  },
  methods: {
    initChart() {
      return new G2.Chart({
        container: "areasRankedByEnergyChart",
        forceFit: true,
        height: 226,
        padding: ['auto',50,'auto','auto']
      });
    },
    renderChart({chart,data}) {
      chart.source(data);
      chart.axis("type", {
        title: null,
        tickLine: null,
        line: null
      });

      chart.axis("value", {
        label: null
      });
      chart.legend(false);
      chart.coord().transpose()
      chart
        .interval()
        .position("type*value")
        .size(15)
        .label("value", {
          style: {
            fill: "#8d8d8d"
          },
          offset: 10
        });
      chart.render();
    }
  },
  created() {
    this.$nextTick(() => {
      this.chart = this.initChart();
      this.renderChart({
        chart: this.chart,
        data: this.dataTop_10
      });
      this.$forceFit();
    });
  },
  mounted() {
    // console.log(this.curTabBtn)
    // console.log(this.dataTop_10)
  },
  destroyed() {
    this.chart.destroy();
  }
};
</script>
<style scoped>
</style>

