import { useState } from "react";

const CreateJob = () => {
  const [job, setJob] = useState({ title: "", description: "" });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setJob((prevJob) => ({
      ...prevJob,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Job created:", job);
    // Add job creation logic here
  };

  return (
    <div>
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
            value={job.requirements}
            onChange={handleChange}
            required
            className='mt-1 p-2 border border-gray-300 rounded-md w-full'
          ></textarea>
        </div>

        {/* Location */}
        <div className='mb-4'>
          <label className='block text-sm font-semibold text-gray-900'>
            Location:
          </label>
          <input
            type='text'
            name='location'
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
            <option value='remote'>Remote</option>
            <option value='onsite'>Onsite</option>
            <option value='hybrid'>Hybrid</option>
          </select>
        </div>

        {/* application Deadline */}
        <div className='mb-4'>
          <label className='block text-sm font-semibold text-gray-900'>
            Application Closing Date:
          </label>
          <input
            type='date'
            name='date'
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
            name='skills'
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
            name='qualification'
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
