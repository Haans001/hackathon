import {
  Box,
  Button,
  Container,
  Flex,
  Heading,
  useDisclosure,
} from "@chakra-ui/react";
import axios from "../config/axios";

import { StarIcon } from "@chakra-ui/icons";
import {
  SimpleGrid,
  Stat,
  StatLabel,
  StatNumber,
  useColorModeValue,
} from "@chakra-ui/react";
import { BsPerson } from "react-icons/bs";
import { GoLocation } from "react-icons/go";

import { BellIcon } from "@chakra-ui/icons";
import * as React from "react";
import { useQuery } from "react-query";
import { useParams } from "react-router-dom";
import AddTicketsModal from "./AddTicketModal";
import Ticket from "./Ticket";

interface StatsCardProps {
  title: string;
  stat: string;
  icon: any;
}
function StatsCard(props: StatsCardProps) {
  const { title, stat, icon } = props;
  return (
    <Stat
      px={{ base: 2, md: 4 }}
      py={"5"}
      shadow={"xl"}
      border={"1px solid"}
      borderColor={useColorModeValue("gray.800", "gray.500")}
      rounded={"lg"}
    >
      <Flex justifyContent={"space-between"}>
        <Box pl={{ base: 2, md: 4 }}>
          <StatLabel fontWeight={"medium"}>{title}</StatLabel>
          <StatNumber fontSize={"2xl"} fontWeight={"medium"}>
            {stat}
          </StatNumber>
        </Box>
        <Box
          my={"auto"}
          color={useColorModeValue("gray.800", "gray.200")}
          alignContent={"center"}
        >
          {icon}
        </Box>
      </Flex>
    </Stat>
  );
}

interface TicketType {
  id: number;
  title: string;
  name: string;
  startTime: string;
  endTime: string;
}

const tickets: TicketType[] = [
  {
    id: 0,
    name: "Jakub Wajstak",
    title: "Wyjazd na wakacje",
    startTime: "2022-12-14T11:45:00.000Z",
    endTime: "2022-12-16T12:34:00.000Z",
  },
  {
    id: 1,
    title: "Wyjazd do rodziny",
    name: "Marcin Sobota",
    startTime: "2022-12-14T11:45:00.000Z",
    endTime: "2022-12-16T12:34:00.000Z",
  },
  {
    id: 2,
    title: "Wyjazd na pogrzeb",
    name: "Marcin Niedziela",
    startTime: "2022-12-14T11:45:00.000Z",
    endTime: "2022-12-16T12:34:00.000Z",
  },
];

const UserView = () => {
  const { isOpen, onClose, onOpen } = useDisclosure();
  const params = useParams();

  const { data } = useQuery("organisation", () =>
    axios.get(`/organisations/${params.id}`)
  );

  const content = React.useMemo(() => {
    if (data) {
      const organisation = data.data;

      return {
        name: organisation.name,
        usersCount: organisation.users.length,
        ownerName: `${organisation.owner.name} ${organisation.owner.surname}`,
      };
    }
  }, [data]);

  return content ? (
    <Container py={5} maxW={"container.lg"}>
      <Flex direction="column" gap={8}>
        <Flex justify="space-between">
          <Heading as={"h2"}>Nazwa firmy {content.name}</Heading>
        </Flex>
        <SimpleGrid columns={{ base: 1, md: 3 }} spacing={{ base: 5, lg: 8 }}>
          <StatsCard
            title={"Owner"}
            stat={content.ownerName}
            icon={<StarIcon width={"2.5em"} height={"2.5em"} />}
          />
          <StatsCard
            title={"Członkowie"}
            stat={content.usersCount}
            icon={<BsPerson size={"3em"} />}
          />
          <StatsCard
            title={"Lokalizacja"}
            stat={"Gliwice"}
            icon={<GoLocation size={"3em"} />}
          />
        </SimpleGrid>
        <Flex justify="right">
          <Button
            rightIcon={<BellIcon />}
            color={"gray.100"}
            bg={"purple.600"}
            onClick={onOpen}
            _hover={{
              bg: "purple.700",
            }}
          >
            Wyślij prośbę o urlop
          </Button>
        </Flex>
      </Flex>
      <AddTicketsModal
        isOpen={isOpen}
        onClose={onClose}
        organisationId={parseInt(params.id as string)}
      />
      <Flex flexDirection="column" gap={"10px"}>
        {tickets.map((ticket) => (
          <Ticket key={ticket.id} {...ticket} />
        ))}
      </Flex>
    </Container>
  ) : null;
};

export default UserView;
