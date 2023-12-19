import React from 'react';

const ProfileSecondHeader = () => {
  return (
    <div className='w-[832px] h-[50px] mx-auto mt-[80px]'>
      <div className='grid grid-cols-4'>

        <div className='flex w-[140px] h-[30px]'>
          <h1 className='border bg-[#9CA3AF] text-white h-[30px] w-[30px] rounded-full text-center'>01</h1>
          <p className='mt-[5px] ml-3 text-sm text-gray-600'>Profile Details</p>
        </div>

        <div className='flex w-[170px] h-[30px]'>
          <h1 className='border bg-[#9CA3AF] text-white h-[30px] w-[30px] rounded-full text-center'>02</h1>
          <p className='mt-[5px] ml-3 text-sm text-gray-600'>Minimum One task</p>
        </div>

        <div className='flex w-[140px] h-[30px]'>
          <h1 className='border bg-[#9CA3AF] text-white h-[30px] w-[30px] rounded-full text-center'>03</h1>
          <p className='mt-[5px] text-sm ml-3 text-gray-600'>Subscriptions</p>
        </div>

        <div className='flex w-[140px] h-[30px]'>
          <h1 className='border bg-[#9CA3AF] text-white h-[30px] w-[30px] rounded-full text-center'>04</h1>
          <p className='mt-[5px] text-sm text-gray-600 ml-3'>Overview</p>
        </div>

      </div>
    </div>
  );
};
export default ProfileSecondHeader;