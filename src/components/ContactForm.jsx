export default function ContactForm() {
  return (
    <div className="bg-primary md:w-3/4 md:m-auto rounded-[30px] p-3 mt-10 border-2 border-dark-dark dark:border-light-dark">
      <form action="">
        <label htmlFor="email" className="block mt-4 mb-1 text-dark-dark">
          Email:
        </label>
        <input
          type="email"
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
          placeholder="Hermione Granger"
          className="outline-none w-full rounded-full px-2 py-1 mb-3"
        />
        <label htmlFor="message" className="block mb-1 text-dark-dark">
          Message:
        </label>
        <textarea
          id="message"
          placeholder="What's brewing in your cauldron?"
          className="outline-none resize-none block w-full rounded-[30px] md:h-[300px] h-[200px] p-3"
        ></textarea>
        <button
          type="submit"
          className="rounded-full bg-accent w-full h-10 my-4 border-2 border-dark-dark btn"
        >
          Submit
        </button>
      </form>
    </div>
  );
}
