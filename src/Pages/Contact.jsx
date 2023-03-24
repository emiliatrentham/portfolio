import React, { useState } from "react";
import { validateEmail, confirmInput } from "../utils/helpers";

export default function Contact() {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [input, setInput] = useState("");
  const [errorNameInput, setErrorNameInput] = useState("");
  const [errorEmailInput, setEmailInput] = useState("");
  const [errorMessageInput, setErrorMessageInput] = useState("");

  const handleInputChange = (e) => {
    const { target } = e;
    const inputType = target.name;
    const inputValue = target.value;

    if (inputType === "name") {
      setName(inputValue);
      setErrorNameInput("");
    } else if (inputType === "email") {
      setEmail(inputValue);
      setEmailInput("");
    } else {
      setInput(inputValue);
      setErrorMessageInput("");
    }
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();

    if (confirmInput(name) === false) {
      setErrorNameInput("Name input required");
    }

    if (!confirmInput(input) === false) {
      setErrorMessageInput("Message required");
    }

    if (!validateEmail(email)) {
      setEmailInput("Email is invalid");
    }

    if (errorNameInput || errorEmailInput || errorMessageInput) {
      return;
    } else {
      setName("");
      setEmail("");
      setInput("");
      
      alert(`Message sent!`);
    }
    console.log(setName);
    console.log(setEmail);
    console.log(setInput);
  };

  return (
    <div name="contact" className="w-full mt-20">
      <div className="flex flex-col p-4 justify-center max-w-screen-md mx-auto h-full">
        <div className="pb-8 mt-10">
          <p className="title text-4xl font-bold inline text-slate-400 dark:text-slate-300">
            Contact
          </p>
        </div>

        <div className="flex justify-center items-center mt-10">
          <form action="" className="flex flex-col w-full md:w-1/2">
            <input
              value={name}
              onChange={handleInputChange}
              type="text"
              name="name"
              placeholder="Enter your name"
              required
              className="form text-white p-2 bg-transparent border-2 border-slate-400 dark:border-slate-200 rounded-md focus:outline-none"
            ></input>
            <input
              autoComplete="email"
              value={email}
              onChange={handleInputChange}
              type="text"
              name="email"
              placeholder="Enter your email"
              className="form text-white my-4 p-2 bg-transparent border-2 border-slate-400 dark:border-slate-200 rounded-md focus:outline-none"
            ></input>
            <textarea
              value={input}
              onChange={handleInputChange}
              name="input"
              placeholder="Enter your message"
              rows={10}
              required
              className="form text-white p-2 bg-transparent border-2 border-slate-400 dark:border-slate-200 rounded-md focus:outline-none"
            ></textarea>
            <button
              onClick={handleFormSubmit}
              className="text-white bg-gradient-to-br from-indigo-400 via-purple-400 to-pink-400 hover:to-red-400 dar:bg-gradient-to-br dark:from-indigo-500 dark:via-purple-500 dark:to-pink-500 dark:hover:to-red-500 hover:underline active:ring-3 active:ring-blue-300 px-6 py-3 my-8 mx-auto flex-items-center rounded-md mb-20"
            >
              Let's talk
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
