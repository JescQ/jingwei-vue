<template>
  <a-row>
    <a-col class="titlebar">
        <span>{{title}}</span>
        <span class="more">查看更多<a-icon type="double-right" /></span>
    </a-col>
    <a-col>
        <slot></slot>
    </a-col>
  </a-row>
</template>

<script>
export default {
    props: {
        title: String
    }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
.titlebar{
    display: flex;
    justify-content: space-between;
    padding: 0 16px;
    line-height: 30px;
    background: rgb(210, 210, 210);
    .more{
        cursor: pointer;
    }
    .more:hover{
        color: #1890ff;
    }
}
</style>
