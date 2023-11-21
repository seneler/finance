import BlogNewsletter from '../blog/BlogNewsletter';
import HaveQuestions from '../pricing/HaveQuestions';
import './terms.css'

const Terms = () => {
    return (
        <main className="terms">
            <article className="terms-content">
                <h2>Kullanım Şartları</h2>
                <p>Sevgili ziyaretçimiz, lütfen web sitemizi ziyaret etmeden önce işbu kullanım koşulları sözleşmesini dikkatlice okuyunuz. Siteye erişiminiz tamamen bu sözleşmeyi kabulünüze ve bu sözleşme ile belirlenen şartlara uymanıza bağlıdır. Şayet bu sözleşmede yazan herhangi bir koşulu kabul etmiyorsanız, lütfen siteye erişiminizi sonlandırınız. Siteye erişiminizi sürdürdüğünüz takdirde, koşulsuz ve kısıtlamasız olarak, işbu sözleşme metninin tamamını kabul ettiğinizin, tarafımızca varsayılacağını lütfen unutmayınız.</p>
                <p>Şirket Adı tarafından yönetilmekte olup, bundan sonra SİTE olarak anılacaktır. İşbu siteye ilişkin Kullanım Koşulları, yayınlanmakla yürürlüğe girer. Değişiklik yapma hakkı, tek taraflı olarak SİTE'ye aittir ve SİTE üzerinden güncel olarak paylaşılacak olan bu değişiklikleri, tüm kullanıcılarımız baştan kabul etmiş sayılır.Gizlilik, ayrı bir sayfada, kişisel verilerinizin tarafımızca işlenmesinin esaslarını düzenlemek üzere mevcuttur. SİTE'yi kullandığınız takdirde, bu verilerin işlenmesinin gizlilik politikasına uygun olarak gerçekleştiğini kabul edersiniz.</p>
                <p className="highlight-text">Hizmet Kapsamı</p>
                <p>Şirket Adı olarak, sunacağımız hizmetlerin kapsamını ve niteliğini, yasalar çerçevesinde belirlemekte tamamen serbest olup; hizmetlere ilişkin yapacağımız değişiklikler, SİTE'de yayınlanmakla yürürlüğe girmiş sayılacaktır.</p>
                <p>SİTE'de yayınlanan tüm metin, kod, grafikler, logolar, resimler, ses dosyaları ve kullanılan yazılımın sahibi (bundan böyle ve daha sonra "içerik" olarak anılacaktır) Şirket Adı olup, tüm hakları saklıdır. Yazılı izin olmaksızın site içeriğinin çoğaltılması veya kopyalanması kesinlikle yasaktır.</p>
                <figure>Genel Hükümler.</figure>
                <p>•Kullanıcıların tamamı, SİTE'yi yalnızca hukuka uygun ve şahsi amaçlarla kullanacaklarını ve üçüncü kişinin haklarına tecavüz teşkil edecek nitelikteki herhangi bir faaliyette bulunmayacağını taahhüt eder. SİTE dâhilinde yaptıkları işlem ve eylemlerindeki, hukuki ve cezai sorumlulukları kendilerine aittir. İşbu iş ve eylemler sebebiyle, üçüncü kişilerin uğradıkları veya uğrayabilecekleri zararlardan dolayı SİTE'nin doğrudan ve/veya dolaylı hiçbir sorumluluğu yoktur.</p>
                <p>•SİTE'de mevcut bilgilerin doğruluk ve güncelliğini sağlamak için elimizden geleni yapmaktayız. Lakin gösterdiğimiz çabaya rağmen, bu bilgiler, fiili değişikliklerin gerisinde kalabilir, birtakım farklılıklar olabilir. Bu sebeple, site içerisinde yer alan bilgilerin doğruluğu ve güncelliği ile ilgili tarafımızca, açık veya zımni, herhangi bir garanti verilmemekte, hiçbir taahhütte bulunulmamaktadır.</p>
                <p>•SİTE'de üçüncü şahıslar tarafından işletilen ve içerikleri tarafımızca bilinmeyen diğer web sitelerine, uygulamalara ve platformlara köprüler (hyperlink) bulunabilir. SİTE, işlevsellik yalnızca bu sitelere ulaşımı sağlamakta olup, içerikleri ile ilgili hiçbir sorumluluk kabul etmemekteyiz.</p>
                <p>•SİTE'yi virüslerden temizlenmiş tutmak konusunda elimizden geleni yapsak da, virüslerin tamamen bulunmadığı garantisini vermemekteyiz. Bu nedenle veri indirirken, virüslere karşı gerekli önlemi almak, kullanıcıların sorumluluğundadır. Virüs vb. kötü amaçlı programlar, kodlar veya materyallerin sebep olabileceği zararlardan dolayı sorumluluk kabul etmemekteyiz.</p>
                <p>•SİTE'de sunulan hizmetlerde, kusur veya hata olmayacağına ya da kesintisiz hizmet verileceğine dair garanti vermemekteyiz. SİTE'ye ve sitenin hizmetlerine veya herhangi bir bölümüne olan erişiminizi önceden bildirmeksizin herhangi bir zamanda sonlandırabiliriz.</p>
                <p>SİTE'nin kullanımından doğan zararlara ilişkin sorumluluğumuz, kast ve ağır ihmal ile sınırlıdır. Sözleşmenin ihlalinden doğan zararlarda, talep edilebilecek toplam tazminat, öngörülebilir hasarlar ile sınırlıdır. Yukarıda bahsedilen sorumluluk sınırlamaları aynı zamanda insan hayatına, bedeni yaralanmaya veya bir kişinin sağlığına gelebilecek zararlar durumunda geçerli değildir. Hukuken mücbir sebep sayılan tüm durumlarda, gecikme, ifa etmeme veya temerrütten dolayı, herhangi bir tazminat yükümlülüğümüz doğmayacaktır.</p>
                </article>
            <article>
                <BlogNewsletter />
                <HaveQuestions />

            </article>
        </main>
    )
}

export default Terms;