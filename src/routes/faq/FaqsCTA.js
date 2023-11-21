import React from 'react'
import { Link } from 'react-router-dom'
import "./faq.css"
import FaqsPic from '../../assets/images/faqs/faqs-cta.jpg';
import ScrollToTop from '../../helpers/ScrollToTop';
const FaqsCTA = () => {
    return (
        <div>
            <div className="CTA-content">
                <h1>Genç yetişkinler için kişisel finans yönetimi ipuçları </h1>
                <p>Aylık bir bütçe oluşturmak ve bir harcama planına bağlı kalmak, borca ​​girmeden yeterli paraya, finansal önceliklere ve harcama alışkanlıklarına sahip olduğunuz bir noktaya ulaşmanıza yardımcı olabil.</p>
            <Link className='CTA-button basic-button' to="/blog" onClick={ScrollToTop}> Blog oku</Link>
            </div>
            <img src={FaqsPic} alt='Money Investment' className="faqs-pic" />
        </div>
    )
}

export default FaqsCTA