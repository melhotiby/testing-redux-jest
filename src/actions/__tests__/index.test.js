import { saveComment } from "actions";
import { SAVE_COMMENT } from "actions/types";

describe("saveComment", () => {
  it("has the correct type", () => {
    const action = saveComment("My Comment");

    expect(action.type).toEqual(SAVE_COMMENT);
  });

  it("has the correct payload", () => {
    const action = saveComment("My Comment");

    expect(action.payload).toEqual("My Comment");
  });
});
