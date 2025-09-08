import { Html } from "@react-email/html";
import { Text } from "@react-email/text";
import { Button } from "@react-email/button";

export default function WelcomeEmail({ name }) {
  return (
    <Html>
      <Text>Hello {name},</Text>
      <Text>Welcome to our platform! 🎉</Text>
      <Button href="https://wa.me/966590858707">Get Started</Button>
    </Html>
  );
}
