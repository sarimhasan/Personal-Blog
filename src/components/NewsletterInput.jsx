import React, { useState } from 'react';
import axios from 'axios';

export default function NewsletterInput() {
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const response = await axios.post(
        'https://api.convertkit.com/v3/forms/6765702/subscribe',
        {
          api_key: 'DWELhQGJThjeyoO_4JLwBg',
          email: email,
        }
      );

      if (response.data.subscription) {
        setMessage('Thanks for subscribing!');
        setEmail('');
      } else {
        setMessage('Something went wrong. Please try again.');
      }
    } catch (error) {
      setMessage('Something went wrong. Please try again.');
    }
  };

  return (
    <div className="flex flex-col justify-center items-center">
      <form onSubmit={handleSubmit}>
        <input
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          type="email"
          placeholder="someone@me.com"
          name=""
          id=""
          className="w-[135px] md:w-[260px] text-sm md:text-[16px] py-1 px-2 rounded-l-full border-2 border-black outline-none"
        />
        <button
          className="p-1 text-sm text-tt-light md:text-[16px] border-2 border-black rounded-r-full bg-primary md:w-[220px]"
          type="submit"
        >
          Signup for my newsletter
        </button>
      </form>
      {message && <p className="mt-2">{message}</p>}
    </div>
  );
}
