import React from 'react'
import certificadoImg from '../assets/certificado.png'

const Courses = () => {
  return (
    <div id='#courses' className='max-w-[1040px] m-auto md:pl-20 p-4 py-16'>
        <h1 className='py-4 text-4xl font-bold text-center text-[#001b5e]'>Cursos recentes</h1>
        <p className='text-center py-8'>
            Em 2022 participei de um Bootcamp em Web Development com duração de 2 meses na Ironhack
        </p>
        <div className='w-full'>
            <img src={certificadoImg} />
        </div>
    </div>
  )
}

export default Courses