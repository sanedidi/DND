import { Menu, MenuButton, MenuItem, MenuList } from "@chakra-ui/react";
import React from "react";

const CustomMenu = ({
  MenuBtn,
  MenuIt,
  MenuBtnWidth,
  MenuItClass,
  MenuSvg,
  MenuSvg2,
  MenuBtnControl,
  MenuControl,
}) => {
  return (
    <Menu isLazy>
      <div className={MenuControl}>
        <MenuButton style={{ width: { MenuBtnWidth } }}>
          <span className={MenuBtnControl}>
            {MenuSvg}
            {MenuBtn}
            {MenuSvg2}
          </span>
        </MenuButton>
        <MenuList>
          <MenuItem className={MenuItClass}>{MenuIt}</MenuItem>
        </MenuList>
      </div>
    </Menu>
  );
};

export default CustomMenu;
