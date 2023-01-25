import { createPinia } from "pinia";
import AboutView from "./AboutView.vue";

export default {
  title: "Component/AboutView",
  component: AboutView,
};

const Template = (args, { argTypes }) => ({
  components: { AboutView },
  props: Object.keys(argTypes),
  template: "<AboutView />",
  pinia: createPinia(),
});

export const TestMessage = Template.bind({});
