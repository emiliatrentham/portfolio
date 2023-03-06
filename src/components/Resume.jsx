import React from 'react';
import { BsFillPersonLinesFill } from 'react-icons/bs'

const Resume = () => {
    const links = [
        {
            id: 1,
            child: (
                <><BsFillPersonLinesFill size={30} />
                </>
            ),
            href: '/resume.pdf',
            style: 'rounded-br-md',
            download: true,
        },
    ];


    return (
        <div name='resume' className='w-full h-screen'>
            <div className='flex flex-col p-4 justify-center max-w-screen-lg mx-auto h-full'>
                <div className='pb-8'>
                    <div className='flex'>
                    <p className='text-4xl font-bold text-white p-2 inline'>
                            Resume
                    </p>
                        <ul>
                            {links.map(({ id, child, href, download }) => (
                                <li key={id} className={'w-40 h-14 px-4 py-4  hover:ml-[+10px] hover:rounded-md hover:scale-110 duration-300'}
                                >
                                    <a
                                        href={href}
                                        className='w-full text-white'
                                        download={download}
                                        target='_blank'
                                        rel='noreferrer'
                                    >
                                        {child}
                                    </a>
                                </li>
                            ))}
                        </ul>
                      
                        </div>
                    <p className='mt-20 text-xl text-gray-500'>
                        Praesent duis eget iaculis magnis ad aliquam enim eleifend, placerat taciti quis in pretium eros litora nostra augue, felis auctor proin potenti sem sollicitudin risus. Metus malesuada ad leo tempor diam et, blandit lectus quis facilisi justo potenti, pulvinar vulputate nostra curae at.
                    </p>
                    <p className='text-xl text-gray-500'>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum porro tenetur natus voluptate! Veniam obcaecati nam et provident in neque laboriosam temporibus assumenda. Ducimus sint inventore, laboriosam excepturi debitis, dolores fuga officiis nam quod culpa a, repellat corporis saepe tempore minima nulla repellendus voluptate exercitationem consequuntur sapiente. Accusamus, totam magni!
              </p>

                </div>
            </div>
        </div>
    )
}
  
  
export default Resume;