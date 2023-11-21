import React from 'react'

const FaqsQuestions = () => {
    return (
        <div>
            <div className='questions-header'>
                <h1>SSS (Sıkça Sorulan Sorular) </h1>
                <p> Bir sorunuz mu var? Tüm sorularınızın yanıtını burada bulabilirsiniz</p>
            </div>

            <table className='faqsQuestions'>
            <tbody>
                <tr>
                    <td>Bu çevrimiçi mi, yoksa yazılım mı indireceğim?</td>
                    <td>Finansfocus'a herhangi bir web tarayıcısından veya mobil uygulama aracılığıyla güvenli bir şekilde erişilebilir. Yazılımın indirilmesine gerek yoktur.</td>
                </tr>
                <tr>
                    <td>İstediğim zaman planları değiştirebilir veya iptal edebilir miyim?</td>
                    <td>Evet.Finansfocusla istediğiniz zaman planlarınızı değiştirmekte veya istediğiniz zaman iptal etmekte özgürsünüz. Size yardımcı olması için lütfen müşteri hizmetleri iletişime geçin</td>
                </tr>
                <tr>
                    <td>İş planı sürümünde herhangi bir sıkıntı yaşadığımızda ne kadar bir süre içinde bize dönüş yapıyorsunuz?</td>
                    <td> En geç 2-3 saat içersinde teknik ekibimiz probleminizi çözmek üzere size gerekli desteği sunacaktır.</td>
                </tr>
                <tr>
                    <td>Başlamak kolay mı?</td>
                    <td>Kesinlikle. Banka veya kredi kartı işlemlerinizi Finansfocus ile senkronize ettiğinizde, çalışmaya başlaması yalnızca birkaç dakika sürer.</td>
                </tr>
                <tr>
                    <td>Muhasebecimi veya vergi uzmanımı ekleyebilir miyim?</td>
                    <td>Evet. İş planı sürümünü alıp bu işlemleri gerçekleştirebilirsiniz.</td>
                </tr>
                </tbody>
            </table>

        </div>
    )
}

export default FaqsQuestions