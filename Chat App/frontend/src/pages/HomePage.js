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
const HomePage = () => {
  return (
    <Container maxW="xl" centerContent>
      <Box
        d="flex"
        justifyItems="center"
        p={3}
        bg={"none"}
        w="100%"
        m="20px 0 5px 0"
        borderRadius="lg"
        borderWidth="1px"
        // border="none"
      >
        <Text fontSize="2xl" fontFamiy="Lato" color="white">
          Talkie
        </Text>
      </Box>
      <Box
        bg="none"
        w="100%"
        p={4}
        borderRadius="lg"
        color="white"
        borderWidth="1px"
      >
        <Tabs variant="soft-rounded">
          <TabList mb="1em">
            <Tab>Login</Tab>
            <Tab>Sign Up</Tab>
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
