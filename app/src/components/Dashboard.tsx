import { Flex, FormControl, FormLabel, Input } from "@chakra-ui/react";
import * as React from "react";
import { useState } from "react";
import { useQuery } from "react-query";
import axios from "../config/axios";
import Organization from "./Organization";

interface OrganizationType {
  id: number;
  ownerId: number;
  organizationName: string;
  owner: string;
  usersCount: number;
  logo: string;
}

const Dashboard = () => {
  const [term, setTerm] = useState("");

  const { data } = useQuery("organisations", () =>
    axios.get("/organisations/getAll")
  );

  // console.log(data?.data);

  const organizations = React.useMemo<OrganizationType[]>(() => {
    const d = data?.data.map(
      (org: { id: any; name: any; users: any[]; ownerId: any }) => {
        const owner = org.users.find(
          (user: { userId: any }) => user.userId === org.ownerId
        );
        console.log(owner.user, org);
        return {
          id: org.id,
          organizationName: org.name,
          ownerId: org.ownerId,
          owner: `${owner.user.name} ${owner.user.surname}`,
          usersCount: org.users.length,
          logo: "https://cdn.pixabay.com/photo/2021/12/26/19/27/nature-6895756_640.jpg",
        };
      }
    );

    return d;
  }, [data?.data]);

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
      {organizations?.length &&
        organizations
          .filter((org) =>
            org.organizationName
              .toLocaleLowerCase()
              .includes(term.toLowerCase())
          )
          .map((organization) => (
            <Organization key={organization.id} {...organization} />
          ))}
    </>
  );
};

export default Dashboard;
