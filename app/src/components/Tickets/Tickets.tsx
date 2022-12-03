import { Container } from "@chakra-ui/react";
import * as React from "react";
import AddTicketsModal from "./AddTicketModal";

const Tickets: React.FunctionComponent = () => {
  return (
    <Container pt={"32"}>
      <h1>Tickets</h1>
      <AddTicketsModal />
    </Container>
  );
};

export default Tickets;
