import Partner1 from '../../assets/images/partner-logos/company-logo-1.jpg'
import Partner2 from '../../assets/images/partner-logos/company-logo-2.jpg'
import Partner3 from '../../assets/images/partner-logos/company-logo-3.jpg'
import Partner4 from '../../assets/images/partner-logos/company-logo-4.jpg'
import Partner5 from '../../assets/images/partner-logos/company-logo-5.jpg'
import Partner6 from '../../assets/images/partner-logos/company-logo-6.jpg'

const Cta = ({ openSignup }) => {
    return (
        <section className='cta'>
            <section className='cta-content'>
                <h2>
                    Kimlerle Çalıştık
                </h2>
                <p>
                    Önemli markaların Finansfocus'u tercih etmesi bize duyulan güveni gösteriyor ve bu Finansfocus'un gelecek hedeflerini gerçekleştirmesi  yolundaki en önemli kilometre taşlarından birini oluşturuyor
                </p>
                <button type='button' className='basic-button' onClick={openSignup}>Başla</button>
            </section>
            <section className='partners'>
                <img src={Partner1} alt='Expenseless partner' />
                <img src={Partner2} alt='Expenseless partner' />
                <img src={Partner3} alt='Expenseless partner' />
                <img src={Partner4} alt='Expenseless partner' />
                <img src={Partner5} alt='Expenseless partner' />
                <img src={Partner6} alt='Expenseless partner' />
            </section>
        </section>
    )
}

export default Cta;