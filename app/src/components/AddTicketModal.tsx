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
} from "@chakra-ui/react";
import * as React from "react";
import { useMutation } from "react-query";
import axios from "../config/axios";

interface Props {
  isOpen: boolean;
  onClose: () => void;
  organisationId: number;
}

const AddTicketsModal: React.FunctionComponent<Props> = ({
  isOpen,
  onClose,
  organisationId,
}) => {
  const initialRef = React.useRef(null);
  const finalRef = React.useRef(null);

  const [title, setTitle] = React.useState("");
  const [startTime, setStartTime] = React.useState("");
  const [endTime, setEndTime] = React.useState("");

  const { mutateAsync: createTicket } = useMutation((data: any) =>
    axios.post("/tickets/create", data)
  );

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const data = {
      title,
      startTime: new Date(startTime).toISOString(),
      endTime: new Date(endTime).toISOString(),
      organisationId,
    };

    try {
      await createTicket(data);
      onClose();
    } catch (error) {
      console.log(error);
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
          <ModalHeader>Dodaj urlop</ModalHeader>
          <ModalCloseButton />
          <form onSubmit={handleSubmit}>
            <ModalBody pb={6}>
              <FormControl>
                <FormLabel>Powód</FormLabel>
                <Input
                  ref={initialRef}
                  type="text"
                  title="title"
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                  placeholder="Podaj powód"
                />
              </FormControl>
              <FormControl mt={4}>
                <FormLabel>Od kiedy</FormLabel>
                <Input
                  placeholder="Wybierz datę i godzine"
                  size="md"
                  type="datetime-local"
                  value={startTime}
                  onChange={(e) => setStartTime(e.target.value)}
                />
              </FormControl>
              <FormControl mt={4}>
                <FormLabel>Do kiedy</FormLabel>
                <Input
                  placeholder="Wybierz datę i godzine"
                  size="md"
                  type="datetime-local"
                  value={endTime}
                  onChange={(e) => setEndTime(e.target.value)}
                />
              </FormControl>
            </ModalBody>
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

export default AddTicketsModal;
