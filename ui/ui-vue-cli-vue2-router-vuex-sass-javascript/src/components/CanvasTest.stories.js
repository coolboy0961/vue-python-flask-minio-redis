import vuetify from "@/plugins/vuetify";
import CanvasTest from "./CanvasTest.vue";

export default {
  title: "Component/CanvasTest",
  component: CanvasTest,
};

const Template = (args, { argTypes }) => ({
  components: { CanvasTest },
  props: Object.keys(argTypes),
  vuetify,
  template: "<CanvasTest />",
});

export const Default = Template.bind({});

export const DrawACircle = Template.bind({});
DrawACircle.play = async () => {
  const canvasComponent = document.querySelector("canvas");
  const clientCoordinates = toClientCoordinates(canvasComponent, 200, 100);
  const clickEvent = new MouseEvent("click", {
    ...clientCoordinates,
  });
  canvasComponent.dispatchEvent(clickEvent);
};

/**
 * canvas内の座標をscreen内の座標に変換するためのメソッド
 * @param {*} canvas canvasのelement
 * @param {*} x canvas内のx座標
 * @param {*} y canvas内のy座標
 * @returns screen内のxy座標
 */
function toClientCoordinates(canvas, x, y) {
  const rect = canvas.getBoundingClientRect();
  const clientX = x + rect.left;
  const clientY = y + rect.top;

  return { clientX, clientY };
}
