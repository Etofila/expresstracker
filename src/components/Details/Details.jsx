import React from 'react';
import { Card, CardHeader, CardContent, Typography  } from '@mui/material';
import { Chart, ArcElement } from 'chart.js'
import { Pie, Doughnut } from 'react-chartjs-2';
import useTransactions from '../../useTransactions';
import './Details.css';

const Details = ({ title }) => {
  const { total, chartData } = useTransactions(title);
  Chart.register(ArcElement);
  
  return (
    <div className="john">
    <Card className={title === 'Income' ? 'income' : 'expense'} >
        <CardHeader title = {title} />
        <CardContent>
            <Typography  variant="h6" color="white" >${total}</Typography>
            {title === 'Income' ? <Pie data={chartData} /> : 'Expense' ? <Doughnut data={chartData} /> : null }
        </CardContent>
    </Card>
    </div>
  )
}

export default Details;