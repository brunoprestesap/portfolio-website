import React from 'react'
import ProjectItem from './ProjectItem'

import acessoImg from '../assets/projects/controle-acesso.png'
import landingImg from '../assets/projects/lading-camila.png'
import quizImg from '../assets/projects/quiz-saude-mental.png'
import quiztdahImg from '../assets/projects/quiz-tdah.png'
import tindogImg from '../assets/projects/tindog.png'

const Projects = () => {
  return (
    <div id='projects' className='max-w-[1040px] m-auto md:pl-20 p-4 py-16'>
        <h1 className='text-4xl font-bold text-center text-[#001b5e]'>Projetos</h1>
        <p className='text-center py-8'>
            Projetos em detaque desenvolvidos por mim em HTML, CSS e Javascript puro até projetos utilizando a stack MERN (Mongo + Express, React JS e NodeJS)
        </p>
        <div className='grid sm:grid-cols-2 gap-12'>
            <ProjectItem img={acessoImg} title='Controle de Acesso Predial App' />
            <ProjectItem img={landingImg} title='Landing Page da Dra. Camila Neiva' />
            <ProjectItem img={quizImg} title='Teste de saúde mental App' />
            <ProjectItem img={quiztdahImg} title='Teste de TDAH App' />
            <ProjectItem img={tindogImg} title='Website Tindog App' />
        </div>
    </div>
  )
}

export default Projects