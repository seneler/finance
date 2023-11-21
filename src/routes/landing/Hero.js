import { useState } from 'react';
import HeaderCover from '../../assets/images/landing/header-cover.png';

const Hero = (props) => {
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
            props.openSignup();
        }
    }
    return (
        <article className='hero'>
            <section className='hero-content'>
                <p className='tagline'>Finansfocus</p>
                <h1> Fazla tasarruf <span className='highlight-title'> Az harcama </span></h1>
                <p>Finansfocus finansal hedeflerinize daha hızlı ulaşmak için paranızı yönetmenize ve tüm gelir ve giderlerinizi zahmetsizce  takip etmenize odaklanır.</p>
                <section className='hero-form'>
                    <form className='hero-signup' onSubmit={submitForm}>
                        <input type="text" name="signUpEmail" placeholder=' Mail adresinizi girin ' onChange={saveInputValues} />
                        {invalidInput ? <p className='hero-input-error'>Please enter a valid email</p> : null}
                        <button type='submit' className='basic-button'> Kayıt Ol </button>
                    </form>
                    <span>Kayıt ol'a tıklayarak Şartlar ve Koşullarımızı kabul ettiğinizi onaylıyorsunuz.</span>
                </section>
            </section>
            <img src={HeaderCover} alt="Girl counting statistics" />
        </article>
    )
}

export default Hero;