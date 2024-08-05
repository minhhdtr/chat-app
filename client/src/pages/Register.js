import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { IoIosClose } from 'react-icons/io';

const Register = () => {
  const [data, setData] = useState({
    name: '',
    email: '',
    password: '',
    profile_pic: '',
  });
  const [uploadPic, setUploadPic] = useState('');

  const handleOnChange = (e) => {
    const { name, value } = e.target;
    setData((prev) => {
      return {
        ...prev,
        [name]: value,
      };
    });
  };

  const handleUploadPic = (e) => {
    const file = e.target.files[0];
    setUploadPic(file);
  };

  const handleClearPic = (e) => {
    e.preventDefault();
    e.stopPropagation();
    setUploadPic('');
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    e.stopPropagation();
  };

  return (
    <div className='mt-5'>
      <div className=' bg-white w-full max-w-sm mx-auto rounded overflow-hidden p-4'>
        <h3 className='text-center font-semibold'>Welcome to Chat App!</h3>

        <form className=' my-5 grid gap-4' onSubmit={handleSubmit}>
          <div className='flex flex-col gap-1'>
            <label htmlFor='name'>
              <span>Name: </span>
            </label>
            <input
              type='text'
              id='name'
              name='name'
              placeholder='Enter your name!'
              className='bg-slate-100 px-2 py-1 focus:outline-primary'
              value={data.name}
              onChange={handleOnChange}
              required
            />
          </div>

          <div className='flex flex-col gap-1'>
            <label htmlFor='email'>
              <span>Email: </span>
            </label>
            <input
              type='email'
              id='email'
              name='email'
              placeholder='Enter your email!'
              className='bg-slate-100 px-2 py-1 focus:outline-primary'
              value={data.email}
              onChange={handleOnChange}
              required
            />
          </div>

          <div className='flex flex-col gap-1'>
            <label htmlFor='password'>
              <span>Password: </span>
            </label>
            <input
              type='password'
              id='password'
              name='password'
              placeholder='Enter your password!'
              className='bg-slate-100 px-2 py-1 focus:outline-primary'
              value={data.password}
              onChange={handleOnChange}
              required
            />
          </div>

          <div className='flex flex-col gap-1'>
            <label htmlFor='profile_pic'>
              <span>Profile picture: </span>

              <div className='h-14 bg-slate-100 text-gray-500  flex justify-center items-center rounded cursor-pointer border hover:border-primary'>
                <p className='text-sm max-w-[300px] text-ellipsis line-clamp-1'>
                  {uploadPic?.name ? uploadPic.name : 'Upload your profile picture'}
                </p>
                {uploadPic?.name && (
                  <button
                    type='button'
                    onClick={handleClearPic}
                    className='text-lg ml-2 hover:text-red-600'
                  >
                    <IoIosClose />
                  </button>
                )}
              </div>
            </label>
            <input
              type='file'
              id='profile_pic'
              name='profile_pic'
              className='bg-slate-100 px-2 py-1 focus:outline-primary hidden'
              onChange={handleUploadPic}
            />
          </div>

          <button
            type='submit'
            className='bg-primary text-lg text-white font-semibold py-2 rounded hover:bg-secondary'
          >
            Register
          </button>
        </form>

        <p className='mt-5 text-center'>
          Already have an account?{' '}
          <Link to={'/email'} className='text-primary font-semibold hover:text-secondary hover:underline'>
            Login
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Register;