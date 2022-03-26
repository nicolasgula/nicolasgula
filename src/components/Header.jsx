//ESTILOS
import '../scss/header.scss';
//COMPONENTES
import MainTitle from './MainTitle';

const title ={
  title: "NICOLAS GULA",
  subtitle : "FRONTEND DEVELOPER"
}

function Header() {
  return (
    <header id='header'>
        <MainTitle title={title.title} subtitle={title.subtitle}/>
    </header>
  )
}

export default Header