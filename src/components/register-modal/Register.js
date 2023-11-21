import React from "react";
import "./register.css";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import users from "../../data/Users"

const Register = (props) => {
    const [values, setValues] = useState({ username: '', email: '', password: '' })
    const [validations, setValidations] = useState({ username: '', email: '', password: '' })
    const navigate = useNavigate();

    const validateAll = () => {
        const { username, email, password } = values
        const validations = { username: '', email: '', password: '' }
        let isValid = true

        if (!username) {
            validations.username = 'Kullanıcı adı gereklidir'
            isValid = false
        }

        if (username && username.length < 4) {
            validations.username = 'Kullanıcı adı en az 4 karakter olmalıdır'
            isValid = false
        }
        const isUsernameExist = users.find(
            x => x.username === username
        )
        if (isUsernameExist) {
            validations.username = 'Kullanıcı adı zaten var'
            isValid = false
        }

        if (!email) {
            validations.email = 'E-posta gereklidir'
            isValid = false
        }

        if (email && !/\S+@\S+\.\S+/.test(email)) {
            validations.email = 'E-posta formatı finansfocus@gmail.com şeklinde olmalıdır.'
            isValid = false
        }
        const isEmailExist = users.find(
            x => x.email === email
        )
        if (isEmailExist) {
            validations.email = 'E-posta zaten mevcut'
            isValid = false
        }

        if (!password) {
            validations.password = 'Şifre gereklidir'
            isValid = false
        }
        if (password && password.length < 6) {
            validations.password = 'Şifre en az 6 karakter uzunluğunda olmalıdır'
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

    const HandleSignUp = (e) => {
        e.preventDefault()
        const isValid = validateAll()
        if (!isValid) {
            return false
        }

        const newUser = {
            id: users[users.length - 1].id + 1,
            email: email,
            username: username,
            password: password,
            settings: {
                language: "Turkish (TR)",
                currency: "TL",
                subscribtion: "Temel"
            }
        }
        users.push(newUser)
        localStorage.setItem('user', JSON.stringify(username));
        props.closeSignup()
        props.onRegister(username)
        navigate('/dashboard')
    }

    const { username, email, password } = values
    const {
        username: usernameVal,
        email: emailVal,
        password: passwordVal
    } = validations

    return (
        <div className={'modal'}>
            <div className={'modal__overlay'} />
            <div className={'modal__box'}>
                <div className="modal__close">
                    <button onClick={props.closeSignup}><span>&#10005;</span></button>
                </div>
                <div className={'modal__title'}>
                    Kayıt ol
                </div>
                <div className="modal__sub_title">
                    Başlamak için kayıt olun
                </div>
                <div className={'modal__content'}>
                    <form onSubmit={HandleSignUp}>
                        <label>Kullanıcı Adı:</label>
                        <input
                            name="username"
                            value={username}
                            onChange={handleChange}
                        />
                        <div className="error-msg">{usernameVal}</div>
                        <label>Email:</label>
                        <input
                            name="email"
                            value={email}
                            onChange={handleChange}
                        />
                        <div className="error-msg">{emailVal}</div>
                        <label>Şifre:</label>
                        <input
                            value={password}
                            type="password"
                            name="password"
                            onChange={handleChange}
                        />
                        <div className="error-msg">{passwordVal}</div>
                        <button className="submit-btn basic-button" type="submit">Kaydol</button>
                    </form>
                    <div className="have-account">Zaten bir hesabın var mı?
                        <button className="login-btn basic-button"
                            onClick={() => { props.closeSignup(); props.openLogin() }}>
                            Giriş yap</button></div>
                </div>
            </div>
        </div>
    );
}

export default Register;