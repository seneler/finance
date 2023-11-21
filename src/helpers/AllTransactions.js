import { monthExpenses, monthIncome } from './TransactionsByMonth';

const allTransactions = () => {
    return (
        [
            {
                label: 'Ocak',
                type: 'Expenses',
                value: monthExpenses(1),
            },
            {
                label: 'Ocak',
                type: 'Incomes',
                value: monthIncome(1),
            },
            {
                label: 'Şubat',
                type: 'Expenses',
                value: monthExpenses(2),
            },
            {
                label: 'Şubat',
                type: 'Incomes',
                value: monthIncome(2),
            },
            {
                label: 'Mart',
                type: 'Expenses',
                value: monthExpenses(3),
            },
            {
                label: 'Mart',
                type: 'Incomes',
                value: monthIncome(3),
            },
            {
                label: 'Nisan',
                type: 'Expenses',
                value: monthExpenses(4),
            },
            {
                label: 'Nisan',
                type: 'Incomes',
                value: monthIncome(4),
            },
            {
                label: 'Mayıs',
                type: 'Expenses',
                value: monthExpenses(5),
            },
            {
                label: 'Mayıs',
                type: 'Incomes',
                value: monthIncome(5),
            },
            {
                label: 'Haziran',
                type: 'Expenses',
                value: monthExpenses(6),
            },
            {
                label: 'Haziran',
                type: 'Incomes',
                value: monthIncome(6),
            },
            {
                label: 'Temmuz',
                type: 'Expenses',
                value: monthExpenses(7),
            },
            {
                label: 'Temmuz',
                type: 'Incomes',
                value: monthIncome(7),
            },
            {
                label: 'Ağustos',
                type: 'Expenses',
                value: monthExpenses(8),
            },
            {
                label: 'Ağustos',
                type: 'Incomes',
                value: monthIncome(8),
            },
            {
                label: 'Eylül',
                type: 'Expenses',
                value: monthExpenses(9),
            },
            {
                label: 'Eylül',
                type: 'Incomes',
                value: monthIncome(9),
            },
            {
                label: 'Ekim',
                type: 'Expenses',
                value: monthExpenses(10),
            },
            {
                label: 'Ekim',
                type: 'Incomes',
                value: monthIncome(10),
            },
            {
                label: 'Kasım',
                type: 'Expenses',
                value: monthExpenses(11),
            },
            {
                label: 'Kasım',
                type: 'Incomes',
                value: monthIncome(11),
            },
            {
                label: 'Aralık',
                type: 'Expenses',
                value: monthExpenses(12),
            },
            {
                label: 'Aralık',
                type: 'Incomes',
                value: monthIncome(12),
            },
        ]
    )
}

const allExpenses = () => {
    return (
        allTransactions().filter(e => { return e.type === "Expenses" })
    )
}

const allIncome = () => {
    return (
        allTransactions().filter(e => { return e.type === "Income" })
    )
}


export { allTransactions, allExpenses, allIncome }