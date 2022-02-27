import Head from "next/head";
import {
  Box,
  Button,
  Center,
  Container,
  Flex,
  Heading,
  HStack,
  Icon,
  StackDivider,
  Text,
  useBoolean,
  useColorMode,
  useDisclosure,
  VStack,
} from "@chakra-ui/react";
import { Logo } from "components/Logo";
import { Menu } from "components/Menu";
import { MenuItem } from "components/Menu/MenuItem";
import { useEffect } from "react";
import Lottie from "react-lottie";
import animationData from "styles/animations/lotties/bg_2.json";

import {
  FiCloud,
  FiCode,
  FiInfo,
  FiLayout,
  FiMonitor,
  FiMoon,
  FiSun,
  FiTool,
  FiUserPlus,
  FiUsers,
} from "react-icons/fi";
import { VscLaw } from "react-icons/vsc";

export default function Home() {
  const [top, setTop] = useBoolean(true);
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };
  // detect whether user has scrolled the page down by 10px
  useEffect(() => {
    const scrollHandler = () => {
      window.pageYOffset > 10 ? setTop.off() : setTop.on();
    };
    window.addEventListener("scroll", scrollHandler);
    return () => window.removeEventListener("scroll", scrollHandler);
  }, [top]);

  return (
    <Box minH="100vh" overflowY="hidden">
      <Head>
        <title>axionIT - Home</title>
        <link rel="shortcut icon" href="/favicon.ico" />
      </Head>
      <Flex
        position="fixed"
        zIndex="hide"
        w="100vw"
        h="100vh"
        justifyContent="center"
        transition="all .3s ease-out"
        opacity={top ? [0.3, 0.5] : [1, 0.8]}
      >
        <Lottie options={defaultOptions} />
      </Flex>
      {/*  Site header */}
      <Header />
      <Box
        backdropFilter={!top && "blur(15px)"}
        transition="all .3s ease-out"
        pt="80px"
      >
        <Container maxW="container.xl">
          <Center h="80vh">
            <VStack py={1} spacing={12}>
              <Heading
                bgGradient="linear(to-l, #2d388a, #00aeef)"
                bgClip="text"
                fontSize={["5xl", "6xl"]}
                fontWeight="extrabold"
                textAlign={["left", "center"]}
              >
                Conectar, implementar e gerenciar.
              </Heading>
              <Heading
                bgGradient="linear(to-r, #2d388a, #00aeef)"
                bgClip="text"
                fontSize={["2xl", "3xl"]}
                textAlign={["right", "center"]}
              >
                Soluções para simplificar, monitorar e controlar o seu ambiente
                de TI.
              </Heading>
              <Button colorScheme="brand1" alignSelf={["flex-end", "center"]}>
                saiba mais
              </Button>
            </VStack>
          </Center>

          <Flex
            divider={<StackDivider borderColor="brand1.200" />}
            spacing={4}
            align="stretch"
            justifyContent="space-between"
          >
            {/* <Box>
              <Text>O que oferecemos</Text>
              <Text>
                Contamos com uma ampla linha de soluções para otimizar os
                resultados do seu negócio e tornar o dia a dia muito mais
                produtivo
              </Text>
            </Box>
            <Box>oi</Box> */}
          </Flex>
          {/*<Box h={500} bg="gray" />
      <Box h={500} bg="green" /> */}
        </Container>
      </Box>
    </Box>
  );
}

function Header() {
  // fixed w-full z-30 md:bg-opacity-90 transition duration-300 ease-in-out bg-white bg-blur shadow-lg
  const [top, setTop] = useBoolean(true);
  const { colorMode, toggleColorMode } = useColorMode();

  // detect whether user has scrolled the page down by 10px
  useEffect(() => {
    const scrollHandler = () => {
      window.pageYOffset > 10 ? setTop.off() : setTop.on();
    };
    window.addEventListener("scroll", scrollHandler);
    return () => window.removeEventListener("scroll", scrollHandler);
  }, [top]);

  return (
    <Box
      as="header"
      position="fixed"
      w="full"
      px={6}
      zIndex="30"
      bg={
        (!top && colorMode === "light" && "whiteAlpha.50") ||
        (!top && "blackAlpha.400")
      }
      backdropFilter={!top && "blur(10px)"}
      shadow={!top && "lg"}
      transitionProperty="all"
      transitionDuration=".3s"
    >
      <Flex h={20} alignItems="center" justifyContent="space-between">
        <Box flex="1 1 0%">
          <Logo alt="logo" h={10} />
        </Box>
        <HStack spacing={4}>
          <Menu title="Soluções">
            <MenuItem
              icon={<Icon as={FiMonitor} boxSize={6} mt={1.5} ms={1} />}
            >
              Outsourcing de Equipamentos
            </MenuItem>
            <MenuItem icon={<Icon as={FiUsers} boxSize={6} mt={1.5} ms={1} />}>
              Alocação de recursos
            </MenuItem>
            <MenuItem icon={<Icon as={FiTool} boxSize={6} mt={1.5} ms={1} />}>
              Field Support
            </MenuItem>
            <MenuItem icon={<Icon as={VscLaw} boxSize={6} mt={1.5} ms={1} />}>
              LGPD
            </MenuItem>
            <MenuItem icon={<Icon as={FiLayout} boxSize={6} mt={1.5} ms={1} />}>
              Projetos sob demanda
            </MenuItem>
            <MenuItem icon={<Icon as={FiCloud} boxSize={6} mt={1.5} ms={1} />}>
              Cloud Solutions
            </MenuItem>
            <MenuItem icon={<Icon as={FiCode} boxSize={6} mt={1.5} ms={1} />}>
              Desenvolvimento de Softwares
            </MenuItem>
          </Menu>
          <Menu title="Institucional">
            <MenuItem icon={<Icon as={FiInfo} boxSize={6} mt={1.5} ms={1} />}>
              Quem Somos
            </MenuItem>
            <MenuItem
              icon={<Icon as={FiUserPlus} boxSize={6} mt={1.5} ms={1} />}
            >
              Seja um parceiro axion
            </MenuItem>
          </Menu>
          <Button
            onClick={toggleColorMode}
            rounded="full"
            w={12}
            h={7}
            display="flex"
            alignItems="center"
            m={2}
            _focus={{ outline: "none" }}
            // bg={colorMode === "light" ? "gray.50" : "gray.200"}
            shadow="lg"
          >
            <Flex
              w={6}
              h={6}
              position="absolute"
              transitionProperty="all"
              transitionDuration=".5s"
              p={1}
              bg={colorMode === "light" ? "yellow.500" : "gray.500"}
              translateX={colorMode === "light" ? "10px" : "-10px"}
              rounded="full"
              transform="auto"
              alignItems="center"
              justifyContent="center"
              color="white"
              shadow="revert"
            >
              {colorMode === "light" ? <FiSun /> : <FiMoon />}
            </Flex>
          </Button>
        </HStack>
      </Flex>
    </Box>
  );
}
