import React from "react";
import CreateJob from "./pages/CreateJob";
import JobDetail from "./pages/JobDetail";
import Footer from "./components/Footer";
import Modal from "./components/Modal";
import Landing from "./pages/Landing";
import Home from "./pages/Home";
import ClientPanel from "./pages/ClientPanel";

import {
  BrowserRouter,
  Routes,
  Route,
  Switch,
} from "react-router-dom";
import { AiFillPauseCircle } from "react-icons/ai";


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
  // return (
  //   <BrowserRouter>
  //     <Routes>
  //       <Route path="/" element={<div>kk</div>} />
  //     </Routes>
  //   </BrowserRouter>

  // )
}

export default App;
