import '../scss/hamburgerMenu.scss';

function HamburgerMenu({ changeNavbar, burgerMenu, handleBurger }) {
    return (
        <div className={location.pathname != "/" || changeNavbar ? 'burger' : 'burgerHidden'}>
            <div className={burgerMenu ? 'burger' : 'burger' + " " + 'toggle'} onClick={handleBurger}>
                <div className='line1'></div>
                <div className='line2'></div>
                <div className='line3'></div>
            </div>
        </div>);
}
export default HamburgerMenu;