import React, { useState, useRef } from "react";
import { MdAccountCircle } from "react-icons/md";
import s from "./SideBar.module.scss";
import { Box, Button } from "@chakra-ui/react";
import { useLocation } from "react-router-dom";
import { CiLogout } from "react-icons/ci";
import { SettingsIcon } from "@chakra-ui/icons";
import { Link } from "react-router-dom";
import UseSidebarProps from "./UseSideBarProps";

export const SideBar = ({ openNav, closeNav }) => {
  const {
    links,
  } = UseSidebarProps();

  const handleLogOut = () => {
    localStorage.clear();
    authStore.logout();
  };

  return (
    <Box className={s.sidebar}>
      <Box className={s.sidebar__titleWrapper}>
        <p className={s.sidebar__title}>D</p>
      </Box>

      <Box className={s.sidebar__wrapperSidebar}>
        <nav className={s.sidebar__navbar}>
          <div className={s.sidebar__navList}>
            <div className={s.sidebar__top}>
              {links.map((link, index) => (
                <div className={s.sidebar__navItem} key={index}>
                  <Link to={link.path} className={s.sidebar__navLink}>
                    <p>{link.icon}</p>
                  </Link>
                </div>
              ))}
            </div>
            <div className={s.sidebar__bottom}>
              <div className={s.sidebar__SettingIconWrapper}>
                <button className={s.sidebar__navLink}>
                  <p>
                    <SettingsIcon
                      style={{ fontSize: "35px" }}
                      className={s.sidebar__logOutIcon}
                    />
                  </p>
                </button>
              </div>
              <div className={s.sidebar__logOutIconWrapper}>
                <button className={s.sidebar__navLink}>
                  <p>
                    <MdAccountCircle
                      style={{ fontSize: "35px" }}
                      className={s.sidebar__logOutIcon}
                    />
                  </p>
                </button>
              </div>
            </div>
          </div>
        </nav>
      </Box>
    </Box>
  );
};
export default SideBar;
