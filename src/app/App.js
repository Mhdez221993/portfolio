import "./App.css";

import Content from "../features/content/Home";
import Footer from "../features/footer/Footer";
import Header from "../features/header/Header";
import React from "react";

function App() {
  return (
    <div className="app">
      <Header />
      <Content />
      <Footer />
    </div>
  );
}

export default App;
