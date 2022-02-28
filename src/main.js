import Vue from 'vue';
import App from './App';
import VueMeta from 'vue-meta'

new Vue({
    render: h => h(App)
}).$mount("#app")

Vue.use(VueMeta)