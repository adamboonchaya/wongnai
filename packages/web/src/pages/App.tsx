import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './Home'
import EkkamaiMacchiato from './EkkamaiMacchiato'
import RaanLumKiew from './RaanLumKiew'

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="EkkamaiMacchiato" element={<EkkamaiMacchiato />} />
        <Route path="RaanLumKiew" element={<RaanLumKiew />} />
      </Routes>
    </Router>

    //I know how to make the data load faster by preorganizing it in the API gateway but I don't have enough time to do it as I am traveling this weekend for Christmas, hope you understand
  );
};

export default App;
