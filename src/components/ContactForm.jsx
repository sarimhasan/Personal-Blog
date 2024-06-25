export default function ContactForm() {
  return (
    <div className="">
      <form action="">
        <label htmlFor="email" className="block">
          Email:
        </label>
        <input
          type="email"
          id="email"
          placeholder="hermionegranger213@hogwarts.com"
          className="outline-none"
        />
        <label htmlFor="name" className="block">
          Full Name:
        </label>
        <input
          type="text"
          id="name"
          placeholder="Hermione Granger"
          className="outline-none"
        />
        <label htmlFor="message" className="block">
          Message:
        </label>
        <textarea
          id="message"
          placeholder="What's brewing in your cauldron?"
          className="outline-none resize-none block"
        ></textarea>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}
