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
  Select,
  useDisclosure,
} from "@chakra-ui/react";
import * as React from "react";

const AddTicketsModal = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  const initialRef = React.useRef(null);
  const finalRef = React.useRef(null);

  const [title, setTitle] = React.useState("");
  const [startTime, setStartTime] = React.useState("");
  const [endTime, setEndTime] = React.useState("");

  return (
    <>
      <Button mt={6} onClick={onOpen}>
        Add Ticket
      </Button>

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
            <FormControl mt={4}>
              <FormLabel>Wybierz organizacje</FormLabel>
              <Select placeholder="Select option">
                <option value="option1">Organizacja 1</option>
                <option value="option2">Organizacja 2</option>
                <option value="option3">Organizacja 3</option>
              </Select>
            </FormControl>
          </ModalBody>

          <ModalFooter>
            <Button colorScheme="blue" mr={3}>
              Save
            </Button>
            <Button onClick={onClose}>Cancel</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
};

export default AddTicketsModal;
