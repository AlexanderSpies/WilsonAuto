import React from 'react';
import {
  Box,
  Image,
  HStack,
  UnorderedList,
  ListItem,
  Link,
  Flex,
  IconButton,
  Collapse,
  useDisclosure,
  Button,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalCloseButton,
  ModalBody,
} from '@chakra-ui/react';
import { FiMenu, FiX } from 'react-icons/fi';
import Logo from './img/wilsonLogo.png';
import Booking from '../components/booking';

const Header = () => {
  const { isOpen, onToggle } = useDisclosure();
  const {
    isOpen: isModalOpen,
    onOpen: openModal,
    onClose: closeModal,
  } = useDisclosure();

  return (
    <Box
      w="100%"
      boxShadow="md"
      py={{ base: 4, md: 6 }}
      position="relative"
      zIndex={1000}
    >
      {/* Rotated Logo Positioned with Padding and Overflow */}
      <Image
        src={Logo}
        alt="Logo"
        position="absolute"
        top="-20px"
        left="-20px"
        height={{ base: '10rem', md: '20rem' }}
        objectFit="contain"
        transform="rotate(-45deg)"
        zIndex={0}
        opacity={0.9}
        _hover={{ opacity: 1, transition: 'opacity 0.3s ease' }}
        p={{ base: 4, md: 6 }}
      />

      <Flex
        align="center"
        justify="space-between"
        maxW="container.xl"
        mx="auto"
        position="relative"
        zIndex={1}
        px={{ base: 4, md: 8 }}
      >
        {/* Mobile Menu Button */}
        <IconButton
          display={{ base: 'block', md: 'none' }}
          icon={isOpen ? <FiX /> : <FiMenu />}
          variant="ghost"
          aria-label="Toggle Navigation"
          onClick={onToggle}
          fontSize="1.5rem"
          color="gray.200"
          position="absolute"
          right={4}
          top={4}
        />

        {/* Desktop Menu */}
        <HStack
          as={UnorderedList}
          display={{ base: 'none', md: 'flex' }}
          spacing={8}
          color="gray.200"
          fontSize="1.1rem"
          fontFamily="heading"
          listStyleType="none"
          m={0}
          alignItems="center"
          ml="auto"
        >
          <ListItem>
            <Link
              href="#about"
              _hover={{
                color: 'gray.100',
                textDecoration: 'none',
              }}
              aria-label="About"
              transition="color 0.3s ease"
            >
              About
            </Link>
          </ListItem>
          <ListItem>
            <Link
              href="#services"
              _hover={{
                color: 'gray.100',
                textDecoration: 'none',
              }}
              aria-label="Services"
              transition="color 0.3s ease"
            >
              Services
            </Link>
          </ListItem>
          <ListItem>
            <Link
              href="#contact"
              _hover={{
                color: 'gray.100',
                textDecoration: 'none',
              }}
              aria-label="Contact"
              transition="color 0.3s ease"
            >
              Contact
            </Link>
          </ListItem>
          <ListItem>
            <Button
              colorScheme="teal"
              variant="solid"
              size="sm"
              bg="gray.700"
              color="gray.200"
              _hover={{ bg: 'gray.600' }}
              onClick={openModal}
            >
              Book Now
            </Button>
          </ListItem>
        </HStack>
      </Flex>

      {/* Mobile Menu */}
      <Collapse in={isOpen} animateOpacity>
        <Box
          display={{ md: 'none' }}
          py={4}
          boxShadow="md"
          rounded="md"
          mt={2}
        >
          <UnorderedList
            listStyleType="none"
            m={0}
            spacing={4}
            textAlign="center"
            color="gray.200"
            fontSize="1.2rem"
          >
            <ListItem>
              <Link
                href="#about"
                onClick={onToggle}
                _hover={{
                  color: 'gray.100',
                  transition: 'color 0.2s ease',
                }}
              >
                About
              </Link>
            </ListItem>
            <ListItem>
              <Link
                href="#services"
                onClick={onToggle}
                _hover={{
                  color: 'gray.100',
                  transition: 'color 0.2s ease',
                }}
              >
                Services
              </Link>
            </ListItem>
            <ListItem>
              <Link
                href="#contact"
                onClick={onToggle}
                _hover={{
                  color: 'gray.100',
                  transition: 'color 0.2s ease',
                }}
              >
                Contact
              </Link>
            </ListItem>
            <ListItem>
              <Button
                colorScheme="teal"
                variant="solid"
                size="sm"
                w="full"
                mt={4}
                onClick={() => {
                  openModal();
                  onToggle();
                }}
                bg="gray.700"
                _hover={{ bg: 'gray.600' }}
                w='50%'
              >
                Book Now
              </Button>
            </ListItem>
          </UnorderedList>
        </Box>
      </Collapse>

      {/* Booking Modal */}
      <Modal isOpen={isModalOpen} onClose={closeModal} size="xl">
        <ModalOverlay bg="rgba(20, 20, 20, 0.8)" />
        <ModalContent bg="gray.800" color="gray.200" borderRadius="md">
          <ModalCloseButton color="gray.300" />
          <ModalBody p={6}>
            <Booking />
          </ModalBody>
        </ModalContent>
      </Modal>
    </Box>
  );
};

export default Header;
