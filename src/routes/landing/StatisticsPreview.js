import StatsPreview from '../../assets/images/landing/stats-preview.jpg'
const StatisticsPreview = () => {
    return (
        <article className="statisctics-preview">
            <section className="statisctics-preview-content">
                <p className='tagline'>İstatislikler</p>
                <h2>Binlerce memnun kullanıcı</h2>
                <p>Finansfocus'un bütçe yöneminde binlerce insanın 
                  hayatına dokunan ve hayatlarını değiştiren rolü inkar edilemez. Sebepleriniz ne olursa olsun, sizi desteklemek ve bu yolda size destek olmak için buradayız</p>
                <img src={StatsPreview} alt="Statistics" />
            </section>
            <section className="timeline">
                <div className="timeline-outer">
                    <section className="card">
                        <h3 className="title">2023</h3>
                        <p>Finansfocus'un doğum yılı </p>

                    </section>
                    <section className="card">
                        <h3 className="title">500+</h3>
                        <p> Dünyadaki günlük kullanıcılar </p>

                    </section>
                    <section className="card">
                        <h3 className="title">7/24 destek</h3>
                        <p>İstediğin zaman ücretsiz destek </p>
                    </section>
                </div>
            </section>
        </article>
    )
}

export default StatisticsPreview;