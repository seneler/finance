import React from 'react'
import "./mainDashboard.css"
import ProgressBar from "./charts/progressbar/ProgressBar";
import { Link } from "react-router-dom";
import { monthExpenses, monthIncome } from '../../helpers/TransactionsByMonth';

const BudgetStatus = () => {
    const currentMonth = new Date().getMonth() + 1;
    return (
        <div className="budget-status card">
            <div className="card-content">
                Bütçe Durumu
                <div>
                    <span className="bar-title"> Gelir </span>
                    <span className="amount">{monthIncome(currentMonth)}₺</span>
                    <ProgressBar done={monthIncome(currentMonth) / 100} />
                </div>
                <div>
                    <span className="bar-title"> Gider </span>
                    <span className="amount">{monthExpenses(currentMonth)}₺</span>
                    <ProgressBar done={monthExpenses(currentMonth) / 100} />
                </div>

                <Link to="expenses"> Tüm işlemleri görün &#62; </Link>
            </div>
        </div>
    )
}

export default BudgetStatus