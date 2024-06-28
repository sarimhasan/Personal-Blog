import { useState } from 'react';

export default function ContactForm() {
  const [result, setResult] = useState('');

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult('Sending....');
    const formData = new FormData(event.target);

    formData.append('access_key', 'be5d0b80-4236-4f30-a058-4c9e3fa4e693');

    const response = await fetch('https://api.web3forms.com/submit', {
      method: 'POST',
      body: formData,
    });

    const data = await response.json();

    if (data.success) {
      setResult('Thanks for Contacting Me 😊');
      event.target.reset();
    } else {
      console.log('Error', data);
      setResult(data.message);
    }
  };

  return (
    <div className="bg-primary md:w-3/4 md:m-auto rounded-[30px] p-3 mt-10 border-2 border-dark-dark dark:border-light-dark">
      <form onSubmit={onSubmit}>
        <label htmlFor="email" className="block mt-4 mb-1 text-dark-dark">
          Email:
        </label>
        <input
          type="email"
          name="email"
          id="email"
          placeholder="hermionegranger213@hogwarts.com"
          className="outline-none w-full rounded-full px-2 py-1 mb-3"
        />
        <label htmlFor="name" className="block mb-1 text-dark-dark">
          Full Name:
        </label>
        <input
          type="text"
          id="name"
          name="Full Name"
          placeholder="Hermione Granger"
          className="outline-none w-full rounded-full px-2 py-1 mb-3"
        />
        <label htmlFor="message" className="block mb-1 text-dark-dark">
          Message:
        </label>
        <textarea
          id="message"
          name="Message"
          placeholder="What's brewing in your cauldron?"
          className="outline-none resize-none block w-full rounded-[30px] md:h-[300px] h-[200px] p-3"
        ></textarea>
        <button
          type="submit"
          className="rounded-full bg-accent w-full h-10 my-4 border-2 border-dark-dark btn"
        >
          Submit
        </button>
        <span>{result}</span>
      </form>
    </div>
  );
}
