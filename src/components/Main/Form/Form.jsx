import React, { useState, useEffect, useContext } from 'react';
import { TextField, Typography, Grid, Button, FormControl, InputLabel, Select, MenuItem } from '@mui/material';
import { ExpenseTrackerContext } from '../../../Context/Context';
import { v4 as uuidv4 } from 'uuid';

import formatDate from '../../../utils/formatDate';
import { incomeCategories, expenseCategories } from '../../../Constants/categories'; 
import CustomizedSnackbar from '../../Snackbar/Snackbar';

const initialState = {
   amount: '',
   category: '',
   type: '',
   date: formatDate(new Date()),
}

const Form = () => {
    
    const [formData, setFormData] = useState(initialState);
    const { addTransaction } = useContext(ExpenseTrackerContext);
    const [open, setOpen] = useState(false);

    const createTransaction = () => {

      if(Number.isNaN(Number(formData.amount)) || !formData.date.includes('-')) return;

      const transaction = { ...formData, amount: Number(formData.amount), id: uuidv4() };

       setOpen(true);
       addTransaction(transaction);
       setFormData(initialState);
    }

    useEffect(() => {
      console.log('Hello');
    },[formData]);

    const selectedCategories = formData.type === 'Expense' ? expenseCategories : incomeCategories;


  return (
    <Grid container spacing={2} >
      <CustomizedSnackbar open={open} setOpen={setOpen} />
       <Grid item xs={12}>
         <Typography align="center" variant="subtitle2" gutterBottom>
            ...            
         </Typography>
       </Grid>
       <Grid item xs={6}>
          <FormControl fullWidth>
            <InputLabel>Type</InputLabel>
            <Select value={formData.type} onChange={(e) => setFormData({ ...formData, type: e.target.value })}>
                <MenuItem value="Income">Income</MenuItem>
                <MenuItem value="Expense">Expense</MenuItem>
            </Select>
          </FormControl>
       </Grid>
       <Grid item xs={6}>
         <FormControl fullWidth >
            <InputLabel>Category</InputLabel>
            <Select value={formData.category} onChange={(e) => setFormData({ ...formData, category: e.target.value })}>
                {selectedCategories.map((c) => <MenuItem key={c.type} value={c.type}>{c.type}</MenuItem>)}
            </Select>
         </FormControl>
       </Grid>
       <Grid item xs={6}>
          <TextField type="number" label="Amount" fullWidth value={formData.amount} onChange={(e) => setFormData({ ...formData, amount: e.target.value })}/>
       </Grid>
       <Grid item xs={6}>
          <TextField type="date" label="Date" fullWidth value={formData.date} onChange={(e) => setFormData({ ...formData, date:  e.target.value })}/>
       </Grid>
       <Button className='createBtm'  variant="outlined" color="primary" align='center' fullWidth  onClick={createTransaction}>Create</Button>
    </Grid>
  )
  }
 
export default Form;
