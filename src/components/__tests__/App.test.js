import React from "react";
import ReactDOM from "react-dom";
import App from "components/App";
import CommentList from "components/CommentList";
import CommentBox from "components/CommentBox";
import { shallow } from "enzyme";

let wrapper;

beforeEach(() => {
  wrapper = shallow(<App />);
});

it("Shows the Comment Box", () => {
  expect(wrapper.find(CommentBox).length).toEqual(1);
});

it("Shows the Comment List", () => {
  expect(wrapper.find(CommentList).length).toEqual(1);
});
