import { rest } from "msw";
import vuetify from "@/plugins/vuetify";
import HelloWorld from "./HelloWorld.vue";

export default {
  title: "Component/HelloWorld",
  component: HelloWorld,
};

const Template = (args, { argTypes }) => ({
  components: { HelloWorld },
  props: Object.keys(argTypes),
  vuetify,
  template: '<HelloWorld v-bind="$props" />',
});

export const TestMessage = Template.bind({});
TestMessage.args = {
  msg: "Test Message",
};
TestMessage.parameters = {
  msw: {
    handlers: [
      rest.get("/user", (req, res, ctx) => {
        return res(
          ctx.json({
            result: "this is a test.",
          })
        );
      }),
    ],
  },
};
