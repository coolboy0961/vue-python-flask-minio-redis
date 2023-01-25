import {
  describe,
  test,
  expect,
  beforeAll,
  afterAll,
  beforeEach,
  afterEach,
} from "vitest";
import { rest } from "msw";
import { setupServer } from "msw/node";
import flushPromises from "flush-promises";

import { mount } from "@vue/test-utils";
import HelloWorld from "./HelloWorld.vue";

const apiMockServer = setupServer();

describe("HelloWorld", () => {
  beforeAll(() => {
    apiMockServer.listen();
  });
  afterAll(() => {
    apiMockServer.close();
  });
  beforeEach(() => {});
  afterEach(() => {
    apiMockServer.resetHandlers();
  });
  test("renders properly", () => {
    // Arrange
    const expected = "Hello Vitest";

    // Act
    const wrapper = mount(HelloWorld, { propsData: { msg: "Hello Vitest" } });
    const actual = wrapper.text();

    // Assert
    expect(actual).toContain(expected);
  });
  test("API Data を取得できること", async () => {
    // Arrange
    const expected = {
      result: "this is a test.",
    };
    apiMockServer.use(
      rest.get("/user", (req, res, ctx) => {
        return res(ctx.json({ result: "this is a test." }));
      })
    );

    // Act
    const wrapper = mount(HelloWorld, { propsData: { msg: "Hello Vitest" } });
    await flushPromises();
    const mockApiData = wrapper.vm.mockApiData;

    // Assert
    expect(mockApiData).toEqual(expected);
  });
});
