import {Box, Heading, HStack, Image, Text, VStack } from "@chakra-ui/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import React from "react";

const ProjectCard = ({ title, description, imageSrc, ...props }) => {
  // Implement the UI for the Card component according to the instructions.
  // You should be able to implement the component with the elements imported above.
  // Feel free to import other UI components from Chakra UI if you wish to.
  return (
    <Box borderRadius="lg" overflow="hidden" bg="white" {...props}>
      <Image src={imageSrc} alt={title}/>
      <VStack align="start" spacing='12px' p={[2,5]}>
        <Heading color="black" size='md'>{title}</Heading>
        <Text noOfLines={2} color="black">{description}</Text>
          <HStack fontWeight="500" as='button' color="black">
            <Text>See more</Text>
            <FontAwesomeIcon icon={faArrowRight} size="1x" />
          </HStack>
      </VStack>
    </Box>
  );
};

export default ProjectCard;
