import "./App.css";
import Header from "./components/Header";
import Body from "./components/Body";
import React, { useEffect } from "react";

function App() {
  useEffect(() => {
    fetch("/ramibus/vehicle.php")
      .then((resp) => {
        console.log(resp);
        console.log("=========success===========");
      })
      .catch((err) => {
        console.log("=========fail========");
        console.log(err);
      });
  }, []);

  return (
    <>
      <Header></Header>
      <Body></Body>
    </>
  );
}

export default App;
