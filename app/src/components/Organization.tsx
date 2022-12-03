import { Button, Card, CardBody, Flex, Image, Text } from "@chakra-ui/react";

const Organization = (props: any) => {
  return (
    <>
      <Flex w="100%" align="center" justify="center">
        <Card w="50%" marginBottom="20px">
          <CardBody w="100%">
            <Flex>
              <Flex
                w="30%"
                flexDirection="column"
                justify="center"
                align="center"
              >
                <Image
                  w="100px"
                  h="100px"
                  borderRadius="50%"
                  marginBottom="10px"
                  src={props.logo}
                ></Image>
                <Text>Założyciel: {props.owner}</Text>
              </Flex>

              <Flex pl="50px" flexDirection="column" justify="center">
                <Text fontSize="25px">
                  Nazwa organizacji: {props.organizationName}
                </Text>
                <Text>Liczba czlonkow: {props.usersCount}</Text>
                <Button
                  type="button"
                  size="md"
                  w="60%"
                  bg={"purple.600"}
                  marginTop="20px"
                  color={"white"}
                  _hover={{
                    bg: "purple.700",
                  }}
                >
                  Przejdź do organizacji
                </Button>
              </Flex>
            </Flex>
          </CardBody>
        </Card>
      </Flex>
    </>
  );
};

export default Organization;
