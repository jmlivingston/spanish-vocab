import "@picocss/pico/css/pico.min.css";
import "./globals.css";
import "./normalize.css";

export const metadata = {
  title: "Spanish Vocab",
  description: "5,000 most commonly used words.",
};

export default function RootLayout({ children }) {
  return (
    <html lang='en'>
      <body>{children}</body>
    </html>
  );
}
