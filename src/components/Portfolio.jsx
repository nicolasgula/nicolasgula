//REACT
import React from 'react';
//ESTILOS
import '../scss/section.scss';
//COMPONENETS

import SubTitles from './SubTitles';
import ContainerCards from './ContainerCards';
//DATA

const Title ={
    title : "TRABAJOS",
    subtitle : "ALGUNAS DE LAS COSAS QUE HE HECHO"
}

function Portfolio() {

    return (
        <section className='displaySection' id='portfolioBackground'>
            <div className='sectionTitle'>
            <SubTitles title={Title.title} subtitle={Title.subtitle} />
            </div>
           <ContainerCards/>
        </section>
    )
}

export default Portfolio
