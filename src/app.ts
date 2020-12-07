import { Component } from "react";

import { createReduxStore, Provider } from "@redux-model/taro";

import "./app.scss";

class App extends Component {
  componentDidMount() {}

  componentDidShow() {}

  componentDidHide() {}

  componentDidCatchError() {}

  // this.props.children 是将要会渲染的页面
  render() {
    return <Provider store={store}>{this.props.children}</Provider>;
    // return this.props.children
  }
}

export default App;
