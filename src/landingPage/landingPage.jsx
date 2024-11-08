import React from "react";
import {
  Box,
  VStack,
  Text,
  useMediaQuery,
  Container,
  useColorModeValue,
} from "@chakra-ui/react";
import { motion } from "framer-motion";
import Carousel from "../components/carousel.jsx";
import Booking from "../components/booking.jsx";
import Hero from '../components/hero.jsx';
import CarDetail from "./video/detail.mp4";

// Framer Motion for animations
const MotionBox = motion(Box);

const LandingPage = () => {
  const [isMobile] = useMediaQuery("(max-width: 896px)");
  const overlayColor = useColorModeValue(
    "rgba(20, 20, 20, 0.6)",  // Darker for light mode
    "rgba(30, 30, 30, 0.8)"   // Darker for dark mode
  );

  return (
    <Container
      maxW="container.xl"
      p={{ base: 4, md: 8 }}
      position="relative"
      color="gray.100" // Softer text color
      overflow="hidden"
    >
      {/* Background Video with Dark Overlay */}
      <Box position="fixed" width="100%" height="100%" zIndex={-2} top="0" left="0">
        <video
          autoPlay
          loop
          muted
          playsInline
          style={{
            position: "absolute",
            width: "100vw",
            height: "100vh",
            objectFit: "cover",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)", // Center the video
          }}
          src={CarDetail}
        />
        <Box
          position="absolute"
          top={0}
          left={0}
          width="100%"
          height="100%"
          bgGradient={`linear(to-b, ${overlayColor}, rgba(0,0,0,0.8))`}
          zIndex={-1}
        />
      </Box>

      {/* Main Content */}
      <VStack
        spacing={8}
        align="center"
        color="gray.200"
        textAlign="center"
        zIndex={2}
        mt={{ base: 16, md: 20 }}
      >
        {/* Header Text with Luxurious Font and Gradient */}
        <MotionBox
          width={{ base: "90%", md: "100%" }}
          p={{ base: 4, md: 8 }}
          backdropFilter="blur(12px)"
          borderRadius="lg"
          boxShadow="2xl"
          bg="rgba(20, 20, 20, 0.7)"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <Text
            fontFamily="heading"
            fontSize={{ base: "32px", md: "48px" }}
            fontWeight="bold"
            lineHeight="1.2"
            color="gray.100"
            textShadow="2px 2px 8px rgba(0,0,0,0.8)"
          >
            Luxury Auto Detailing
          </Text>
          <Text
            fontFamily="body"
            fontSize={{ base: "16px", md: "20px" }}
            lineHeight="1.8"
            color="gray.400"
            opacity={0.9}
            mt={4}
          >
            Since 1995, we’ve transformed vehicles with unmatched care and
            expertise. From sports cars to yachts, trust Wilson Auto and Boat
            Detailing to bring your prized possessions back to life.
          </Text>
        </MotionBox>
        <Hero />
        
        {/* Booking Form and Carousel */}
        <VStack
          spacing={{ base: 6, md: 12 }}
          width="100%"
          flexDirection={{ base: "column", md: "column" }}
          display="flex"
          alignItems="center"
          justifyContent="center"
          align="start"
          justify="center"
          zIndex={2}
        >
          {/* Carousel with Smooth Animation */}
          <MotionBox
            width={{ base: "90%", md: "70%" }}
            p={6}
            boxShadow="lg"
            borderRadius="lg"
            bg="rgba(30, 30, 30, 0.85)"
            backdropFilter="blur(10px)"
            _hover={{
              transform: "scale(1.02)",
              boxShadow: "xl",
              transition: "0.4s ease-in-out",
            }}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            display="flex"
            justifyContent="center"
            alignItems="center"
          >
            <Carousel />
          </MotionBox>

          {/* Booking Form with Modern Styling */}
          <MotionBox
            width={{ base: "90%", md: "70%" }}
            p={6}
            boxShadow="lg"
            borderRadius="lg"
            bg="rgba(30, 30, 30, 0.85)"
            backdropFilter="blur(10px)"
            _hover={{
              transform: "scale(1.02)",
              boxShadow: "xl",
              transition: "0.4s ease-in-out",
            }}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            display="flex"
            justifyContent="center"
            alignItems="center"
          >
            <Booking />
          </MotionBox>
        </VStack>
      </VStack>
    </Container>
  );
};

export default LandingPage;
