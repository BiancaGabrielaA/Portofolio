'use client';

import { useState } from 'react';

export const ContactForm = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    message: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log(formData);
    // add form handling logic here
  };

  return (
    <form onSubmit={handleSubmit} className="max-w-2xl p-6 space-y-6 text-[var(--light-brown)]">
      <div className="flex flex-col md:flex-row gap-6">
        <div className="flex-1">
          <label htmlFor="firstName" className="block mb-1 text-sm font-medium">First Name</label>
          <input
            required
            type="text"
            name="firstName"
            id="firstName"
            value={formData.firstName}
            onChange={handleChange}
            className="w-full border-b border-[var(--light-brown)] focus:outline-none py-1 bg-transparent"
          />
        </div>
        <div className="flex-1">
          <label htmlFor="lastName" className="block mb-1 text-sm font-medium">Last Name</label>
          <input
            required
            type="text"
            name="lastName"
            id="lastName"
            value={formData.lastName}
            onChange={handleChange}
            className="w-full border-b border-[var(--light-brown)] focus:outline-none py-1 bg-transparent"
          />
        </div>
      </div>

      <div>
        <label htmlFor="email" className="block mb-1 text-sm font-medium">Email</label>
        <input
          required
          type="email"
          name="email"
          id="email"
          value={formData.email}
          onChange={handleChange}
          className="w-full border-b border-[var(--light-brown)] focus:outline-none py-1 bg-transparent"
        />
      </div>

      <div>
        <label htmlFor="message" className="block mb-1 text-sm font-medium">Message</label>
        <textarea
          required
          name="message"
          id="message"
          rows={4}
          value={formData.message}
          onChange={handleChange}
          className="w-full border-b border-[var(--light-brown)] focus:outline-none py-1 bg-transparent resize-none"
        />
      </div>

      <button
        type="submit"
        className="px-6 py-2 border border-[var(--light-brown)] rounded-full text-[var(--light-brown)] hover:bg-[var(--light-brown)] hover:text-white transition-all"
      >
        Send Message
      </button>
    </form>
  );
};
