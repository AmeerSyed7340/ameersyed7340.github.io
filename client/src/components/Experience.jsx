import React from 'react'
import html from '../assets/html.png'
import css from '../assets/css.png'
import js from '../assets/javascript.png'
import react from '../assets/react.png'
import node from '../assets/node.png'
import mongo from '../assets/mongo.png'
import tailwind from '../assets/tailwind.png'
import github from '../assets/github.png'

const Experience = () => {

    const techStaacks = [
        {
            id: 1,
            src: html,
            title: 'HTML',
            style: 'shadow-orange-500'
        },
        {
            id: 2,
            src: css,
            title: 'CSS',
            style: 'shadow-blue-500'
        },
        {
            id: 3,
            src: js,
            title: 'JAVASCRIPT',
            style: 'shadow-yellow-500'
        },
        {
            id: 4,
            src: node,
            title: 'NODE',
            style: 'shadow-green-500'
        },
        {
            id: 5,
            src: react,
            title: 'REACT',
            style: 'shadow-cyan-300'
        },
        {
            id: 6,
            src: mongo,
            title: 'MONGO',
            style: 'shadow-green-400'
        },
        {
            id: 7,
            src: tailwind,
            title: 'TAILWIND',
            style: 'shadow-blue-300'
        },
        {
            id: 8,
            src: github,
            title: 'GITHUB',
            style: 'shadow-gray-500'
        },

    ]

    return (
        <div name='experience' className='bg-gradient-to-b from-gray-800 to-black w-full h-screen'>
            <div className='max-w-screen-lg mx-auto p-4 flex flex-col justify-center w-full h-full text-white'>

                <div>
                    <p className='text-4xl font-bold border-b-4 border-gray-500 p-2 inline'>Experience</p>
                    <p className='py-6'>These is the tech stack that I am familiar with </p>
                </div>

                <div className='w-full grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-8 text-center py-8 px-12 sm:px-0'>
                    {techStaacks.map(({ id, src, title, style }) => (
                        <div key={id} className={'shadow-md hover:scale-105 duration-500 py2 rounded-lg' + " " + style}>
                            <img src={src} alt="" className='w-20 mx-auto' />
                            <p className='mt-4'>{title}</p>
                        </div>

                    ))}

                </div>
            </div>
        </div>
    )
}

export default Experience
