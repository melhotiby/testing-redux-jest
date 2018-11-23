import React, { Component } from "react";
import { Provider } from "react-redux";
import { createStore } from "redux";
import reducers from "reducers";

class Root extends Component {
  render() {
    return (
      <Provider store={createStore(reducers, {})}>
        {this.props.children}
      </Provider>
    );
  }
}

export default Root;
