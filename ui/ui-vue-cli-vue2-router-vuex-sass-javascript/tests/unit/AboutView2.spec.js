import { shallowMount, createLocalVue } from "@vue/test-utils";
import Vuex from "vuex";
import AboutView from "@/views/AboutView.vue";

describe("AboutView.vue", () => {
  const localVue = createLocalVue();
  localVue.use(Vuex);

  it("Storeのcount数が画面に表示されている", () => {
    // Arrange
    const expected = "count: 3";
    const getters = {
      count: () => 3,
    };
    const store = new Vuex.Store({
      getters,
    });

    // Act
    const wrapper = shallowMount(AboutView, { store, localVue });
    const countText = wrapper.find("#count-text");
    const actual = countText.text();

    // Assert
    expect(actual).toBe(expected);
  });
  it("increment buttonをクリックするとStoreのincrementアクションが呼ばれる", async () => {
    // Arrange
    // 状態をモック
    const actions = {
      increment: jest.fn(),
      reset: jest.fn(),
    };
    const store = new Vuex.Store({
      actions,
    });

    // Act
    const wrapper = shallowMount(AboutView, { store, localVue });
    const countButton = wrapper.find("#increment-button");
    await countButton.trigger("click");

    // Assert
    expect(actions.increment).toHaveBeenCalled();
  });
});
