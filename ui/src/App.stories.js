import { rest } from "msw";
import App from "./App.vue";
import HomeView from "../src/views/HomeView.vue";
import StoryRouter from "storybook-vue-router";

export default {
  title: "Root/App",
  component: App,
  decorators: [
    StoryRouter(
      {},
      {
        routes: [
          {
            path: "/",
            name: "home",
            component: HomeView,
          },
          {
            path: "/about",
            name: "about",
            // route level code-splitting
            // this generates a separate chunk (About.[hash].js) for this route
            // which is lazy-loaded when the route is visited.
            component: () => import("../src/views/AboutView.vue"),
          },
        ],
      }
    ),
  ],
};

const Template = (args, { argTypes }) => ({
  components: { App },
  props: Object.keys(argTypes),
  template: "<App />",
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
