import React from "react";
import { HashRouter, Route, Switch } from "react-router-dom";
import { Controller, Scene } from "react-scrollmagic";

import "./app.css";

import Navigation from "./component/nav";
import Home from "./component/page/home";
import Work1 from "./component/page/work1";
import Work2 from "./component/page/work2";
import Work3 from "./component/page/work3";
import Footer from "./component/footer";
import Scroll from "./component/scroll";

import worksData from "./data/works";

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      web: worksData[0],
      app: worksData[1],
      game: worksData[2],
      device: worksData[3],
      current: "",
    };

    this._renderWebWorks = this._renderWebWorks.bind(this);
    this._renderAppWorks = this._renderAppWorks.bind(this);
    this._renderGameWorks = this._renderGameWorks.bind(this);
    this._renderDeviceWorks = this._renderDeviceWorks.bind(this);
  }

  componentDidMount() {}

  render() {
    return (
      <HashRouter className="app">
        <Navigation current={this.state.current} />
        <Home />
        <Controller>
          <Scene
            classToggle="work1-main-img-active"
            triggerElement={"#" + this.props.id}
            reverse={false}
            indicator={true}
          >
            <div className="web-wrapper" id="web">
              {this._renderWebWorks()}
            </div>
          </Scene>
        </Controller>
        <div className="app-wrapper" id="app">
          {this._renderAppWorks()}
        </div>
        <Scroll />
        <div className="game-wrapper" id="game">
          {this._renderGameWorks()}
        </div>
        <div className="device-wrapper" id="device">
          {this._renderDeviceWorks()}
        </div>
        <Switch>
          {/* <Route
            exact
            path="/"
            component={() => (
              <div>
                <Home />
                {this._renderWorks()}
              </div>
            )}
          /> */}
        </Switch>
        <Footer />
      </HashRouter>
    );
  }

  _renderWebWorks() {
    let list = [];
    this.state.web.forEach((element, index) => {
      list.push(
        <Work1 id={"web" + (index + 1)} key={"web" + index} data={element} />
      );
    });
    return list;
  }

  _renderAppWorks() {
    let list = [];
    this.state.app.forEach((element, index) => {
      list.push(
        <Work2 id={"app" + (index + 1)} key={"app" + index} data={element} />
      );
    });
    return list;
  }

  _renderGameWorks() {
    let list = [];
    this.state.game.forEach((element, index) => {
      list.push(
        <Work3 id={"game" + (index + 1)} key={"game" + index} data={element} />
      );
    });
    return list;
  }

  _renderDeviceWorks() {
    let list = [];
    this.state.device.forEach((element, index) => {
      list.push(
        <Work3
          id={"device" + (index + 1)}
          key={"device" + index}
          data={element}
        />
      );
    });
    return list;
  }
}

export default App;
