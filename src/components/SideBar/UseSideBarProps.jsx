import React, { useState } from "react";
import MenuLink from "../svg/MenuLink";
const UseSideBarProps = () => {
  const links = [{ path: "", icon: <MenuLink /> }];
  const adminLinks = [
    { title: " Меню" },
    { path: "admin/shopping", title: "Товары" },
    { path: "admin/category", title: "Категории" },
  ];
  const [isOpen, setIsOpen] = useState(false);
  const [activeAdminLink, setActiveAdminLink] = useState("");
  const [settings, setSettings] = useState(false);
  const handleSettingsOpen = () => {
    setSettings(!settings);
    setIsOpen(false);
  };
  return {
    isOpen,
    setIsOpen,
    activeAdminLink,
    setActiveAdminLink,
    links,
    adminLinks,
    settings,
    setSettings,
    handleSettingsOpen,
  };
};

export default UseSideBarProps;
