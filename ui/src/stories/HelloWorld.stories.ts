import { Meta, StoryFn } from "@storybook/vue";
import HelloWorld from "../components/HelloWorld.vue";

export default {
  title: "Component/HelloWorld",
  component: HelloWorld,
} as Meta<typeof HelloWorld>;

const Template: StoryFn = (args, { argTypes }) => ({
  components: { HelloWorld },
  props: Object.keys(argTypes),
  template: '<HelloWorld v-bind="$props" />',
});

export const TestMessage = Template.bind({});
TestMessage.args = {
  msg: "Test Message"
};
