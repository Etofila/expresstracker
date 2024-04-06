import React from 'react';
import { Grid } from '@mui/material';
import './App.css';

import Details from './components/Details/Details';
import Main from './components/Main/Main';
 

const App = () => {

  return (
    <div>
      <Grid className="grid" container spacing={0} alignItems='center' justifyContent="center" sx={{ heigh: '100vh' }}>
        <Grid item xs={12} sm={3} className='mobile'>
          <Main />
        </Grid>
        <Grid item xs={12} sm={4}>
            <Details title="Income"/>
          </Grid>
          <Grid item xs={12} sm={3} className='desktop'>
            <Main />
          </Grid>
          <Grid item xs={12} sm={4}>
            <Details title="Expense"/>
          </Grid>
           
      </Grid>
    </div>
  )
}


export default App;
