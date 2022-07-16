//COMPONENTES
import MainTitle from './MainTitle';
//ESTILOS
import '../scss/header.scss';
import Arrow from './Arrow';

const title ={
  title: "NICOLAS GULA",
  subtitle : "WEB DEVELOPER"
}

function Header() {
  return (
    <header id='header'>
        <MainTitle title={title.title} subtitle={title.subtitle}/>
        <Arrow />
    </header>
  )
}

export default Header
