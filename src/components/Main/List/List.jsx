import React, { useContext} from 'react';
import { List as MUIList, ListItem, ListItemAvatar, ListItemText, Avatar, ListItemSecondaryAction, IconButton, Slide  } from '@mui/material';
import './List.css';
import { ExpenseTrackerContext } from '../../../Context/Context';
import { Delete, MoneyOff } from '@mui/icons-material';


const List = () => {
    const { deleteTransaction, transactions } = useContext(ExpenseTrackerContext); 

  return (
    <div className='mainList' >
     <MUIList dense={ false } >
        {transactions.map((transaction) => (
            <Slide direction="down" in mountOnEnter unmountOnExit key={transaction.id} >
                <ListItem >
                    <ListItemAvatar className='list'>
                        <Avatar className={transaction.type === 'Expense' ? 'avatarExpense' : 'avatarIncome' }>
                            <MoneyOff />
                        </Avatar>
                    </ListItemAvatar>
                    <ListItemText primary={ transaction.category } secondary={`$${transaction.amount} - ${transaction.date}`} />
                    <ListItemSecondaryAction>
                        <IconButton edge="end" aria-label="delete" onClick={() => deleteTransaction(transaction.id)}>
                              <Delete />
                        </IconButton>
                    </ListItemSecondaryAction>
                </ListItem>
            </Slide>
        ))}
     </MUIList>
     </div>
  )
}

export default List;
