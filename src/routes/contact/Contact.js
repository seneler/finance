import { Link } from "react-router-dom";
import './contact.css';
import ContactCover from '../../assets/images/contact/contact-cover.jpg'
import Address from '../../assets/images/contact/address.png';
import Phone from '../../assets/images/contact/phone.png';
import Email from '../../assets/images/contact/email.png';
import './leaflet.css'
import { useState } from "react";

import Location from "./Location";


const Contact = () => {
    const [formValue, setFormValue] = useState({ name: '', email: '', message: '' });
    const [formError, setFormError] = useState({})
    const [submit, setSubmit] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!validateForm(formValue))
            return false;

        setSubmit(true);
        setFormValue({ name: '', email: '', message: '' });
    }

    const handleValidation = (e) => {
        const { name, value } = e.target;
        setFormValue({ ...formValue, [name]: value })
    }

    const validateForm = (value) => {
        let errors = {}
        let isValid = true;
        const emailRegex = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/;
        if (!value.name) {
            errors.name = "Lütfen geçerli bir ad giriniz"
            isValid = false;
        }
        if (!value.email) {
            errors.email = "Lütfen e-posta adresinizi giriniz"
            isValid = false;
        }
        else if (!emailRegex.test(value.email)) {
            errors.email = "Lütfen geçerli e-posta adresi giriniz"
            isValid = false;
        }
        if (!value.message) {
            errors.message = "Lütfen geçerli bir mesaj giriniz"
            isValid = false;
        }
        if (!isValid)
            setFormError(errors);

        return isValid;
    }
    return (
        <main className="contact">
            <article className="contact-us-form">
                <h2> Bizimle temasa geçin </h2>
                <p>Size yardımcı olmak için 7/24 buradayız.</p>
                <section className="contact-us-form-section">
                    {submit ?
                        <h3>Mesajınız başarıyla gönderildi!</h3>
                        : <form onSubmit={handleSubmit}>
                            <label htmlFor="isim">İsim
                                <input onChange={handleValidation} value={formValue.name} type="text" name="name" />
                                <span className="contact-input-err">{formError.name}</span>
                            </label>
                            <label htmlFor="email">Email
                                <input onChange={handleValidation} value={formValue.email} type="text" name="email" />
                                <span className="contact-input-err">{formError.email}</span>
                            </label>
                            <label htmlFor="mesaj">Mesaj
                                <textarea onChange={handleValidation} value={formValue.message} rows="5" type="text" name="message" />
                                <span className="contact-input-err">{formError.message}</span>
                            </label>
                            <section className="terms-checkbox">
                                <input type="checkbox" name="checkbox" required />
                                <span><Link to="terms">Şartları</Link> kabul ediyorum </span>
                            </section>
                            <button type="submit" className="basic-button">Gönder</button>
                        </form>}
                    <img src={ContactCover} alt="Contact us" />
                </section>
            </article>
            <article className="contact-info">
                <section>
                    <img src={Email} alt="" />
                    <h3>Email</h3>
                    <p>Satış ekibimizle sohbet edin </p>
                    <p className="contact-info-detail">new@financefocus.mail</p>
                </section>
                <section>
                    <img src={Phone} alt="" />
                    <h3>Telefon</h3>
                    <p> Bizi şu numaradan arayın </p>
                    <p className="contact-info-detail">+1 (555) 000-0000</p>
                </section>
                <section>
                    <img src={Address} alt="" />
                    <h3>Ofis</h3>
                    <p>Sizi bekliyoruz</p>
                    <p className="contact-info-detail">Sanayi, Teknopark Blv No: 1 D:9A, 34906 Pendik/İstanbul</p>
                </section>
            </article>
            <Location />
        </main>
    )
}

export default Contact;