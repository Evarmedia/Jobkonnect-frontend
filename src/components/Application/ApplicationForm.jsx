import { useContext, useState, useRef } from "react";
import { ApplicationContext } from "../../../context/ApplicationContext";
import { useParams } from "react-router-dom";
import BackButton from "../Shared/BackButton";

const Createapplication = () => {
  const { job_id } = useParams();
  const [application, setApplication] = useState({
    cover_letter: "",
    resume: "",
    years_of_experience: "",
    name: "",
    school_name: "",
    portfolio: "",
    skills: "",
  });
  const { createApplication } = useContext(ApplicationContext);
  
  const resumeRef = useRef(null);
  const coverLetterRef = useRef(null);

  const handleChange = (e) => {
    const { name, value, type, files } = e.target;
    if (type === "file") {
      setApplication((prevApplication) => ({
        ...prevApplication,
        [name]: files[0],
      }));
    } else {
      setApplication((prevApplication) => ({
        ...prevApplication,
        [name]: value,
      }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    for (const key in application) {
      formData.append(key, application[key]);
    }
    try {
      await createApplication(job_id, formData);
      setApplication({
        cover_letter: "",
        resume: "",
        years_of_experience: "",
        name: "",
        school_name: "",
        portfolio: "",
        skills: "",
      });
      if (resumeRef.current) resumeRef.current.value = "";
      if (coverLetterRef.current) coverLetterRef.current.value = "";
    } catch (error) {
      console.error("Error creating application:", error);
    }
  };

  return (
    <div className="p-5 sm:px-52 mb-10 relative">
      <h1 className="text-2xl text-center font-bold mb-4">Create Application</h1>
      <form onSubmit={handleSubmit}>
        {/* Name */}
        <div className="mb-4">
          <label className="block text-sm font-semibold text-gray-900">
            Full Name: <span className="text-md sm:text-lg text-red-600" title="Required Field">*</span>
          </label>
          <input
            type="text"
            name="name"
            placeholder="Enter Your Name Here..."
            value={application.name}
            onChange={handleChange}
            required
            className="mt-1 p-2 border border-gray-300 rounded-md w-full"
          />
        </div>

        {/* Resume */}
        <div className="mb-4">
          <label className="block text-sm font-semibold text-gray-900">
            Upload Your Resume
          </label>
          <input
            type="file"
            accept="docx, pdf"
            name="resume"
            onChange={handleChange}
            ref={resumeRef}
            required
            className="mt-1 p-2 border border-gray-300 rounded-md w-full"
          />
        </div>

        {/* Cover Letter */}
        <div className="mb-4">
          <label className="block text-sm font-semibold text-gray-900">
            Upload Cover Letter
          </label>
          <input
            type="file"
            accept="docx, pdf"
            name="cover_letter"
            onChange={handleChange}
            ref={coverLetterRef}
            required
            className="mt-1 p-2 border border-gray-300 rounded-md w-full"
          />
        </div>

        {/* Years Of Experience */}
        <div className="mb-4">
          <label className="block text-sm font-semibold text-gray-900">
            Years Of Experience (years)
          </label>
          <input
            type="number"
            name="years_of_experience"
            placeholder="Enter number in years"
            value={application.years_of_experience}
            onChange={handleChange}
            required
            className="mt-1 p-2 border border-gray-300 rounded-md w-full"
          />
        </div>

        {/* Portfolio */}
        <div className="mb-4">
          <label className="block text-sm font-semibold text-gray-900">
            Portfolio:
          </label>
          <input
            type="url"
            name="portfolio"
            placeholder="Portfolio URL..."
            value={application.portfolio}
            onChange={handleChange}
            required
            className="mt-1 p-2 border border-gray-300 rounded-md w-full"
          />
        </div>

        {/* Skills */}
        <div className="mb-4">
          <label className="block text-sm font-semibold text-gray-900">
            Skills:
          </label>
          <input
            type="text"
            name="skills"
            placeholder="Share Your Skills with Us"
            value={application.skills}
            onChange={handleChange}
            required
            className="mt-1 p-2 border border-gray-300 rounded-md w-full"
          />
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          className="px-4 py-2 bg-blue-500 text-white rounded-md"
        >
          Create Application
        </button>
        <div className="absolute top-4 sm:left-36 left-4">
          <BackButton />
        </div>
      </form>
    </div>
  );
};

export default Createapplication;
