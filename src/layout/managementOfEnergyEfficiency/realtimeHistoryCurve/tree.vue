<template>
  <a-tree
    class="card"
    style="padding:16px;height:100%;"
    checkable
    :treeData="treeData"
    :defaultExpandedKeys="['0-0-0', '0-0-1']"
    :defaultSelectedKeys="['0-0-0', '0-0-1']"
    :defaultCheckedKeys="['0-0-0', '0-0-1']"
    @select="onSelect"
    @check="onCheck"
  >
  </a-tree>
</template>
<script>

export default {
  props: {
    treeData: Array
  },
  model:{
      event: 'change'
  },
  data() {
    return {
    };
  },
  methods: {
    onSelect(selectedKeys, info) {
      console.log("selected", selectedKeys, info);
    },
    onCheck(checkedKeys, info) {
        this.$emit('change',checkedKeys)
      console.log("onCheck", checkedKeys, info);
    }
  }
};
</script>