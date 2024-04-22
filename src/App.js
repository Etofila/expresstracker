import React from 'react';
import { Grid } from '@mui/material';
import './App.css';

import Details from './components/Details/Details';

import Main from './components/Main/Main';
 

const App = () => {



  return (
    <div>
      <Grid className="grid" container spacing={2} alignItems='center' justifyContent="center" sx={{ height: '100vh' }} xs="12">
      <Grid item xs={12} sm={4} className='mobile'>
          <Main />
        </Grid >
        <Grid item xs={12} sm={4}  align="center">
            <Details title="Income" />
          </Grid>
          <Grid item xs={12} sm={4} className='desktop'>
            <Main />
          </Grid>
          <Grid item xs={12} sm={4} align="center">
            <Details title="Expense"/>
          </Grid>
      </Grid>
    </div>
  )
}


export default App;
