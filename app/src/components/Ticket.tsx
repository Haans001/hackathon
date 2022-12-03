import { MinusIcon, SmallAddIcon } from "@chakra-ui/icons";
import { Button, Card, CardBody, Flex, Text } from "@chakra-ui/react";

const Ticket = (props: any) => {
  const start = new Date(props.startTime);
  const end = new Date(props.endTime);

  const handlePlusButton = () => {
    console.log("plus");
  };

  const handleMinusButton = () => {
    console.log("minus");
  };

  return (
    <Flex justify={"center"}>
      <Card w={"50%"}>
        <CardBody>
          <Flex
            minHeight={"100%"}
            justifyContent={"center"}
            alignContent={"center"}
          >
            <Flex flexDirection={"column"} gap={"10px"} h={"100%"}>
              <Text>{props.title}</Text>
              <Text>W organizacji: {props.organizationName}</Text>
              <Text>{`od ${start.getDay()}-${start.getMonth()}-${start.getFullYear()}r. do ${end.getDay()}-${end.getMonth()}-${end.getFullYear()}r.`}</Text>
            </Flex>
            <Flex alignContent={"center"}>
              <Button w="32px" marginRight="10px" onClick={handleMinusButton}>
                <MinusIcon />
              </Button>
              <Button w="32px" onClick={handlePlusButton}>
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
