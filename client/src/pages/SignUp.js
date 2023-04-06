import { useState } from 'react';
import { useMutation } from '@apollo/client';
import { ADD_USER } from '../utils/mutations';

import Auth from '../utils/auth';

export default function SignUp() {
    const [formState, setFormState] = useState({
        email: '',
        password: '',
        firstName: '',
        lastName: '',
        address: ''
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
    const handleFormSubmit = async (event) => {
        event.preventDefault();

        // use try/catch instead of promises to handle errors
        try {
            // execute addUser mutation and pass in variable data from form
            const { data } = await addUser({
                variables: { ...formState }
            });

           
            Auth.signup(data.addUser.token)
        } catch (e) {
            console.error(e);
        }

        setFormState({
            email: '',
            password: '',
            firstName: '',
            lastName: '',
            address: ''
        })
    };


    return (
        <>
            {/* <!-- Shorten section  --> */}
            <section id="shorten" className="relative bg-orange-50 h-screen">
                {/* <!-- Shorten container --> */}
                <div className="max-w-4xl mx-auto p-6 space-y-6">
                    {/* <!-- Form --> */}
                    <form onSubmit={handleFormSubmit} className="relative flex flex-col w-3/4 p-10 mt-20 space-y-4 bg-gray-600 rounded">
                        <h3 className="text-white font-extrabold text-2xl">Sign Up!</h3>
                        <input
                            id="email"
                            name="email"
                            type="email"
                            className="p-3 border-2 rounded placeholder-gray-500 focus:outline-none"
                            placeholder="Your email"
                            value={formState.email}
                            onChange={handleChange}
                        />
                        <input
                            id="password"
                            name="password"
                            type="password"
                            className="p-3 border-2 rounded placeholder-gray-500 focus:outline-none"
                            placeholder="******"
                            value={formState.password}
                            onChange={handleChange}
                        />
                        <input
                            id="firstName"
                            name="firstName"
                            type="text"
                            className="p-3 border-2 rounded placeholder-gray-500 focus:outline-none"
                            placeholder="First name"
                            value={formState.firstName}
                            onChange={handleChange}
                        />
                        <input
                            id="lastName"
                            name="lastName"
                            type="text"
                            className="p-3 border-2 rounded placeholder-gray-500 focus:outline-none"
                            placeholder="Last name"
                            value={formState.lastName}
                            onChange={handleChange}
                        />
                        <input
                            id="address"
                            name="address"
                            type="text"
                            className="p-3 border-2 rounded placeholder-gray-500 focus:outline-none"
                            placeholder="Address"
                            value={formState.address}
                            onChange={handleChange}
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