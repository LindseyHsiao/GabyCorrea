import { useState } from 'react';
import { useMutation } from '@apollo/client';
import { LOGIN_USER } from '../utils/mutations';

import Auth from '../utils/auth';

export default function Login(props) {
    const [formState, setFormState] = useState({ email: '', password: '' });
    const [login, { error }] = useMutation(LOGIN_USER);

    // update state based on form input changes
    const handleChange = (event) => {
        const { name, value } = event.target;

        setFormState({
            ...formState,
            [name]: value,
        });
    };

    // submit form
    const handleFormSubmit = async (event) => {
        event.preventDefault();

        try {
            const { data } = await login({
                variables: { ...formState },
            });

            Auth.login(data.login.token);
        } catch (e) {
            console.error(e);
        }

        // clear form values
        setFormState({
            email: '',
            password: '',
        });
    };



    return (
        <>
            {/* <!-- Shorten section  --> */}
            <section id="shorten" className="relative bg-orange-50 h-screen">
                {/* <!-- Shorten container --> */}
                <div className="max-w-4xl mx-auto p-6 space-y-6">
                    {/* <!-- Form --> */}
                    <form onSubmit={handleFormSubmit} className="relative flex flex-col w-3/4 p-10 mt-20 space-y-4 bg-gray-600 rounded">
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

                        <button
                            className="px-10 py-3 text-white bg-gray-900 rounded hover:bg-gray-500 focus:outline-none md:py-2"
                            type="submit">
                            Submit
                        </button>

                        {/* <!-- error message --> */}
                        <div id="err-msg" className="absolute left-7 bottom-3 text-red text-sm italic"></div>
                    </form>

                    {error && <div>Login failed</div>}

                </div>
            </section>
        </>
    )
}