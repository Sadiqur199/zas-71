import React from 'react';
import FAQ from './FAQ';

const ProfileDetailsSecondpart = () => {
  return (
    <div className='w-[337px] ml-[50px] mt-5'>
      <div className='bg-[#5A5BCB] h-auto rounded '>
      <div className=" p-5 text-white">
         <div className=' flex '>
         <img
            className="rounded-full h-[38px] w-[38px]"
            src="https://i.ibb.co/3p8ksjF/Ellipse-377.png"
            alt=""
          />
            <h4 className="font-bold text-sm text-white mt-2 ml-3">Ahsanul Akib</h4>
         </div>
         <p className='mt-3 text-xs'>Email:ahsanulakib@gmail.com</p>
         <p className='mt-3 text-xs'>Phone:75216858136</p>
        </div>
      </div>

      <div>
        <h1 className='font-bold mt-5 mb-3'>FAQ</h1>
        <FAQ></FAQ>
      </div>
    </div>
  );
};

export default ProfileDetailsSecondpart;