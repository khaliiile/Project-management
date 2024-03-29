import  { useState } from 'react';
import {Link} from "react-router-dom";

const Register = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        password: '',
        confirmPassword: '',
    });

    const handleChange = (e) => {
        const { id, value } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [id]: value,
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Add your form submission logic here
        console.log('Form submitted:', formData);
    };

    return (
        <div className='bg-white  w-[32rem]   mx-auto px-16 py-14 shadow-xl shadow-gray-300 rounded-md'>
            <h1 className='text-2xl text-gray-800 font-sans font-normal mb-1'>
                Sign up with your email
            </h1>
            <span className='text-sm text-gray-600'>Already have an account?</span>
            <Link to='/login' className=' text-sm ml-2 text-blue-500'>
                Login in
            </Link>

            <form
                onSubmit={handleSubmit}
                className='flex flex-col gap-5 text-gray-500 text-xs mt-10'>
                <div className='border rounded border-gray-300 font-thin flex flex-col p-3 '>
                    <span className=''>First name</span>
                    <input
                        type='text'
                        className='placeholder:text-sm placeholder:font-thin text-sm outline-none py-[1px]'
                        placeholder='Mia Khalifa'
                        required
                    />
                </div>

                <div className='border rounded border-gray-300 font-thin flex flex-col p-3 '>
                    <span className=''>Last name</span>
                    <input
                        type='text'
                        className='placeholder:text-sm text-sm outline-none py-[1px]'
                        placeholder='Excentric'
                        required
                    />
                </div>

                <div className='border rounded border-gray-300 font-thin flex flex-col p-3 '>
                    <span className=''>Email address</span>
                    <input
                        type='text'
                        className='placeholder:text-sm text-sm outline-none py-[1px]'
                        placeholder='mia@khalifa.com'
                        name='email'
                        onChange={handleChange}
                        required
                    />
                </div>

                <div className='border rounded border-gray-300 font-thin flex flex-col p-3 '>
                    <span className=''>Password</span>
                    <input
                        type='password'
                        className='placeholder:text-sm text-sm outline-none py-[1px]'
                        placeholder='*********'
                        name='password'
                        onChange={handleChange}
                        required
                    />
                </div>

                <label htmlFor='check' className='flex items-end h-5 gap-1 '>
                    <input
                        type='checkbox'
                        className=' opacity-60  border h-4 w-4 border-gray-300 bg-white mr-2 cursor-pointer rounded'
                        id='check'
                        value=''
                        required
                    />

                    <p className='text-gray-500'>
                        {' '}
                        I agree to the{' '}
                        <span className='text-blue-500 '>Terms of Service</span> and{' '}
                        <span className='text-blue-500 '>Privacy Policy</span>{' '}
                    </p>
                </label>

                <button
                    type='submit'
                    className='bg-[#5551FF] text-white py-5 rounded text-sm my-3 shadow-xl shadow-[#5551FF]/30 hover:bg-[#5551ff]/70 '>
                    Create account
                </button>
            </form>
        </div>
    );
};

export default Register;
