import { useState } from "react";
import { format } from "date-fns";
import axios from "axios";
import { Calendar as CalendarIcon } from "lucide-react";
import {
  Box,
  VStack,
  Text,
  Heading,
  Button,
  Popover,
  PopoverTrigger,
  PopoverContent,
  Input,
  FormControl,
  FormLabel,
  Select,
  HStack,
  Divider,
  useToast,
} from "@chakra-ui/react";
import { DayPicker } from "react-day-picker";
import { motion } from "framer-motion";

// Framer Motion for animations
const MotionBox = motion(Box);

const Booking = () => {
  const [step, setStep] = useState(1);
  const [date, setDate] = useState(null);
  const [timeSlot, setTimeSlot] = useState("");
  const [washOption, setWashOption] = useState("");
  const [year, setYear] = useState("");
  const [make, setMake] = useState("");
  const [model, setModel] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [errors, setErrors] = useState({});
  const toast = useToast();

  const timeSlots = [
    "09:00 AM",
    "10:00 AM",
    "11:00 AM",
    "01:00 PM",
    "02:00 PM",
    "03:00 PM",
  ];

  const washOptions = [
    "Basic Exterior Wash & Wax",
    "Premium Exterior Detailing",
    "Basic Interior Clean",
    "Deep Interior Detailing",
    "Express Inside & Out",
    "Full Interior & Exterior Detail",
  ];

  const validateEmail = (email) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

  const handleFieldChange = (field, value) => {
    const newErrors = { ...errors };
    if (!value) newErrors[field] = `${field} is required.`;
    else if (field === "email" && !validateEmail(value))
      newErrors.email = "Invalid email format.";
    else delete newErrors[field];
    setErrors(newErrors);
    switch (field) {
      case "date":
        setDate(value);
        break;
      case "timeSlot":
        setTimeSlot(value);
        break;
      case "washOption":
        setWashOption(value);
        break;
      case "year":
        setYear(value);
        break;
      case "make":
        setMake(value);
        break;
      case "model":
        setModel(value);
        break;
      case "firstName":
        setFirstName(value);
        break;
      case "lastName":
        setLastName(value);
        break;
      case "phone":
        setPhone(value);
        break;
      case "email":
        setEmail(value);
        break;
      default:
        break;
    }
  };

  const handleNextStep = () => {
    const requiredFields = ["date", "timeSlot", "washOption"];
    const newErrors = {};

    requiredFields.forEach((field) => {
      if (!eval(field)) newErrors[field] = `${field} is required.`;
    });

    setErrors(newErrors);
    if (Object.keys(newErrors).length === 0) setStep(step + 1);
  };

  const handlePreviousStep = () => setStep(step - 1);

  const handleSubmit = async () => {
    const requiredFields = [
      "year",
      "make",
      "model",
      "firstName",
      "lastName",
      "phone",
      "email",
    ];
    const newErrors = {};

    requiredFields.forEach((field) => {
      if (!eval(field)) newErrors[field] = `${field} is required.`;
    });

    setErrors(newErrors);
    if (Object.keys(newErrors).length === 0) {
      const formData = {
        date,
        timeSlot,
        washOption,
        year,
        make,
        model,
        firstName,
        lastName,
        phone,
        email,
      };

      try {
        const response = await axios.post(
          "http://localhost:8080/send-email",
          formData,
          {
            headers: {
              "Content-Type": "application/json",
            },
          }
        );
        if (response.data.success) {
          toast({
            title: "Success",
            description: "Appointment booked successfully!",
            status: "success",
            duration: 3000,
            isClosable: true,
          });
          resetForm();
        } else {
          toast({
            title: "Error",
            description: "Failed to send email.",
            status: "error",
            duration: 3000,
            isClosable: true,
          });
        }
      } catch (error) {
        toast({
          title: "Error",
          description: `An error occurred: ${error.message}`,
          status: "error",
          duration: 3000,
          isClosable: true,
        });
      }
    }
  };

  const resetForm = () => {
    setDate(null);
    setTimeSlot("");
    setWashOption("");
    setYear("");
    setMake("");
    setModel("");
    setFirstName("");
    setLastName("");
    setPhone("");
    setEmail("");
    setErrors({});
  };

  const isStepOneComplete =
    date &&
    timeSlot &&
    washOption &&
    !errors.date &&
    !errors.timeSlot &&
    !errors.washOption;
  const isStepTwoComplete =
    year &&
    make &&
    model &&
    firstName &&
    lastName &&
    phone &&
    email &&
    !errors.email;

  return (
    <MotionBox
      maxW="md"
      width="100%"
      bg="rgba(30, 30, 30, 0.9)" // Dark, muted background
      p={6}
      borderRadius="lg"
      boxShadow="xl"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
      whileHover={{ scale: 1.02 }}
    >
      <VStack spacing={6} align="center" color="gray.200">
        <Heading size="lg" color="gray.100">
          {step === 1 ? "Select Date, Time, and Wash" : "Enter Your Information"}
        </Heading>
        <Divider borderColor="gray.600" />

        {step === 1 && (
          <>
            <Text color="gray.300">
              Choose a date, time, and service option for your appointment.
            </Text>
            <HStack width="100%" spacing={4}>
              <FormControl isRequired isInvalid={!!errors.date}>
                <FormLabel color="gray.300">Date</FormLabel>
                <Popover>
                  <PopoverTrigger>
                    <Button
                      variant="outline"
                      width="100%"
                      bg="gray.800"
                      color="gray.200"
                      leftIcon={<CalendarIcon size={16} />}
                      _hover={{ bg: "gray.700" }}
                    >
                      {date ? format(date, "PPP") : "Pick a date"}
                    </Button>
                  </PopoverTrigger>
                  <PopoverContent width="auto" p={0} bg="gray.700" color="gray.200">
                    <Box p={4} borderRadius="md">
                      <DayPicker
                        mode="single"
                        selected={date}
                        onSelect={(selectedDate) =>
                          handleFieldChange("date", selectedDate || null)
                        }
                      />
                    </Box>
                  </PopoverContent>
                </Popover>
                {errors.date && (
                  <Text color="red.500" mt={2}>
                    {errors.date}
                  </Text>
                )}
              </FormControl>
              <FormControl isRequired isInvalid={!!errors.timeSlot}>
                <FormLabel color="gray.300">Time</FormLabel>
                <Select
                  placeholder="Select time"
                  bg="gray.800"
                  color="gray.200"
                  borderColor="gray.600"
                  _hover={{ borderColor: "gray.500" }}
                  value={timeSlot}
                  onChange={(e) => handleFieldChange("timeSlot", e.target.value)}
                >
                  {timeSlots.map((slot) => (
                    <option key={slot} value={slot} style={{ background: "#2D3748", color: "gray.200" }}>
                      {slot}
                    </option>
                  ))}
                </Select>
                {errors.timeSlot && (
                  <Text color="red.500" mt={2}>
                    {errors.timeSlot}
                  </Text>
                )}
              </FormControl>
            </HStack>

            <FormControl isRequired isInvalid={!!errors.washOption} mt={4}>
              <FormLabel color="gray.300">Wash Option</FormLabel>
              <Select
                placeholder="Select wash option"
                bg="gray.800"
                color="gray.200"
                borderColor="gray.600"
                _hover={{ borderColor: "gray.500" }}
                value={washOption}
                onChange={(e) => handleFieldChange("washOption", e.target.value)}
              >
                {washOptions.map((option) => (
                  <option key={option} value={option} style={{ background: "#2D3748", color: "gray.200" }}>
                    {option}
                  </option>
                ))}
              </Select>
              {errors.washOption && (
                <Text color="red.500" mt={2}>
                  {errors.washOption}
                </Text>
              )}
            </FormControl>

            <Button
              mt={4}
              bg="gray.700"
              color="gray.200"
              width="100%"
              _hover={{ bg: "gray.600" }}
              onClick={handleNextStep}
              disabled={!isStepOneComplete}
            >
              Next
            </Button>
          </>
        )}

        {step === 2 && (
          <>
            <Text color="gray.300">
              Enter your vehicle details and contact information.
            </Text>

            {/* Additional Input fields styled similarly to the first step */}
            <Button
              mt={4}
              bg="gray.700"
              color="gray.200"
              width="100%"
              _hover={{ bg: "gray.600" }}
              onClick={handleSubmit}
              disabled={!isStepTwoComplete}
            >
              Book Appointment
            </Button>
          </>
        )}
      </VStack>
    </MotionBox>
  );
};

export default Booking;
