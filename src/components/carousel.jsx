import React from "react";
import Slider from "react-slick";
import {
  Box,
  Text,
  ListItem,
  UnorderedList,
  VStack,
} from "@chakra-ui/react";
import { motion } from "framer-motion";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

// MotionBox for animations
const MotionBox = motion(Box);

const Carousel = () => {
  const settings = {
    dots: true,  // Disable dots
    arrows: false,  // Disable arrows
    infinite: true,
    speed: 700,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 8000,
    adaptiveHeight: true,
  };

  const textCards = [
    {
      title: "Basic Exterior Wash & Wax",
      description:
        "Hand wash and dry\nApplication of a high-quality wax for shine and protection\nCleaning of wheels, tires, and wheel wells\nQuick spray on windows and mirrors for streak-free finish",
    },
    {
      title: "Premium Exterior Detailing",
      description:
        "Detailed hand wash and clay bar treatment to remove contaminants\nMachine polish to remove light scratches and enhance paint luster\nHigh-grade sealant or ceramic coating for long-term protection\nDetailed cleaning and conditioning of wheels, tires, and chrome\nWindow polish for optimal clarity",
    },
    {
      title: "Basic Interior Clean",
      description:
        "Vacuuming of seats, carpets, and floor mats\nDusting and wipe down of dashboard, console, and surfaces\nSpot cleaning of stains on seats and upholstery\nQuick window cleaning for interior clarity",
    },
    {
      title: "Deep Interior Detailing",
      description:
        "Deep vacuuming, including seat crevices, under seats, and trunk\nShampooing of carpets, mats, and upholstery (or leather conditioning)\nDeep clean and polish of dashboard, console, door panels, and vents\nDetailed window and mirror cleaning\nOdor elimination treatment",
    },
    {
      title: "Express Inside & Out",
      description:
        "Exterior hand wash and quick wax\nBasic vacuuming of seats and carpets\nWipe down of dashboard and console\nCleaning of windows, mirrors, wheels, and tires",
    },
    {
      title: "Full Interior & Exterior Detail",
      description:
        "Full exterior wash, clay bar treatment, and polish\nHigh-quality sealant or wax application for long-lasting shine\nDeep interior cleaning with shampoo or leather treatment\nFull dashboard, console, and vent detailing\nTire and wheel polish, glass polish, and odor removal treatment",
    },
  ];

  return (
    <MotionBox
      maxW={{ base: "100%", md: "80%", lg: "70%" }}
      mx="auto"
      bg="rgba(20, 20, 20, 0.9)" // Dark, muted background
      p={{ base: 4, md: 6 }}
      borderRadius="lg"
      boxShadow="xl"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
      whileHover={{ scale: 1.02 }}
    >
      <Slider {...settings}>
        {textCards.map((card, index) => (
          <MotionBox
            key={index}
            borderRadius="md"
            p={{ base: 6, md: 8 }}
            color="gray.200"
            boxShadow="md"
            textAlign="left"
            bg="gray.800" // Consistent muted dark background
            border="1px"
            borderColor="gray.600"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.2 }}
          >
            <VStack align="start" spacing={4}>
              <Text
                fontWeight="bold"
                fontSize={{ base: "xl", md: "2xl" }}
                color="gray.100"
                mb="2"
              >
                {card.title}
              </Text>
              <UnorderedList spacing={2}>
                {card.description.split("\n").map((item, i) => (
                  <ListItem key={i} color="gray.400" _hover={{ color: "gray.200" }}>
                    {item}
                  </ListItem>
                ))}
              </UnorderedList>
            </VStack>
          </MotionBox>
        ))}
      </Slider>
    </MotionBox>
  );
};

export default Carousel;
