import { TestContextProvider } from "@/components/TestContext";
import "@/styles/globals.css";

export default function MyApp({ Component, pageProps }) {
  return (
    <TestContextProvider>
      <Component {...pageProps} />
    </TestContextProvider>
  );
}
