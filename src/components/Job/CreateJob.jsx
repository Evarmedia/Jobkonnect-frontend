import { useContext, useState } from "react";
import { JobContext } from "../../../context/Jobcontext";

const CreateJob = () => {
  const [job, setJob] = useState({
    title: "",
    description: "",
    requirements: "",
    salary: "",
    location: "",
    job_type: "",
    application_deadline: "",
    skills_required: "",
    preferred_qualifications: "",
  });
  const { createJob } = useContext(JobContext)

  const handleChange = (e) => {
    const { name, value } = e.target;
    setJob((prevJob) => ({
      ...prevJob,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await createJob(job);
      console.log("Job created:", job);
      // Optionally, you can reset the form or navigate to another page after successful creation
      setJob({
        title: "",
        description: "",
        requirements: "",
        salary: "",
        location: "",
        job_type: "",
        application_deadline: "",
        skills_required: "",
        preferred_qualifications: "",
      });
    } catch (error) {
      console.error("Error creating job:", error);
    }
  };

  return (
    <div className='p-5 mb-10'>
      <h1 className='text-2xl font-bold mb-4'>Create Job</h1>
      <form onSubmit={handleSubmit}>
        {/* JobTitle */}
        <div className='mb-4'>
          <label className='block text-sm font-semibold text-gray-900'>
            Title:
          </label>
          <input
            type='text'
            name='title'
            placeholder="Enter Job Title..."
            value={job.title}
            onChange={handleChange}
            required
            className='mt-1 p-2 border border-gray-300 rounded-md w-full'
          />
        </div>

        {/* Description */}
        <div className='mb-4'>
          <label className='block text-sm font-semibold text-gray-900'>
            Description:
          </label>
          <textarea
            name='description'
            placeholder="Description..."
            value={job.description}
            onChange={handleChange}
            required
            className='mt-1 p-2 border border-gray-300 rounded-md w-full'
          ></textarea>
        </div>

        {/* Requirements */}
        <div className='mb-4'>
          <label className='block text-sm font-semibold text-gray-900'>
            Requirements:
          </label>
          <textarea
            name='requirements'
            placeholder="Requirements..."
            value={job.requirements}
            onChange={handleChange}
            required
            className='mt-1 p-2 border border-gray-300 rounded-md w-full'
          ></textarea>
        </div>

        {/* Salary */}
        <div className='mb-4'>
          <label className='block text-sm font-semibold text-gray-900'>
            Salary per Annum($):
          </label>
          <input
            type='number'
            name='salary'
            placeholder="Enter salary per Annum in dollars"
            value={job.salary}
            onChange={handleChange}
            required
            className='mt-1 p-2 border border-gray-300 rounded-md w-full'
          />
        </div>

        {/* Location */}
        <div className='mb-4'>
          <label className='block text-sm font-semibold text-gray-900'>
            Location:
          </label>
          <input
            type='text'
            name='location'
            placeholder="Location..."
            value={job.location}
            onChange={handleChange}
            required
            className='mt-1 p-2 border border-gray-300 rounded-md w-full'
          />
        </div>

        {/* Jobtype */}
        <div className='mb-4'>
          <label className='block text-sm font-semibold text-gray-900'>
            Select job type:
          </label>
          <select
            name='job_type'
            id='job_type'
            className='mt-1 p-2 border border-gray-300 rounded-md w-full'
            value={job.job_type}
            onChange={handleChange}
          >
            <option value=''>Select Job Type</option>
            <option value='full-time'>Full Time</option>
            <option value='part-time'>Part Time</option>
            <option value='contract'>Contract</option>
          </select>
        </div>

        {/* Application Deadline */}
        <div className='mb-4'>
          <label className='block text-sm font-semibold text-gray-900'>
            Application Closing Date:
          </label>
          <input
            type='date'
            name='application_deadline'
            value={job.application_deadline}
            onChange={handleChange}
            required
            className='mt-1 p-2 border border-gray-300 rounded-md w-full'
          />
        </div>

        {/* Skills Required */}
        <div className='mb-4'>
          <label className='block text-sm font-semibold text-gray-900'>
            Skills Required
          </label>
          <input
            type='text'
            name='skills_required'
            placeholder="What skills are required"
            value={job.skills_required}
            onChange={handleChange}
            required
            className='mt-1 p-2 border border-gray-300 rounded-md w-full'
          />
        </div>

        {/* preferred_qualifications */}
        <div className='mb-4'>
          <label className='block text-sm font-semibold text-gray-900'>
            Qualification
          </label>
          <input
            type='text'
            name='preferred_qualifications'
            placeholder="Enducational Qualification"
            value={job.preferred_qualifications}
            onChange={handleChange}
            required
            className='mt-1 p-2 border border-gray-300 rounded-md w-full'
          />
        </div>

        {/* submit button */}
        <button
          type='submit'
          className='px-4 py-2 bg-blue-500 text-white rounded-md'
        >
          Create Job
        </button>
      </form>
    </div>
  );
};
export default CreateJob;
