
import React from "react";
import CloseRecordModal from "./CloseRecordModal";
import categories from '../../data/Categories.js';

const ExistingExpenseincome = (props) => {
    return (
        <article className="add-existing-modal">
            {props.successMessage ? <section className="add-existing-popup"><p>{props.successMessage}</p></section> : props.editMode ?
                <section className="add-existing-popup">
                    <CloseRecordModal closeModal={props.closeModal} />
                    <form onSubmit={props.updateAddedExpense}>
                        <section className="recording-data">
                            <input name="name" onChange={props.handleEditValidation} type="text" placeholder={props.recordInfo.name} value={props.editFormValue.name} />
                            <label htmlFor="category">
                               Kategori:
                                <select onChange={props.handleEditValidation} value={props.recordInfo.category} name="category">
                                    <option defaultChecked>Kategoriyi seç</option>
                                    {categories.map((category) => <option key={category.id} >{category.name}</option>)}
                                </select>
                            </label>
                            <label htmlFor="amount">
                                Tutar:
                                <input onChange={props.handleEditValidation} name="amount" type="text" placeholder={`${props.recordInfo.amount} ${props.recordInfo.currency}`} />
                            </label>
                            {props.editFormError.amount ? <span className="modal-input-err">{props.editFormError.amount}</span> : null}
                            <label htmlFor="created">
                                Tarih:
                                <input onChange={props.handleEditValidation} name="created" type="date" />
                            </label>
                            <label htmlFor="note">
                                Not:
                                <textarea onChange={props.handleEditValidation} name="note" type="text" placeholder={props.recordInfo.note} />
                            </label>
                        </section>
                        <section className="existing-record-buttons">
                            <button type="submit">Değişiklikleri kaydet</button>
                            <button onClick={props.cancelEditExpenseRecord}>İptal et</button>
                        </section>
                    </form>
                </section> :
                <section className="add-existing-popup">
                    <CloseRecordModal closeModal={props.closeModal} />
                    <h2>{props.recordInfo.name}</h2>
                    <section className="recording-data">
                        <p>Category: <span>{props.recordInfo.category}</span></p>
                        <p>Amount: <span>{props.recordInfo.amount} {props.recordInfo.currency}</span></p>
                        <p>Date: <span>{props.recordInfo.created}</span></p>
                        <p>Note: <span>{props.recordInfo.note}</span></p>
                    </section>
                    <section className="existing-record-buttons">
                        <button onClick={() => { props.editExpenseRecord(); props.identifyRecord(props.recordInfo.id, props.recordInfo.type) }}>Düzenle</button>
                        <button onClick={props.deleteExistingRecord}>Sil</button>
                    </section>
                </section>
            }

        </article >
    )
}

export default ExistingExpenseincome;