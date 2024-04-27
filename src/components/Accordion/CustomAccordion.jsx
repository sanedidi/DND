import {
  Accordion,
  AccordionButton,
  AccordionIcon,
  AccordionItem,
  AccordionPanel,
  Box,
} from "@chakra-ui/react";
import React from "react";

const CustomAccordion = ({ accContent, accBtn, accColor }) => {
  return (
    <Accordion defaultIndex={[0]} allowMultiple>
      <AccordionItem>
        <h2>
          <AccordionButton>
            <Box as="span" flex="1" color={accColor} textAlign="left">
              {accBtn}
            </Box>
            <AccordionIcon />
          </AccordionButton>
        </h2>
        <AccordionPanel pb={4}>{accContent}</AccordionPanel>
      </AccordionItem>
    </Accordion>
  );
};

export default CustomAccordion;
