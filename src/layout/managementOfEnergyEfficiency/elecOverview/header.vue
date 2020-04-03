<template>
  <a-row :gutter="16">
    <a-col :span="6">
      <a-row class="infoCard">
        <a-col style="margin: 0 0 10px 0;">企业本月用电量 0.37万kWh</a-col>
        <a-col>
          <a-button type="primary">查询更多</a-button>
        </a-col>
      </a-row>
    </a-col>
    <a-col :span="18">
      <a-row class="infoCard" style="padding-bottom:46px;" type="flex" align="middle">
        <a-col :span="24">
          监测点：
          <a-select defaultValue="lucy" style="width: 120px">
            <a-select-option value="jack">Jack</a-select-option>
            <a-select-option value="lucy">Lucy</a-select-option>
            <a-select-option value="disabled" disabled>Disabled</a-select-option>
            <a-select-option value="Yiminghe">yiminghe</a-select-option>
          </a-select>
        </a-col>
      </a-row>
    </a-col>
  </a-row>
</template>
<script>
export default {};
</script>