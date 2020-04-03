<template>
  <a-row style="height:100%" type="flex" align="middle" :justify="justify">
    <a-radio-group :class="vertical&&'group'" :size="size" v-model="curValue" @change="$emit('change',curValue)">
      <a-radio-button v-for="(btn,index) in option" :key="index" :value="btn[name]">{{btn[label]}}</a-radio-button>
    </a-radio-group>
  </a-row>
</template>

<script>
export default {
  props: {
    option: Array,
    label: {
      type: String,
      default: "label"
    },
    name: {
      type: String,
      default: "value"
    },
    value: String,
    vertical: Boolean,
    size: String,
    justify: String
  },
  model: {
    event: "change"
  },
  data() {
    return {
      curValue: this.value
    };
  },
  methods: {
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
.group {
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  height: 100%;
}
</style>
