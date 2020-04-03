<template>
  <div class="chart-box" id="realtimeEnergyConsumptionTrendChart"></div>
</template>
<script>
import G2 from "@antv/g2";
import { getRealtimeQctiveElec } from "@/api/managementOfEnergyEfficiency/elecOview";
export default {
  props: {
    curTabBtn: String
  },
  data() {
    return {
      data: [],
      chart: null,
      chartOption: {
        1: {
          name: "电",
          value: "1",
          fill: "#5090cd"
        },
        2: {
          name: "水",
          value: "2",
          fill: "#eea32e"
        },
        5: {
          name: "气",
          value: "5",
          fill: "#d7e039"
        },
        3: {
          name: "光",
          value: "3",
          fill: "#ef5958"
        }
      },
      cycleOption: {
        today: {
          name: "昨日同期",
          x: []
        },
        month: {
          name: "上月同期",
          x: [
            "1",
            "2",
            "3",
            "4",
            "5",
            "6",
            "7",
            "8",
            "9",
            "10",
            "11",
            "12",
            "13",
            "14",
            "15",
            "16",
            "17",
            "18",
            "19",
            "20",
            "21",
            "22",
            "23",
            "24",
            "25",
            "26",
            "27",
            "28",
            "29",
            "30",
            "31"
          ]
        }
      }
    };
  },
  computed: {
    curConfig: function() {
      return {
        barFill: this.chartOption[JSON.parse(this.curTabBtn).type].fill,
        barName: this.chartOption[JSON.parse(this.curTabBtn).type].name,
        barValue: this.chartOption[JSON.parse(this.curTabBtn).type].value,
        cycle: {
          type: JSON.parse(this.curTabBtn).cycle,
          value: JSON.parse(this.curTabBtn).cycle,
          name: this.cycleOption[JSON.parse(this.curTabBtn).cycle].name
        }
      };
    }
  },
  watch: {
    curTabBtn: function() {
      this.chart.clear();
      this.getData();
    }
  },
  methods: {
    getData() {
      let params = {
        energyType: this.curConfig.barValue,
        timeType: this.curConfig.cycle.value
      };
      getRealtimeQctiveElec(params)
        .then(res => {
          let data = [];
          let response = res.data;
          let cycleValue = this.curConfig.cycle.value;
          if (cycleValue == "today") {
            this.cycleOption["today"].x = response.todayCurveTime;
          }
          this.cycleOption[cycleValue].x.forEach((time, index) => {
            data.push({
              time,
              value:
                cycleValue == "month"
                  ? response.thisMonthDaysList[index]
                  : response.todayCurveNumList[index],
              cycle: `${this.curConfig.barName}`
            });
            data.push({
              time,
              value:
                cycleValue == "month"
                  ? response.lastMonthDaysList[index]
                  : response.yestdayCurveNumList[index],
              cycle: `${this.curConfig.cycle.name}`
            });
          });
          if (cycleValue == "today") {
            data.push({
              time: "23:59:59",
              value: null,
              cycle: `${this.curConfig.barName}`
            });
            data.push({
              time: "23:59:59",
              value: null,
              cycle: `${this.curConfig.cycle.name}`
            });
          }
          this.renderChart({
            chart: this.chart,
            data
          });
          this.$forceFit();
        })
        .catch(err => {
          console.log(err);
        });
    },
    initChart() {
      return new G2.Chart({
        container: "realtimeEnergyConsumptionTrendChart",
        forceFit: true,
        height: 300,
        padding: [20, 50, "auto", "auto"]
      });
    },
    renderChart({ chart, data }) {
      chart.source(data);
      chart.scale({
        time:{
          tickCount: 13
        },
        value:{
          min: 0
        }
      });
      chart.axis({
        sync: true,
        range: [0, 1]
      });
      chart.tooltip({
        shared: true
      });
      let lineOrBar =
        this.curConfig.cycle.value == "today" ? chart.line() : chart.interval();
      lineOrBar
        .position(`time*value`)
        .color("cycle", [this.curConfig.barFill, "#2fc25b"])
        .adjust([
          {
            type: "dodge",
            marginRatio: 1 / 32
          }
        ]);
      chart.render();
    }
  },
  created() {
    this.$nextTick(() => {
      this.chart = this.initChart();
      this.getData();
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

