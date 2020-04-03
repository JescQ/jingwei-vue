<template>
  <a-row type="flex" style="width:100%;">
    <a-col style="padding:16px;" :span="24">
      <div id="chart" style="margin-bottom:16px;height:300px;"></div>
      <a-table :columns="columns" :dataSource="tableData"></a-table>
    </a-col>
  </a-row>
</template>
<script>
// import DataSet from "@antv/data-set";
import G2 from "@antv/g2";
import data from "./data";
// console.log(DataSet)
const columns = [
  {
    title: "监测因子",
    dataIndex: "jcyz",
    key: "jcyz"
  },
  {
    title: "最新值",
    dataIndex: "new",
    key: "new",
    width: 80
  },
  {
    title: "最大值",
    dataIndex: "max",
    key: "max",
    ellipsis: true
  },
  {
    title: "最大值时间",
    dataIndex: "maxTime",
    key: "maxTime",
    ellipsis: true
  },
  {
    title: "最小值",
    dataIndex: "min",
    key: "min",
    ellipsis: true
  },
  {
    title: "最小值时间",
    dataIndex: "minTime",
    key: "minTime",
    ellipsis: true
  },
  {
    title: "平均值",
    dataIndex: "mean",
    key: "mean",
    ellipsis: true
  }
];
const tableData = [
  {
    key: "1",
    jcyz: "一期-设备1",
    new: 100,
    max: 150,
    maxTime: "2020-03-26 08:50:55",
    min: 55,
    minTime: "2020-03-26 08:50:55",
    mean: 140
  },
  {
    key: "2",
    jcyz: "一期-设备2",
    new: 110,
    max: 110,
    maxTime: "2020-03-26 08:50:55",
    min: 80,
    minTime: "2020-03-26 08:50:55",
    mean: 140
  },
  {
    key: "3",
    jcyz: "二期-设备1",
    new: 120,
    max: 180,
    maxTime: "2020-03-26 08:50:55",
    min: 100,
    minTime: "2020-03-26 08:50:55",
    mean: 140
  }
];
export default {
  data() {
    return {
      columns,
      tableData,
      chart: null,
      data
    };
  },
  methods: {
    initChart(config) {
      return new G2.Chart(config);
    },
    renderChart({ chart, data }) {
      chart.source(data);
      // chart.option("slider", {
      //   end: 0.8
      // });
      chart.scale({
        time: {
          type: "time",
          tickCount: 8,
          mask: "m/dd hh:MM"
        },
        flow: {
          alias: "流量(m^3/s)",
          tickInterval: 50,
          max: 300,
          min: 0
        },
        rain: {
          alias: "降雨量(mm)",
          min: 0,
          max: 12,
          tickInterval: 2
        }
      });

      chart.axis("rain", {
        grid: null,
        title: {}
      });
      chart.axis("flow", {
        title: {}
      });

      chart.legend({
        position: "top",
        custom: true, // 自定义图例
        // offsetY: 4,
        items: [
          {
            name: "flow",
            value: "flow",
            marker: {
              symbol: "circle",
              fill: "l(100) 0:#a50f15 1:#fee5d9",
              radius: 5
            }
          },
          {
            name: "rain",
            value: "rain",
            marker: {
              symbol: "circle",
              fill: "l(100) 0:#293c55 1:#f7f7f7",
              radius: 5
            }
          }
        ],
        onClick: ev => {
          const item = ev.item;
          const value = item.value;
          const checked = ev.checked;
          const geoms = chart.getAllGeoms();
          for (let i = 0; i < geoms.length; i++) {
            const geom = geoms[i];
            if (geom.getYScale().field === value) {
              if (checked) {
                geom.show();
              } else {
                geom.hide();
              }
            }
          }
        }
      });

      chart.tooltip({
        showCrosshairs: true,
        shared: true
      });

      // chart.option("slider", {
      //   start: 0.1,
      //   end: 0.8,
      //   trendCfg: {
      //     isArea: false
      //   }
      // });

      chart
        .area()
        .position("time*flow")
        .color("l(100) 0:#a50f15 1:#fee5d9");
      chart
        .area()
        .position("time*rain")
        .color("l(100) 0:#293c55 1:#f7f7f7");

      // chart.interaction("element-visible-filter");

      chart.render();
    }
  },
  created() {
    this.$nextTick(() => {
      this.chart = this.initChart({
        container: "chart",
        forceFit: true,
        height: 300,
        padding: "auto"
      });
      this.renderChart({
        chart: this.chart,
        data: this.data
      });
      this.$forceFit();
    });
  },
  mounted() {
    // chart.interact('slider',{
    //   container:'slider',
    //   onChange(ev){
    //     const {startValue,endValue} = ev;
    //     ds.setState('start',startValue)
    //     ds.setState('end',endValue)
    //   }
    // })
  },
  destroyed() {
    this.chart.destroy();
  }
};
</script>
<style lang="less" scoped>
/deep/ .ant-table-thead > tr > th {
  background: #001529;
  color: #fff;
}
</style>