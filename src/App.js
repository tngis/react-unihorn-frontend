import React from "react";
import CreateJob from "./pages/CreateJob";
import JobDetail from "./pages/JobDetail";
import Footer from "./components/Footer";
import Landing from "./pages/Landing";
import Home from "./pages/Home";
import ClientPanel from "./pages/ClientPanel";

import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";



function App() {
  return (
    <BrowserRouter>

      <Routes>
        <Route path='/your-job' element={<ClientPanel />} />
        <Route path='/create-job' element={<CreateJob />} />
        <Route path='/home/jobs' element={<JobDetail />} />
        <Route path='/home' element={<Home />} />
        <Route path='/' element={<Landing />} />
      </Routes>

      <Footer />
    </BrowserRouter>
  );

}

export default App;
