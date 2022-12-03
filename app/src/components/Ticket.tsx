import { SmallAddIcon } from "@chakra-ui/icons";
import { Button, Card, CardBody, Flex, Text } from "@chakra-ui/react";

const Ticket = (props: any) => {
  const start = new Date(props.startTime);
  const end = new Date(props.endTime);

  const handlePlusButton = () => {
    console.log("plus");
  };

  return (
    <Flex justify={"center"}>
      <Card w={"50%"}>
        <CardBody>
          <Flex h={"100%"} justifyContent={"center"} alignContent={"center"}>
            <Flex flexDirection={"column"} gap={"10px"} h={"100%"}>
              <Text>{props.name}</Text>
              <Text>{props.title}</Text>
              <Text>
                Dodane przez: {props.user.name} {props.user.surname}
              </Text>
              <Text>{`od ${start.getDay()}-${start.getMonth()}-${start.getFullYear()}r. ${start.getHours()}:${start.getMinutes()} do ${end.getDay()}-${end.getMonth()}-${end.getFullYear()}r. ${end.getHours()}:${end.getMinutes()}`}</Text>
            </Flex>
            <Flex alignContent={"center"} h="100%" align={"center"}>
              <Button
                h="50%"
                marginLeft={"40px"}
                w="42px"
                onClick={handlePlusButton}
              >
                <SmallAddIcon fontSize={"42px"} />
              </Button>
            </Flex>
          </Flex>
        </CardBody>
      </Card>
    </Flex>
  );
};

export default Ticket;
