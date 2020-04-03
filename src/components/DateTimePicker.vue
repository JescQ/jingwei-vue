<template>
  <a-row type="flex" style="width:100%;">
    <a-col :span="24" style="padding:16px;">
      <a-form layout="inline" ref="form" :model="form">
        <a-form-item label="时间跨度：">
          <a-range-picker/>
        </a-form-item>
        <a-form-item>
          <a-button type="primary">查询</a-button>
        </a-form-item>
      </a-form>
      <a-col style="margin-top:15px;">
        <a-tag
          v-for="(tag,index) in tags"
          :key="index"
          style="margin-left:15px;cursor: pointer;"
        >{{tag.text}}</a-tag>
      </a-col>
    </a-col>
  </a-row>
</template>
<script>
export default {
  name: "DateTimePicker",
  components: {},
  props: {},
  data() {
    return {
      tags: [
        {
          text: "今日"
        },
        {
          text: "昨日"
        },
        {
          text: "本周"
        },
        {
          text: "本月"
        },
        {
          text: "最近10日"
        },
        {
          text: "最近半月"
        },
        {
          text: "最近30日"
        }
      ],
      form: {
        time: ""
      }
    };
  },
  methods: {},
  watch: {},
  mounted() {}
};
</script>
<style scoped>
</style>