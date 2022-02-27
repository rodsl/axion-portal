import { Drawer, DrawerBody, DrawerCloseButton, DrawerContent, DrawerHeader, DrawerOverlay, Heading, useBreakpointValue } from "@chakra-ui/react";


export function Sidebar({
    isOpen,
    onClose,
    children,
    appName = "[App Name]",
    ...props
  }) {
    const size = useBreakpointValue({ base: "full", sm: "xs" });
    return (
      <>
        <Drawer placement="left" onClose={onClose} isOpen={isOpen} size={size}>
          <DrawerOverlay
            sx={{ backdropFilter: "blur(10px)" }}
            bg="rgba(255,255,255,0.1)"
          />
          <DrawerContent shadow="dark-lg" bg="brand1.50">
            <DrawerCloseButton
              _focus={{ border: "none" }}
              display={["flex", "none"]}
            />
            <DrawerHeader borderBottomWidth="0px" shadow="md">
              <Heading as="h3" fontSize={["sm", "2xl"]}>
                {appName}
              </Heading>
            </DrawerHeader>
            <DrawerBody mb={[28, 0]}>{children}</DrawerBody>
          </DrawerContent>
        </Drawer>
      </>
    );
  }