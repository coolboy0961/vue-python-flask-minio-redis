import HelloWorld from "./HelloWorld.vue";

export default {
  title: "Component/HelloWorld",
  component: HelloWorld,
};

const Template = (args, { argTypes }) => ({
  components: { HelloWorld },
  props: Object.keys(argTypes),
  template: '<HelloWorld v-bind="$props" />',
});

export const TestMessage = Template.bind({});
TestMessage.args = {
  msg: "Test Message"
};
