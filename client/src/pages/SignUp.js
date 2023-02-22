import { useState } from 'react';
import { useMutation } from '@apollo/client';
import { ADD_USER } from '../utils/mutations';

import Auth from '../utils/auth';

export default function SignUp () {
    const [formState, setFormState] = useState({
        email: '',
        password: '',
      });
      const [addUser, { error }] = useMutation(ADD_USER);
    
      // update state based on form input changes
      const handleChange = (event) => {
        const { name, value } = event.target;
    
        setFormState({
          ...formState,
          [name]: value,
        });
      };

  // submit form (notice the async!)
const handleFormSubmit = async event => {
    event.preventDefault();
  
    // use try/catch instead of promises to handle errors
    try {
      // execute addUser mutation and pass in variable data from form
      const { data } = await addUser({
        variables: { ...formState }
      });
      console.log(data);
    } catch (e) {
      console.error(e);
    }
  };


    return (
        <>
         {/* <!-- Shorten section  --> */}
    <section id="shorten" className="relative bg-gray-100">
        {/* <!-- Shorten container --> */}
        <div className="max-w-4xl mx-auto p-6 space-y-6">
            {/* <!-- Form --> */}
            <form onSubmit={handleFormSubmit} className="relative flex flex-col w-full p-10 mt-20 space-y-4 bg-gray-600 rounded-lg md:flex-row md:space-y-0 md:space-x-3">
                <input 
                id="email" 
                name="email"
                type="email" 
                className="flex-1 p-3 border-2 rounded placeholder-gray-500 focus:outline-none" 
                placeholder="Your email" 
                // value={formState.email}
                // onChange={handleChange}
                />
                <input 
                id="password" 
                name="password"
                type="password" 
                className="flex-1 p-3 border-2 rounded placeholder-gray-500 focus:outline-none" 
                placeholder="******" 
                // value={formState.password}
                // onChange={handleChange}
                />
                <button 
                className="px-10 py-3 text-white bg-gray-900 rounded hover:bg-gray-500 focus:outline-none md:py-2"
                type="submit">
                    Submit
                </button>

                {/* <!-- error message --> */}
                <div id="err-msg" className="absolute left-7 bottom-3 text-red text-sm italic"></div>
            </form>

            {error && <div>Sign up failed</div>}
            
        </div>
    </section>
        </>
    )
}