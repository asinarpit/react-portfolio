import React from "react";

const Contact = () => {
  return (
    <div
      name="contact"
      className="w-full h-screen  bg-[#0a192f] flex justify-center items-center p-4"
    >
      <form
        action="https://getform.io/f/436b24f9-7e81-49d7-94b2-9fc0bba82c94"
        method="POST"
        className="flex flex-col max-w-[600px] w-full"
      >
        <div className="pb-8 ">
          <p className="text-4xl font-bold inline border-b-4 border-yellow-600 text-gray-300">
            Contact
          </p>
          <p className="text-gray-300 py-4">
            // Submit the form below or shoot me an email - myemail@gmail.com
          </p>
        </div>

        <input
          className="p-2 bg-[#ccd6f6]"
          type="text"
          placeholder="Name"
          name="name"
        />
        <input
          className="my-4 p-2 bg-[#ccd6f6]"
          type="email"
          placeholder="Email"
          name="email"
        />
        <textarea
          className="bg-[#ccd6f6] p-2"
          placeholder="Message"
          name="message"
          rows="10"
        ></textarea>

        <button className="text-white border-2 hover:bg-yellow-600 hover:border-yellow-600 px-4 py-3 m-8 mx-auto flex items-center font-semibold">
          Let's Collaborate
        </button>
      </form>
    </div>
  );
};

export default Contact;
