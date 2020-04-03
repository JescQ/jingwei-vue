<template>
  <a-row type="flex" :gutter="16" style="height:100%;">
    <a-col class="tree">
      <tree :treeData="options.treeData" v-model="treeValue" />
    </a-col>
    <a-col class="show-content">
      <a-row>
        <!-- <a-col class="card" :span="24" style="margin-bottom:16px">
          <point v-model="pointValue" />
        </a-col>-->
        <a-col class="card" :span="24" style="margin-bottom:3px">
          <selector :option="options.selector" v-model="selectorValue" />
        </a-col>
        <a-col class="card" :span="24" style="margin-bottom:16px">
          <date-time-picker />
        </a-col>
        <a-col class="card" :span="24">
          <trend />
        </a-col>
      </a-row>
    </a-col>
  </a-row>
</template>
<script>
import Tree from "./tree";
// import Point from "./point";
import Trend from "./trend";
import Selector from "@/components/Selector";
import DateTimePicker from "@/components/DateTimePicker";
export default {
  components: {
    Tree,
    // Point,
    Trend,
    Selector,
    DateTimePicker
  },
  data() {
    return {
      options: {
        point: [
          {
            label: "热门城市",
            options: [
              {
                value: "Shanghai",
                label: "上海"
              },
              {
                value: "Beijing",
                label: "北京"
              }
            ]
          },
          {
            label: "城市名",
            options: [
              {
                value: "Chengdu",
                label: "成都"
              },
              {
                value: "Shenzhen",
                label: "深圳"
              },
              {
                value: "Guangzhou",
                label: "广州"
              },
              {
                value: "Dalian",
                label: "大连"
              }
            ]
          }
        ],
        selector: [
          {
            label: "基本参数",
            children: [
              {
                label: "电流",
                children: [
                  {
                    label: "A相"
                  },
                  {
                    label: "B相"
                  },
                  {
                    label: "C相"
                  },
                  {
                    label: "零序"
                  }
                ]
              },
              {
                label: "电压",
                children: [
                  {
                    label: "A相"
                  },
                  {
                    label: "B相"
                  },
                  {
                    label: "C相"
                  },
                  {
                    label: "AB线"
                  },
                  {
                    label: "BC线"
                  },
                  {
                    label: "AC线"
                  }
                ]
              },
              {
                label: "有功功率",
                children: [
                  {
                    label: "总"
                  },
                  {
                    label: "A相"
                  },
                  {
                    label: "B相"
                  },
                  {
                    label: "C相"
                  }
                ]
              },
              {
                label: "无功功率",
                children: [
                  {
                    label: "总"
                  },
                  {
                    label: "A相"
                  },
                  {
                    label: "B相"
                  },
                  {
                    label: "C相"
                  }
                ]
              },
              {
                label: "视在功率",
                children: [
                  {
                    label: "总"
                  },
                  {
                    label: "A相"
                  },
                  {
                    label: "B相"
                  },
                  {
                    label: "C相"
                  }
                ]
              },
              {
                label: "频率",
                children: []
              }
            ]
          },
          {
            label: "电量",
            children: [
              {
                label: "有功电量",
                children: []
              },
              {
                label: "累计有功电量",
                children: []
              },
              {
                label: "无功电量",
                children: []
              },
              {
                label: "表码值",
                children: [
                  {
                    label: "正向有功电量"
                  },
                  {
                    label: "反向有功电量"
                  },
                  {
                    label: "正向无功电量"
                  },
                  {
                    label: "反向无功电量"
                  }
                ]
              }
            ]
          },
          {
            label: "电能质量",
            children: [
              {
                label: "功率因数",
                children: [
                  {
                    label: "总"
                  },
                  {
                    label: "A相"
                  },
                  {
                    label: "B相"
                  },
                  {
                    label: "C相"
                  }
                ]
              },
              {
                label: "电流不平衡度",
                children: [
                  {
                    label: "三级 3-2-1"
                  }
                ]
              },
              {
                label: "电压不平衡度",
                children: []
              },
              {
                label: "电流谐波畸变率",
                children: [
                  {
                    label: "A相"
                  },
                  {
                    label: "B相"
                  },
                  {
                    label: "C相"
                  }
                ]
              },
              {
                label: "电压谐波畸变率",
                children: [
                  {
                    label: "A相"
                  },
                  {
                    label: "B相"
                  },
                  {
                    label: "C相"
                  }
                ]
              }
            ]
          }
        ],
        treeData: [
          {
            title: "炬化工业园",
            key: "0-0",
            children: [
              {
                title: "一起配电房",
                key: "0-0-0",
                children: [
                  { title: "设备1", key: "0-0-0-0" },
                  { title: "设备2", key: "0-0-0-1" }
                ]
              },
              {
                title: "二期配电房",
                key: "0-0-1",
                children: [
                  { title: "设备1", key: "0-0-1-0" },
                  { title: "设备2", key: "0-0-1-1" }
                ]
              }
            ]
          }
        ]
      },
    //   pointValue: "Lucy",
      selectorValue: {
        level1: 0,
        level2: 0,
        level3: []
      },
      treeValue: []
    };
  },
  watch: {
    "selectorValue.level3": function() {
      console.log(this.selectorValue);
      //   request
    },
    pointValue: function(cur) {
      console.log(cur);
    },
    treeValue:function(cur){
        console.log(cur)
    }
  },
  mounted() {
    // console.log(this.pointValue);
  }
};
</script>
<style scoped lang="less">
.tree {
  width: 300px;
  height: 100%;
  overflow: auto;
  // background: red;
}
.show-content {
  width: calc(100% - 300px);
  height: 100%;
  overflow: auto;
  // background: blue;
}
</style>

