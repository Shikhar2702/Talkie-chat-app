import React, { useState } from "react";
import { FormControl, FormLabel } from "@chakra-ui/form-control";
import { Input, InputGroup, InputRightElement } from "@chakra-ui/input";
import { Button } from "@chakra-ui/button";
import { VStack } from "@chakra-ui/layout";

const Login = () => {
  const [show, setShow] = useState(false);
  const [password, setPassword] = useState();
  const [email, setEmail] = useState();
  const [pic, setPic] = useState();

  const handleClick = () => setShow(!show);

  const submitHandler = () => {};
  return (
    <VStack spacing="5px">
      <FormControl id="email" isRequired>
        <FormLabel>
          Email
          <Input
            placeholder="Enter Your Email"
            onChange={(e) => setEmail(e.target.value)}
          />
        </FormLabel>
      </FormControl>
      <FormControl id="password" isRequired>
        <FormLabel>
          Password
          <InputGroup>
            <Input
              type={show ? "text" : "password"}
              placeholder="Enter Your Password"
              onChange={(e) => setPassword(e.target.value)}
            />
            <InputRightElement width="4.5rem">
              <Button
                h="1.75rem"
                size="sm"
                onClick={handleClick}
                colorScheme="none"
              >
                {show ? "Hide" : "Show"}
              </Button>
            </InputRightElement>
          </InputGroup>
        </FormLabel>
      </FormControl>
      <Button
        colorScheme="blue"
        width="100%"
        style={{ marginTop: 15 }}
        onClick={submitHandler}
      >
        Login
      </Button>
      <Button
        variant="solid"
        colorScheme="green"
        width="100%"
        onClick={() => {
          setEmail("guest@example.com");
          setPassword("123456");
        }}
      >
        Get Guest User Credentials
      </Button>
    </VStack>
  );
};

export default Login;
