import {
  Button,
  Flex,
  FormControl,
  FormLabel,
  Heading,
  Input,
  Stack,
  Text,
  useColorModeValue,
} from "@chakra-ui/react";

import { useState } from "react";
import { useAuth } from "../providers/AuthProvider";

const LoginForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const { login } = useAuth();

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      await login({
        email,
        password,
      });
    } catch (error: any) {
      setError(error.message);
    }
  };

  return (
    <Flex
      minH={"100vh"}
      align={"center"}
      justify={"center"}
      bg={useColorModeValue("gray.50", "gray.800")}
    >
      <Stack spacing={8} mx={"auto"} maxW={"lg"} py={12} px={6}>
        <Stack align={"center"}>
          <Heading fontSize={"4xl"}>Logowanie</Heading>
        </Stack>
        <Flex
          rounded={"lg"}
          bg={useColorModeValue("white", "gray.700")}
          boxShadow={"lg"}
          p={8}
          minH={"300px"}
          align="center"
        >
          <form onSubmit={handleSubmit}>
            <Stack spacing={4}>
              <FormControl id="login">
                <FormLabel>Adres e-mail</FormLabel>
                <Input
                  autoFocus
                  type="email"
                  name="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  minW="380px"
                />
              </FormControl>
              <FormControl id="password">
                <FormLabel>Hasło</FormLabel>
                <Input
                  type="password"
                  name="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </FormControl>
              <Stack spacing={10}>
                <Button
                  marginTop={1}
                  bg={"purple.600"}
                  color={"white"}
                  _hover={{
                    bg: "purple.700",
                  }}
                  type="submit"
                >
                  Zaloguj się
                </Button>
                {error && (
                  <Text fontSize="sm" color="tomato">
                    {error}
                  </Text>
                )}
              </Stack>
            </Stack>
          </form>
        </Flex>
      </Stack>
    </Flex>
  );
};

export default LoginForm;
