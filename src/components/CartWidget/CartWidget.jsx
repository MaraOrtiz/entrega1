import { Flex, Text } from "@chakra-ui/react";
import { CiShoppingCart } from "react-icons/ci";
const cartWidget = () => {
  return (
    <Flex
      alignItems={"center"}
      height={"100%"}
      justifyContent={"space-between"}
      width={"60px"}
    >
      <CiShoppingCart size={30} />

      <text fontSize={"1.5rem"}>0</text>
    </Flex>
  );
};
export default cartWidget;
