import "./budgetDashboard.css";
import budget from "../../data/Budget";
import { useState } from "react";

const BudgetDashboard = () => {

    const [needs, setNeeds] = useState(Array(budget.needs.length).fill(0));
    const [wants, setWants] = useState(Array(budget.wants.length).fill(0));
    const [savings, setSavings] = useState(Array(budget.savings.length).fill(0));

    const updateNeeds = (index) => (e) => {
        const newArr = needs.map((item, i) => {
            if (index === i) {
                return Number(e.target.value)
            } else {
                return item;
            }
        });
        setNeeds(newArr);
    }

    const updateWants = (index) => (e) => {
        const newArr = wants.map((item, i) => {
            if (index === i) {
                return Number(e.target.value)
            } else {
                return item;
            }
        });
        setWants(newArr);
    }

    const updateSavings = (index) => (e) => {
        const newArr = savings.map((item, i) => {
            if (index === i) {
                return Number(e.target.value)
            } else {
                return item;
            }
        });
        setSavings(newArr);
    }

    return (
        <div className="budget">

            <div className="header">
                <h1>Bütçe</h1>
                <span>Kişisel bütçenizi hesaplayın.</span>

            </div>
            <div className="budget-sections">
                <div className="monthly-income card">
                    <div className="budget-title"> Aylık Gelir </div>
                    <input placeholder="₺"></input>
                </div>

                <div className="budget-expenses card">

                    <span className="budget-title">
                        Masraflar
                    </span>
                    <div className="sub-sections">

                        <div><h2> İhtiyaçlar:</h2>
                            {budget.needs.map((category, index) =>
                                <div className="category-input" key={index}>
                                    <p>{category}</p>
                                    <input
                                        value={needs[index]}
                                        onChange={updateNeeds(index)} />
                                </div>
                            )}
                        </div>

                        <div><h2> İstekler :</h2>
                            {budget.wants.map((category, index) =>
                                <div className="category-input" key={index}>
                                    <p>{category}</p>
                                    <input
                                        value={wants[index]}
                                        onChange={updateWants(index)} />
                                </div>
                            )}
                        </div>
                        <div><h2> Tasarruflar :</h2>
                            {budget.savings.map((category, index) =>
                                <div className="category-input" key={index}>
                                    <p>{category}</p>
                                    <input
                                        value={savings[index]}
                                        onChange={updateSavings(index)} />
                                </div>
                            )}
                        </div>
                    </div>
                </div>


                <div className="totals card">
                    <div className="budget-title">Toplam</div>
                    <h3>İhtiyaçlar: {needs.reduce((a, b) => a = a + b, 0)} ₺</h3>
                    <h3>İstekler: {wants.reduce((a, b) => a = a + b, 0)} ₺</h3>
                    <h3>Tasarruflar:{savings.reduce((a, b) => a = a + b, 0)} ₺</h3>
                </div>

            </div>
        </div >
    )
}

export default BudgetDashboard;