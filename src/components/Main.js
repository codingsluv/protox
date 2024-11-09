/** @format */

import React from 'react';
import {
	facebook,
	globe,
	hamburgerMenu,
	instagram,
	rightArrow,
	twitter,
} from '../assets/svg/svg';

const Main = () => {
	return (
		<div id='home' className='md:py-[30px] py-[30px] flex flex-col gap-63px'>
			<div className=' font-sora font-bold md:text-[56px] text-[24px] md:leading-[72px] md:tracking-[1px] w-full md:w-[80%] bg-gradient-to-r from-purple-500 to-slate-500 text-transparent bg-clip-text'>
				Hi Im Muhammad Nur, a software engineer with various programming language and
				little curiosity
			</div>

			<div className='flex flex-col md:flex-row gap-[30px] mt-[35px] md:mt-[69px]'>
				<div className='flex-[2]'>
					<div className='text-[15px] md:text-[28px] font-sora text-[#FBFBFB] md:leading-[72px]'>
						What I do
					</div>
					<div className='text-[10px] md:text-[18px] text-[#d6d6d6] '>
						Create the computer applications that allow users to do specific
						tasks and the underlying systems that run the devices or control
						networks.
					</div>
				</div>
				<div className='flex flex-col items-center justify-center md:justify-normal md:flex-row  gap-[30px]  flex-[3]'>
					<div className='relative flex flex-col justify-center items-center px-3 pt-8 pb-4 w-[262px] bg-[#323443] rounded-[12px] mt-[36px] md:mt-0 hover:scale-110 ease-in-out duration-300'>
						<div className='absolute top-[-36px] p-[1px] rounded-full bg-gradient-to-r from-purple-500 to-slate-500'>
							<div className='bg-[#3A3636] p-[17px] rounded-full'>{globe}</div>
						</div>
						<div className='font-sora text-white text-[16px] font-semibold leading-[72px] tracking-[1px]'>
							Freelance
						</div>
						<div className='text-slate-400 text-[14px] tracking-[1px] leading-6'>
							Most of the freelance work I take is as a Junior Software Engineer, but
							also open for opportunity
						</div>
					</div>
					<div className='relative flex flex-col justify-center items-center px-3 pt-8 pb-4 w-[262px] bg-[#323443] rounded-[12px] mt-[36px] md:mt-0 hover:scale-110 ease-in-out duration-300'>
						<div className='absolute top-[-36px] p-[1px] rounded-full bg-gradient-to-r from-purple-500 to-slate-500'>
							<div className='bg-[#3A3636] p-[17px] rounded-full'>{globe}</div>
						</div>
						<div className='font-sora text-white text-[16px] font-semibold leading-[72px] tracking-[1px]'>
							Lifeteme Learner
						</div>
						<div className='text-slate-400 text-[14px] tracking-[1px] leading-6'>
							Learn new things for the long term. 
						</div>
					</div>
				</div>
			</div>
			<div className='flex flex-col md:flex-row mt-[35px] md:mt-[45px] gap-3'>
				<div className='flex md:items-start items-center justify-center md:justify-normal gap-3'>
					<div className='md:w-[157px] md:h-[157px] w-[50px] h-[50px] rounded-full bg-gradient-to-r from-purple-500 to-slate-500 flex justify-center items-center space-x-4'>
						<div className='md:w-[155px] md:h-[155px] w-[50px] space-x-4 h-[50px] overflow-hidden  rounded-full bg-[#1c1c1c] flex justify-center items-center'>
							<img
								src={require('../assets/myimg-preview-removebg-preview.png')}
								alt=''
							/>
						</div>
					</div>
					<div className='flex flex-col ml-2 md:ml-9 mr-5 flex-1 max-w-[499px] '>
						<div className='text-[15px] md:text-[28px] font-sora text-[#FBFBFB] md:leading-[72px]'>
							Life goals
						</div>
						<div className='text-[10px] md:text-[18px] text-[#d6d6d6] '>
							My greatest mission or life goal is to share every knowledge I
							have acquired for the benefit of the development of technology
							human resources in Indonesia.
						</div>
					</div>
				</div>
				<div className='mt-[35px] md:mt-0 md:ml-[86px] flex flex-col gap-3'>
					<div className='text-[15px] md:text-[28px] font-sora text-[#FBFBFB] md:leading-[72px]'>
						Lets Connect
					</div>
					<div className='flex gap-[17px]'>
						<div className='hover:scale-[150%] ease-in-out duration-300 cursor-pointer'>
							{instagram}
						</div>
						<div className='hover:scale-[150%] ease-in-out duration-300 cursor-pointer'>
							{twitter}
						</div>
						<div className='hover:scale-[150%] ease-in-out duration-300 cursor-pointer'>
							{facebook}
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Main;
