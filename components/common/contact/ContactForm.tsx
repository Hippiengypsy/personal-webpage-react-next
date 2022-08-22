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
            <span className="uppercase text-sm font-bold">your name</span>
            <input
                className="box-item-border bg-inherit w-full mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline"
                type="text"
                name='user_name'
            />
        </div>
        <div className="mt-8">
            <span className="uppercase text-sm font-bold">email</span>
            <input
                className="box-item-border bg-inherit w-full mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline"
                type="text"
                name='user_email'
            />
        </div>
        <div className="mt-8">
            <span className="uppercase text-sm font-bold">message</span>
            <textarea
                className="box-item-border bg-inherit w-full h-32 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline" 
                name="message"
            />
        </div>
        <div className="mt-8">
            <button className="box-item-border uppercase text-sm font-bold tracking-wide p-3 rounded-lg w-full focus:outline-none focus:shadow-outline">
                Send Message
            </button>
        </div>
  </form>
  )
}

export default ContactForm;