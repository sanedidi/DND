import React from "react";
import { Button, Stack } from "@chakra-ui/react";
const Btn = ({
  btnColor,
  btnBgColor,
  btnCont,
  btnBorder,
  btnWidth,
  btnIcon,
  Onclick,
}) => {
  return (
    <div>
      <Stack direction="row" spacing={4}>
        <Button
          leftIcon={btnIcon}
          width={btnWidth}
          border={btnBorder}
          color={btnColor}
          colorScheme={btnBgColor}
          onClick={Onclick}
        >
          {btnCont}
        </Button>
      </Stack>
    </div>
  );
};

export default Btn;
