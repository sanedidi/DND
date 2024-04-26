import { Menu, MenuButton, MenuItem, MenuList } from "@chakra-ui/react";
import React from "react";

const CustomMenu = ({MenuBtn, MenuIt}) => {
  return (
    <Menu isLazy>
      <MenuButton>{MenuBtn}</MenuButton>
      <MenuList>
        <MenuItem>{MenuIt}</MenuItem>
      </MenuList>
    </Menu>
  );
};

export default CustomMenu;
