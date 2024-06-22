export default function NewsletterInput() {
  return (
    <div className="flex justify-center">
      <div>
        <input
          type="email"
          name=""
          id=""
          className="w-[160px] md:w-[260px] py-1 px-2 rounded-l-full border-2 border-black outline-none"
        />
        <button
          className="p-1 text-tt-light text-[16px] border-2 border-black rounded-r-full bg-primary md:w-[220px]"
          type="submit"
        >
          Signup for my newsletter
        </button>
      </div>
    </div>
  );
}
