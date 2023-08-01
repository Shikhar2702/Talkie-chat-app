// ForgotPassword.js
import React, { useState } from "react";
import { FormControl, FormLabel } from "@chakra-ui/form-control";
import { Input } from "@chakra-ui/input";
import { Button } from "@chakra-ui/button";
import { VStack, Flex } from "@chakra-ui/layout";
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
    <Flex
      justifyContent="center"
      alignItems="center"
      h="100%"
      w="100%"
      className="PaasChange"
    >
      <VStack
        bg="white"
        p="20px"
        justifyContent="center"
        borderRadius="lg"
        boxShadow="md"
        alignItems="center"
      >
        <FormControl id="email" isRequired>
          <FormLabel>Email</FormLabel>
          <Input
            borderColor="black"
            placeholder="Enter Your Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </FormControl>
        <Button
          colorScheme="blue"
          width="100%"
          maxWidth="400px" // Responsive width
          mt="15px" // Margin top
          onClick={submitHandler}
          isLoading={loading}
        >
          Request Password Reset
        </Button>
      </VStack>
    </Flex>
  );
};

export default ForgotPassword;
