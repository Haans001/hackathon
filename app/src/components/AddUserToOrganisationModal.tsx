import {
  Button,
  FormControl,
  FormLabel,
  Input,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  Text,
} from "@chakra-ui/react";
import * as React from "react";
import { useMutation } from "react-query";
import axios from "../config/axios";

interface Props {
  isOpen: boolean;
  onClose: () => void;
  organisationId: number;
}

const AddUserToOrganisationModal: React.FunctionComponent<Props> = ({
  isOpen,
  onClose,
  organisationId,
}) => {
  const initialRef = React.useRef(null);
  const finalRef = React.useRef(null);

  const [email, setEmail] = React.useState("");
  const [error, setError] = React.useState("");

  const { mutateAsync: addUserToOrganisation } = useMutation((data: any) =>
    axios.put("/organisations/addUser", data)
  );

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const data = {
      email,
      organisationId,
    };
    try {
      await addUserToOrganisation(data);
      onClose();
    } catch (error: any) {
      setError(error?.response.data.message);
    }
  };

  return (
    <>
      <Modal
        initialFocusRef={initialRef}
        finalFocusRef={finalRef}
        isOpen={isOpen}
        onClose={onClose}
      >
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Dodaj członka do organizacji</ModalHeader>
          <ModalCloseButton />

          <form onSubmit={handleSubmit}>
            <ModalBody pb={3}>
              <FormControl>
                <FormLabel>Email nowego członka</FormLabel>
                <Input
                  ref={initialRef}
                  type="email"
                  title="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Podaj email członka"
                />
              </FormControl>
            </ModalBody>
            {error && (
              <Text ml={6} mb={6} fontSize="sm" color="tomato">
                {error}
              </Text>
            )}
            <ModalFooter>
              <Button colorScheme="blue" mr={3} type="submit">
                Save
              </Button>
              <Button onClick={onClose}>Cancel</Button>
            </ModalFooter>
          </form>
        </ModalContent>
      </Modal>
    </>
  );
};

export default AddUserToOrganisationModal;
