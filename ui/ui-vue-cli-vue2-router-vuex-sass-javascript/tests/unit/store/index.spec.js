import { createLocalVue } from "@vue/test-utils";
import Vuex from "vuex";
import store from "@/store";

describe("store/index.js", () => {
  it("incrementアクションを実行すると、countが1増えること", () => {
    // Arrange
    const expected = 3;
    const localVue = createLocalVue();
    localVue.use(Vuex);
    // オリジナルのStoreをコピーしなければ、古い状態が残り他のテストに使えなくなるため
    const testStore = Object.assign({}, store);

    // Act
    testStore.dispatch("increment");
    testStore.dispatch("increment");
    testStore.dispatch("increment");
    const actual = testStore.getters.count;

    // Assert
    expect(actual).toBe(expected);
  });
});
