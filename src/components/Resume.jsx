import React from 'react';
// import { BsFillPersonLinesFill } from 'react-icons/bs'

// const Resume = () => {
//     const link = [
//         {
//             id: 1,
//             child: (
//                 <>Resume <BsFillPersonLinesFill size={30} />
//                 </>
//             ),
//             href: '/resume.pdf',
//             style: 'rounded-br-md',
//             download: true,
//         },
//     ];

const Resume = () => {
return (
        <div name='resume' className='w-full h-screen bg-gradient-to-b from-lime-600 via-emerald-300 to-white-800'>
        <div className='flex flex-col p-4 justify-center max-w-screen-lg mx-auto h-full'>
            <div className='pb-8'>
                <p className='text-4xl font-bold inline text-white'>
                Resume    
                    </p>
     
                </div>
            </div>
            </div>
                
    )
  }
  
  export default Resume;