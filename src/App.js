import React, { useEffect, useState } from "react";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import { Typography, Button } from "@material-ui/core";
import getFacts from "./services/getFacts";
import "./App.css";

function App() {
  const [facts, setFacts] = useState("");
  useEffect(async () => {
    let catFacts = await getFacts("https://meowfacts.herokuapp.com");
    let fact = catFacts.data[0];
    setFacts(fact);
    console.log(fact);
  }, []);

  return (
    <div className="App">
      <Navbar />
      <Typography variant="h3">Random cat fact:</Typography>
      <Typography variant="h5">{facts}</Typography>
      <Button
        variant="contained"
        color="primary"
        onClick={() => {
          location.reload();
        }}
      >
        Get New Cat Fact
      </Button>
      <Footer />
    </div>
  );
}

export default App;
