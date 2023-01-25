import { userEvent, within, waitFor } from "@storybook/testing-library";
import { expect } from "@storybook/jest";

import { createPinia } from "pinia";
import AboutView from "./AboutView.vue";

export default {
  title: "Component/AboutView",
  component: AboutView,
};

const Template = (args, { argTypes }) => ({
  components: { AboutView },
  props: Object.keys(argTypes),
  template: "<AboutView />",
  pinia: createPinia(),
});

export const Default = Template.bind({});
Default.play = async ({ canvasElement }) => {
  // Arrange

  // Act
  const canvas = within(canvasElement);
  const incrementButton = canvas.getByTestId("increment-button");

  userEvent.click(incrementButton);
  userEvent.click(incrementButton);

  await waitFor(() => {
    const actual = canvas.getByText("count: 2");
    // Assert
    expect(actual).toBeInTheDocument();
  });
};
