import {
  Box,
  Flex,
  HStack,
  Link,
  Button,
  IconButton,
  Stack,
  Container,
  useDisclosure,
  Img,
} from "@chakra-ui/react";
import { HamburgerIcon, CloseIcon } from "@chakra-ui/icons";
import { motion, AnimatePresence } from "framer-motion";

const MotionBox = motion(Box);

const Header = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <Box bg="transparent" px={4} py={"20px"} position="absolute" width="100%" zIndex="100">
      <Container maxW={"1440px"}>
        <Flex h={16} alignItems="center" justifyContent="space-between">
          <IconButton
            size="md"
            icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
            aria-label="Open Menu"
            display={{ md: "none" }}
            onClick={isOpen ? onClose : onOpen}
            color="white"
          />
          <HStack spacing={8} alignItems="center" w={'100%'} justifyContent={"space-between"}>
            <Box>
              <Img src="/logo2.png"/>
            </Box>

            <HStack as="nav" spacing={4} display={{ base: "none", md: "flex" }}>
              <Link
                px={2}
                py={1}
                rounded="md"
                _hover={{ textDecoration: "none", bg: "transparent" }}
                href="#"
                color="white"
                fontSize={"18px"}
                fontWeight={"600"}
              >
               Youtube to Mp3 
              </Link>
              <Link
                px={2}
                py={1}
                rounded="md"
                _hover={{ textDecoration: "none", bg: "transparent" }}
                href="#"
                color="white"
                fontSize={"18px"}
                fontWeight={"600"}
              >
                Youtube Downloader
              </Link>
              <Link
                px={2}
                py={1}
                rounded="md"
                _hover={{ textDecoration: "none", bg: "transparent" }}
                href="#"
                color="white"
                fontSize={"18px"}
                fontWeight={"600"}
              >
               Youtube to Mp4
              </Link>
            </HStack>
            <Flex alignItems="center">
              <Button
                display={{ base: "none", md: "inline-flex" }}
                fontSize="sm"
                fontWeight="bold"
                color="white"
                bg="blue.500"
                _hover={{ bg: "blue.600" }}
              >
                Appointment
              </Button>
            </Flex>
          </HStack>
        </Flex>

        {/* Full-Screen Drawer */}
        <AnimatePresence>
          {isOpen && (
            <>
              {/* Backdrop */}
              <MotionBox
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.3 }}
                position="fixed"
                top={0}
                left={0}
                w="100vw"
                h="100vh"
                bg="rgba(0, 0, 0, 0.5)"
                zIndex={10}
                onClick={onClose}
              />

              {/* Drawer Menu */}
              <MotionBox
                initial={{ x: "-100%" }}
                animate={{ x: 0 }}
                exit={{ x: "-100%" }}
                transition={{ duration: 0.3, ease: "easeInOut" }}
                position="fixed"
                top={0}
                left={0}
                w="100vw"
                h="100vh"
                bg="white"
                p={6}
                zIndex={20}
              >
                <IconButton
                  size="md"
                  icon={<CloseIcon />}
                  aria-label="Close Menu"
                  onClick={onClose}
                  mb={4}
                />
                <Stack as="nav" spacing={6}>
                  <Link
                    px={2}
                    py={2}
                    rounded="md"
                    _hover={{ textDecoration: "none", bg: "transparent" }}
                    href="#"
                    color="black"
                    fontSize={"20px"}
                  >
                    Home
                  </Link>
                  <Link
                    px={2}
                    py={2}
                    rounded="md"
                    _hover={{ textDecoration: "none", bg: "gray.200" }}
                    href="#"
                    color="black"
                    fontSize={"20px"}
                  >
                    About
                  </Link>
                  <Link
                    px={2}
                    py={2}
                    rounded="md"
                    _hover={{ textDecoration: "none", bg: "gray.200" }}
                    href="#"
                    color="black"
                    fontSize={"20px"}
                  >
                    Contact Us
                  </Link>
                  <Button
                    fontSize="md"
                    fontWeight="bold"
                    color="white"
                    bg="blue.500"
                    _hover={{ bg: "blue.600" }}
                  >
                    Appointment
                  </Button>
                </Stack>
              </MotionBox>
            </>
          )}
        </AnimatePresence>
      </Container>
    </Box>
  );
};

export default Header;
