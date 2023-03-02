import React, { useState } from 'react';
// Here we import a helper function that will check if the email is valid
import { validateEmail } from '../utils/helpers';

// use states (useEffect) when state is an empty string 
// activity react forms 16  

function Contact() {
     // Create state variables for the fields in the form
  // We are also setting their initial values to an empty string
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [input, setInput] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const handleInputChange = (e) => {
    // Getting the value and name of the input which triggered the change
    const { target } = e;
    const inputType = target.name;
    const inputValue = target.value;

    // Based on the input type, we set the state of either email, name, and password
    if (inputType === 'name') {
      setName(inputValue);
    } else if (inputType === 'email') {
      setEmail(inputValue);
    } else {
      setInput(inputValue);
    }
  };

  const handleFormSubmit = (e) => {
    // Preventing the default behavior of the form submit (which is to refresh the page)
    e.preventDefault();

    // First we check to see if the email is not valid or if the name is empty. If so we set an error message to be displayed on the page.
    if (!validateEmail(email)) {
      setErrorMessage('Email is invalid');
      // We want to exit out of this code block if something is wrong so that the user can correct it
      return;
      // Then we check to see if the password is not valid. If so, we set an error message regarding the password.
    }
    alert(`Message sent!`);

    // If everything goes according to plan, we want to clear out the input after a successful registration.
      setName('');
      setEmail('');
      setInput('');
  };
    
  return (
      <div name='contact' className='w-full h-screen bg-gradient-to-b from-lime-600 via-emerald-300 to-white-800 text-white'>
          <div className='flex flex-col p-4 justify-center max-w-screen-lg mx-auto h-full'>
              <div className='pb-8'>
                  <p className='text-4xl font-bold inline text-white'>
                  Contact    
                      </p>
                  <p className='py-6  text-gray-500'>
                     
                  </p>
              </div>
              <div className='flex justify-center items-center '>
                  <form action='' className='flex flex-col w-full md:w-1/2'>
                      <input value={name}  onChange={handleInputChange} type='text' name='name' placeholder='Enter your name' className='p-2 bg-transparent border-2 rounded-md focus:outline-none'></input>
                      <input value={email}  onChange={handleInputChange} type='text' name='email' placeholder='Enter your email' className='my-4 p-2 bg-transparent border-2 rounded-md focus:outline-none' ></input>
                      <textarea value={input}  onChange={handleInputChange} name='input' placeholder='Enter your message' rows='10' className='p-2 bg-transparent border-2 rounded-md focus:outline-none'></textarea>
                      <button onClick={handleFormSubmit} className='text-white bg-gradient-to-b from-teal-300 to-teal-600 px-6 py-3 my-8 mx-auto flex-items-center rounded-md hover:scale-110 duration-300'>Let's talk</button>
                  </form>
                  {errorMessage && (
        <div>
          <p className="error-text ml-10 text-red-500">{errorMessage}</p>
        </div>
      )}
              </div>
         </div>
      </div>
  )
}

export default Contact;

