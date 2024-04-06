import React from 'react';
import { Card, CardHeader, CardContent, Typography, Grid, Divider } from '@mui/material';
import { ExpenseTrackerContext } from '../../Context/Context';
import InfoCard from '../InfoCard';
import Form from './Form/Form';
import List from './List/List';
import './Main.css';
import { useContext } from 'react';



const Main = () => {

  const { balance } = useContext(ExpenseTrackerContext);
     

  return (
    <div className="Luke">
      <Card  className='classesRoot' style={{ margin:'20px'}}>
          <CardHeader title="Expense Tracker" subheader="powered by speechly" />
          <CardContent>
            <Typography align="center" variant="h6">Total Balance ${balance}</Typography>
            <Typography variant="subtitle1" style={{ lineHeight: '1.5em', marginTop: '20px', backgroundImage: 'red', }}>
                <InfoCard />
            </Typography>
            <Divider />
               <Form />
          </CardContent>
          <CardContent className='cardContent'>
             <Grid container spacing={2}>
                 <Grid item >
                    <List />
                 </Grid>
             </Grid>
          </CardContent>
      </Card>
    </div>
  );
}

export default Main;