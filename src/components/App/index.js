import React from 'react'

import { Grid, Row, Col } from 'react-flexbox-grid';

import SideMenu from '../SideMenu'
import Content from '../Content'
import Nav from '../Nav'

import '../../common/main.css'
import layoutStyle from './layout.less'

export default class App extends React.Component {
  constructor(props) {
    super(props)
  }
  render() {
    return <div className={layoutStyle.layout}>
      <Grid fluid>
        <Row>
          <Col md={12}>
            <Nav></Nav>
          </Col>
        </Row>
        <Row>
          <Col xs={12} md={2}>
            <SideMenu></SideMenu>
          </Col>
          <Col xs={12} md={10}>
            <Content></Content>
          </Col>
        </Row>
      </Grid>
    </div>
  }
}