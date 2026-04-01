import { text } from "express";
import Mailgen from "mailgen";

const emailVerificationMailgenContent = (username, verificationUrl) => {
  return {
    body: {
      name: username,
      intro:
        "Welcome to ProjManagement! We're very excited to have you on board.",
      action: {
        instructions: "To get started with your account, please click here:",
        button: {
          color: "#22BC66", // Optional action button color
          text: "Verify Email",
          link: verificationUrl,
        },
      },
      outro:
        "Need help, or have questions? Just reply to this email, we'd love to help.",
    },
  };
};

const forgotPasswordMailgenContent = (username, passwordResetUrl) => {
  return {
    body: {
      name: username,
      intro:
        "You have received this email because a password reset request for your account was received. If you did not make this request, please ignore this email.",
      action: {
        instructions: "To reset your password, please click here:",
        button: {
          color: "#0a6933", // Optional action button color
          text: "Reset Password",
          link: passwordResetUrl,
        },
      },
      outro:
        "Need help, or have questions? Just reply to this email, we'd love to help.",
    },
  };
};

export { emailVerificationMailgenContent, forgotPasswordMailgenContent };
