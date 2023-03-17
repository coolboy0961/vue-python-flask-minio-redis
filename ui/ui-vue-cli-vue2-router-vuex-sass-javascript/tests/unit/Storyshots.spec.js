import initStoryshots from "@storybook/addon-storyshots";
import { imageSnapshot } from "@storybook/addon-storyshots-puppeteer";

jest.spyOn(console, "error").mockImplementation(() => {});

// eslint-disable-next-line no-unused-vars
const getGotoOptions = ({ context, url }) => {
  return {
    /**
     * - loadイベントが発生したとき、ナビゲーションが完了します。
     * - domcontentloaded: DOMContentLoadedイベントが発生したとき、ナビゲーションが完了します。
     * - networkidle0: ネットワーク接続数が0以下のとき、ナビゲーションが完了します。
     * - networkidle2: ネットワーク接続数が2以下のとき、ナビゲーションが完了します。
     */
    waitUntil: "networkidle2",
  };
};

// https://storybook.js.org/addons/@storybook/addon-storyshots
// https://storybook.js.org/addons/@storybook/addon-storyshots-puppeteer
initStoryshots({
  suite: "Image storyshots",
  storyNameRegex: /^((?!.*?DontVisualTest).)*$/,
  test: imageSnapshot({
    storybookUrl: "http://localhost:6006/", // StorybookのURL
    getGotoOptions,
    customizePage: (page) => page.setViewport({ width: 1920, height: 1080 }),
  }),
});
