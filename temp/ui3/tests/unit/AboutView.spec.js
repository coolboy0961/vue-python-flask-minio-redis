import { createLocalVue, mount } from "@vue/test-utils";
import Vuex from "vuex";
import store from "@/store";
import AboutView from "@/views/AboutView.vue";

describe("AboutView Unit Test", () => {
  let localVue;
  beforeEach(() => {
    localVue = createLocalVue();
    localVue.use(Vuex);
  });
  afterEach(() => {
    store.dispatch("reset");
  });

  test("counterボタンを2回クリックすると、2回インクリメントすること", async () => {
    // Arrange
    const expected = "count: 3";

    // Act
    // Init Store
    store.dispatch("increment");

    const wrapper = mount(AboutView, {
      localVue,
      store,
    });

    const countButton = wrapper.find("#increment-button");
    await countButton.trigger("click");
    await countButton.trigger("click");
    const countText = wrapper.find("#count-text");
    const actual = countText.text();

    // Assert
    expect(actual).toBe(expected);
  });
});
