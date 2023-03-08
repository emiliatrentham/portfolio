import React, {
  useState,
} from "react";

// Here we import a helper function that will check if the email is valid
import {
  validateEmail,
  confirmInput,
} from "../utils/helpers";


function Contact() {
  // Create state variables for the fields in the form
  // We are also setting their initial values to an empty string
  const [email, setEmail] =
    useState("");
  const [name, setName] =
    useState("");
  const [input, setInput] =
    useState("");
  const [
    errorNameInput,
    setErrorNameInput,
  ] = useState("");
  const [
    errorEmailInput,
    setEmailInput,
  ] = useState("");
  const [
    errorMessageInput,
    setErrorMessageInput,
  ] = useState("");

  const handleInputChange = (
    e
  ) => {
    // Getting the value and name of the input which triggered the change
    const { target } = e;
    const inputType =
      target.name;
    const inputValue =
      target.value;

    // Based on the input type, we set the state of either email, name, or message
    if (
      inputType === "name"
    ) {
      setName(inputValue);
    } else if (
      inputType === "email"
    ) {
      setEmail(inputValue);
    } else {
      setInput(inputValue);
    }
  };

  const handleFormSubmit = (
    e
  ) => {
    // Preventing the default behavior of the form submit (which is to refresh the page)
    e.preventDefault();

        // Check to see if the email is not valid or if the name or message is empty. If so we set an error message to be displayed on the page.
    if (!confirmInput(name)) {
      setErrorNameInput(
        "Name input required"
      );
    }

    if (
      !confirmInput(input)
    ) {
      setErrorMessageInput(
        "Message required"
      );
    }

  
    if (
      !validateEmail(email)
    ) {
      setEmailInput(
        "Email is invalid"
      );
      // We want to exit out of this code block if something is wrong so that the user can correct it

      // Then we check to see if the password is not valid. If so, we set an error message regarding the password.
    }

    console.log(
      errorNameInput
    );
    console.log(
      errorMessageInput
    );
    console.log(
      errorEmailInput
    );

    if (
      errorNameInput ||
      errorEmailInput ||
      errorMessageInput
    ) {
      return;
    } else {
      // If everything goes according to plan, we want to clear out the input after a successful registration.
      setName("");
      setEmail("");
      setInput("");

      alert(`Message sent!`);
    }
  };

  return (
    <div
      name="contact"
      className="w-full h-screen"
    >
      <div className="flex flex-col p-4 justify-center max-w-screen-lg mx-auto h-full py-60">
        <div className="pb-8">
          <p className="title text-4xl font-bold inline text-white">
            Contact
          </p>
          {/* <p className='py-6 text-gray-500'>
                     
                  </p> */}
        </div>
        <div className="mt-20 flex justify-center items-center ">
          <form
            action=""
            className="flex flex-col w-full md:w-1/2"
          >

            <input
              value={name}
              onChange={
                handleInputChange
              }
              type="text"
              name="name"
              placeholder="Enter your name"
              required
              className="form text-white p-2 bg-transparent border-2 rounded-md focus:outline-none"
            ></input>

            <input
              autoComplete="email"
              value={email}
              onChange={
                handleInputChange
              }
              type="text"
              name="email"
              placeholder="Enter your email"
              className="form text-white my-4 p-2 bg-transparent border-2 rounded-md focus:outline-none"
            ></input>

            <textarea
              value={input}
              onChange={
                handleInputChange
              }
              name="input"
              placeholder="Enter your message"
              rows={10}
              required
              className="form text-white p-2 bg-transparent border-2 rounded-md focus:outline-none"
            ></textarea>

            <button
              onClick={
                handleFormSubmit
              }
              className="text-white bg-gradient-to-b from-teal-300 to-teal-600 px-6 py-3 my-8 mx-auto flex-items-center rounded-md hover:scale-110 duration-300"
            >
              Let's talk
            </button>
          </form>

          {errorNameInput && (
            <div>
              <p className="error-text ml-10 text-red-500">
                {
                  errorNameInput
                }
              </p>
            </div>
          )}

          {errorEmailInput && (
            <div>
              <p className="error-text ml-10 text-red-500">
                {
                  errorEmailInput
                }
              </p>
            </div>
          )}

          {errorMessageInput && (
            <div>
              <p className="error-text ml-10 text-red-500">
                {
                  errorMessageInput
                }
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default Contact;
