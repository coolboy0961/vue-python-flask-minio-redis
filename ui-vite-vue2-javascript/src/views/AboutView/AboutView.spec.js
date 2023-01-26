import {
  describe,
  test,
  expect,
  beforeAll,
  afterAll,
  beforeEach,
  afterEach,
  vi,
} from "vitest";
import { createLocalVue, mount } from "@vue/test-utils";
import { setActivePinia, createPinia, PiniaVuePlugin } from "pinia";
import { useCounterStore } from "@/stores/counter";
import AboutView from "@/views/AboutView/AboutView.vue";

describe("AboutView Unit Test", () => {
  let localVue;
  let store;
  beforeEach(() => {
    localVue = createLocalVue();
    localVue.use(PiniaVuePlugin);
    setActivePinia(createPinia());
    store = useCounterStore();
  });
  test("counterボタンを2回クリックすると、2回インクリメントすること", async () => {
    // Arrange
    const expected = "count: 3";

    // Act
    // Init Store
    store.increment();

    const wrapper = mount(AboutView, {
      localVue,
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
