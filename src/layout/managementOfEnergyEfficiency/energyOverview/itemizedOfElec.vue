<template>
  <div class="chart-box" id="itemizedOfElecChart"></div>
</template>
<script>
import G2 from "@antv/g2";
export default {
  data() {
    return {
      data: [
        { item: "空调用电", count: 40, percent: 0.4 },
        { item: "照明用电", count: 21, percent: 0.21 },
        { item: "动力用电", count: 17, percent: 0.17 },
        { item: "特殊用电", count: 53, percent: 0.03 }
      ],
      chart: null
    };
  },
  methods: {
    initChart() {
      return new G2.Chart({
        container: "itemizedOfElecChart",
        forceFit: true,
        height: 226,
        padding: [20, "auto", "auto"]
      });
    },
    renderChart({ chart, data }) {
      chart.coord("theta", {
        radius: 0.7,
        innerRadius: 0.6
      });

      chart.source(data, {
        formatter: val => {
          val = val * 100 + "%";
          return val;
        }
      });
      chart.tooltip({
        showTitle: false
      });
      // 声明需要进行自定义图例字段： 'item'
      chart.legend("item", {
        position: "bottom"
      });
      chart
        .interval()
        .adjust("stack")
        .position("percent")
        .color("item")
        .label("percent", {
          formatter: (val, item) => {
            return `${item.point.count}KWh\n${item.point.item}：${val * 100}%`;
          }
        })
        .tooltip("item*percent", (item, percent) => {
          return {
            name: item,
            value: `${percent * 100}%`
          };
        })
        .style({
          fillOpacity: 1
        });

      chart.render();
    }
  },
  created() {
    this.$nextTick(() => {
      this.chart = this.initChart();
      this.renderChart({
        chart: this.chart,
        data: this.data
      });
      this.$forceFit();
    });
  },
  mounted() {},
  destroyed() {
    this.chart.destroy();
  }
};
</script>
<style scoped>
</style>

