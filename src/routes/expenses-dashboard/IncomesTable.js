import incomes from "../../data/Incomes";
import React from "react";

const IncomesTable = (props) => {
    return (
        <React.Fragment>
            {incomes.length === 0 ? <p className="no-records-found">Kayıt bulunamadı</p> :
                <section className="tables">
                    <table className="greyGridTable">
                        <thead>
                            <tr>
                                <th scope="col">Gelir Adı</th>
                                <th scope="col">Kategori</th>
                                <th scope="col">Gerçekleştiği tarih</th>
                                <th scope="col">Tutar</th>
                                <th scope="col">Account</th>
                                <th scope="col">More</th>
                            </tr>
                        </thead>
                        <tbody>
                            {props.currentIncomes.map((income) =>
                                <tr key={income.id}>
                                    <td data-label="Expense name"><span><img src={income.cover} alt="" />{income.name}</span></td>
                                    <td data-label="Category">{income.category}</td>
                                    <td data-label="Created">{income.created}</td>
                                    <td data-label="Amount" className="income-amount">{income.amount}{income.currency}</td>
                                    <td data-label="Account">{income.bankAccount}</td>
                                    <td data-label="More" onClick={() => {
                                        props.toggleExistingRecords();
                                        props.getRecordInfo(income);
                                    }}>...</td>
                                </tr>)}
                        </tbody>
                    </table>
                </section>}
        </React.Fragment>
    )
}


export default IncomesTable;