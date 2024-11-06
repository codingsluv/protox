/** @format */

import React from 'react';

const About = () => {
	return (
		<div>
			<div id='about' className='text-[20px] md:text-[40px] font-sora text-[#FBFBFB] md:leading-[72px]'>
				Let me tell you a little more about myself
			</div>
			<div className='flex flex-col items-center xl:items-stretch xl:flex-row gap-9 mt-[40px]'>
				<img
                    className='object-cover w-[300px] h-[300px] md:w-[400px] md:h-[400px] rounded-[20px]'
					src={require('../assets/photo.jpg')}
					alt=''
				/>
				<div className='bg-[#323443] p-[20px] text-slate-400 rounded-[20px] md:mr-20'>
					<div  className="text-2xl font-bold mb-2 gap-6">
						I, Muhammad Nur, hold the degree A.Md.Kom. (Associate in Computer Science) from Universitas Bina Sarana Informatika, majoring in Information Systems. 
						<p>I am highly enthusiastic about technology and programming, with a strong desire to continually learn and improve myself.</p>
						I am eager to apply my skills and knowledge in a professional environment, contribute to a dynamic team, and expand my expertise. 
						<p>Dedicated to leveraging my education to support organizational goals, 
						I am committed to developing my career in the field of information technology.</p>
					</div>
				</div>
			</div>
		</div>
	);
};

export default About;
