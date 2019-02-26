import React from "react";
import { Card } from "@blueprintjs/core";
import { Grid, Row, Col } from "react-flexbox-grid";

import SideMenu from "../SideMenu";
import Content from "../Content";
import Nav from "../Nav";
import Loading from "../Loading";
import ContentLayout from "../ContentLayout";

import "../../common/main.css";
import layoutStyle from "./layout.less";

export default class App extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        <Nav />
        <div className={layoutStyle.layout}>
          <SideMenu className={layoutStyle.side} />
          <Content className={layoutStyle.content}>
            <Loading />
          </Content>
        </div>
      </div>
    );
  }
}
