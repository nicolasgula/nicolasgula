//ESTILOS
import '../scss/title.scss';

function MainTitle({title, subtitle}) {
    return (
        <div id='containerTitle'>
            <h1 id='title'>{title}</h1>
            <h2 id='subTitle'>{subtitle}</h2>
        </div>
    )
}

export default MainTitle