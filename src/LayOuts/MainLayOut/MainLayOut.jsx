import { Outlet } from "react-router-dom";
import { Box, Flex } from "@chakra-ui/react";
import SideBar from "../../components/SideBar/SideBar";
import s from "./MainLayout.module.scss";

export const MainLayout = () => {
  return (
    <div className={s.content}>
      <SideBar />
      <Box className={s.wrapper} id="outlet">
        <Outlet style={{ width: "100%" }} className={s.outlet} />
      </Box>
    </div>
  );
};

export default MainLayout;
