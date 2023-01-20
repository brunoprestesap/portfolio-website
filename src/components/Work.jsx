import React from 'react'
import WorkItem from './WorkItem'

const Work = () => {

    const data = [
        {
            year: '2012',
            title: 'Instituto de Administração Penitenciária do Amapá - IAPEN',
            duration: '3 Years',
            details: 'Atendimento e suporte ao usuário de TIC'
        },
        {
            year: '2015',
            title: 'Justiça Federal no Acre - JFAC',
            duration: '5 Years',
            details: 'Responsável pela área de Tecnologia da informação, gestor e fiscal técnico de contrato administrativos de serviços terceirizados de TI e Comunicação'
        },
        {
            year: '2020',
            title: 'Justiça Federal no Amapá - JFAP',
            duration: 'Até o momento',
            details: 'Responsável pela área de suporte e sistemas de TIC, gestor e fiscalização de contratos administrativos de serviços terceirizados de TI e Comunicação, desenvolvedor de soluções em softwares'
        }
    ]

  return (
    <div id='work' className='max-w-[1040px] m-auto md:pl-20 p-4 py-16'>
        <h1 className='text-4xl font-bold text-center text-[#001b5e]'>Work</h1>

        {data.map((item, idx) => (
            <WorkItem
                key={idx}
                year={item.year}
                title={item.title}
                duration={item.duration}
                details={item.details}
            />
        ))}
    </div>
  )
}

export default Work