// ForgotPassword.js
import React, { useState } from "react";
import { FormControl, FormLabel } from "@chakra-ui/form-control";
import { Input } from "@chakra-ui/input";
import { Button } from "@chakra-ui/button";
import { VStack, Box, Center } from "@chakra-ui/layout";
import { useToast } from "@chakra-ui/react";
import axios from "axios";
import { useHistory } from "react-router-dom";
const ForgotPassword = () => {
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);
  const toast = useToast();

  const history = useHistory();

  const submitHandler = async () => {
    setLoading(true);
    if (!email) {
      toast({
        title: "Please enter your email",
        status: "warning",
        duration: 5000,
        isClosable: true,
        position: "bottom",
      });
      setLoading(false);
      return;
    }

    try {
      const config = {
        headers: {
          "Content-type": "application/json",
        },
      };
      const { data } = await axios.post(
        "/api/user/forgotpassword",
        {
          email,
        },
        config
      );
      toast({
        title: "Password Reset Email Sent",
        description:
          "An email with instructions to reset your password has been sent. Please check inbox, spam or junk folder.",
        status: "success",
        duration: 5000,
        isClosable: true,
        position: "bottom",
      });

      history.push("/");
      setLoading(false);
    } catch (error) {
      toast({
        title: "Error Occurred,",
        description: error.response.data.message,
        status: "error",
        duration: 5000,
        isClosable: true,
        position: "bottom",
      });
      setLoading(false);
    }
  };

  return (
    <Center
      h="100vh"
      bg="white"
      p="20px"
      height="100%"
      display="center"
      borderRadius="lg"
    >
      <VStack spacing="5px">
        <FormControl id="email" isRequired>
          <FormLabel>
            Email
            <Input
              display="flex"
              borderColor="black"
              placeholder="Enter Your Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </FormLabel>
        </FormControl>
        <Button
          colorScheme="blue"
          width="auto"
          style={{ marginTop: 15 }}
          onClick={submitHandler}
          isLoading={loading}
        >
          Request Password Reset
        </Button>
      </VStack>
    </Center>
  );
};

export default ForgotPassword;
