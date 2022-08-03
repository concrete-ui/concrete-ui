import { GlobalStyles, ThemeProvider } from "@concrete-ui/solid/src";
import { createRoot } from "solid-js";
import { insert, template, createComponent } from "solid-js/web";

export const decorators = [
  (Story) =>
    createRoot(() => {
      const element = template("<div/>").cloneNode(true);
      insert(element, createComponent(GlobalStyles, {}));
      // const providerEl = insert(element, createComponent(ThemeProvider, {}));
      insert(element, createComponent(Story, {}));
      return element;
    }),
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
