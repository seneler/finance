import './profileDashboard.css'
import users from "../../data/Users";
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const ProfileDashboard = (props) => {

    const user = users.find(u => u.username === props.user);
    const index = users.findIndex(u => u.id === user.id);

    const [editModeEnabled, setEditModeEnabled] = useState(false);
    const [userValue, setUserValue] = useState(user);
    const [formError, setFormError] = useState({});
    const [successMessage, setSuccessMessage] = useState("");
    const navigate = useNavigate();

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setUserValue({ ...userValue, [name]: value });
    }
    const handleSettingsChange = (e) => {
        const { name, value } = e.target;
        setUserValue({ ...userValue, settings: { ...userValue.settings, [name]: value } });
        console.log(userValue)
    }

    const validateForm = () => {
        let errors = {};
        let isValid = true;
        if (!userValue.email) {
            errors.email = 'E-posta gereklidir'
            isValid = false
        }
        if (userValue.email && !/\S+@\S+\.\S+/.test(userValue.email)) {
            errors.email = 'E-posta formatı finansfocus@gmail.com şeklinde olmalıdır'
            isValid = false
        }
        if (!userValue.password) {
            errors.password = 'Parola gereklidir'
            isValid = false
        }
        if (userValue.password && userValue.password.length < 6) {
            errors.password = 'Şifre en az 6 karakter  olmalıdır'
            isValid = false
        }
        if (!isValid) {
            setFormError(errors)
        }
        return isValid
    }

    //Update profile
    const updateProfile = () => {
        if (!validateForm())
            return false;

        users[index] = Object.assign({}, userValue);

        setSuccessMessage("Profil Bilgileri Başarıyla Güncellendi!")
        setTimeout(() => {
            setSuccessMessage("")
        }, 2000);
        setEditModeEnabled(false);
    }

    //Cancel Update
    const cancelUpdate = () => {
        setEditModeEnabled(false);
        setUserValue(user);
        setFormError({});
    }

    //Deactivate account
    const deactivate = () => {
        const confirmBox = window.confirm(
            "Hesabınızı gerçekten devre dışı bırakmak istiyor musunuz?"
        )
        if (confirmBox === true) {
            users.splice(index, 1);
            props.logout()
            navigate('/')
        }
    }

    return (
        <main className="profile-dashboard">
            <div className="header">
                <h1>Profil</h1>
            </div>
            <article className="profile">

                {successMessage ? <div className="success-msg">{successMessage}</div> : null}
                <form onSubmit={(e) => e.preventDefault()}>
                    <ul>
                        <li>
                            <h3>Email</h3>
                            <input name="email" onChange={handleInputChange} value={userValue.email} disabled={!editModeEnabled} />
                            {formError.email ? <span className="input-err">{formError.email}</span> : null}
                        </li>
                        <li>
                            <h3>Şifre</h3>
                            <input type="password" name="password" onChange={handleInputChange} value={userValue.password} disabled={!editModeEnabled} />
                            {formError.password ? <span className="input-err">{formError.password}</span> : null}
                        </li>
                        <li>
                            <h3>Dil</h3>
                            {editModeEnabled ?
                                <select onChange={handleSettingsChange} name="dil" defaultValue={userValue.settings.dil}>
                                    <option value="Turkish (TR)" >Türkçe (TR)</option>
                                    <option value="English (US)" >English(US)</option>
                                    <option value="Deutsch">Deutsch</option>
                                    <option value="French">French</option>
                                </select>
                                :
                                <p>{user.settings.language}</p>}
                        </li>
                        <li>
                            <h3> Para Birimi </h3>
                            {editModeEnabled ?
                        <select onChange={handleSettingsChange} name="para birimi" defaultValue={userValue.settings.currency}>
                         <option value="TL" >TL</option>
                         <option value="USD" >USD</option>
                         <option value="EUR">EUR</option>
                                </select>
                                : <p>{user.settings.currency}</p>}
                        </li>
                        <li>
                            <h3>Abonelik</h3>
                            {editModeEnabled ?
                                <select onChange={handleSettingsChange} name="abonelik" defaultValue={userValue.settings.subscribtion}>
                                    <option value="Basic">Temel</option>
                                    <option value="Business">İşletme</option>
                                </select>
                                : <p>{user.settings.subscribtion}</p>}
                        </li>
                    </ul>
                    {editModeEnabled ?
                        <section className='profile-buttons'>
                            <button className='dash-button' onClick={updateProfile}>Kaydet</button>
                            <button className='dash-button' onClick={cancelUpdate}>İptal et</button>
                        </section>
                        :
                        <section className='profile-buttons'>
                            <button className='dash-button' onClick={() => setEditModeEnabled(true)}>Düzenle</button>
                            <button className='deactivate-btn dash-button' onClick={deactivate}>Aktif edilmemiş hesap</button>
                        </section>
                    }
                </form>
            </article>
        </main>
    )
}

export default ProfileDashboard;