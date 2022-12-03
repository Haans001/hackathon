import { Box, Button, Container, Heading, Stack, Text } from "@chakra-ui/react";
import { Link } from "react-router-dom";

const Page404 = () => {
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
            404 <br />
            <Text as={"span"} color={"purple.600"}>
              Page
            </Text>
          </Heading>
          <Text color={"gray.500"}>Niestety podana strona nie istnieje.</Text>
          <Stack
            direction={"column"}
            spacing={3}
            align={"center"}
            alignSelf={"center"}
            position={"relative"}
          >
            <Link to="/">
              <Button>Powróć</Button>
            </Link>
          </Stack>
        </Stack>
      </Container>
    </>
  );
};

export default Page404;
