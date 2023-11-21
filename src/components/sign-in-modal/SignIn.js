import React from "react";
import "./signIn.css";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import users from "../../data/Users";

const SignIn = (props) => {
    const [values, setValues] = useState({ username: '', password: '' })
    const [validations, setValidations] = useState({ username: '', password: '' })
    const navigate = useNavigate();

    const validateAll = () => {
        const { username, password } = values
        const validations = { username: '', password: '' }
        let isValid = true

        if (!username) {
            validations.username = 'Kullanıcı adı gereklidir'
            isValid = false
        }
        if (!password) {
            validations.password = 'Şifre gereklidir'
            isValid = false
        }

        const isUserExist = users.find(
            x => x.username === username && x.password === password
        );

        if (!isUserExist) {
            validations.username = 'Kullanıcı adı veya şifre yanlış'
            isValid = false
        }

        if (!isValid) {
            setValidations(validations)
        }
        return isValid
    }

    const handleChange = (e) => {
        const { name, value } = e.target
        setValues({ ...values, [name]: value })
    }

    const HandleSignIn = (e) => {
        e.preventDefault()
        const isValid = validateAll()
        if (!isValid) {
            return false
        }
        props.closeLogin()
        localStorage.setItem('user', JSON.stringify(username));
        props.onLogin(username)
        navigate('/dashboard')
    }

    const { username, password } = values

    const {
        username: usernameVal,
        password: passwordVal
    } = validations

    return (
        <div className="modal">
            <div className="modal__overlay" />
            <div className="modal__box">
                <div className="modal__close">
                    <button onClick={props.closeLogin}><span>&#10005;</span></button>
                </div>
                <div className="modal__title">
                    Giriş Yap
                </div>
                <div className="modal__sub_title">
                    Giriş yapmak için oturum açın
                </div>
                <div className="modal__content">
                    <form onSubmit={HandleSignIn}>
                        <ul>
                            <li>
                                <label htmlFor="username">Kullanıcı Adı:<span className="required">*</span></label>
                                <input
                                    name="username"
                                    value={username}
                                    onChange={handleChange}
                                />
                                <div className="error-msg">{usernameVal}</div>
                            </li>
                            <li>
                                <label htmlFor="password">Şifre:<span className="required">*</span></label>
                                <input
                                    value={password}
                                    name="password"
                                    type="password"
                                    onChange={handleChange}
                                />
                                <div className="error-msg">{passwordVal}</div>
                            </li>
                            <li>
                                <button className="submit-btn" type="submit">Giriş yap</button>
                            </li>
                        </ul>
                    </form>
                    <section className="signin-forgotpass">
                        <button onClick={() => { props.closeLogin(); props.openForgotPassword() }} className="forgot-pass-link"> Şifreni mi unuttun ?</button>
                        <button className="signup-btn basic-button"
                            onClick={() => { props.closeLogin(); props.openSignup() }}>
                            Hesabınız yok mu?</button>
                    </section>
                </div>
            </div>
        </div>
    );
}

export default SignIn;
