import React, { useState } from "react";
import { FormControl, FormLabel } from "@chakra-ui/form-control";
import { Input, InputGroup, InputRightElement } from "@chakra-ui/input";
import { Button } from "@chakra-ui/button";
import { VStack } from "@chakra-ui/layout";

const Signup = () => {
  const [show, setShow] = useState(false);
  const [name, setName] = useState();
  const [email, setEmail] = useState();
  const [confirmpassword, setConfirmpassword] = useState();
  const [password, setPassword] = useState();
  const [pic, setPic] = useState();

  const handleClick = () => setShow(!show);

  const postDetails = (pics) => {};

  const submitHandler = () => {};
  return (
    <VStack spacing="5px">
      <FormControl id="fist-name" isRequired>
        <FormLabel>
          Name
          <Input
            placeholder="Enter Your Name"
            onChange={(e) => setName(e.target.value)}
          />
        </FormLabel>
      </FormControl>
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
      <FormControl id="Cpassword" isRequired>
        <FormLabel>
          Confirm Password
          <InputGroup>
            <Input
              type={show ? "text" : "password"}
              placeholder="Confirm Password"
              onChange={(e) => setConfirmpassword(e.target.value)}
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
      <FormControl id="pic">
        <FormLabel>Upload your picture</FormLabel>
        <Input
          type="file"
          p={1.5}
          accept="image/*"
          onChange={(e) => postDetails(e.target.files[0])}
        />
      </FormControl>
      <Button
        colorScheme="blue"
        width="100%"
        style={{ marginTop: 15 }}
        onClick={submitHandler}
      >
        Sign Up
      </Button>
    </VStack>
  );
};

export default Signup;
