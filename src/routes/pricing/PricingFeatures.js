import PricingCover from '../../assets/images/pricing/pricing-cover.jpg';

const PricingFeatures = () => {
    return (
        <article className='pricing-features'>
            <section className='pricing-feature'>
                <section>
                    <h3><span className='highlight-title'>Zamandan</span> tasarruf </h3>
                    <p>Artık geliri ve giderlerinizi hesaplamak için saatler harcamanıza gerek yok. Sizin için zaman kazandıracak muhteşem bir çözüm oluşturduk.</p>
                </section>
                <section>
                    <h3><span className='highlight-title'>Parayı</span> takip et</h3>
                    <p>Parayı takip etmek hiç bu kadar kolay olmamıştı! Çeşitli kartlar, hesaplar, kategoriler ve etiketlerle harcamalarınızı ve gelirlerinizi kolayca ve zahmetsizce takip edebilirsiniz.</p>
                </section>
                <section>
                    <h3><span className='highlight-title'>Önemli bilgiler</span> edinin </h3>
                    <p>Gelir veya giderinizi takip etseniz bile sadece günlük takiple genel istatistikleri anlamanız zordur. Harcamalarınızı daha iyi anlamanız için size haftalık, aylık ve yıllık raporlar sunuyoruz</p>
                </section>
            </section>
            <img src={PricingCover} alt='Calculator' />
        </article>
    )
}

export default PricingFeatures;