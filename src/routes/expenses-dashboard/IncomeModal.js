
import CloseExpenseModal from "./CloseExpenseModal";
import categories from '../../data/Categories.js';
import { useEffect } from 'react';
import bankAccounts from "../../data/Accounts";

const IncomeModal = (props) => {
    useEffect(() => {
        props.identifyRecord(1, 'income');
    }, [props]);
    return (
        <article className="add-income-modal">
            <section className="add-income-popup">
                <CloseExpenseModal closeModal={props.closeModal} resetForm={props.resetForm} />
                <h2>Yeni Gelir</h2>
                {props.submit && Object.keys(props.formError).length === 0 ? <p> Gelir başarılı bir şekilde eklendi! 🤑</p> :
                    <form onSubmit={props.addIncome}>
                        <input onChange={props.handleValidation} value={props.formValue.name} name="name" type="text" placeholder="Gelir adı" />
                        {props.formError.name ? <span className="modal-input-err">{props.formError.name}</span> : null}
                        <input onChange={props.handleValidation} value={props.formValue.amount} name="amount" type="text" placeholder="Tutar" />
                        {props.formError.amount ? <span className="modal-input-err">{props.formError.amount}</span> : null}
                        <select onChange={props.handleValidation} value={props.formValue.category} name="Kategori">
                            <option defaultChecked> Kategorilerden birini seçiniz </option>
                            {categories.map((category) => <option key={category.id} >{category.name}</option>)}
                        </select>
                        {props.formError.category ? <span className="modal-input-err">{props.formError.category}</span> : null}
                        <select onChange={props.handleValidation} value={props.formValue.bankAccount} name="bankAccount">
                            <option defaultChecked>Select bank account</option>
                            {bankAccounts.map((account, index) => <option key={index} >{account.name}</option>)}
                        </select>
                        {props.formError.bankAccount ? <span className="modal-input-err">{props.formError.bankAccount}</span> : null}
                        <input onChange={props.handleValidation} value={props.formValue.created} name="created" type="date" id="date" />
                        {props.formError.created ? <span className="modal-input-err">{props.formError.created}</span> : null}
                        <textarea onChange={props.handleValidation} value={props.formValue.note} name="note" type="textarea" placeholder="" rows="5" />
                        <button className="dash-button" type="submit">Ekle</button>
                    </form>}
            </section>
        </article>
    )
}

export default IncomeModal;