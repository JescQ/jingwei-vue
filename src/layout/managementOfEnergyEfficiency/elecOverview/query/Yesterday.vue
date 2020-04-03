<template>
  <a-row type="flex">
    <a-col :span="12">
      <p class="chartTitle chartTitleCenter">用电量</p>
      <div id="TotalElecYesterday" style="height:280px"></div>
    </a-col>
    <a-col :span="12">
      <p class="chartTitle chartTitleCenter">用电费</p>
      <div id="ElecBillsYesterday" style="height:280px"></div>
    </a-col>
  </a-row>
</template>
<script>
import G2 from "@antv/g2";
export default {
  data() {
    return {
      charts: {
        TotalElecYesterday: {
          chart: null,
          data: [
            { item: "事例一", count: 40, percent: 0.4 },
            { item: "事例二", count: 21, percent: 0.21 },
            { item: "事例三", count: 17, percent: 0.17 },
            { item: "事例四", count: 13, percent: 0.13 },
            { item: "事例五", count: 9, percent: 0.09 }
          ]
        },
        ElecBillsYesterday: {
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
      //   interval.setSelected(data[0]);
    }
  },
  created() {
    this.$nextTick(() => {
      this.charts.TotalElecYesterday.chart = this.initChart({
        container: "TotalElecYesterday",
        forceFit: true,
        height: 280,
        padding: "auto"
      });
      this.charts.ElecBillsYesterday.chart = this.initChart({
        container: "ElecBillsYesterday",
        forceFit: true,
        height: 280,
        padding: "auto"
      });
      this.renderChart(this.charts.TotalElecYesterday);
      this.renderChart(this.charts.ElecBillsYesterday);
    });
    this.$forceFit();
  },
  mounted() {},
  destroyed() {
    this.charts.TotalElecYesterday.chart.destroy();
    this.charts.ElecBillsYesterday.chart.destroy();
  }
};
</script>