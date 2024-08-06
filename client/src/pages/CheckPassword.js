import React, { useEffect, useState } from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import axios from 'axios';
import toast from 'react-hot-toast';
import Avatar from '../components/Avatar';

const CheckPassword = () => {
  const [data, setData] = useState({
    password: '',
  });
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    if (!location?.state?.name) {
      navigate('/email');
    }
  }, [location, navigate]);

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

    const URL = `${process.env.REACT_APP_BACKEND_URL}/api/password`;

    console.log(URL);

    try {
      const response = await axios.post(URL, data);
      toast.success(response.data.message);

      if (response.data.success) {
        setData({
          password: '',
        });
        navigate('/');
      }
    } catch (err) {
      toast.error(err?.response?.data?.message);
    }
  };

  return (
    <div className='mt-12'>
      <div className=' bg-white w-full max-w-md mx-auto rounded overflow-hidden p-4'>
        <div className='w-fit mx-auto mb-2 flex flex-col justify-center items-center'>
          <Avatar
            width={100}
            height={100}
            name={location?.state?.name}
            imageURI={location?.state?.profile_pic}
          />

          <h3 className='text-center font-semibold mt-1'>Welcome back, {location?.state?.name}</h3>
        </div>

        <form className=' my-5 grid gap-4' onSubmit={handleSubmit}>
          <div className='flex flex-col gap-1'>
            <label htmlFor='password'>
              <span>Password: </span>
            </label>
            <input
              type='password'
              id='password'
              name='password'
              // placeholder='Enter your password!'
              className='bg-slate-100 px-2 py-1 focus:outline-primary'
              value={data.password}
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
          <Link to={'/forgotten-password'} className='font-semibold text-primary hover:text-secondary hover:underline'>
            Forgotten password?
          </Link>
        </p>
      </div>
    </div>
  );
};

export default CheckPassword;