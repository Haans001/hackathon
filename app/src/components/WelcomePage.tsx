import { Box, Button, Container, Heading, Stack, Text } from "@chakra-ui/react";
import { Link } from "react-router-dom";

const WelcomePage = () => {
  return (
    <>
      <Container maxW={"3xl"}>
        <Stack
          as={Box}
          textAlign={"center"}
          spacing={{ base: 8, md: 14 }}
          py={{ base: 20, md: 36 }}
        >
          <Heading
            fontWeight={600}
            fontSize={{ base: "2xl", sm: "4xl", md: "6xl" }}
            lineHeight={"110%"}
          >
            Zarządzaj urlopami <br />
            <Text as={"span"} color={"purple.600"}>
              swoich pracownikow
            </Text>
          </Heading>
          <Text color={"gray.500"}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam
            iure expedita asperiores, nulla temporibus commodi omnis sequi
            maxime adipisci aliquid.
          </Text>
          <Stack
            direction={"column"}
            spacing={3}
            align={"center"}
            alignSelf={"center"}
            position={"relative"}
          >
            <Link to="/rejestracja">
              <Button
                colorScheme={"green"}
                bg={"purple.600"}
                rounded={"full"}
                px={6}
                _hover={{
                  bg: "purple.700",
                }}
              >
                Zarejestruj się
              </Button>
            </Link>
            <Link to="/logowanie">
              <Button variant={"link"} colorScheme={"blue"} size={"sm"}>
                Zaloguj się
              </Button>
            </Link>
          </Stack>
        </Stack>
      </Container>
    </>
  );
};

export default WelcomePage;
