import { shallowMount, mount } from "@vue/test-utils";
import { rest } from "msw";
import { setupServer } from "msw/node";
import flushPromises from "flush-promises";
import HelloWorld from "@/components/HelloWorld.vue";

const apiMockServer = setupServer();

describe("HelloWorld.vue", () => {
  beforeAll(() => {
    apiMockServer.listen({ onUnhandledRequest: "bypass" }); // fix MSW logging warnings for unhandled Supertest requests
  });
  afterAll(() => {
    apiMockServer.close();
  });
  beforeEach(() => {});
  afterEach(() => {
    apiMockServer.resetHandlers();
  });
  it("renders props.msg when passed", () => {
    const msg = "new message";
    const wrapper = shallowMount(HelloWorld, {
      propsData: { msg },
    });
    expect(wrapper.text()).toMatch(msg);
  });
  it("API Data を取得できること", async () => {
    // Arrange
    const expected = '"result": "this is a test."';
    apiMockServer.use(
      rest.get("/api/user", (req, res, ctx) => {
        console.log(JSON.stringify(req));
        return res(ctx.json({ result: "this is a test." }));
      })
    );

    // Act
    const wrapper = mount(HelloWorld, { propsData: { msg: "Hello Vitest" } });
    await flushPromises();

    // Assert
    expect(wrapper.text()).toContain(expected);
  });
});
