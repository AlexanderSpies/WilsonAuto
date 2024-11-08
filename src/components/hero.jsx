import React from "react";
import { Box, Text, VStack, Heading } from "@chakra-ui/react";
import { motion } from "framer-motion";

// MotionBox for animations
const MotionBox = motion(Box);

const testimonials = [
  {
    name: "John Doe",
    feedback: "Wilson Auto transformed my car! The detailing was flawless, and my car looks brand new!",
  },
  {
    name: "Jane Smith",
    feedback: "Highly recommend! Professional service and attention to detail. I’ll definitely be back.",
  },
  {
    name: "Mike Johnson",
    feedback: "The team went above and beyond. My car hasn't looked this good since I bought it.",
  },
];

const HeroSection = () => (
  <MotionBox
    width={{ base: "95%", md: "70%", lg: "60%" }}
    p={{ base: 6, md: 10 }}
    backdropFilter="blur(12px)"
    borderRadius="xl"
    boxShadow="dark-lg"
    bgGradient="linear(to-r, rgba(20, 20, 20, 0.9), rgba(30, 30, 30, 0.8))"
    initial={{ opacity: 0, y: -30 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 1, ease: "easeOut" }}
    mx="auto"
    my={10}
  >
    <Heading
      size="2xl"
      color="gray.100"
      textAlign="center"
      mb={8}
      fontWeight="extrabold"
      textTransform="uppercase"
      letterSpacing="wide"
    >
      Premium Car Detailing
    </Heading>
    <Text fontSize={{ base: "lg", md: "xl" }} color="gray.400" textAlign="center" mb={10}>
      Our clients love our attention to detail:
    </Text>

    {/* Testimonial List */}
    <VStack spacing={8} align="stretch">
      {testimonials.map((testimonial, index) => (
        <MotionBox
          key={index}
          bg="gray.800"
          border="1px"
          borderColor="gray.600"
          borderRadius="lg"
          p={8}
          boxShadow="lg"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: index * 0.3, ease: "easeOut" }}
          _hover={{ transform: "scale(1.02)", boxShadow: "2xl" }}
        >
          <Text
            fontSize="xl"
            fontStyle="italic"
            color="gray.300"
            mb={4}
            lineHeight="taller"
            textAlign="justify"
          >
            "{testimonial.feedback}"
          </Text>
          <Text fontSize="lg" fontWeight="bold" color="gray.200" textAlign="right">
            - {testimonial.name}
          </Text>
        </MotionBox>
      ))}
    </VStack>
  </MotionBox>
);

export default HeroSection;
