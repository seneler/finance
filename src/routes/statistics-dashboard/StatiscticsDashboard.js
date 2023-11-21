import "./statiscticsDashboard.css";
import { PieChart } from "./charts/PieChart";
import { BarChart } from "./charts/BarChart";

const StatisticsDashboard = () => {
    return (
        <div className="statistics">

            <div className="header">
                <h1> İstatistik </h1>

            </div>
            <div className="sections">
                <div className="byCategory card">
                    <div className="card-title">
                        Giderlerin Kategorilere Göre Sınıflandırılması
                    </div>
                    <PieChart />

                </div>

                <div className="byMonth card">
                    <div className="card-title">
                        Giderlerin Aylara Göre Sınıflandırılması
                        <span className="year"> 2023 </span>
                    </div>
                    <BarChart />
                </div>
            </div>

        </div>
    )
}

export default StatisticsDashboard;