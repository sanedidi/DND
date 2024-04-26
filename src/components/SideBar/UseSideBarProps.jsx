import React, { useState } from "react";
import MenuLink from "../svg/MenuLink";
const UseSideBarProps = () => {
  const links = [{ path: "/mainOrders", icon: <MenuLink /> }];

  return {
    links,
  };
};

export default UseSideBarProps;
