import { useState } from "react";



const CreateJob = () => {
    const [job, setJob] = useState({ title: '', description: '' });
  
    const handleChange = (e) => {
      const { name, value } = e.target;
      setJob((prevJob) => ({
        ...prevJob, [name]: value
      }));
    };
  
    const handleSubmit = (e) => {
      e.preventDefault();
      console.log('Job created:', job);
      // Add job creation logic here
    };
  
    return (
      <div>
        <h1 className="text-2xl font-bold mb-4">Create Job</h1>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700">Title:</label>
            <input
              type="text"
              name="title"
              value={job.title}
              onChange={handleChange}
              required
              className="mt-1 p-2 border border-gray-300 rounded-md w-full"
            />
          </div>
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700">Description:</label>
            <textarea
              name="description"
              value={job.description}
              onChange={handleChange}
              required
              className="mt-1 p-2 border border-gray-300 rounded-md w-full"
            ></textarea>
          </div>
          <button type="submit" className="px-4 py-2 bg-blue-500 text-white rounded-md">Create Job</button>
        </form>
      </div>
    );
  };
  export default CreateJob;