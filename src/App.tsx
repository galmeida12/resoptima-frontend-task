import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Home } from './pages/Home';
// import MovieDetails from './pages/MovieDetails';

const App: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={Home} />
        {/* <Route path="/movie/:id" component={MovieDetails} /> */}
      </Routes>
    </Router>
  );
};

export default App;
