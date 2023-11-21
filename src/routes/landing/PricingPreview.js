import { useState } from 'react';
import Check from '../../assets/images/vectors/check.jpg'

const PricingPreview = ({ openSignup }) => {
    const [activePlan, setActivePlan] = useState('monthly');

    const setPricingPlan = (plan) => {
        setActivePlan(plan);
    }

    return (
        <article className="pricing-preview">
            <section className='pricing-preview-content'>
                <p className='tagline'>Finansfocus</p>
                <h2>Fiyatlandırma Planı</h2>
                <p> Birbirinden  farkı  iki şeçenek, birini şeçin </p>
            </section>
            <section className="billing-buttons">
                <button type="button" onClick={() => setPricingPlan('monthly')} className={`plan-btn${activePlan === 'monthly' ? ` active` : ``}`}>Aylık Faturalandırma</button>
                <button type="button" onClick={() => setPricingPlan('annual')} className={`plan-btn${activePlan === 'annual' ? ` active` : ``}`}>Yıllık Faturalandırma</button>
            </section>
            <section className="pricing-grid">
                <section className="basic-plan">
                    <section>
                        <h3>Temel plan</h3>
                        <p>Yeni başlayanlar için</p>
                    </section>

                    <hr />
                    {activePlan === 'monthly' ? <h4>0₺/Aylık</h4> : <h4><span className='old-pricing'>1₺/yıllık</span>0₺/yıllık</h4>}
                    <button type="button" className='basic-button' onClick={openSignup}>Başla</button>
                    <hr />
                    <ul className='pricing-features-preview'>
                        <li><img src={Check} alt="" /> <p>App Store veya Play Store</p></li>
                        <li><img src={Check} alt="" /> <p>Tüm Ülkeler</p></li>
                        <li><img src={Check} alt="" /> <p>Gelişmiş Tablo ve Grafikler</p></li>
                    </ul>
                </section>
                <section className="business-plan">
                    <section>
                        <h3>İş planı</h3>
                        <p> Daha fazla büyümek için</p>
                    </section>
                    <hr />
                    {activePlan === 'monthly' ? <h4>99₺/Aylık</h4> : <h4><span className='old-pricing'>1188₺/yıllık</span>999₺/yıllık</h4>}
                    <button type="button" className='basic-button' onClick={openSignup}>Başla</button>
                    <hr />
                    <ul className='pricing-features-preview'>
                        <li><img src={Check} alt="" /> <p>App Store veya Play Store</p></li>
                        <li><img src={Check} alt="" /> <p>Tüm Ülkeler</p></li>
                        <li><img src={Check} alt="" /> <p>Gelişmiş Tablo ve Grafikler </p></li>
                        <li><img src={Check} alt="" /> <p>Otomatik senkronizasyon için bankaları bağlayın</p></li>
                        <li><img src={Check} alt="" /> <p>Ayrıcalıklı Premium özellikler</p></li>
                        <li><img src={Check} alt="" /> <p>İsteğe Bağlı Faturalandırma</p></li>
                    </ul>
                </section>
            </section>
        </article>
    )
}

export default PricingPreview;