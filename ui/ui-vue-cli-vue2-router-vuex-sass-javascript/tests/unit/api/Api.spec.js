import api from "@/utils/apis";
import { rest } from "msw";
import { setupServer } from "msw/node";

const apiMockServer = setupServer();

describe("Api tests", () => {
  beforeAll(() => {
    apiMockServer.listen({ onUnhandledRequest: "bypass" }); // fix MSW logging warnings for unhandled Supertest requests
  });
  afterAll(() => {
    apiMockServer.close();
  });
  beforeEach(() => {
    apiMockServer.resetHandlers();
  });
  afterEach(() => {
    apiMockServer.resetHandlers();
  });

  it("user APIをコールして正しい結果を取得できること", async () => {
    // Arrange
    const expected = {
      name: "jone",
      email: "jone@example.com",
    };
    apiMockServer.use(
      rest.get("/api/user", (req, res, ctx) => {
        console.log(JSON.stringify(req));
        return res(
          ctx.json({
            name: "jone",
            email: "jone@example.com",
          })
        );
      })
    );

    // Act
    const actual = await api.getUser();

    // Assert
    expect(actual).toEqual(expected);
  });
});
