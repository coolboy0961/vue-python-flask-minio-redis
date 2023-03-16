import vuetify from "@/plugins/vuetify";
import CanvasTest from "./CanvasTest.vue";

export default {
  title: "Component/CanvasTest",
  component: CanvasTest,
};

const Template = (args, { argTypes }) => ({
  components: { CanvasTest },
  props: Object.keys(argTypes),
  vuetify,
  template: "<CanvasTest />",
});

export const Default = Template.bind({});
