<template>
  <tab-menu :tabMenuConfig="ElecInfo" v-model="curTabName">
    <template v-slot:ActiveElec>
      <active-elec />
    </template>
    <template v-slot:ElecCharge>
      <elec-charge />
    </template>
    <template v-slot:CumulativeActiveElec>
      <cumulative-active-elec />
    </template>
    <template v-slot:CumulativeElecCharge>
      <cumulative-elec-charge />
    </template>
    <template v-slot:ActivePower>
      <active-power />
    </template>
    <template v-slot:PowerFactor>
      <power-factor />
    </template>
  </tab-menu>
</template>
<script>
import tabMenuConfig from "@/config/tabMenu.js";
import TabMenu from "@/components/TabMenu";
import ActiveElec from "./ActiveElec";
import ElecCharge from "./ElecCharge";
import CumulativeActiveElec from "./CumulativeActiveElec";
import CumulativeElecCharge from "./CumulativeElecCharge";
import ActivePower from "./ActivePower";
import PowerFactor from "./PowerFactor";

export default {
  components: {
    TabMenu,
    ActiveElec,
    ElecCharge,
    CumulativeActiveElec,
    CumulativeElecCharge,
    ActivePower,
    PowerFactor
  },
  data() {
    return {
      ElecInfo: tabMenuConfig.ManagementOfEnergyEfficiency.ElecSituation.ElecInfo,
      curTabName: ''
    };
  },
  mounted() {}
};
</script>
<style scoped>
</style>