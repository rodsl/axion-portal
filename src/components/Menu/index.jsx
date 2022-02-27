import {
  Menu as ChakraMenu,
  MenuButton,
  MenuList,
  useDisclosure,
} from "@chakra-ui/react";

export function Menu({ title, children }) {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <ChakraMenu isLazy isOpen={isOpen} onClose={onClose}
    
    >
      <MenuButton
        transform="auto"
        onMouseOver={onOpen}
        _hover={!isOpen && { color: "gray" }}
        color={isOpen ? "blue.400" : "gray.500"}
        sx={
          isOpen
            ? { WebkitTextStrokeWidth: "1px" }
            : { WebkitTextStrokeWidth: "0px" }
        }
        textTransform="lowercase"
        transition="all .3s ease-out"

      >
        {title || "[MENU_TITLE]"}
      </MenuButton>
      {children && <MenuList onMouseLeave={onClose}>{children}</MenuList>}
    </ChakraMenu>
  );
}
