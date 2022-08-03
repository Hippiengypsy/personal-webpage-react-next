import React from 'react'

type Props = {}

const ContactForm = (props: Props) => {
  return (
    <form className="flex flex-col justify-center">
        <div className="flex flex-col my-1">
            <label htmlFor="name" className="hidden">Full Name</label>
            <input type="name" name="name" id="name" placeholder="Full Name" className="w-100 my-1 py-3 px-3 rounded-lg bg-white dark:bg-gray-800 border border-gray-400 dark:border-gray-700 text-gray-400 font-semibold focus:border-indigo-500 focus:outline-none" />
        </div>

        <div className="flex flex-col my-1">
            <label htmlFor="email" className="hidden">Email</label>
            <input type="email" name="email" id="email" placeholder="Email" className="w-100 my-1 py-3 px-3 rounded-lg bg-white dark:bg-gray-800 border border-gray-400 dark:border-gray-700 text-gray-400 font-semibold focus:border-indigo-500 focus:outline-none" />
        </div>

        <div className="flex flex-col my-1">
            <label htmlFor="tel" className="hidden">Number</label>
            <input type="tel" name="tel" id="tel" placeholder="Telephone Number" className="w-100 my-1 py-3 px-3 rounded-lg bg-white dark:bg-gray-800 border border-gray-400 dark:border-gray-700 text-gray-400 font-semibold focus:border-indigo-500 focus:outline-none" />
        </div>

        <button type="submit" className="md:w-32 bg-indigo-600 hover:bg-blue-dark text-white font-bold py-3 px-6 rounded-lg my-3 hover:bg-indigo-500 transition ease-in-out duration-300">
            Submit
        </button>
    </form>
  )
}

export default ContactForm;