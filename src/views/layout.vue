<template>
  <a-layout id="components-layout-demo-custom-trigger" style="height:100%;">
    <a-layout-sider :trigger="null" :theme="theme" collapsible v-model="collapsed">
      <div class="logo" />
      <a-menu
        ref="menu"
        :defaultOpenKeys="[defaultOpenKeys]"
        mode="inline"
        :theme="theme"
        :selectedKeys="[current]"
        @click="handleClick"
      >
        <a-sub-menu v-for="level1 in navMenuConfig" :key="level1.routerName">
          <span slot="title">
            <a-icon type="appstore" />
            <span>{{level1.name}}</span>
          </span>
          <a-menu-item v-for="level2 in level1.subMenu" :key="level2.routerName">{{level2.name}}</a-menu-item>
        </a-sub-menu>
      </a-menu>
    </a-layout-sider>
    <a-layout style="background:#eee">
      <a-layout-header
        style="position: fixed;width: calc(100% - 200px);z-index:9;background: #fff; padding: 0"
      >
        <a-icon
          class="trigger"
          :type="collapsed ? 'menu-unfold' : 'menu-fold'"
          @click="handleTrigger"
        />
        <a-icon class="logout" type="logout" @click="handleLogout" />
      </a-layout-header>
      <a-layout-content :style="{ margin: '80px 16px 16px' }">
        <router-view></router-view>
      </a-layout-content>
    </a-layout>
    <a-modal title="登出" centered v-model="chooseLogout" @ok="handleRight">
      <p style="font-size:20px;">
        <a-icon style="margin-right:20px;color:red;" type="info-circle" />请确定是否退出登录！
      </p>
    </a-modal>
  </a-layout>
</template>
<script>
import navMenuConfig from "@/config/navMenu";
import defaultOpenKeysByCurrent from "@/config/defaultOpenKeysByCurrent";

export default {
  data() {
    return {
      chooseLogout: false,
      theme: "dark",
      defaultOpenKeys: navMenuConfig[0].routerName,
      current: "",
      navMenuConfig,
      collapsed: false
    };
  },
  methods: {
    handleClick({ key }) {
      this.current = key;
      this.$router.history.push({
        name: this.current
      });
    },
    handleTrigger() {
      this.collapsed = !this.collapsed;
      this.$forceFit();
    },
    handleLogout() {
      this.chooseLogout = true;
    },
    handleRight() {
      this.$router.history.push({
        name: "login"
      });
    }
  },
  watch: {
    "$route.name": function(current) {
      this.current = current;
      this.$router.history.push({
        name: current
      });
    }
  },
  created() {
    let currentRouterName = this.$router.history.current.name;
    this.current =
      (currentRouterName != "layout" && currentRouterName) ||
      navMenuConfig[0].subMenu[0].routerName;
    this.defaultOpenKeys = defaultOpenKeysByCurrent[this.current];
    this.$nextTick(() => {
      this.$router.history.push({
        name: this.current
      });
    });
  }
};
</script>
<style scoped>
#components-layout-demo-custom-trigger .trigger,
.logout {
  font-size: 18px;
  line-height: 64px;
  padding: 0 24px;
  cursor: pointer;
  transition: color 0.3s;
}

#components-layout-demo-custom-trigger .trigger:hover,
.logout:hover {
  color: #1890ff;
}

#components-layout-demo-custom-trigger .logo {
  height: 32px;
  background: rgba(255, 255, 255, 0.2);
  margin: 16px;
}
.logout {
  position: absolute;
  right: 0;
}
</style>

