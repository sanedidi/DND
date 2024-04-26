import { Box } from "@chakra-ui/react";
import s from './MainLayout.module.scss'
import React from "react";
import SideBar from "../../components/SideBar/SideBar";
export const MainLayOut = () => {
  return (
    <>
      <Box className={s.layout}>
        <SideBar />
      </Box>
    </>
  );
};

export default MainLayOut;
