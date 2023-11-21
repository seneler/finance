const PricingComparison = (props) => {
    return (
        <>
            <table className='pricingComparison'>
                <thead>
                    <tr>
                        <th className="empty-th">❌</th>
                        <th className='th-1'>
                            <h3>Temel Plan</h3>
                            <p className='th-price'>0₺</p>
                            <p className='th-note'>Aylık</p>
                            <button type="button" className="basic-button" onClick={props.openSignup}>Başla</button>
                        </th>
                        <th className='th-2'>
                            <h3>İş Planı</h3>
                            <p className='th-price'>99₺</p>
                            <p className='th-note'>Aylık</p>
                            <button type="button" className="basic-button" onClick={props.openSignup}>Başla</button>
                        </th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>Mevcut Kullanıcılar</td>
                        <td>1</td>
                        <td>5</td>
                    </tr>
                    <tr>
                        <td>App Store  veya  Play Store</td>
                        <td>✔️</td>
                        <td>✔️</td>
                    </tr>
                    <tr>
                        <td>Tüm Ülkeler</td>
                        <td>✔️</td>
                        <td>✔️</td>
                    </tr>
                    <tr>
                        <td>Otomatik senkronizasyon için bankaları bağlayın</td>
                        <td>✔️</td>
                        <td>✔️</td>
                    </tr>
                    <tr>
                        <td>Ayrıcalıklı Premium özellikler</td>
                        <td>❌</td>
                        <td>✔️</td>
                    </tr>
                    <tr>
                        <td>İsteğe Bağlı Faturalandırma</td>
                        <td>❌</td>
                        <td>✔️</td>
                    </tr>
                    <tr>
                        <td>Tahmin oluşturma ve gönderme</td>
                        <td>❌</td>
                        <td>✔️</td>
                    </tr>
                    <tr>
                        <td>Faturalandırılabilir saatler</td>
                        <td>✔️</td>
                        <td>✔️</td>
                    </tr>
                    <tr>
                        <td>Satışları ve satış vergisini takip edin</td>
                        <td>❌</td>
                        <td>✔️</td>
                    </tr>
                    <tr>
                        <td>Faturaları kaydet</td>
                        <td>✔️</td>
                        <td>✔️</td>
                    </tr>
                    <tr>
                        <td>Proje karlılığını takip edin</td>
                        <td>❌</td>
                        <td>✔️</td>
                    </tr>
                    <tr>
                        <td>Erişimi role göre özelleştirin</td>
                        <td>❌</td>
                        <td>✔️</td>
                    </tr>
                    <tr>
                        <td>Geliştirilmiş özel kategoriler</td>
                        <td>✔️</td>
                        <td>✔️</td>
                    </tr>
                    <tr>
                        <td>Süreçleri ve görevleri otomatikleştirin</td>
                        <td>❌</td>
                        <td>✔️</td>
                    </tr>
                </tbody>
            </table>
            <section className="pricing-responsive">
                <table className='pricingComparisonResponsive'>
                <tbody>
                    <tr>
                        <th className='th-1'>
                            <h3>Temel Plan</h3>
                            <p className='th-price'>0₺</p>
                            <p className='th-note'>Aylık</p>
                            <button type="button" className="basic-button" onClick={props.openSignup} >Başla</button>
                        </th>

                    </tr>
                    <tr>
                        <td>Mevcut Kullanıcılar</td>
                        <td>1</td>
                    </tr>
                    <tr>
                        <td>App Store  veya  Play Store</td>
                        <td>✔️</td>
                    </tr>
                    <tr>
                        <td>All countries</td>
                        <td>✔️</td>
                    </tr>
                    <tr>
                        <td>Otomatik senkronizasyon için bankaları bağlayın</td>
                        <td>✔️</td>

                    </tr>
                    <tr>
                        <td>Ayrıcalıklı Premium özellikler</td>
                        <td>❌</td>
                       

                    </tr>
                    <tr>
                        <td>İsteğe Bağlı Faturalandırma</td>
                        <td>❌</td>

                    </tr>
                    <tr>
                        <td>Tahmin oluşturma ve gönderme</td>
                        <td>❌</td>

                    </tr>
                    <tr>
                        <td>Faturalandırılabilir saatler</td>
                        <td>✔️</td>

                    </tr>
                    <tr>
                        <td>Satışları ve satış vergisini takip edin</td>
                        <td>❌</td>

                    </tr>
                    <tr>
                        <td>Faturaları kaydet</td>
                        <td>✔️</td>

                    </tr>
                    <tr>
                        <td>Proje karlılığını takip edin</td>
                        <td>rişimi role göre özelleştirin</td>
                        <td>❌</td>

                    </tr>
                    <tr>
                        <td>Erişimi role göre özelleştirin</td>
                        <td>❌</td>

                    </tr>
                    <tr>
                        <td>Geliştirilmiş özel kategoriler</td>
                        <td>✔️</td>

                    </tr>
                    <tr>
                        <td>Süreçleri ve görevleri otomatikleştirin</td>
                        <td>❌</td>

                    </tr>
                    </tbody>
                </table>
                <table className='pricingComparisonResponsive'>
                <tbody>
                    <tr>
                        <th className='th-2'>
                            <h3>İş Planı</h3>
                            <p className='th-price'>99₺</p>
                            <p className='th-note'>Aylık</p>
                            <button type="button" className="basic-button" onClick={props.openSignup}>Başla</button>
                        </th>
                    </tr>
                    <tr>
                        <td>Mevcut Kullanıcılar</td>

                        <td>5</td>
                    </tr>
                    <tr>
                        <td>App Store  veya  Play Store</td>

                        <td>✔️</td>
                    </tr>
                    <tr>
                        <td>All countries</td>

                        <td>✔️</td>
                    </tr>
                    <tr>
                        <td>Connect banks for auto-sync</td>

                        <td>✔️</td>
                    </tr>
                    <tr>
                        <td>Ayrıcalıklı Premium özellikler</td>

                        <td>✔️</td>
                    </tr>
                    <tr>
                        <td>İsteğe Bağlı Faturalandırma</td>

                        <td>✔️</td>
                    </tr>
                    <tr>
                        <td>Tahmin oluşturma ve gönderme</td>

                        <td>✔️</td>
                    </tr>
                    <tr>
                        <td>Faturalandırılabilir saatler</td>

                        <td>✔️</td>
                    </tr>
                    <tr>
                        <td>Satışları ve satış vergisini takip edin</td>

                        <td>✔️</td>
                    </tr>
                    <tr>
                        <td>Faturaları kaydet</td>

                        <td>✔️</td>
                    </tr>
                    <tr>
                        <td>Proje karlılığını takip edin</td>

                        <td>✔️</td>
                    </tr>
                    <tr>
                        <td>Erişimi role göre özelleştirin</td>

                        <td>✔️</td>
                    </tr>
                    <tr>
                        <td>Geliştirilmiş özel kategoriler</td>

                        <td>✔️</td>
                    </tr>
                    <tr>
                        <td>Süreçleri ve görevleri otomatikleştirin</td>

                        <td>✔️</td>
                    </tr>
                    </tbody>
                </table>
            </section>
        </>

    )
}

export default PricingComparison;