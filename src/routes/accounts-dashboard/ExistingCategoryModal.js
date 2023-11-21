import categories from "../../data/Categories";
import { useState } from "react";
import "./accountsDashboard.css"

const ExistingCategoryModal = (props) => {

    //Edit Category
    const [editForm, setEditFrom] = useState(false);
    const [formValue, setFormValue] = useState(props.categoryInfo);
    const [Error, setError] = useState("");
    const [successMessage, setSuccessMessage] = useState("");

    const handleValidation = (e) => {
        const { name, value } = e.target;
        setFormValue({ ...formValue, id: categories.id, [name]: value });
    }

    const updateCategory = (e) => {
        e.preventDefault();
        if (!formValue.name) {
            setError("Lütfen kategori adını giriniz");
            return false;
        }
        const index = categories.findIndex(c => c.id === props.categoryInfo.id)
        categories[index] = Object.assign({}, formValue)

        setSuccessMessage("Kategori başarılı bir şekilde güncellendi!")
        setTimeout(() => {
            setSuccessMessage("")
            props.closeModal();
        }, 1000);
    }

    //Delete Category
    const deleteCategory = () => {
        const index = categories.findIndex(c => c.id === props.categoryInfo.id)
        categories.splice(index, 1);
        setSuccessMessage("Kategori başarılı bir şekilde silindi!")
        setTimeout(() => {
            setSuccessMessage("")
            props.closeModal();
        }, 1000);
    }

    return (
        <article className="add-category-modal">
            {editForm ?
                //View edit category 
                <section className="add-category-popup">
                    <button onClick={props.closeModal} className="close-modal">&#10005;</button>
                    {successMessage ? <div>{successMessage}</div> :
                        <form onSubmit={updateCategory}>
                            <section>
                                <input type="text"
                                    name="name"
                                    value={formValue.name}
                                    onChange={handleValidation} />
                                {Error ? <span className="modal-input-err">{Error}</span> : null}
                            </section>
                            <section>
                                <textarea type="textarea"
                                    placeholder="Description"
                                    rows="5" name="description"
                                    value={formValue.description}
                                    onChange={handleValidation} />
                            </section>
                            <section className="view-category-buttons">
                                <button className="dash-button">Güncelle</button>
                                <button  className="dash-button" onClick={props.closeModal}>İptal et</button>
                            </section>
                        </form>}
                </section>
                :
                //View selected category
                <section className="view-category-popup">
                    <button onClick={props.closeModal} className="close-modal">&#10005;</button>
                    {successMessage ? <div>{successMessage}</div>
                        :
                        <>
                            <h2>{props.categoryInfo.name}</h2>
                            <section>
                                <h3>Kategori açıklaması</h3>
                                <p>{props.categoryInfo.description}</p>
                            </section>
                            <section className="view-category-buttons">
                                <button  className="dash-button" onClick={() => setEditFrom(true)}>Düzenle</button>
                                <button className="dash-button"  onClick={deleteCategory}>Sil</button>
                            </section>
                        </>
                    }
                </section>}
        </article>
    )
}
export default ExistingCategoryModal;