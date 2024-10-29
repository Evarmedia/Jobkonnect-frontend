import { BrowserRouter, Route, Routes } from "react-router-dom";

import { ApplicationProvider } from "../context/ApplicationContext";
import { AuthProvider } from "../context/AuthContext";
import { JobProvider } from "../context/Jobcontext";
import ApplicationForm from "./components/Application/ApplicationForm";
import MyApplications from "./components/Application/MyApplications";
import Login from "./components/Auth/Login";
import Register from "./components/Auth/Register";
import Dashboard from "./components/Dashboard/Dashboard";
import Home from "./components/Home/Home";
import JobDetails from "./components/Job/JobDetails";
import Footer from "./components/Layout/Footer";
// import Navbar from "./components/Layout/Navbar";
import NotFound from "./components/NotFound/NotFound";
import ApplicationsDetails from "./components/Application/ApplicationsDetails";
import AboutPage from "./components/About/AboutPage";
import ContactPage from "./components/About/ContactPage";

function App() {
  return (
    <BrowserRouter>
      <AuthProvider>
        <JobProvider>
          <ApplicationProvider>
            <div className='min-h-screen flex flex-col'>
              {/* <Navbar /> */}
              <main className='flex-grow'>
                <Routes>
                  <Route path='/' element={<Home />} />
                  <Route path='/login' element={<Login />} />
                  <Route path='/register' element={<Register />} />
                  <Route path='/my_applications' element={<MyApplications />} />
                  <Route path='/applicationdetails/:application_id' element={<ApplicationsDetails />} />
                  <Route path='/applications_form/:job_id'element={<ApplicationForm />}/>
                  <Route path='/dashboard/:id' element={<Dashboard />} />
                  <Route path='/jobdetails/:job_id' element={<JobDetails />} />
                  <Route path="/about" element={<AboutPage />} />
                  <Route path="/contact" element={<ContactPage />} />
                  <Route path='*' element={<NotFound />} />
                </Routes>
              </main>
              <Footer />
            </div>
          </ApplicationProvider>
        </JobProvider>
      </AuthProvider>
    </BrowserRouter>
  );
}

export default App;
