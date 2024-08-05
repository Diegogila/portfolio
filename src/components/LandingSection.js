import React from "react";
import { Avatar, Heading, VStack } from "@chakra-ui/react";
import FullScreenSection from "./FullScreenSection";


const name = 'Pete'
const imageSrc = 'https://i.pravatar.cc/150?img=7'
const greeting = `Hello, I am ${name}!`;
const bio1 = "A frontend developer";
const bio2 = "specialised in React";


// Implement the UI for the LandingSection component according to the instructions.
// Use a combination of Avatar, Heading and VStack components.
const LandingSection = () => (
  <FullScreenSection
    justifyContent="center"
    alignItems="center"
    isDarkBackground
    backgroundColor="#2A4365"
  >
    <VStack spacing={12}>
      <VStack>
        <Avatar name={name} src={imageSrc} size='xl'/>
        <Heading as="h2" size="sm">{greeting}</Heading>
      </VStack>
      <VStack>
        <Heading as="h1" size="lg">{bio1}</Heading>
        <Heading as="h1" size="lg">{bio2}</Heading>
      </VStack>
    </VStack>
  </FullScreenSection>
);

export default LandingSection;
