import React from "react";
import classNames from "classnames";
import { Classes, Icon, Menu, MenuDivider, MenuItem } from "@blueprintjs/core";

import style from "./index.less";

export default class SideMenu extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    const { className = "" } = this.props;
    return (
      <Menu className={classNames(Classes.ELEVATION_2, style.menu, className)}>
        <MenuItem icon="new-text-box" text="New text box" />
        <MenuDivider />
        <MenuItem
          className={classNames(Classes.INTENT_PRIMARY)}
          icon="new-object"
          text="New object"
        />
        <MenuItem icon="new-link" text="New link" />
        <MenuDivider />
        <MenuItem
          icon="cog"
          labelElement={<Icon icon="share" />}
          text="Settings..."
        />
      </Menu>
    );
  }
}
