import React from 'react';
import Image from 'next/image';

const TopLeft = () => {
    return (
        <div className='col-span-12 w-full md:col-span-5 grid grid-cols-5 gap-[10px]  '>
            <div className="col-span-5 lg:col-span-2 flex flex-col items-center justify-center  w-auto   relative ">
                <h1 className="bottom-0 hidden lg:block rotate-[-90deg] -translate-y-[200px]  text-[40px] font-black uppercase leading-[100%] text-white  absolute w-[500px]">ULALO - ONE STOP SOLUTION FOR YOUR HEALTH DATA</h1>
                <h1 className="md:hidden block text-[24px] font-black uppercase leading-[100%] text-white text-center  ">ULALO - ONE STOP SOLUTION FOR YOUR HEALTH DATA</h1>
            </div>
            <div className="bg-white p-5 col-span-5 lg:col-span-3 mt-[20px] lg:mt-0 w-full flex flex-col items-start justify-start rounded-[15px] overflow-hidden ">
                <div className="w-full flex flex-row items-center justify-between">

                    <p className="text-[#364655] text-[30px] font-bold leading-[36px] uppercase">ULALO</p>
                    <div className="w-[54px] h-[50px] relative">
                        <Image src={"/image/logo.png"} alt="ULALO" layout="fill" objectFit="cover" />

                    </div>
                </div>
                <div className="w-full aspect-square relative mt-[5px]">
                    <Image src={"/image/cube.png"} alt="ULALO" layout="fill" objectFit="cover" />
                </div>
                <p className="text-[#364655] text-[14px] font-normal leading-[16.8px] mt-[27.86px] ">At ULALO, we believe in a world where individuals have complete control over their health data. Founded on the principles of transparency, security, and patient empowerment.</p>

            </div>

        </div>
    );
};

export default TopLeft;