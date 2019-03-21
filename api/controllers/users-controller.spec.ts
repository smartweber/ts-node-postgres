import { expect } from "chai";
import { UsersController } from "./users-controller";

describe("UsersController", () => {
  const controller = new UsersController();

  it("should return something", async () => {
    const users = await controller.GetUsers();
    expect(users.length).to.equal(1);
  });
});
