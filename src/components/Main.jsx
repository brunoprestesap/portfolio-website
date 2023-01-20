import React from 'react'
import bgMain from '../assets/main.jpg'
import seloImg from '../assets/selo.png'
import { TypeAnimation } from 'react-type-animation'
import { FaTwitter, FaFacebookF, FaInstagram, FaLinkedinIn } from 'react-icons/fa'

const Main = () => {
    return (
        <div id='main'>
            <img src={bgMain} className='w-full h-screen object-cover' alt='/' />
            <div className='w-full h-screen absolute top-0 left-0 bg-white/50 justify-center'>
                <div className='max-w-[700px] m-auto h-full w-full flex flex-col justify-center lg:items-start items-center'>
                    <div className='absolute top-[80%] right-[40%] max-w-[90px] md:top-[75%] md:right-4 md:max-w-[150px] w-full'>
                        <img src={seloImg} alt='Selo Bootcamp Web Development Ironhack' />
                        <p className='text-xs md:text-sm md:leading-4 text-white text-center md:p-2'>Selo Bootcamp Web Development IronHack 2022</p>
                    </div>
                    <h1 className='sm:text-5xl text-4xl font-bold text-gray-800'>I'm Bruno Prestes</h1>
                    <h2 className='flex sm:text-3xl text-2xl pt-4 text-gray-800'>
                        I'm a
                        <TypeAnimation
                            sequence={[
                                'Developer',
                                2000,
                                'Coder',
                                2000,
                                'Tech Enthusiast',
                                2000,
                            ]}
                            wrapper='div'
                            cursor={true}
                            repeat={Infinity}
                            style={{ fontSize: '1em', paddingLeft: '5px' }}
                        />
                    </h2>
                    <div className='flex justify-between pt-6 max-w-[200px] w-full'>
                        <a href='https://www.twitter.com/brunoprestesmcp'>
                            <FaTwitter size={20} className='cursor-pointer' />
                        </a>
                        <a href='https://www.facebook.com/bruno.prestes.3766'>
                            <FaFacebookF size={20} className='cursor-pointer' />
                        </a>
                        <a href='https://www.instagram.com/brunoasprestes/'>
                            <FaInstagram size={20} className='cursor-pointer' />
                        </a>
                        <a href='https://www.linkedin.com/in/bruno-prestes-4bb05688/'>
                            <FaLinkedinIn size={20} className='cursor-pointer' />
                        </a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Main