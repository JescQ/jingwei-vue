<template>
  <a-row type="flex">
    <a-col :span="12">
      <p class="chartTitle chartTitleCenter">用电量</p>
      <div id="TotalElecCurrentMonth" style="height:280px"></div>
    </a-col>
    <a-col :span="12">
      <p class="chartTitle chartTitleCenter">用电费</p>
      <div id="ElecBillsCurrentMonth" style="height:280px"></div>
    </a-col>
  </a-row>
</template>
<script>
import G2 from "@antv/g2";
export default {
  data() {
    return {
      charts: {
        TotalElecCurrentMonth: {
          chart: null,
          data: [
            { item: "事例一", count: 40, percent: 0.4 },
            { item: "事例二", count: 21, percent: 0.21 },
            { item: "事例三", count: 17, percent: 0.17 },
            { item: "事例四", count: 13, percent: 0.13 },
            { item: "事例五", count: 9, percent: 0.09 }
          ]
        },
        ElecBillsCurrentMonth: {
          chart: null,
          data: [
            { item: "事例一", count: 40, percent: 0.4 },
            { item: "事例二", count: 21, percent: 0.21 },
            { item: "事例三", count: 17, percent: 0.17 },
            { item: "事例四", count: 13, percent: 0.13 },
            { item: "事例五", count: 9, percent: 0.09 }
          ]
        }
      }
    };
  },
  methods: {
    initChart(config) {
      return new G2.Chart(config);
    },
    renderChart({ chart, data }) {
      chart.source(data, {
        percent: {
          formatter: val => {
            val = val * 100 + "%";
            return val;
          }
        }
      });
      chart.coord("theta", {
        radius: 0.75,
        innerRadius: 0.6
      });
      chart.tooltip({
        showTitle: false
      });
      chart
        .intervalStack()
        .position("percent")
        .color("item")
        .label("percent", {
          formatter: (val, item) => {
            return item.point.item + ": " + val;
          }
        })
        .tooltip("item*percent", (item, percent) => {
          percent = percent * 100 + "%";
          return {
            name: item,
            value: percent
          };
        })
        .style({
          lineWidth: 1,
          stroke: "#fff"
        });
      chart.render();
    }
  },
  created() {
    this.$nextTick(() => {
      this.charts.TotalElecCurrentMonth.chart = this.initChart({
        container: "TotalElecCurrentMonth",
        forceFit: true,
        height: 280,
        padding: "auto"
      });
      this.charts.ElecBillsCurrentMonth.chart = this.initChart({
        container: "ElecBillsCurrentMonth",
        forceFit: true,
        height: 280,
        padding: "auto"
      });
      this.renderChart(this.charts.TotalElecCurrentMonth);
      this.renderChart(this.charts.ElecBillsCurrentMonth);
    });
    this.$forceFit();
  },
  mounted() {},
  destroyed() {
    this.charts.TotalElecCurrentMonth.chart.destroy();
    this.charts.ElecBillsCurrentMonth.chart.destroy();
  }
};
</script>