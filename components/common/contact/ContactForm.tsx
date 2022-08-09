import React, { useRef } from 'react'
import emailjs from "@emailjs/browser";
import { EMAILJS_PUBLIC_KEY, EMAILJS_SEVICE_ID, EMAILJS_TEMPLATE_ID } from 'constant/emailjs.constant';

type Props = {}

const ContactForm = (props: Props) => {

  const form = useRef<HTMLFormElement>(null);
  const sendEmail = (e: { preventDefault: () => void; }) => {
    e.preventDefault();

    emailjs
      .sendForm(
        EMAILJS_SEVICE_ID,
        EMAILJS_TEMPLATE_ID,
        form.current!,
        EMAILJS_PUBLIC_KEY,
      )
      .then(
        (result) => {
          console.log(result.text);
          console.log("message sent");
          alert("message sent");
        },
        (error) => {
          console.log(error.text);
        }
      );
    };
  return (
    <form ref={form} onSubmit={sendEmail}>
        <div>
            <span className="uppercase text-sm text-gray-600 font-bold">Full Name</span>
            <input
                className="w-full bg-gray-300 text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline"
                type="text"
                name='user_name'
            />
        </div>
        <div className="mt-8">
            <span className="uppercase text-sm text-gray-600 font-bold">Email</span>
            <input
                className="w-full bg-gray-300 text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline"
                type="text"
                name='user_email'
            />
        </div>
        <div className="mt-8">
            <span className="uppercase text-sm text-gray-600 font-bold">Message</span>
            <textarea
                className="w-full h-32 bg-gray-300 text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline" 
                name="message"
            />
        </div>
        <div className="mt-8">
            <button
                className="uppercase text-sm font-bold tracking-wide bg-indigo-500 text-gray-100 p-3 rounded-lg w-full focus:outline-none focus:shadow-outline">
                Send Message
            </button>
        </div>
  </form>
  )
}

export default ContactForm;