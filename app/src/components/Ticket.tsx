import { SmallAddIcon } from "@chakra-ui/icons";
import { Button, Card, CardBody, Flex, Stack, Text } from "@chakra-ui/react";
import { useMutation } from "react-query";
import axios from "../config/axios";

const Ticket = (props: any) => {
  const start = new Date(props.startTime);
  const end = new Date(props.endTime);

  const handlePlusButton = () => {
    console.log("plus");
  };

  const { mutate: approveOrDisapproveTicket } = useMutation(
    (data: any) => axios.put("/tickets/approveOrDisapproveTicket", data),
    {
      onSuccess: () => {
        props.onSuccess();
      },
    }
  );

  return (
    <Flex justify={"center"}>
      <Card width={"50%"}>
        <CardBody>
          <Flex
            h={"100%"}
            justifyContent={"space-between"}
            alignContent={"center"}
          >
            <Flex flexDirection={"column"} gap={"10px"} h={"100%"}>
              <Text>{props.name}</Text>
              <Text>{props.title}</Text>
              <Text>
                Dodane przez: {props.user.name} {props.user.surname}
              </Text>
              <Text>{`od ${start.getDay()}-${start.getMonth()}-${start.getFullYear()}r. ${
                start.getHours() < 10
                  ? "0" + start.getHours()
                  : start.getHours()
              }:${
                start.getMinutes() < 10
                  ? "0" + start.getMinutes()
                  : start.getMinutes()
              } do ${end.getDay()}-${end.getMonth()}-${end.getFullYear()}r. ${
                end.getHours() < 10 ? "0" + end.getHours() : end.getHours()
              }:${
                end.getMinutes() < 10
                  ? "0" + end.getMinutes()
                  : end.getMinutes()
              }`}</Text>
            </Flex>
            <Flex alignContent={"center"} h="100%" align={"center"}>
              {props.isOwner && props.approved === null ? (
                <Stack>
                  <Button
                    bg="green.600"
                    _hover={{
                      bg: "green.700",
                    }}
                    onClick={() =>
                      approveOrDisapproveTicket({
                        ticketId: props.id,
                        status: true,
                      })
                    }
                  >
                    Approve
                  </Button>
                  <Button
                    onClick={() =>
                      approveOrDisapproveTicket({
                        ticketId: props.id,
                        status: false,
                      })
                    }
                    bg="red.600"
                    _hover={{
                      bg: "red.700",
                    }}
                  >
                    Reject
                  </Button>
                </Stack>
              ) : props.approved === null ? (
                <Text color={"yellow.700"}>Pending</Text>
              ) : props.approved ? (
                <Text color="green.700">Approved</Text>
              ) : (
                <Text color="red.700">Rejected</Text>
              )}
              <Button
                h="50%"
                marginLeft={"15px"}
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
