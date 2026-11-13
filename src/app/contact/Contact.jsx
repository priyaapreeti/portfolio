import { PaperPlaneRight } from "phosphor-react";
import React from "react";

const Contact = () => {
     const [result, setResult] = React.useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", "a49a5d5c-b857-4de3-b76d-0b9653fe448d");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData
    });

    const data = await response.json();

    if (data.success) {
      setResult("Form Submitted Successfully");
      event.target.reset();
    } else {
      console.log("Error", data);
      setResult(data.message);
    }
  };
  return (
    <div id="contact" className=" w-full px-[12%] py-20 scroll-mt-20">
      <h4 className="text-center mb-2 text-lg">Get in touch</h4>
      <h2 className="text-center text-5xl ">Connect with me</h2>
      <p className="text-center max-w-2xl mx-auto mt-5 mb-12 ">
        Drop a message, would love to connect with you back
      </p>
      <form className="max-w-2xl mx-auto" onSubmit={onSubmit}>
        <div className="grid grid-cols-1 sm:grid-cols-2  gap-6 mt-10 mb-8">
          <input
            type="text"
            name="name"
            placeholder="Enter your name"
            className="flex-1 p-3 outline-none border-[0.5px] border-gray-500 rounded-md bg-white"
          />
          <input
            type="email"
            name="email"
            placeholder="Enter your email"
            className="flex-1 p-3 outline-none border-[0.5px] border-gray-500 rounded-md bg-white"
          />
        </div>
        <textarea
          className=" w-full flex-1 p-3 outline-none border-[0.5px] border-gray-500 rounded-md bg-white"
          name="message"
          placeholder="Enter Your message"
          rows={6}
        ></textarea>
        <button type="submit" className="py-3 px-8 flex itemd-center justify-between gap-2 bg-black/80 text-white rounded-full mx-auto hover:bg-black duration-500 items-center">Send now <PaperPlaneRight size={20} /></button>
        <p className="mt-4 text-center text-gray-500">{result}</p>
      </form>
    </div>
  );
};

export default Contact;
