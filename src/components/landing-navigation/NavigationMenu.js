import { Link } from 'react-router-dom';
import ScrollToTop from '../../helpers/ScrollToTop';

const NavigationMenu = ({ toggleOffMenu }) => {
    return (
        <nav>
            <ul className='navigation-menu'>
                <li><Link to='/' onClick={() => { toggleOffMenu(); ScrollToTop() }}>Anasayfa</Link></li>
                <li><Link to='/about' onClick={() => { toggleOffMenu(); ScrollToTop() }}>Hakkında</Link></li>
                <li><Link to='/pricing' onClick={() => { toggleOffMenu(); ScrollToTop() }}>Fiyatlandırma</Link></li>
                <li><Link to='/faq' onClick={() => { toggleOffMenu(); ScrollToTop() }}>SSS</Link></li>
                <li><Link to='/Blog' onClick={() => { toggleOffMenu(); ScrollToTop() }}>Blog</Link></li>
                <li><Link to='/contact' onClick={() => { toggleOffMenu(); ScrollToTop() }}>İletişim</Link></li>
            </ul>
        </nav>
    )
}

export default NavigationMenu;