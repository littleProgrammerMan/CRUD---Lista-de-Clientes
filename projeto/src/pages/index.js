import { Button, VStack } from "@chakra-ui/react";
import {
  Flex,
  Text,
  Box,
  FormControl,
  FormLabel,
  FormHelperText,
  Input,
  Table,
  Thead,
  Tbody,
  Tfoot,
  Tr,
  Th,
  Td,
  TableCaption,
  TableContainer,
  HStack,
} from "@chakra-ui/react";

import InputForm from '../components/input/';

export default function Home() {
  return (
    <Box margin="4">
      <Flex color="white" justifyContent="space-between">
        <Text color="black" fontSize="2xl">
          Lista de Clientes
        </Text>

        <Button colorScheme="blue">+</Button>
      </Flex>

      <VStack marginY="1rem">
        <InputForm name="name" label="Nome"/>
        <InputForm name="email" label="Email" type="email"/>
        <Button fontSize="sm" alignSelf="flex-end" colorScheme="blue">
          Cadastro
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
            <Tr>
              <Td>Victor FullStack Dev</Td>
              <Td>vitinhobc.work@gmail.com</Td>
              <Td>
                <Flex justifyContent="space-between">
                  <Button size="sm" fontSize="smaller" colorScheme="yellow">
                    Editar
                  </Button>
                  <Button size="sm" fontSize="smaller" colorScheme="red">
                    Remover
                  </Button>
                </Flex>
              </Td>
            </Tr>
          </Tbody>
        </Table>
      </TableContainer>
    </Box>
  );
}
