<template>
  <a-form
    class="infoCard"
    layout="inline"
    ref="form"
    :model="form"
    style="padding:16px;"
  >
    <a-form-item label="监测点：" style="margin:0;">
      <a-select defaultValue="lucy" style="width: 120px" v-model="form.point">
        <a-select-option value="jack">Jack</a-select-option>
        <a-select-option value="lucy">Lucy</a-select-option>
        <a-select-option value="disabled" disabled>Disabled</a-select-option>
        <a-select-option value="Yiminghe">yiminghe</a-select-option>
      </a-select>
    </a-form-item>
  </a-form>
</template>
<script>
export default {
  props: {
      value: String || Number
  },
  model: {
    event: "change"
  },
  data() {
    return {
      form: {
        point: this.value||""
      }
    };
  },
  computed:{},
  watch: {
    "form.point": function(cur) {
      this.$emit("change", cur);
    },
  },
  methods: {
    // change() {}
  }
};
</script>