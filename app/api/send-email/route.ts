import { NextApiRequest, NextApiResponse } from "next";
import nodemailer from "nodemailer";

const mailer = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.AUTH_EMAIL,
    pass: process.env.AUTH_PASS,
  },
  secure: true,
});

export async function POST(req: Request, res: NextApiResponse) {
  const {
    name,
    contactNumber,
    email,
    message,
    noTravellers,
    destination,
    travelDate,
  } = await req.json();

  try {
    console.log(req);
    await mailer.sendMail({
      from: email,
      to: process.env.AUTH_EMAIL,
      subject: `${destination} query`,
      html: generateEmailTemplate({
        name,
        contactNumber,
        email,
        noTravellers,
        destination,
        travelDate,
        message,
      }),
    });

    return Response.json({ message: "Email sent successfully!" });
  } catch (err) {
    console.error("Error sending email:", err);
    return Response.json({ error: err || "Internal Server Error" });
  }
}

const generateEmailTemplate = (formData: {
  name: string;
  contactNumber: string;
  email: string;
  noTravellers: string;
  destination: string;
  travelDate: string;
  message: string;
}) => {
  return `
    <!DOCTYPE html>
    <html lang="en">
    <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <style>
        body {
          font-family: Arial, sans-serif;
          margin: 0;
          padding: 0;
          background-color: #f4f4f4;
        }
        .container {
          max-width: 600px;
          margin: 20px auto;
          padding: 20px;
          background-color: #ffffff;
          border-radius: 8px;
          box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
        }
        h2 {
          color: #333333;
        }
        p {
          color: #555555;
          line-height: 1.6;
        }
        .info {
          margin: 10px 0;
        }
        .info span {
          font-weight: bold;
        }
      </style>
    </head>
    <body>
      <div class="container">
        <h2>Custom Tour Request</h2>
        <p class="info"><span>Name:</span> ${formData.name}</p>
        <p class="info"><span>Contact Number:</span> ${formData.contactNumber}</p>
        <p class="info"><span>Email:</span> ${formData.email}</p>
        <p class="info"><span>Number of Travellers:</span> ${formData.noTravellers}</p>
        <p class="info"><span>Destination:</span> ${formData.destination}</p>
        <p class="info"><span>Travel Date:</span> ${formData.travelDate}</p>
        <p class="info"><span>Message:</span></p>
        <p>${formData.message}</p>
      </div>
    </body>
    </html>
  `;
};
