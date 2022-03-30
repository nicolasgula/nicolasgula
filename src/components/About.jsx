//ESTILOS
import '../scss/section.scss';
//DATA
import contacts from '../data/contact.json'
import LinkContact from './LinkContact';
//COMPONENTE
import TitleAndSubtitle from './SubTitles';

const title = {
    title: 'ACERCA DE MI',
    subtitle: 'CONOCEME UN POCO ANTES DE SEGUIR'
}

function About() {
    return (
        <section className='displaySection'>
            <div className='sectionTitle'>
            <TitleAndSubtitle title={title.title} subtitle={title.subtitle}/>
                </div>
            <div id='sectionPhoto'></div>
            <div className='sectionIcons'>
                <ul>
                    {contacts.map(contact => (<LinkContact key={contact.id} {...contact} />))}
                </ul>
            </div>
            <div className='sectionText'>
                <p>Soy estudiante de la carrera Analista Programador y un entusiasta del frontend,
                    enfocado en aprender y desarrollar mis habilidades para poder crear sitios web elegantes
                    y de fácil acceso. En 2017 comencé con HTML y CSS, me entusiasmé al ver los resultados inmediatos de
                    lo que escribía en mi pantalla y decidí tomar el camino del desarrollo web,
                    eventualmente sumergiéndome en JavaScript y hace poco en React JS...</p>
            </div>
        </section>
    )
}

export default About


