import React from 'react';

const SecondContent = () => {
  return (
    <div className='mt-[30px]'>
      <div className='flex '>
        <div className='flex'>
          <img className='rounded-full h-[48px] w-[48px]' src="https://i.ibb.co/gPKTrB8/impressed-surprised-man-points-away-blank-space-273609-40694-3.png" alt="" />
          <div className='ml-3'>
             <h4 className='font-bold'>Mentor Name</h4>
             <p className='text-gray-500'>Speacialization</p>
          </div>
        </div>
        <div className=' mt-2 ml-[70px]'>
          <a href="" className='text-[#5A5BCB] underline text-sm font-bold'>View profile</a>
        </div>
      </div>
    </div>
  );
};

export default SecondContent;