import { Link } from 'react-router-dom';
import ScrollToTop from '../../helpers/ScrollToTop';
const Features = () => {
    return (
        <article className='features'>
            <section className='feature-content'>
                <section className='features-description'>
                    <p className='tagline'> Finansfocus özellikleri </p>
                    <h2><span className='highlight-title'>Finansfocus</span>'un size sunduğu hizmetler</h2>
                    <p>Kişisel finans uygulamamız sayesinde herhangi bir deneyime ihtiyacınız yok! Sadece uygulamayı açın, gelirinizi girin ve yaptığınız harcamaları ekleyin! </p>
                    <Link className='feature-btn basic-button' to="./about" onClick={ScrollToTop}> Devamını oku  &gt;</Link>
                </section>
                <section className='features-list'>
                    <section>
                        <h3> Gelir ve giderleri takip edin </h3>
                        <p>Her türlü işlem için gelir ve giderleri ekleyerek paranızın nereye gittiğini öğrenin.</p>
                    </section>
                    <section>
                        <h3>İşlemlerinizi kategorilere ayırın</h3>
                        <p>Kazançlarınızı ve harcamalarınızı anlamak ve bütçelerinizi takip etmek için işlemlerinizi kategorilere ayırın. </p>
                    </section>
                    <section>
                        <h3>Gider Raporlaması</h3>
                        <p>İlerlemeyi takip edebilmeniz için her ay size harcamalarınızın analizlerini gönderiyoruz. </p>
                    </section>
                    <section> <h3> Sınırsız kategoriler  </h3>
                        <p>Dilediğiniz kategorileri ekleyin veya sunduğumuz kategorileri kullanın. Finans sürecinizi çok daha kolay hale getirir ve paranızın nereye aktığını anlamanıza yardımcı olur</p>
                    </section>
                </section>
            </section>

        </article>
    )
}

export default Features;