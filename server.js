const express = require('express');
const cors = require('cors');
const nodemailer = require('nodemailer');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());
app.use(express.static(path.join(__dirname, 'build')));

// Email configuration
const transporter = nodemailer.createTransporter({
  service: 'gmail', // или другой email сервис
  auth: {
    user: process.env.EMAIL_USER || 'your-email@gmail.com', // замените на ваш email
    pass: process.env.EMAIL_PASS || 'your-app-password' // замените на пароль приложения
  }
});

// API endpoint для отправки формы
app.post('/api/submit-form', async (req, res) => {
  try {
    const { name, email, yachtType } = req.body;

    // Валидация данных
    if (!name || !email || !yachtType) {
      return res.status(400).json({ 
        success: false, 
        message: 'All fields are required' 
      });
    }

    // Настройка email
    const mailOptions = {
      from: process.env.EMAIL_USER || 'your-email@gmail.com',
      to: process.env.EMAIL_USER || 'your-email@gmail.com', // ваша почта
      subject: 'New Application for rope.core Pilot Program',
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #333; border-bottom: 2px solid #007bff; padding-bottom: 10px;">
            New Application for Pilot Program
          </h2>
          
          <div style="background-color: #f8f9fa; padding: 20px; border-radius: 8px; margin: 20px 0;">
            <h3 style="color: #007bff; margin-top: 0;">Applicant Information:</h3>
            <p><strong>Name:</strong> ${name}</p>
            <p><strong>Email:</strong> ${email}</p>
            <p><strong>Yacht Type:</strong> ${yachtType}</p>
          </div>
          
          <div style="background-color: #e9ecef; padding: 15px; border-radius: 5px; margin: 20px 0;">
            <p style="margin: 0; color: #6c757d; font-size: 14px;">
              <strong>Application Date:</strong> ${new Date().toLocaleString('en-US')}
            </p>
          </div>
          
          <div style="margin-top: 30px; padding-top: 20px; border-top: 1px solid #dee2e6;">
            <p style="color: #6c757d; font-size: 12px; margin: 0;">
              This is an automatic notification from rope.core website
            </p>
          </div>
        </div>
      `
    };

    // Отправка email
    await transporter.sendMail(mailOptions);

    res.json({ 
      success: true, 
      message: 'Application submitted successfully! We will be in touch soon.' 
    });

  } catch (error) {
    console.error('Error sending form:', error);
    res.status(500).json({ 
      success: false, 
      message: 'An error occurred while submitting the application. Please try again later.' 
    });
  }
});

// Serve React application
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'build', 'index.html'));
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
  console.log(`To configure email, edit EMAIL_USER and EMAIL_PASS environment variables`);
});
