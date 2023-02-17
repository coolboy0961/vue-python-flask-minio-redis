// fix [Vue warn]: Unknown custom element
import Vue from "vue";
import Vuetify from "vuetify";
import api from "@/utils/apis";
Vue.config.productionTip = false;
Vue.use(Vuetify);
Vue.prototype.$api = api;
