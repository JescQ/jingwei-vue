<template>
  <a-row type="flex" justify="space-between" :gutter="16">
    <a-col :span="spanNumber" v-for="(item,index) in data" :key="index">
      <a-row type="flex" class="card">
        <a-col class="text">
          <p class="name">{{item.name}}</p>
          <p class="unit" v-html="item.unit"></p>
        </a-col>
        <a-col class="data">
          <a-row type="flex">
            <a-col class="info" :span="24">
              <a-row>
                <a-col :span="14">{{`当日能耗：${item.today.cur}`}}</a-col>
                <a-col :span="10">
                  同比：
                  <span :style="{color:item.today.percent >= 0?'green':'red'}">
                    <a-icon :type="item.today.percent >= 0 ?'arrow-up':'arrow-down'" />
                    <span>{{`${Math.abs(item.today.percent)}%`}}</span>
                  </span>
                </a-col>
              </a-row>
            </a-col>
            <a-col>
              <a-divider />
            </a-col>
            <a-col class="info" :span="24">
              <a-row>
                <a-col :span="14">{{`当月能耗：${item.month.cur}`}}</a-col>
                <a-col :span="10">
                  环比：
                  <span :style="{color:item.month.percent >= 0?'green':'red'}">
                    <a-icon :type="item.month.percent >= 0 ?'arrow-up':'arrow-down'" />
                    <!-- <a-icon v-if="item.month.percent < 0" style="color:red;" type="arrow-down" /> -->
                    <span>{{`${Math.abs(item.month.percent)}%`}}</span>
                  </span>
                </a-col>
              </a-row>
            </a-col>
          </a-row>
        </a-col>
      </a-row>
    </a-col>
  </a-row>
</template>
<script>
export default {
  props: {
    data: Array
  },
  data() {
    return {
      windowInnerWidth: null
    };
  },
  computed: {
    spanNumber: function() {
      return Math.floor(24 / this.data.length);
    }
  },
  watch: {},
  created() {},
  mounted() {},
  destroyed() {}
};
</script>
<style scoped lang="less">
p {
  margin-bottom: 0;
}
.card {
  .text {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 100px;
    height: 100px;
    background: rgba(199, 199, 199, 0.8);
    transition: all 0.3s;
    .name {
      font-size: 24px;
      font-weight: bolder;
    }
    .unit {
      font-size: 16px;
    }
  }
  .data {
    display: flex;
    flex-direction: column;
    // align-items: center;
    justify-content: center;
    width: calc(100% - 100px);
    background: #fff;
    transition: all 0.3s;
    font-size: 16px;
    /deep/ .ant-divider {
      background: #efefef;
    }
    /deep/ .ant-divider-horizontal {
      margin: 5px 0;
    }
    .info {
      padding: 0 5px;
    }
  }
}
@media screen and (max-width: 1366px) {
  .card {
    .text {
      width: 75px;
      height: 75px;
      .name {
        font-size: 22px;
      }
      .unit {
        font-size: 14px;
      }
    }
    .data {
      width: calc(100% - 75px);
      font-size: 12px;
    }
  }
}
@media screen and (min-width: 1366px) and (max-width: 1680px) {
  .card {
    .text {
      width: 80px;
      height: 80px;
    }
    .data {
      width: calc(100% - 80px);
      font-size: 12px;
    }
  }
}
</style>

