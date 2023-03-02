import React from 'react';
import { FaReact} from 'react-icons/fa';
import { SiHtml5, SiCss3, SiTailwindcss, SiGraphql, SiMongodb } from 'react-icons/si';
import { IoLogoJavascript } from 'react-icons/io';
import { GrMysql } from 'react-icons/gr';

const Skills = () => {

  const tech = [
    {
      id: 1,
      child: (
        <> <SiHtml5 size={60} />
        </>),
      title: 'HTML',
      style: 'shadow-orange-500'
    },
    {
      id: 2,
      child: (
        <> <SiCss3 size={60} />
        </>),
      title: 'CSS',
      style: 'shadow-blue-400'
    },
    {
      id: 3,
      child: (
        <> <IoLogoJavascript  size={60} />
        </>),
      title: 'JavaScript',
      style: 'shadow-yellow-500'
    },
    {
      id: 4,
      child: (
        <> <SiTailwindcss size={60} />
        </>),
      title: 'Tailwind',
      style: 'shadow-sky-400'
    },
    {
      id: 5,
      child: (
        <> <FaReact size={60} />
        </>),
      title: 'React',
      style: 'shadow-blue-600'
    },
    {
      id: 6,
      child: (
        <> <SiGraphql size={60} />
        </>),
      title: 'GraphQL',
      style: 'shadow-pink-400'
    },
    {
      id: 7,
      child: (
        <> <GrMysql size={60} />
        </>),
      title: 'MySQL',
      style: 'shadow-blue-800',
    },
    {
      id: 8,
      child: (
        <> <SiMongodb size={60} />
        </>),
      title: 'MongoDB',
      style: 'shadow-green-800',
    },
  ]

  return (
    <div name='skills'
    className='w-full h-screen bg-gradient-to-b from-lime-600 via-emerald-300 to-white-800  text-white'>
    <div className='max-w-screen-lg mx-auto p-4 flex flex-col justify-center w-full h-full'>
      <div>
        <p className='text-4xl font-bold text-white p-2 inline'>
          Skills
          </p>
          <p className='py-6 text-gray-500'>

          </p>
      </div>
    
        <div className='w-full grid grid-cols-2 sm:grid-cols-8 gap-2 text-center py-8 px-12 sm:px-0'>
          
          {tech.map(({ id, child, title, style }) => (
          
            <div key={id}
              className={`shadow-md hover:scale-105 duration-500 py-2 rounded-lg ${style}`}>
              <div className='flex justify-center'>{child}  </div>
        <p className='mt-4'>
                {title}
        </p>
      </div>
        ))
          }
   
   
      </div>
    </div>
  </div>
  )
}



export default Skills;

// html css javascript react graphql github tailwind 