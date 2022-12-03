import { Flex, FormControl, FormLabel, Input } from "@chakra-ui/react";
import { useState } from "react";
import Organization from "./Organization";

const Dashboard = () => {
  interface Organization {
    id: number;
    ownerId: number;
    organizationName: string;
    owner: string;
    usersCount: number;
    logo: string;
  }

  const organizations: Organization[] = [
    {
      id: 0,
      ownerId: 0,
      organizationName: "Organizacja 1",
      owner: "Jan Rapacz",
      usersCount: 23,
      logo: "https://cdn.pixabay.com/photo/2021/12/26/19/27/nature-6895756_640.jpg",
    },
    {
      id: 1,
      ownerId: 1,
      organizationName: "Organizacja 2",
      owner: "Wiktor Rzeznicki",
      usersCount: 52,
      logo: "https://cdn.pixabay.com/photo/2021/12/26/19/27/nature-6895756_640.jpg",
    },
    {
      id: 2,
      ownerId: 2,
      organizationName: "Organizacja 3",
      owner: "Piotr Kaczorowski",
      usersCount: 52,
      logo: "https://cdn.pixabay.com/photo/2021/12/26/19/27/nature-6895756_640.jpg",
    },
    {
      id: 3,
      ownerId: 3,
      organizationName: "Organizacja 4",
      owner: "Jakub Wajstak",
      usersCount: 64,
      logo: "https://cdn.pixabay.com/photo/2021/12/26/19/27/nature-6895756_640.jpg",
    },
  ];

  const orgElements = organizations.map((organization) => (
    <Organization key={organization.id} {...organization} />
  ));

  const [term, setTerm] = useState("");

  const handleForm = (e: any) => {
    e.preventDefault();
    setTerm(e.target.value);
  };

  return (
    <>
      <Flex justify="center" align="center" pb="20px">
        <FormControl w="40%">
          <FormLabel textAlign="center" fontSize="32px">
            Wyszukiwarka
          </FormLabel>
          <Input
            autoFocus
            value={term}
            onChange={handleForm}
            placeholder="Wyszukaj swoja organizacje"
          />
        </FormControl>
      </Flex>
      {organizations
        .filter((org) =>
          org.organizationName.toLocaleLowerCase().includes(term)
        )
        .map((organization) => (
          <Organization key={organization.id} {...organization} />
        ))}
    </>
  );
};

export default Dashboard;
