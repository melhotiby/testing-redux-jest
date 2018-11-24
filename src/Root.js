import React, { Component } from "react";
import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";
import reduxPromise from "redux-promise";
import reducers from "reducers";

class Root extends Component {
  render() {
    const { children, initialState = {} } = this.props;
    const store = createStore(
      reducers,
      initialState,
      applyMiddleware(reduxPromise)
    );

    return <Provider store={store}>{children}</Provider>;
  }
}

export default Root;
