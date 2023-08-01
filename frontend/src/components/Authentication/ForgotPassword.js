// ForgotPassword.js
import React, { useState } from "react";
import { FormControl, FormLabel } from "@chakra-ui/form-control";
import { Input } from "@chakra-ui/input";
import { Button } from "@chakra-ui/button";
import { VStack, Flex, Text } from "@chakra-ui/layout";
import { useToast } from "@chakra-ui/react";
import axios from "axios";
import { useHistory } from "react-router-dom";
const ForgotPassword = () => {
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);
  const toast = useToast();

  const history = useHistory();
  const isValidEmail = (email) => {
    // Regular expression pattern for email validation
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailPattern.test(email);
  };

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
    if (!isValidEmail(email)) {
      toast({
        title: "Invalid Email",
        status: "warning",
        description: "Please enter a valid email address.",
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
      bg="#C2DEDC"
    >
      <VStack
        className="boxWithBackground"
        spacing="5px"
        maxW="400px"
        bg="none"
        p="7"
        borderRadius="lg"
        borderWidth="2px"
        borderColor="black"
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
        <Text>
          <p>
            In case you forget your password, don't worry! We've got you
            covered.
            <br />
            <br /> Click on the "Forgot Password" link on the login page, and
            we'll send a password reset link to your email you will provide
            here(Should be registered) . <br />
            Remember, the link will be valid for only <b>30 minutes</b> for
            security purposes, so be sure to act quickly. Please check your
            inbox, and don't forget to look in your junk or spam folders, just
            in case. Your account's security is our priority. <br />
            <br />
            If you face any issues, feel free to reach out to our support team
            at <br />
            <b>teamtalkie27@gmail.com.</b>
            <br />
            <br />
            <b>© Team Talkie</b>.
            <br />
            <br />
          </p>
        </Text>
      </VStack>
    </Flex>
  );
};

export default ForgotPassword;
