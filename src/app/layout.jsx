import "@picocss/pico/css/pico.min.css";
import { TestContextProvider } from "../components/TestContext";
import { getUserData } from "../helpers";
import "./globals.css";
import "./normalize.css";

export const metadata = {
  title: "Spanish Vocab",
  description: "5,000 most commonly used words.",
};

export default async function RootLayout({ children }) {
  const { data, user } = await getUserData();
  return (
    <html lang="en">
      <body>
        <TestContextProvider initialData={data} user={user}>
          {children}
        </TestContextProvider>
      </body>
    </html>
  );
}
