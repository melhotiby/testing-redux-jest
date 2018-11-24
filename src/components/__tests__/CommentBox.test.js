import React from "react";
import CommentBox from "components/CommentBox";
import Root from "Root";
import { mount } from "enzyme";

let wrapper;

beforeEach(() => {
  wrapper = mount(
    <Root>
      <CommentBox />
    </Root>
  );
});

afterEach(() => {
  wrapper.unmount();
});

it("has a textarea and a button", () => {
  expect(wrapper.find("button").length).toEqual(1);
  expect(wrapper.find("textarea").length).toEqual(1);
});

describe("The Textarea", () => {
  beforeEach(() => {
    wrapper
      .find("textarea")
      .simulate("change", { target: { value: "New Value" } });
    wrapper.update();
  });

  it("enters the value in the textarea", () => {
    expect(wrapper.find("textarea").prop("value")).toEqual("New Value");
  });

  it("clears the textarea on Form Submission", () => {
    wrapper.find("button").simulate("submit");
    wrapper.update();

    expect(wrapper.find("textarea").prop("value")).toEqual("");
  });
});
