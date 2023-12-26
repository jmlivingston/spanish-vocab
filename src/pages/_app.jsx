import { TestContextProvider } from "@/components/TestContext";
import "@picocss/pico/css/pico.min.css";
import "app/globals.css";
import "app/normalize.css";
import { useEffect, useState } from "react";

export default function MyApp({ Component, pageProps }) {
  const [{ data, user }, setData] = useState({});

  useEffect(() => {
    (async () => {
      const response = await fetch("/api/test");
      const json = await response.json();
      setData(json);
    })();
  }, [setData]);

  return data && user ? (
    <TestContextProvider initialData={data} user={user}>
      <Component {...pageProps} />
    </TestContextProvider>
  ) : null;
}
