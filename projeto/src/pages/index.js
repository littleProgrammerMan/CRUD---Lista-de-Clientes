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
  const [id, setId] = useState(null);

  const [clients, setClients] = useState([]);

  const [name, setName] = useState("");

  const [email, setEmail] = useState("");

  const handleSubmitCreateClient = (e) => {
    e.preventDefault();
    if (!name && email) return;

    setClients(clients.concat({ id: new Date().getMilliseconds().toString(), name, email }));

    setName("");
    setEmail("");
  };

  const handleSubmitUpdateClient = (e) => {
    e.preventDefault();
    if (!name && email) return;

    setClients(clients.map(client => client.id === id ? {name, aemail, id: id} : client));

    setName("");
    setEmail("");
  };

  const handleDeleteClient = (id) => {
    setClients(clients.filter(client => client.id !== id))
  }

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
  }

  return (
    <Box margin="4">
      <Flex color="white" justifyContent="space-between">
        <Text color="black" fontSize="2xl">
          Lista de Clientes
        </Text>

        <Button colorScheme="blue">+</Button>
      </Flex>

      <VStack marginY="1rem" as="form" onSubmit={id ? handleSubmitUpdateClient : handleSubmitCreateClient}>
        <InputForm
          name="name"
          label="Nome"
          value={name}
          type="text"
          onChange={(e) => handleChangeName(e.target.value)}
        />
        <InputForm
          name="email"
          label="Email"
          value={email}
          type="email"
          onChange={(e) => handleChangeEmail(e.target.value)}
        />
        <Button
          fontSize="sm"
          alignSelf="flex-end"
          colorScheme="blue"
          type="submit"
        >
          {id ? 'Atualizar' : 'Cadastrar'}
        </Button>
      </VStack>

      <TableContainer>
        <Table variant="simple">
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
                    <Button size="sm" fontSize="smaller" colorScheme="yellow" onClick={() => handleShowUpdateClientForm(client)}>
                      Editar
                    </Button>
                    <Button size="sm" fontSize="smaller" colorScheme="red" onClick={() => handleDeleteClient(client.id)}>
                      Remover
                    </Button>
                  </Flex>
                </Td>
              </Tr>
            ))}
          </Tbody>
        </Table>
      </TableContainer>
    </Box>
  );
}
