import { Link } from 'react-router-dom';
import ExpenselessLogo from '../../assets/images/finansfocus-logo.jpeg'
import './landingFooter.css';
import { useLocation } from 'react-router-dom';
import { useState } from 'react';
import ScrollToTop from '../../helpers/ScrollToTop';
const LandingFooter = (props) => {
    const [inputValue, setInputValue] = useState('');
    const [invalidInput, setInvalidInput] = useState(false);
    const { pathname } = useLocation();

    const saveInputValues = (e) => {
        e.preventDefault();
        setInputValue(e.target.value);
    }
    const submitForm = (e) => {
        e.preventDefault();
        const emailRegex = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/;
        if (!emailRegex.test(inputValue) || inputValue.length === 0) {

            setInvalidInput(true);
        }
        else {
            setInvalidInput(false);
        }
    }
    /*footer doesn't show when user go to dashboard*/
    if (pathname.includes("dashboard"))
        return <></>
    else
        return (
            <footer>
                <article className='footer-article-one'>
                    <section className='footer-menus'>
                        <img className='footer-logo' src={ExpenselessLogo} alt='Finansfocus logo' />
                        <nav>
                            <ul className='footer-menu'>
                                <li><Link onClick={ScrollToTop} to='/about'>Hakkında</Link></li>
                                <li><Link onClick={ScrollToTop} to='/pricing'>Fiyatlandırma</Link></li>
                                <li><Link onClick={ScrollToTop} to='/sss'>SSS</Link></li>
                                <li><Link onClick={ScrollToTop} to='/blog'>Blog</Link></li>
                                <li><Link  onClick={ScrollToTop} to='/contact'>İletişim</Link></li>
                            </ul>
                        </nav>
                        
                    </section>
                    <form className='footer-form' onSubmit={submitForm}>
                        <label htmlFor="subscribe">Abone ol</label>
                        <section className='form-input' >
                            <input name='subscribe' type="text" placeholder='Mail adresinizi girin' onChange={saveInputValues} />
                            {invalidInput ? <p className='footer-input-error'>Lütfen geçerli bir e-posta adresi giriniz.</p> : null}
                            <button type='submit' className='basic-button'>Abone ol</button>
                        </section>
                        <span>Abone olarak <Link onClick={ScrollToTop} to='/privacy'>Gizilik Politikamızı</Link> kabul etmiş olursunuz.</span>
                    </form>
                </article>
                <hr />
                <article className='footer-article-two'>
                    <ul>
                        <li><Link to='/privacy' onClick={ScrollToTop}>Gizlilik Politikası</Link></li>
                        <li><Link to='/terms' onClick={ScrollToTop}>Kullanım şartları</Link></li>
                    </ul>
                    <p>2023 Finansfocus. All rights reserved.</p>
                </article>
            </footer>
        )
}

export default LandingFooter;