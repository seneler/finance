import React from 'react'
import "./mainDashboard.css"
import { BubbleChart } from "./charts/BubbleChart";

const PopularCategories = () => {
    return (
        <div className="bubbles card">
            <div className="card-content">
            Popüler kategoriler
                <span className="card-year">2023</span>
                <BubbleChart />
            </div>
        </div>
    )
}

export default PopularCategories