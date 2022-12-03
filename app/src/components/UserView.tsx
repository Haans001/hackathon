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
import { useAuth } from "../providers/AuthProvider";
import AddTicketsModal from "./AddTicketModal";
import AddUserToOrganisationModal from "./AddUserToOrganisationModal";
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
  user: {
    name: string;
    surname: string;
  };
  startTime: string;
  endTime: string;
}

const UserView = () => {
  const {
    isOpen: isAddTicketsModalOpen,
    onClose: onAddTicketsModalClose,
    onOpen: onAddTicketModalOpen,
  } = useDisclosure();

  const {
    isOpen: isAddUserModalOpen,
    onClose: onAddUserModalClose,
    onOpen: onAddUserModalOpen,
  } = useDisclosure();

  const params = useParams();

  const { user } = useAuth();

  const { data, refetch } = useQuery("organisation", () =>
    axios.get(`/organisations/${params.id}`)
  );

  const content = React.useMemo(() => {
    if (data) {
      const organisation = data.data;
      console.log(organisation);

      return {
        ownerId: organisation.ownerId,
        name: organisation.name,
        usersCount: organisation.users.length,
        ownerName: `${organisation.owner.name} ${organisation.owner.surname}`,
        tickets: organisation.tickets as TicketType[],
      };
    }
  }, [data]);

  console.log(content?.tickets);

  const isOwner = content?.ownerId === user?.id;

  return content ? (
    <Container py={5} maxW={"container.lg"}>
      <Flex direction="column" gap={8}>
        <Flex justify="space-between">
          <Heading as={"h2"}>Nazwa firmy {content.name}</Heading>
          {isOwner ? (
            <Button
              onClick={onAddUserModalOpen}
              color={"gray.100"}
              bg={"purple.600"}
              _hover={{
                bg: "purple.700",
              }}
            >
              Dodaj członka
            </Button>
          ) : null}
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
            onClick={onAddTicketModalOpen}
            _hover={{
              bg: "purple.700",
            }}
          >
            Wyślij prośbę o urlop
          </Button>
        </Flex>
      </Flex>
      <AddTicketsModal
        isOpen={isAddTicketsModalOpen}
        onClose={onAddTicketsModalClose}
        organisationId={parseInt(params.id as string)}
      />
      <AddUserToOrganisationModal
        isOpen={isAddUserModalOpen}
        onClose={onAddUserModalClose}
        organisationId={parseInt(params.id as string)}
      />
      <Heading my={6} as={"h2"}>
        Zgłoszenia
      </Heading>

      <Flex flexDirection="column" gap={"10px"}>
        {content.tickets.map((ticket) => (
          <Ticket
            key={ticket.id}
            isOwner={isOwner}
            {...ticket}
            onSuccess={() => refetch()}
          />
        ))}
      </Flex>
    </Container>
  ) : null;
};

export default UserView;
