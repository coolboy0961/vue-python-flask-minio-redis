import Vue from "vue";
import Vuetify from "vuetify";
import "vuetify/dist/vuetify.min.css";
import { options } from "@/plugins/vuetify.js";
import { initialize, mswDecorator } from "msw-storybook-addon";

// Fix [Vue warn]: Property or method "toJSON" is not defined on the instance but referenced during render.
Vue.prototype.toJSON = function () {
  return this;
};

// Vuetifyを設定し、vuetifyインスタンスを作成
Vue.use(Vuetify);
const vuetify = new Vuetify(options);

// Initialize MSW
initialize({ onUnhandledRequest: "bypass" });

// Provide the MSW addon decorator globally
// decoratorsでvuetifyインスタンスをVueのオプションに登録
export const decorators = [
  (story, context) => {
    const wrapped = story(context);
    return Vue.extend({
      vuetify,
      components: { wrapped },
      template: `
        <v-app>
          <v-container fluid>
            <wrapped />
          </v-container>
        </v-app>
      `,
    });
  },
  mswDecorator,
];

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
};
