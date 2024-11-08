const express = require('express');
const bodyParser = require('body-parser');
const nodemailer = require('nodemailer');
const dotenv = require('dotenv');

// Load environment variables
dotenv.config();

const app = express();
const port = 8080;

// Middleware
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Allow CORS for development
app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header(
    'Access-Control-Allow-Methods',
    'GET, POST, OPTIONS, PUT, PATCH, DELETE'
  );
  res.header(
    'Access-Control-Allow-Headers',
    'Origin, X-Requested-With, Content-Type, Accept'
  );
  next();
});

// Nodemailer transporter setup
const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
});

// Handle form submission
app.post('/send-email', (req, res) => {
  const {
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
  } = req.body;
  const formattedDate = new Date(date).toLocaleDateString();

  // Mail options for notifying the service technician
  const technicianMailOptions = {
    from: process.env.EMAIL_USER,
    to: process.env.RECIPIENT_EMAIL,
    subject: 'New Appointment Scheduled - Wilson Auto & Boat Detailing',
    text: `New Appointment Alert for Service Technician
  
      A new appointment has been scheduled. Here are the details:
  
      ------------------------------
      APPOINTMENT DETAILS:
      ------------------------------
      • Date:            ${formattedDate}
      • Time:            ${timeSlot}
      • Service Type:    ${washOption}
  
      ------------------------------
      VEHICLE DETAILS:
      ------------------------------
      • Year:            ${year}
      • Make:            ${make}
      • Model:           ${model}
  
      ------------------------------
      CUSTOMER CONTACT:
      ------------------------------
      • Name:            ${firstName} ${lastName}
      • Phone:           ${phone}
      • Email:           ${email}
  
      Please ensure all necessary preparations are made prior to the appointment. Reach out to the customer if any additional information is needed.
  
      Thank you,
      Wilson Auto & Boat Detailing Team
          `,
  };

  // Mail options for sending confirmation to the customer
  const customerMailOptions = {
    from: process.env.EMAIL_USER,
    to: email,
    subject: 'Appointment Confirmation - Wilson Auto & Boat Detailing',
    text: `Dear ${firstName} ${lastName},
  
      Thank you for scheduling your appointment with Wilson Auto & Boat Detailing. Here are the details of your appointment:
  
    ------------------------------
      APPOINTMENT DETAILS:
    ------------------------------
      • Date:            ${formattedDate}
      • Time:            ${timeSlot}
      • Service Type:    ${washOption}
  
    ------------------------------
      VEHICLE DETAILS:
    ------------------------------
      • Year:            ${year}
      • Make:            ${make}
      • Model:           ${model}
  
      We look forward to providing you with excellent service. If you have any questions or need to reschedule, please feel free to contact us.
    ------------------------------
      CONTACT INFORMATION:
    ------------------------------
      • Phone:           123456789
      • Email:           wilsonDetail@example.com
  
      Best regards,
      Wilson Auto & Boat Detailing Team
          `,
  };

  // Send email to the technician
  transporter.sendMail(technicianMailOptions, (error, info) => {
    if (error) {
      return res.status(500).json({
        success: false,
        message: 'Failed to send email to technician',
        error: error.message,
      });
    }

    // Send confirmation email to the customer
    transporter.sendMail(customerMailOptions, (error, info) => {
      if (error) {
        return res.status(500).json({
          success: false,
          message: 'Failed to send confirmation email to customer',
          error: error.message,
        });
      }

      res.status(200).json({
        success: true,
        message: 'Emails sent successfully',
        technicianInfo: info,
        customerInfo: info,
      });
    });
  });
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
