import { Link } from 'react-router-dom';
import { useState } from 'react';
import ScrollToTop from '../../helpers/ScrollToTop';

const BlogNewsletter = () => {
    const [inputValue, setInputValue] = useState('');
    const [invalidInput, setInvalidInput] = useState(false);

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
    return (
        <article className="blog-newsletter">
            <section className="blog-newsletter-title">
                <h3>Haber bültenimize abone ol</h3>
                <p>En son haberleri, güncellemeleri ve harika tekliflerden doğrudan haberdar olmak için haftalık bültenimize kaydolun.</p>
            </section>
            <form className='blog-form' onSubmit={submitForm}>
                <section className='blog-input'>
                    <input name='subscribe' type="text" placeholder='Lütfen e-posta adresinizi giriniz' onChange={saveInputValues} />
                    {invalidInput ? <p className='blog-input-error'>lütfen geçerli e-posta adresini giriniz</p> : null}
                <button type='submit'>Abone</button>
                </section>
                <span> Abone'ye tıklayarak <Link to='/terms' onClick={ScrollToTop}>Şartlar ve Koşullarımızı</Link>kabul ettiğinizi onaylıyorsunuz.</span>
            </form>

        </article>
    )
}

export default BlogNewsletter;
        

