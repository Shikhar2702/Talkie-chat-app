import React, { useState } from "react";
import { useHistory, useParams } from "react-router-dom";
import { FormControl, FormLabel } from "@chakra-ui/form-control";
import { Input, InputGroup, InputRightElement } from "@chakra-ui/input";
import { Button } from "@chakra-ui/button";
import { VStack, Flex } from "@chakra-ui/layout";
import { useToast } from "@chakra-ui/react";
import axios from "axios";

const ResetPassword = () => {
  const [show, setShow] = useState(false);
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const history = useHistory();
  const toast = useToast();
  const { resetToken } = useParams();

  const handleClick = () => setShow(!show);

  const submitHandler = async () => {
    setLoading(true);
    if (!password) {
      toast({
        title: "Please enter a new password",
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
      console.log(resetToken);
      const { data } = await axios.put(
        `/api/user/resetpassword/${resetToken}`,
        {
          password,
        },
        config
      );
      toast({
        title: "Password Reset Successful",
        status: "success",
        duration: 5000,
        isClosable: true,
        position: "bottom",
      });
      setLoading(false);
      history.push("/"); // Redirect to login page after successful password reset
    } catch (error) {
      toast({
        title: "Error Occurred",
        description: error.response.data.message,
        status: "error",
        duration: 5000,
        isClosable: true,
        position: "bottom",
      });
      setLoading(false);
    }
  };

  // ... your existing code ...

  return (
    <Flex justifyContent="center" alignItems="center" h="100%" w="100%">
      <VStack spacing="5px" maxW="400px" bg="white" p="7" borderRadius="lg">
        <FormControl id="password" isRequired>
          <FormLabel>
            New Password
            <InputGroup>
              <Input
                borderColor="black"
                type={show ? "text" : "password"}
                placeholder="Enter New Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              <InputRightElement width="4.5rem">
                <Button
                  h="1.75rem"
                  size="sm"
                  onClick={handleClick}
                  colorScheme="none"
                  color="black"
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
          isLoading={loading}
        >
          Reset Password
        </Button>
      </VStack>
    </Flex>
  );
};
export default ResetPassword;
