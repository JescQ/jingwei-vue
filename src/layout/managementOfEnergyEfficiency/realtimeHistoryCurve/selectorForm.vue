<template>
  <a-row type="flex" style="padding:16px;height:100%;background:#fff;" justify="center">
    <a-form
      :form="form"
      :label-col="formItemLayout.labelCol"
      :wrapper-col="formItemLayout.wrapperCol"
    >
      <a-form-item label="楼宇选择">
    <a-select
    mode="multiple"
    :defaultValue="['a1', 'b2']"
    placeholder="Please select"
  >
    <a-select-option v-for="i in 25" :key="(i + 9).toString(36) + i"
      >{{(i + 9).toString(36) + i}}</a-select-option
    >
  </a-select>
      </a-form-item>
      <a-form-item label="能源种类">
        <a-input
          v-decorator="[
          'nickname',
          { rules: [{ required: checkNick, message: 'Please input your nickname' }] },
        ]"
          placeholder="Please input your nickname"
        />
      </a-form-item>
      <a-form-item :label-col="formTailLayout.labelCol" :wrapper-col="formTailLayout.wrapperCol">
        <a-button type="primary" @click="check">Check</a-button>
      </a-form-item>
    </a-form>
  </a-row>
</template>
<script>
const formItemLayout = {
  labelCol: { span: 8 },
  wrapperCol: { span: 16 }
};
const formTailLayout = {
  labelCol: { span: 4 },
  wrapperCol: { span: 8, offset: 8 }
};
export default {
  data() {
    return {
      checkNick: false,
      formItemLayout,
      formTailLayout,
      form: this.$form.createForm(this, { name: "dynamic_rule" })
    };
  },
  methods: {
    check() {
      this.form.validateFields(err => {
        if (!err) {
          console.info("success");
        }
      });
    }
  }
};
</script>
<style scoped lang="less">
</style>

