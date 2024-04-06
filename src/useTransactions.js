import { useContext  } from 'react';
import { ExpenseTrackerContext } from './Context/Context';

import { incomeCategories, expenseCategories, resetCategories } from './Constants/categories';



// it is the calcution of tolal of income or expense of salary
// it is the mapping transition.type with all this for each 
// transition we need to find foe where it belong in categories
// };

const useTransactions = (title) => {
    resetCategories();
    const { transactions } = useContext(ExpenseTrackerContext);
    
    const transactionsPerType = transactions.filter((t) => t.type === title);
    const total = transactionsPerType.reduce((acc, currVal) => Number(acc) + Number(currVal.amount), 0);
    const categories  = title === 'Income' ? incomeCategories : expenseCategories;

    // console.log({ transactionsPerType, total, categories })

    transactionsPerType.forEach((t) => {
        const category = categories.find((c) => c.type === t.category)

        if(category) category.amount += t.amount;
    });

    const filterCategories = categories.filter((c) => c.amount > 0);
    
    const chartData = {
        datasets: [{
            data: filterCategories.map((c) => c.amount),
            backgroundColor: filterCategories.map((c) => c.color) 
        }],
        labels: filterCategories.map((c) => c.type) 
    }

    return { filterCategories, total, chartData }
}

export default useTransactions;