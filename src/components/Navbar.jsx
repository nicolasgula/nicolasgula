//REACT
import React from 'react'
import { useEffect, useState } from 'react';
//ESTILOS
import '../scss/navbar.scss';
//REACT-ROUTER
import { Link, useLocation } from 'react-router-dom';
//COMPONENTES
import HamburgerMenu from './HamburgerMenu';

function Navbar() {
    let location = useLocation();

    //Para que cambiar el estado de : logo, barra de navegacion, links y menu hamburguesa. 
    const [changeNavbar, setChangeNavbar] = useState(false);

    //Para cambiar la apariencia del menu hamburguesa.
    const [burgerMenu, setBurgerMenu] = useState(true);

    //Si el usuario scolea su pantalla a determinada altura, se efectuan los cambios.
    const changeStyles = () => {
        console.log(1);
        document.documentElement.scrollTop > 990 ? setChangeNavbar(true) : setChangeNavbar(false);
    };

    //Toma los eventos de scroll.
    useEffect(() => {
        console.log(2);
            window.addEventListener('scroll', changeStyles);
    }, [])

    //Cuando cambia de ruta, se ve la pagina desde el comienzo.
    useEffect(() => {
        console.log(3);
      window.scrollTo({
          top: 0,
          behavior: 'auto',
      })
    }, [location])
    

    //Cambia el estado del menu hamburguesa.
    function handleBurger() {
        console.log(4);
        setBurgerMenu(!burgerMenu);
    }

    return (
        <nav>
            {/* Dependiendo del scroll del usuario la barra cambiara de estilo */}
            <div id={location.pathname != "/" || changeNavbar ? 'navbarWhite' : 'navbarTransparent'}>

                <Link to="/">
                    <div id={location.pathname != "/" || changeNavbar ? 'logoVisible' : 'logoHidden'}>
                        <h4>Nicolas Gula</h4>
                    </div>
                </Link>

                <div className={location.pathname != "/" || changeNavbar  ? '' : 'animated'}>
                    <ul className={burgerMenu ? 'navLinks ' : 'navLinks animated'}>

                        <Link to="/sobreMi" onClick={handleBurger}>
                            <li className={location.pathname != "/" || changeNavbar ? 'linkBlack' : 'linkHidden'}>ACERCA</li>
                        </Link>

                        <Link to="/trabajos" onClick={handleBurger}>
                            <li className={location.pathname != "/" || changeNavbar ? 'linkBlack' : 'linkHidden'}>TRABAJOS</li>
                        </Link>

                        <Link to="/curriculum.pdf" target="_blank" onClick={handleBurger} download>
                            <li className={location.pathname != "/" || changeNavbar ? 'linkBlack' : 'linkHidden'}>CONTRATAR</li>
                        </Link>
                    </ul>
                </div>
                <HamburgerMenu
                    changeNavbar={changeNavbar}
                    burgerMenu={burgerMenu}
                    handleBurger={handleBurger}
                />
            </div>
        </nav>
    )
}

export default Navbar;


