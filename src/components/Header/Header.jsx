import React from "react";
import s from "./Header.module.scss";
import { Box } from "@chakra-ui/react";
const Header = () => {
  return (
    <header className={s.header}>
      <Box className={s.header__wrapper}>
        <h1 className={s.header__title}> {title}</h1>
      </Box>
    </header>
  );
};

export default Header;
