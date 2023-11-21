import React from 'react'
import "./mainDashboard.css"

const AddButtons = (props) => {

    return (
        <div className="buttons">
            <button className='dash-button' onClick={() => { props.toggleExpenseModal() }}>Gider ekle &#65291;</button>
            <button  className='dash-button' onClick={() => { props.toggleIncomeModal(); }}>Gelir Ekle &#65291;</button>
            <button className='dash-button' onClick={() => { props.toggleCardModal() }}>Add account &#65291;</button>
            <button className='dash-button' onClick={() => { props.toggleCategoryModal() }}>Kategori Ekle &#65291;</button>
        </div>
    )
}

export default AddButtons