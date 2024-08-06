import React from 'react';

const Avatar = ({ userId, name, imageURI, width, height }) => {
  return (
    <div className='text-slate-800 overflow-hidden rounded-full flex justify-center items-center'>
      {imageURI ? (
        <img
          src={imageURI}
          alt={name}
          width={width}
          height={height}
        />
      ) : (
        name ? (
          <div className='flex items-center justify-center w-[70px] h-[70px] bg-slate-100 text-slate-800 font-semibold text-lg rounded-full'>
            {name.charAt(0).toUpperCase()}
          </div>
        ) : (
          <div className='flex items-center justify-center w-[70px] h-[70px] bg-slate-100 text-slate-800 font-semibold text-lg rounded-full'>
            {userId}
          </div> 
        )
      )
      }
    </div>
  )
};

export default Avatar;