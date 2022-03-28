//ESTILOS
import '../scss/footer.scss';
import '../scss/section.scss';

//DATA
import contacts from '../data/contact.json';
//COMPONENTES
import LinkContact from './LinkContact';

function Footer() {
    return (
        <footer>
            <p id='name'>&copy; Nicolas Gula {new Date().getFullYear()}</p>
            <div className='sectionIcons' id='iconsFooter'>
                <ul>
                    {contacts.map(contact => (<LinkContact key={contact.id} {...contact} />))}
                </ul>
            </div>
            <div id='linkRepositorio'>
                <p><a href="https://github.com/NicolasGula/NicolasGula">Repositorio del Portfolio</a></p>
            </div>
        </footer>
    )
}

export default Footer