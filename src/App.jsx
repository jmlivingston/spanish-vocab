import { useEffect, useState } from "react";
import Routes from "./Routes";

console.log(import.meta.env);

function App() {
  const [route, setRoute] = useState(
    location.pathname.replace("/spanish-vocab/", "").split("/")?.[1] || "/"
  );

  useEffect(() => {
    window.onpopstate = function (event) {
      setRoute(event.state?.route || "/");
    };

    window.history.pushState = new Proxy(window.history.pushState, {
      apply: (target, history, args) => {
        setRoute(args[0].route);
        return target.apply(history, args);
      },
    });
  }, []);

  return <Routes route={route} />;
}

export default App;
