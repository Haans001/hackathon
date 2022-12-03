import { Card, CardBody, Flex, Image, Text } from "@chakra-ui/react";

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

              <Flex flexDirection="column" justify="center">
                <Text fontSize="25px">
                  Nazwa organizacji: {props.organizationName}
                </Text>
                <Text>Liczba czlonkow: {props.usersCount}</Text>
              </Flex>
            </Flex>
          </CardBody>
        </Card>
      </Flex>
    </>
  );
};

export default Organization;
