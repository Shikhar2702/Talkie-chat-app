import React from "react";
import {
  Container,
  Box,
  Text,
  Tab,
  TabList,
  TabPanel,
  TabPanels,
  Tabs,
} from "@chakra-ui/react";
import Login from "../components/Authentication/Login";
import Signup from "../components/Authentication/Signup";
// import { useEffect } from "react";
// import { useHistory } from "react-router";
import "../App.css";

const HomePage = () => {
  // const history = useHistory();

  // useEffect(() => {
  //   const user = JSON.parse(localStorage.getItem("userInfo"));

  //   if (user) history.push("/chats");
  // }, [history]);
  return (
    <Container maxW="xl" centerContent>
      <Box
        display="flex"
        justifyItems="center"
        p={3}
        w="100%"
        m="20px 0 5px 0"
        borderRadius="lg"
        borderWidth="1.5px"
        borderColor="black"
        bg="#BAD7E9"
        className="boxWithBackground"
        opacity="0.8"
      >
        <Text fontSize="4xl" fontfamiy="Lato" color="black" m="0 0 0 220px">
          Talkie
        </Text>
      </Box>
      <Box
        bg="#BAD7E9"
        opacity="0.95"
        w="100%"
        p={4}
        borderRadius="lg"
        borderWidth="1.5px"
        borderColor="black"
      >
        <Tabs variant="soft-rounded">
          <TabList mb="1em">
            <Tab color="black">Login</Tab>
            <Tab color="black">Sign Up</Tab>
          </TabList>
          <TabPanels>
            <TabPanel>
              <Login />
            </TabPanel>
            <TabPanel>
              <Signup />
            </TabPanel>
          </TabPanels>
        </Tabs>
      </Box>
    </Container>
  );
};

export default HomePage;
