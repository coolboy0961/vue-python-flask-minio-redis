import initStoryshots from "@storybook/addon-storyshots";

jest.spyOn(console, "error").mockImplementation(() => {});
initStoryshots();
