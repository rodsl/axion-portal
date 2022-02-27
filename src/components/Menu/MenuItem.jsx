import {
  MenuItem as ChakraMenuItem,
} from "@chakra-ui/react";

export function MenuItem({children, ...props}) {
  return <ChakraMenuItem {...props}
  _hover={{shadow:"sm"}}
  
  >{children}</ChakraMenuItem>;
}
