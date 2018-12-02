import React from "react";
import { mount } from "enzyme";
import Root from "Root";
import App from "components/App";
import moxios from "moxios";
import { COMMENTS_API_URL } from "constants/index";

beforeEach(() => {
  moxios.install();
  moxios.stubRequest(COMMENTS_API_URL, {
    status: 200,
    response: [
      {
        postId: 1,
        id: 1,
        name: "id labore ex et quam laborum"
      },
      {
        postId: 1,
        id: 2,
        name: "quo vero reiciendis velit similique earum"
      },
      {
        postId: 1,
        id: 3,
        name: "odio adipisci rerum aut animi"
      },
      {
        postId: 1,
        id: 4,
        name: "alias odio sit"
      }
    ]
  });
});

afterEach(() => {
  moxios.uninstall();
});

it("can fetch a list of comments and display them", done => {
  // Render the entire application
  const wrapper = mount(
    <Root>
      <App />
    </Root>
  );

  wrapper.find(".fetch-comments").simulate("click");

  moxios.wait(() => {
    wrapper.update();
    expect(wrapper.find("li").length).toEqual(4);
    wrapper.unmount();
    done();
  });

  // Find the fetch comments button and click
  // expect to find a list of comments!
});
