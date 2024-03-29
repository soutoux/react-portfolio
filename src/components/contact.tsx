import { useRef } from "react";
import emailjs from "@emailjs/browser";

const Contact = () => {
  const form = useRef<HTMLFormElement>(null);

  const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (form.current) {
      emailjs
        .sendForm(
          "service_mrtknqc",
          "template_sr3fn68",
          form.current,
          "Y1pS1pI-5RN_92T5N"
        )
        .then(
          (result) => {
            console.log(result.text);
            // alert("Message sent successfully!");
            if (form.current) {
              form.current.reset();
            }
          },
          (error) => {
            console.log(error.text);
            alert("Failed to send the message, please try again.");
          }
        );
    }
  };

  return (
    <div className="flex flex-col bg-gray-700 shadow-lg shadow-gray-800 rounded-md mb-4 p-6">
      <h2 className="text-3xl font-semibold text-white">Contact</h2>
      <form
        ref={form}
        onSubmit={sendEmail}
        className="flex gap-4 mt-4 contact-form"
      >
        <div className="flex-1 flex flex-col gap-2">
          <div>
            <label className="font-semibold text-white" htmlFor="interest">
              Interest:
            </label>
            <select
              className="border-2 border-gray-700 px-2 py-1 rounded-md w-full text-white bg-gray-800"
              id="interest"
              name="interest"
              required
            >
              <option value="both">Both</option>
              <option value="design">Design</option>
              <option value="programming">Development</option>
            </select>
          </div>
          <div>
            <label className="font-semibold text-white" htmlFor="name">
              Name:
            </label>
            <input
              className="border-2 border-gray-700 px-2 py-1 rounded-md w-full text-white bg-gray-800"
              type="text"
              id="name"
              name="user_name"
              placeholder="Your name"
              required
            />
          </div>
          <div>
            <label className="font-semibold text-white" htmlFor="email">
              Email:
            </label>
            <input
              className="border-2 border-gray-700 px-2 py-1 rounded-md w-full text-white bg-gray-800"
              type="email"
              id="email"
              name="user_email"
              placeholder="Your best email"
              required
            />
          </div>
          <div>
            <label className="font-semibold text-white" htmlFor="phone">
              Phone:
            </label>
            <input
              className="border-2 border-gray-700 px-2 py-1 rounded-md w-full text-white bg-gray-800"
              type="tel"
              id="phone"
              name="user_phone"
              placeholder="Phone number"
              required
            />
          </div>
        </div>
        <div className="flex-1 flex flex-col gap-2">
          <div>
            <label className="font-semibold text-white" htmlFor="message">
              Message:
            </label>
            <textarea
              className="border-2 border-gray-700 px-2 py-1 mb-6 rounded-md w-full h-full text-white bg-gray-800 resize-none"
              name="message"
              id="message"
              rows={5}
              placeholder="Your message"
              required
            />
          </div>
          <button
            className="bg-indigo-600 text-white px-4 py-2 rounded-md w-full mt-auto transition-all hover:bg-indigo-700"
            type="submit"
          >
            Send
          </button>
        </div>
      </form>
    </div>
  );
};

export default Contact;
