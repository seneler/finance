import React from "react";
import expenses from "../../data/Expenses";

const ExpensesTable = (props) => {
    return (
        <React.Fragment>
            {expenses.length === 0 ? <p className="no-records-found">No records found</p> :
                <section className="tables">
                    <table className="greyGridTable">
                        <thead>
                            <tr>
                                <th scope="col">Gider Adı</th>
                                <th scope="col">Kategori</th>
                                <th scope="col">Gerçekleştiği tarih</th>
                                <th scope="col">Tutar</th>
                                <th scope="col">Account</th>
                                <th scope="col">More</th>
                            </tr>
                        </thead>
                        <tbody>
                            {props.currentExpenses.map((expense) =>
                                <tr key={expense.id}>
                                    <td data-label="Expense name"><span><img src={expense.cover} alt="" />{expense.name}</span></td>
                                    <td data-label="Category">{expense.category}</td>
                                    <td data-label="Created">{expense.created}</td>
                                    <td data-label="Amount" className="expense-amount">-{expense.amount}{expense.currency}</td>
                                    <td data-label="Account">{expense.bankAccount}</td>
                                    <td data-label="More" onClick={() => {
                                        props.toggleExistingRecords();
                                        props.getRecordInfo(expense);

                                    }}>...</td>
                                </tr>)}
                        </tbody>
                    </table>
                </section>}
        </React.Fragment>
    )
}


export default ExpensesTable;