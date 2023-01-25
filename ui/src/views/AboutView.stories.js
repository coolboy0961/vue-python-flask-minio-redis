import { userEvent, within, waitFor, screen } from "@storybook/testing-library";
import { expect } from "@storybook/jest";

import { createPinia } from "pinia";
import AboutView from "./AboutView.vue";

export default {
  title: "Component/AboutView",
  component: AboutView,
};

const Template = () => ({
  components: { AboutView },
  template: "<AboutView />",
  pinia: createPinia(),
});

export const Default = Template.bind({});
Default.play = async () => {
  // Arrange

  // Act
  const incrementButton = await screen.findByRole("button");

  await userEvent.click(incrementButton);
  await userEvent.click(incrementButton);

  const actual = await screen.findByText("count: 2");

  // Assert
  expect(actual).toBeInTheDocument();
};
