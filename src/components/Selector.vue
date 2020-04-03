<template>
  <a-row type="flex" style="width:100%;background: #fff;">
    <a-col :span="24">
      <a-tabs v-model="curChoose.level1" @change="handelChooseLevel1" type="card">
        <a-tab-pane style="padding: 0 16px;" v-for="(level1,index1) in option" :tab="level1.label" :key="index1">
          <a-row style="height:121px;">
            <a-col>
              <a-tag
                v-for="(level2,index2) in level1.children"
                :key="index2"
                :color="index2 == curChoose.level2? '#001529':''"
                @click="handelChooseLevel2(index2)"
              >{{level2.label}}</a-tag>
            </a-col>
            <a-col>
              <a-divider />
            </a-col>
            <a-col v-if="curOption.level2&&curOption.level2.children">
              <a-tag
                v-for="(level3,index3) in curOption.level2.children"
                :key="index3"
                :color="curChoose.level3.findIndex(item => item==index3) > -1 ? '#001529':''"
                @click="handelChooseLevel3(index3)"
              >{{level3.label}}</a-tag>
            </a-col>
          </a-row>
        </a-tab-pane>
        <!-- <a-tab-pane tab="Tab 2" key="2">Content of Tab Pane 2</a-tab-pane>
        <a-tab-pane tab="Tab 3" key="3">Content of Tab Pane 3</a-tab-pane>-->
      </a-tabs>
    </a-col>
  </a-row>
</template>
<script>
export default {
  name: "Selector",
  components: {},
  props: {
    option: Array
  },
  model: {
      event: 'change'
  },
  data() {
    return {
      curChoose: {
        level1: 0,
        level2: 0,
        level3: []
      },
      curOption: {
        level1: null,
        level2: null,
        level3: []
      }
    };
  },
  methods: {
    getCurOption() {
      this.curOption.level1 = this.option[this.curChoose.level1];
      this.curOption.level2 = this.curOption.level1.children[
        this.curChoose.level2
      ];
      if (
        this.curOption.level2.children &&
        this.curOption.level2.children.length
      ) {
        this.curChoose.level3 = [0];
        this.curOption.level3 = [this.curOption.level2.children[0]];
      } else {
        this.curChoose.level3 = [];
        this.curOption.level3 = [];
      }
    },
    handelChooseLevel1(value) {
      this.curChoose.level1 = value;
    },
    handelChooseLevel2(value) {
      this.curChoose.level2 = value;
    },
    handelChooseLevel3(value) {
      const isChoose = this.curChoose.level3.findIndex(item => item == value);
      if (isChoose > -1) {
        this.curChoose.level3.splice(isChoose, 1);
      } else {
        this.curChoose.level3.push(value);
      }
    }
  },
  watch: {
    "curChoose.level1": function() {
      this.curChoose = {
        ...this.curChoose,
        level2: 0,
        level3: []
      };
      this.getCurOption();
    },
    "curChoose.level2": function() {
      this.curChoose = {
        ...this.curChoose,
        level3: []
      };
      this.getCurOption();
    },
    "curChoose.level3":function(){
        this.$emit('change',this.curChoose)
    }
  },
  mounted() {
    this.getCurOption();
  }
};
</script>
<style scoped>
/deep/ .ant-tag{
    padding: 7px;
}
/deep/ .ant-divider-horizontal{
    margin: 16px 0 !important;
}
/* /deep/ .a-divider--horizontal {
  margin: 15px 0;
}
/deep/ .a-tag--plain.a-tag--info{
      border-color: #545c64;
    color: #545c64;
}
/deep/ .a-tag--dark.a-tag--info {
  background-color: #545c64;
  border-color: #545c64;
} */
</style>