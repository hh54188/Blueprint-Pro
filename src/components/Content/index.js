import React from 'react'
import { Card } from "@blueprintjs/core";

import style from './index.less'

export default class Content extends React.Component {
  constructor(props) {
    super(props)
  }
  render() {
    return <div className={style.content}>
      <Card></Card>
    </div>
  }
}