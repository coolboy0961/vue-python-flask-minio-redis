import initStoryshots from "@storybook/addon-storyshots";
import { imageSnapshot } from "@storybook/addon-storyshots-puppeteer";

jest.spyOn(console, "error").mockImplementation(() => {});
initStoryshots({
  suite: "Image storyshots",
  test: imageSnapshot({
    storybookUrl: "http://localhost:6006/", // 如果你的 Storybook 运行在其他端口上，请进行相应修改
    // 其他可选配置
  }),
});
