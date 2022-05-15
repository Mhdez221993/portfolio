import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import Content from '../features/content/Home';
import Footer from '../features/footer/Footer';
import Header from '../features/header/Header';
import './App.css';

function App() {
  return (
    <Router basename={process.env.PUBLIC_URL}>
      <div className="app">
        <Header />
        <Content />
        <Footer />
      </div>
    </Router>
  );
}

export default App;
