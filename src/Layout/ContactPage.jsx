import React, { useState } from 'react';

function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // You can handle the form submission logic here (e.g., sending the message to a server).
    console.log(formData);
  };

  return (
    <>
    <HeroSection></HeroSection>
      <div className="container mx-auto p-4 border-[1px] border-slate-300 rounded-lg shadow-md shadow-[#1D8219] mb-5">
      <h1 className="text-2xl font-semibold mb-4">Contact Us</h1>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label htmlFor="name" className="block mb-1">
            Name:
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            className="w-full p-2 border rounded"
            required
          />
        </div>
        <div className="mb-4">
          <label htmlFor="email" className="block mb-1">
            Email:
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className="w-full p-2 border rounded"
            required
          />
        </div>
        <div className="mb-4">
          <label htmlFor="message" className="block mb-1">
            Message:
          </label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            className="w-full p-2 border rounded"
            rows="5"
            required
          />
        </div>
        <button
          type="submit"
          className="bg-green-600 text-white font-semibold p-2 rounded hover:bg-green-700 w-full"
        >
          Submit
        </button>
      </form>
    </div>
    
    </>

    
  );
}

export default ContactPage;
import img from '../../img/1.jpg'
function HeroSection() {
  return (
    <section className="text-gray-600 body-font border-[1px] border-slate-300 rounded-lg shadow-md shadow-[#1D8219] mb-5">
      <div className="container mx-auto w-full flex p-5 md:flex-row flex-col items-center">
        <div className="w-56 h-full">
          <img
            className="object-cover object-center rounded mb-5 md:mb-0"
            alt="hero"
            src={img}
          />
        </div>
        <div className="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center">
          <h1 className="title-font sm:text-3xl text-2xl mb-4 font-medium text-gray-900">
          Conatact Information
          </h1>
          <h2 className='card-title mb-1'>Thakugaon Polytechnic Institute</h2><small className=' mb-1'>(Gobindra Nogor, Thakurgaon Road , Thakurgaon)</small>
          <p className=' font-medium text-sm'>Phone:0561-61400</p>
          <p className=' font-medium text-sm'>Email:principal@tpi.edu.bd</p>
          
        </div>
      </div>
    </section>
  );
}

