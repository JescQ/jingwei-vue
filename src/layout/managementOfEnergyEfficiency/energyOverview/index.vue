<template>
  <div>
    <a-row style="margin-bottom:16px;">
      <information :data="informationData" />
    </a-row>
    <a-row style="margin-bottom:16px;">
      <title-bar class="title-card card" :title="realtimeEnergyConsumptionTrend.title">
        <a-row type="flex" style="padding:16px;">
          <a-col style="height:300px;width:100px">
            <tab-btn-group
              style="justify-content:center;"
              :option="realtimeEnergyConsumptionTrend.tabBtn.type"
              v-model="realtimeEnergyConsumptionTrend.curTabBtn.type"
              label="name"
              name="value"
              vertical
            />
          </a-col>
          <a-col style="width:calc(100% - 100px);">
            <a-col style="text-align:center;height:24px">
              <tab-btn-group
                :option="realtimeEnergyConsumptionTrend.tabBtn.cycle"
                v-model="realtimeEnergyConsumptionTrend.curTabBtn.cycle"
                label="name"
                name="value"
                size="small"
                justify="center"
              />
            </a-col>
            <a-col :span="24">
              <realtime-energy-consumption-trend-chart
                :curTabBtn="JSON.stringify(realtimeEnergyConsumptionTrend.curTabBtn)"
              />
            </a-col>
          </a-col>
        </a-row>
      </title-bar>
    </a-row>
    <a-row :gutter="16">
      <a-col :span="8">
        <title-bar class="title-card card" :title="areasRankedByEnergy.title">
          <a-row type="flex" style="padding:16px;">
            <a-col :span="24">
              <tab-btn-group
                :option="areasRankedByEnergy.tabBtn.type"
                v-model="areasRankedByEnergy.curTabBtn.type"
                label="name"
                name="value"
                size="small"
                justify="center"
              />
            </a-col>
            <a-col :span="24">
              <areas-ranked-by-energy-chart :curTabBtn="areasRankedByEnergy.curTabBtn.type" />
            </a-col>
          </a-row>
        </title-bar>
      </a-col>
      <a-col :span="8">
        <title-bar class="title-card card" :title="itemizedOfElec.title">
          <a-row type="flex" style="padding:16px;">
            <a-col :span="24" style="height:24px;"></a-col>
            <a-col :span="24">
              <itemized-of-elec-chart />
            </a-col>
          </a-row>
        </title-bar>
      </a-col>
      <a-col :span="8">
        <title-bar class="title-card card" :title="timeOfElec.title">
          <a-row type="flex" style="padding:16px;">
            <a-col :span="24">
              <!-- style="position: relative;left: 50%;transform: translateX(-50%);z-index: 9;text-align:center;height:24px;" -->
              <tab-btn-group
                :option="timeOfElec.tabBtn.type"
                v-model="timeOfElec.curTabBtn.type"
                label="name"
                name="value"
                size="small"
                justify="center"
              />
            </a-col>
            <a-col :span="24">
              <time-of-elec-chart :curTabBtn="timeOfElec.curTabBtn.type" />
            </a-col>
          </a-row>
        </title-bar>
      </a-col>
    </a-row>
  </div>
</template>
<script>
import { getInformation } from "@/api/managementOfEnergyEfficiency/elecOview";
import information from "./information";
import TitleBar from "@/components/TitleBar";
import TabBtnGroup from "@/components/TabBtnGroup";
import realtimeEnergyConsumptionTrendChart from "./realtimeEnergyConsumptionTrend";
import areasRankedByEnergyChart from "./areasRankedByEnergy";
import itemizedOfElecChart from "./itemizedOfElec";
import timeOfElecChart from "./timeOfElec";
export default {
  components: {
    information,
    TitleBar,
    TabBtnGroup,
    realtimeEnergyConsumptionTrendChart,
    areasRankedByEnergyChart,
    timeOfElecChart,
    itemizedOfElecChart
  },
  data() {
    return {
      informationData: [],
      realtimeEnergyConsumptionTrend: {
        title: "实时能耗趋势",
        tabBtn: {
          type: [],
          cycle: [
            {
              name: "今日",
              value: "today"
            },
            {
              name: "本月",
              value: "month"
            }
          ]
        },
        curTabBtn: {
          type: "1",
          cycle: "today"
        }
      },
      areasRankedByEnergy: {
        title: "区域用能排行",
        tabBtn: {
          type: []
        },
        curTabBtn: {
          type: "1"
        }
      },
      itemizedOfElec: {
        title: "分项用电"
      },
      timeOfElec: {
        title: "时段用电",
        tabBtn: {
          type: [
            {
              name: "电量",
              value: "elec"
            },
            {
              name: "电费",
              value: "charge"
            }
          ]
        },
        curTabBtn: {
          type: "elec"
        }
      }
    };
  },
  computed: {
    energyTypes() {
      const types = this.informationData.map(({ name, value }) => {
        return {
          name,
          value
        };
      });
      return types;

      // set: function(types) {
      //   console.log(types)
      //   this.realtimeEnergyConsumptionTrend.tabBtn.type = types;
      // }
    }
  },
  watch: {
    // energyTypes:function(cur){
    //   console.log(cur)
    // }
    // "realtimeEnergyConsumptionTrend.curTabBtn.type": function(cur) {
    //   console.log(cur);
    // },
    // "realtimeEnergyConsumptionTrend.curTabBtn.cycle": function(cur) {
    //   console.log(cur);
    // }
  },
  methods: {
    setTabBtnType(types) {
      this.realtimeEnergyConsumptionTrend.tabBtn.type = types;
      this.areasRankedByEnergy.tabBtn.type = types;
    }
  },
  created() {
    getInformation({ userId: 1 })
      .then(res => {
        this.informationData = res.data.data.map(item => {
          return {
            name: item.energyName,
            value: item.type,
            unit: item.energyUnit === "M^3" ? `M<sup>3</sup>` : item.energyUnit,
            today: {
              cur: item.dayConsume || 0,
              percent: item.percent || 0
            },
            month: {
              cur: item.monthConsume || 0,
              percent: item.chainRatio || 0
            }
          };
        });
        this.setTabBtnType(this.energyTypes);
        // console.log(this.data);
      })
      .catch(err => {
        console.log(err);
      });
  },
  mounted() {
    // console.log(this.energyTypes);
  }
};
</script>
<style scoped>
.title-card {
  background: #fff;
}
</style>

