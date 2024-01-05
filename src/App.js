import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
// import About from './pages/About';

const App = () => {
  return (
    <Router>
      {/* <Header /> */}
      {/* <Navbar /> */}
      <Routes>
        <Route path="/" exact element={<Home />} />
        {/* <Route path="/about" element={<About />} /> */}
      </Routes>
      {/* <Footer /> */}
    </Router>
  );
};

export default App;