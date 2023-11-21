import AboutUs from '../../assets/images/about-us/about-us.jpg';
import Location from "../../routes/contact/Location.js";
import Highlight from '../../assets/images/about-us/highlight-testimonial.jpg';
import BrightStudio from '../../assets/images/about-us/bright-studio.jpg';
import Star from '../../assets/images/vectors/star.jpg';
import './about.css';
import { useState } from 'react';
import ReactPaginate from 'react-paginate';
import team from '../../data/Team';

const About = () => {
    const [itemOffset, setItemOffset] = useState(0);
    const endOffset = itemOffset + 3;
    const currentTeam = [...team].reverse().slice(itemOffset, endOffset);
    const pages = Math.ceil(team.length / 3);

    const handleSliderClick = (event) => {
        const newOffset = (event.selected * 5) % team.length;
        setItemOffset(newOffset);
    };
    return (
        <main className='about'>
            <article>
                <section className="about-title">
                    <h2> Finansfocus: Bütçe Gider Takibi </h2>
                    <p> Giderlerinizi hesaplamak daha önce hiç bu kadar kolay olmamıştı!</p>
                </section>
            </article>
            <article className="about-us">
                <section>
                    <p className='tagline'></p>
                    <h3><span className='highlight-title'>Finansfocus</span> Hakkında</h3>
                    <p>Finansfocus, paradan tasarruf etmenize, geleceği planlamanıza ve tüm mali durumunuzu tek bir yerde görmenize yardımcı olmak için oluşturulmuş, pazar lideri bir kişisel finans yöneticisidir. Finansfocus ile banka senkronizasyonu ile günlük harcamalarınızı otomatik olarak takip edebilir, borcunuzu yönetebilir, giderleri ve gelirleri izleyebilir, harcamalarınızla ilgili haftalık raporlara girebilir ve faturaları takip edebilirsiniz.
                        Gidersiz, mali durumunuzu istediğiniz yerde, istediğiniz zaman görmenizi sağlar. Artık not defterlerinize ve e-tablolarınıza ve gerçek zamanlı olarak takip edilmesi kolay, net, somut hedefler için bütçenize gerek yok. Harcamalarınızı takip etmek bizimle çok daha kolay olacak! Hesaplarınıza ilişkin güzel tasarlanmış raporlarla mali durumunuzun tam kontrolünü elinize alın.</p>
                </section>
                <img src={AboutUs} alt="finance" />
            </article>
            <article className='our-team'>
                <section className='our-team-header'>
                    <p className='tagline'> Ekibimiz </p>
                    <h3>Biz kimiz</h3>
                    <p>Bütçeleme ve kişisel yaşam arasındaki dengeyi kurarak daha iyi bir dünyaya katkıda bulunuyoruz.</p>
                </section>
                <section className='team-slider'>
                {currentTeam.map(member => <section key={member.id} className='team-member'>
                    <img src={member.icon} alt='' />
                    <section className='team-member-info'>
                    <h4>{member.name}</h4>
                    <p>{member.posiiton}</p>
                    </section>
                    <p>{member.about}</p>
                 
                </section>)}
                </section>
                <ReactPaginate
                            className="slider-pagination"
                            breakLabel="..."
                            nextLabel="&#62;"
                            onPageChange={handleSliderClick}
                            pageRangeDisplayed={3}
                            pageCount={pages}
                            previousLabel="&#60;"
                            renderOnZeroPageCount={null}
                        />
            </article>
            <article className='highlight-testimonial'>
            <section className='highlight-testimonial-1'>
                <img className='stars' src={Star} alt='stars' />
                <p>"Amazing budgeting app, especially for those that like both manual budgeting and automated budgeting! This app has both, and is very aesthetic in appearance. Prices for the Business are reasonable too.  I'm glad that I stumbled across this app, it's versatility and smoothness is top tier!  Without a doubt, the best one! Recommended!"</p>
                <section className='highlight-testimonials-author'>
                    <section className='highlight-author'>
                        <img  src={Highlight} alt='person' />
                        <section>
                            <p>Daniel White</p>
                            <p>CEO, Bright Studio</p>
                        </section>
                    </section>
                    <img className='bright-studio' src={BrightStudio} alt='BrightStudio' />
                </section>
                </section>
            </article>
            <Location />
        </main>
    )
}

export default About;