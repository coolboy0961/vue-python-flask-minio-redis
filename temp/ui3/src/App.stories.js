import { rest } from "msw";
import routes from "@/router/routes.js";
import StoryRouter from "storybook-vue-router";
import App from "./App.vue";

export default {
  title: "Pages/App",
  component: App,
  decorators: [StoryRouter({}, { routes })],
};

const Template = (args, { argTypes }) => ({
  components: { App },
  props: Object.keys(argTypes),
  template: `<App />`,
});

export const Default = Template.bind({});
Default.parameters = {
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
