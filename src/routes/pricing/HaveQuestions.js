import { Link } from "react-router-dom";
import ScrollToTop from "../../helpers/ScrollToTop";
const HaveQuestions = () => {
    return (
        <article className='have-questions'>
            <section>
                <h2> Hâlâ sorularınız mı var ?</h2>
                <p> Size destek olmak için 7/24 burdayız. </p>
            </section>
            <Link to="/contact" className="basic-button" onClick={ScrollToTop}> Bizimle iletişime geçin</Link>
        </article>
    )
}


export default HaveQuestions;