import { useState } from "react";
import {
  VStack,
  Button,
  Flex,
  Text,
  Box,
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  TableContainer,
} from "@chakra-ui/react";

import InputForm from "../components/input/";

export default function Home() {
  const [clients, setClients] = useState([]);

  const [isFormOpen, setIsFormOpen] = useState(false);

  const [id, setId] = useState(null);

  const [name, setName] = useState("");

  const [email, setEmail] = useState("");

  const [errors, setErrors] = useState({ name: null, email: null });

  const isValidFormData = () => {
    if (!name) {
      setErrors({ name: "Name is required" });
      return false;
    }

    if (!email) {
      setErrors({ email: "Email is required" });
      return false;
    }

    if (clients.some((client) => client.email === email && client.id !== id)) {
      setErrors({ email: "Email already in use" });
      return;
    }

    setErrors({});
    return true;
  };

  const handleSubmitCreateClient = async (e) => {
    e.preventDefault();

    if (!isValidFormData()) return;

    try {
      const response = await api.post('/clients', {name, email})

      console.log(response);

      // setClients(
      //   clients.concat({
      //     name,
      //     email,
      //   })
      // );

      // setName("");
      // setEmail("");
      // toggleFormState();
    } catch (err) {
      console.log();
    }
  };

  const handleSubmitUpdateClient = (e) => {
    e.preventDefault();

    if (!isValidFormData()) return;

    setClients(
      clients.map((client) =>
        client.id === id ? { name, email, id: id } : client
      )
    );

    setName("");
    setEmail("");
    setId(null);
    toggleFormState();
  };

  const handleDeleteClient = (id) => {
    setClients(clients.filter((client) => client.id !== id));
  };

  const handleChangeName = (text) => {
    setName(text);
  };

  const handleChangeEmail = (text) => {
    setEmail(text);
  };

  const handleShowUpdateClientForm = (client) => {
    setId(client.id);
    setName(client.name);
    setEmail(client.email);
    setIsFormOpen(true);
  };

  const toggleFormState = () => {
    setIsFormOpen(!isFormOpen);
  };

  return (
    <Box margin="4">
      <Flex color="white" justifyContent="space-between">
        <Text color="black" fontSize="2xl">
          Lista de Clientes
        </Text>

        <Button colorScheme="blue" onClick={toggleFormState}>
          {isFormOpen ? "-" : "+"}
        </Button>
      </Flex>

      {isFormOpen && (
        <VStack
          marginY="1rem"
          as="form"
          onSubmit={id ? handleSubmitUpdateClient : handleSubmitCreateClient}
        >
          <InputForm
            label="Nome"
            name="name"
            value={name}
            onChange={(e) => handleChangeName(e.target.value)}
            error={errors.name}
          />
          <InputForm
            label="Email"
            name="email"
            type="email"
            value={email}
            onChange={(e) => handleChangeEmail(e.target.value)}
            error={errors.email}
          />
          <Button
            fontSize="sm"
            alignSelf="flex-end"
            colorScheme="blue"
            type="submit"
          >
            {id ? "Atualizar" : "Cadastrar"}
          </Button>
        </VStack>
      )}

      <Table variant="simple" my="10">
        <Thead bgColor="blue.500">
          <Tr>
            <Th textColor="white">Name</Th>
            <Th textColor="white">Email</Th>
            <Th textColor="white">Action</Th>
          </Tr>
        </Thead>
        <Tbody>
          {clients.map((client) => (
            <Tr key={clients.email}>
              <Td>{client.name}</Td>
              <Td>{client.email}</Td>
              <Td>
                <Flex justifyContent="space-between">
                  <Button
                    size="sm"
                    fontSize="smaller"
                    colorScheme="yellow"
                    onClick={() => handleShowUpdateClientForm(client)}
                  >
                    Editar
                  </Button>
                  <Button
                    size="sm"
                    fontSize="smaller"
                    colorScheme="red"
                    onClick={() => handleDeleteClient(client.id)}
                  >
                    Remover
                  </Button>
                </Flex>
              </Td>
            </Tr>
          ))}
        </Tbody>
      </Table>
    </Box>
  );
}
