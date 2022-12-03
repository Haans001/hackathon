import { Container } from "@chakra-ui/react";
import * as React from "react";
import { useQuery } from "react-query";
import axios from "../../config/axios";
import AddTicketsModal from "./AddTicketModal";

const Tickets: React.FunctionComponent = () => {
  const { data } = useQuery("/tickets/getUserTickets", () =>
    axios.get("/tickets/getUserTickets")
  );

  console.log(data?.data);

  return (
    <Container pt={"32"}>
      <h1>Tickets</h1>
      <AddTicketsModal />
    </Container>
  );
};

export default Tickets;
