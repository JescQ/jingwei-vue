import Vue from 'vue'
import Antd from 'ant-design-vue';
import App from './App.vue'
import router from './router'
import store from './store'
import axios from 'axios'
import 'ant-design-vue/dist/antd.css';

Vue.use(Antd);

Vue.config.productionTip = false

Vue.prototype.$axios = axios
Vue.prototype.$forceFit = () => {
    const e = document.createEvent("Event");
    e.initEvent("resize", true, true);
    window.dispatchEvent(e);
}

new Vue({
    router,
    store,
    render: h => h(App),
}).$mount('#app')