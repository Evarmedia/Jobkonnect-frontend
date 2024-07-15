import { BrowserRouter, Route, Routes } from "react-router-dom";

import { AuthProvider } from "../context/AuthContext";
import { JobProvider } from "../context/Jobcontext";
import MyApplications from "./components/Application/MyApplications";
import Login from "./components/Auth/Login";
import Register from "./components/Auth/Register";
import Dashboard from "./components/Dashboard/Dashboard";
import Home from "./components/Home/Home";
import Footer from "./components/Layout/Footer";
import Navbar from "./components/Layout/Navbar";
import NotFound from "./components/NotFound/NotFound";
import JobDetails from "./components/Job/JobDetails";
import ApplicationForm from "./components/Application/ApplicationForm";

function App() {
  return (
    <BrowserRouter>
      <AuthProvider>
        <JobProvider>
          <div className='min-h-screen flex flex-col'>
            <Navbar />
            <main className='flex-grow'>
              <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/login' element={<Login />} />
                <Route path='/register' element={<Register />} />
                <Route path='/my_applications' element={<MyApplications />} />
                <Route path='/applications_form' element={<ApplicationForm />} />
                <Route path='/dashboard/:id' element={<Dashboard />} />
                <Route path='/jobdetails/:job_id' element={<JobDetails />} />
                <Route path='*' element={<NotFound />} />
              </Routes>
            </main>
            <Footer />
          </div>
        </JobProvider>
      </AuthProvider>
    </BrowserRouter>
  );
}

export default App;
