//ESTILOS
import '../scss/card.scss';
//COMPONENTES
import Icons from './Icon';
//REACT_ROUTER
import { useLocation} from 'react-router-dom';

function Card({ img, title, content, src, repoUrl, liveUrl }) {
    
    let location = useLocation();

    return (
        <div className='card'>
            <div className='cardInner'>
                <div className='cardFront'>
                    <img src={img} alt="" />
                </div>
                <div className='cardBack'>
                    <header className='titleCard'>
                        <h4>{title}</h4>
                    </header>
                    <section className='cardContent'>
                        <p>{content}</p>
                    </section>
                    <div className='iconsCard'>
                        <ul>
                            {src.map((icon, idx) => (<Icons key={idx} icon={icon} />))}
                        </ul>
                    </div>
                    <div className='iconsLink'>
                        <div className='iconLinkContainer'>
                            <h5>REPOSITORIO</h5>
                            <a href={repoUrl.link} target="_blank" rel="noopener noreferrer"><img src={'/assets/' + repoUrl.icon + '.svg'} alt={repoUrl.icon + '-icon'} /></a>
                        </div>
                        <div>
                            <h5>SITIO</h5>
                            <a href={liveUrl.link} target="_blank" rel="noopener noreferrer"><img src={'/assets/' + liveUrl.icon + '.svg'} alt={liveUrl.icon + '-icon'} /></a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Card