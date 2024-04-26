import { Input, InputGroup, InputLeftElement, Stack } from "@chakra-ui/react";
import React from "react";

const CustomInput = ({ icon, text, width }) => {
  return (
    <Stack spacing={4}>
      <InputGroup>
        <InputLeftElement pointerEvents="none" children={icon} />
        <Input width={width} type="tel" placeholder={text} />
      </InputGroup>
    </Stack>
  );
};

export default CustomInput;
