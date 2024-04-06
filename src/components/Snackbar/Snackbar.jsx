import React from 'react';
import { Snackbar } from '@mui/material';
import Alert from '@mui/material/Alert';
import './Snackbar.css';



const CustomizedSnackbar = ({ open, setOpen }) => {

    const handleClose = (event, reason) => {
        if(reason === 'clickaway') return;

        setOpen(false);
    }
    return (
        <Snackbar
           anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
           open={open}
           autoHideDuration={5000}
           onClose={handleClose}
        >
            <Alert  
              onClose={handleClose} 
              severity="success" 
              elevation={6} 
              variant="filled"
              sx={{ width: '100%' }}
            >
              
                Transaction successfully created
            </Alert>

        </Snackbar>
    )
}

export default CustomizedSnackbar;