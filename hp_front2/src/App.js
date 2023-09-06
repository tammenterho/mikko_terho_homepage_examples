import React from "react";
import SimpleSlider from "./components/SlickCarousel";
import { Helmet } from "react-helmet";
import "./App.css";
import AboutUs from "./components/aboutUs";
import Header from "./components/header";
import MoreClients from "./components/moreClients";
import { Contact } from "./components/Contact";
import { Routes } from "react-router-dom";
import { Route } from "react-router-dom";
import { Comments } from "./components/Comments.jsx";

function App() {
  return (
    <div className="whole">
      <div className="App">
        <Helmet>
          <title>My App</title>
          <link rel="stylesheet" href="https://use.typekit.net/sdb5sez.css" />
          <meta name="description" content="My app description" />
        </Helmet>
        <Header />
      </div>
      <div className="materials">
        <SimpleSlider />
        <MoreClients></MoreClients>
        <AboutUs />
        <Contact />
      </div>
      <Routes>
        <Route path="/comments" element={<Comments />} />
        <Route path="/" element={<App />} />
      </Routes>
    </div>
  );
}

export default App;
