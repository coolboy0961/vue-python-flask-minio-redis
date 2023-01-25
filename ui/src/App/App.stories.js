import { rest } from "msw";
import { createPinia } from "pinia";
import App from "./App.vue";
import HomeView from "@/views/HomeView.vue";
import StoryRouter from "storybook-vue-router";
import "@/assets/main.css";

export default {
  title: "Pages/App",
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
            component: () => import("@/views/AboutView.vue"),
          },
        ],
      }
    ),
  ],
};

const Template = (args, { argTypes }) => ({
  components: { App },
  props: Object.keys(argTypes),
  template: `
  <body>
    <div id="app"></div>
    <App />
  </body>`,
  pinia: createPinia(),
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
