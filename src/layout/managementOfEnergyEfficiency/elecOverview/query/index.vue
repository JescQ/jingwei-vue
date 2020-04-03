<template>
  <!-- <a-col style="height:370px"> -->
  <tab-menu :tabMenuConfig="ElecQuery" v-model="curTabName">
    <template v-slot:Today>
      <today />
    </template>
    <template v-slot:Yesterday>
      <yesterday />
    </template>
    <template v-slot:CurrentMonth>
      <current-month />
    </template>
    <template v-slot:LastMonth>
      <last-month />
    </template>
  </tab-menu>
  <!-- </a-col> -->
</template>
<script>
import tabMenuConfig from "@/config/tabMenu.js";
import TabMenu from "@/components/TabMenu";
import Today from "./Today";
import Yesterday from "./Yesterday";
import CurrentMonth from "./CurrentMonth";
import LastMonth from "./LastMonth";
export default {
  components: {
    TabMenu,
    Today,
    Yesterday,
    CurrentMonth,
    LastMonth
  },
  data() {
    return {
      ElecQuery:
        tabMenuConfig.ManagementOfEnergyEfficiency.ElecSituation.ElecQuery,
      curTabName: ""
    };
  },
  watch: {
    // curTabName: function() {
    //   this.$forceFit();
    // }
  }
};
</script>