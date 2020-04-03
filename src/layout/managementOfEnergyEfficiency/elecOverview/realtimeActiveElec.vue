<template>
  <div id="RealtimeActiveElec">
    <p class="chartTitle" style="padding:16px 16px 0;">实时有功电量</p>
  </div>
</template>
<script>
import G2 from "@antv/g2";
export default {
  data() {
    return {
      charts: {
        RealtimeActiveElec: {
          chart: null,
          data: [
            { time: "00:00", value: 300, price: 0.8, type: "line" },
            { time: "01:15", value: 280, price: 0.6, type: "line" },
            { time: "02:30", value: 250, price: 0.8, type: "line" },
            { time: "03:45", value: 260, price: 0.9, type: "line" },
            { time: "05:00", value: 270, price: 1.2, type: "line" },
            { time: "06:15", value: 300, price: 1.6, type: "line" },
            { time: "07:30", value: 550, price: 0.8, type: "line" },
            { time: "08:45", value: 500, price: 0.8, type: "line" },
            { time: "10:00", value: 400, price: 0.8, type: "line" }
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
      //   const view = chart.view({
      //     forceFit: true,
      //     height: 280,
      //     // padding: [30, 70, 50]
      //   });
      //   view.source(data);
      //   view.line().position("time*value");
      chart.source(data);
      chart.scale("value", {
        min: 0
      });
      chart.axis("time", {
        tickLine: {
          alignWithLabel: false,
          length: 0
        }
      });
      chart.scale("time", {
        range: [0, 1]
      });
      chart.tooltip({
        crosshairs: {
          type: "line"
        }
      });
      chart.legend("price", false);
      chart
        .line()
        .position("time*value")
        .color("red")
        .tooltip("time*value*price");
      chart
        .interval()
        .position("time*price")
        .shape("hv")
        .color("blue")
        .opacity(0.3)
        .tooltip(false);
      //   chart
      //     .point()
      //     .position("time*value")
      //     .size(4)
      //     .shape("circle")
      //     .style({
      //       stroke: "#fff",
      //       lineWidth: 1
      //     });
      chart.render();
    }
  },
  created() {
    this.$nextTick(() => {
      this.charts.RealtimeActiveElec.chart = this.initChart({
        container: "RealtimeActiveElec",
        forceFit: true,
        height: 280,
        padding: [30, 70, 70]
      });
      this.renderChart(this.charts.RealtimeActiveElec);
      this.$forceFit();
    });
  },
  mounted() {},
  destroyed() {
    this.charts.RealtimeActiveElec.chart.destroy();
  }
};
</script>