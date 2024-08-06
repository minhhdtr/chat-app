import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import toast from 'react-hot-toast';

const CheckEmail = () => {
  const [data, setData] = useState({
    email: '',
  });
  const navigate = useNavigate();

  const handleOnChange = (e) => {
    const { name, value } = e.target;
    setData((prev) => {
      return {
        ...prev,
        [name]: value,
      };
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    e.stopPropagation();

    const URL = `${process.env.REACT_APP_BACKEND_URL}/api/email`;

    try {
      const response = await axios.post(URL, data);
      toast.success(response.data.message);

      if (response.data.success) {
        setData({
          email: '',
        });
        navigate('/password', {
          state: response?.data?.data,
        });
      }
    } catch (err) {
      toast.error(err?.response?.data?.message);
    }
  };

  return (
    <div className='mt-12'>
      <div className=' bg-white w-full max-w-md mx-auto rounded overflow-hidden p-4'>
        <h3 className='text-center font-semibold'>Sign in to Chat App</h3>

        <form className=' my-5 grid gap-4' onSubmit={handleSubmit}>
          <div className='flex flex-col gap-1'>
            <label htmlFor='email'>
              <span>Email: </span>
            </label>
            <input
              type='email'
              id='email'
              name='email'
              // placeholder='Enter your email!'
              className='bg-slate-100 px-2 py-1 focus:outline-primary'
              value={data.email}
              onChange={handleOnChange}
              required
            />
          </div>

          <button
            type='submit'
            className='bg-primary text-lg font-semibold text-white hover:bg-secondary py-2 rounded mt-3'
          >
            Sign in
          </button>
        </form>

        <p className='mt-5 text-center'>
          New to Chat App?{' '}
          <Link to={'/register'} className='font-semibold text-primary hover:text-secondary hover:underline'>
            Create an account
          </Link>
        </p>
      </div>
    </div>
  );
};

export default CheckEmail;