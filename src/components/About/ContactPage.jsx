import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import Navbar from '../Layout/Navbar';
const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const formUrl = 'https://formspree.io/f/xovavrbq';

    fetch(formUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData),
    }).then((response) => {
      if (response.ok) {
        setSubmitted(true);
      }
    }).catch((error) => {
      console.error('Error submitting form:', error);
    });
  };

  return (
    <>
    <Navbar/>
    <div className="container mx-auto p-6">
      <h1 className="text-4xl font-bold text-center mb-8">Contact Us</h1>
      <div className="bg-white shadow-md rounded p-6 max-w-lg mx-auto">
        {submitted ? (
          <div className="text-center">
            <h2 className="text-2xl font-semibold mb-4">Thank you!</h2>
            <p>Your message has been successfully sent. We will get back to you shortly.</p>
            <NavLink to={`/`}className="underline text-blue-500" >Go Home</NavLink>
          </div>
        ) : (
          <form onSubmit={handleSubmit}>
            <div className="mb-4">
              <label htmlFor="name" className="block text-gray-700 font-bold mb-2">Name:</label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className="w-full px-3 py-2 border rounded"
                required
              />
            </div>
            <div className="mb-4">
              <label htmlFor="email" className="block text-gray-700 font-bold mb-2">Your Email:</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="w-full px-3 py-2 border rounded"
                required
              />
            </div>
            <div className="mb-4">
              <label htmlFor="message" className="block text-gray-700 font-bold mb-2">Message:</label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                className="w-full px-3 py-2 border rounded"
                rows="4"
                required
              ></textarea>
            </div>
            <div className="text-center">
              <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded">Send</button>
            </div>
          </form>
        )}
      </div>
    </div>
    </>
  );
};

export default ContactPage;
