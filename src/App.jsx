import { BrowserRouter, Route, Routes } from "react-router-dom";

import Login from "./components/Auth/Login";
import Register from "./components/Auth/Register";
import Home from "./components/Home/Home";
import Navbar from "./components/Layout/Navbar";
import NotFound from "./components/NotFound/NotFound";
import Footer from "./components/Layout/Footer";
import MyApplications from "./components/Application/MyApplications";
import { AuthProvider } from "./context/AuthContext.jsx";
import Dashboard from "./components/Dashboard/Dashboard.jsx";


function App() {
  return (
    <BrowserRouter>
      <AuthProvider>
        <Navbar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/login' element={<Login />} />
          <Route path='/register' element={<Register />} />
          <Route path='/my_applications' element={<MyApplications />} />
          {/* <Route path='/employer_dash/:id' element={<EmployerDashboard />} /> */}
           <Route path='/dashboard/:id' element={<Dashboard />} /> 
          {/* <Route path='/jobseeker_dash/:id' element={<JobSeekerDashboard />} /> */}
          <Route path='/alljobs' element={<MyApplications />} />

          <Route path='*' element={<NotFound />} />
        </Routes>
        <Footer />
      </AuthProvider>
    </BrowserRouter>
  );
}

export default App;
