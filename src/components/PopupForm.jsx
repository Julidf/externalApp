
/* A user of School Admin access should be able to set up basic user profile for users - Head of School and Assistant Head of School,
 with details like Name, Contact detail, DoB, Email */ 
 import React, { useState } from 'react';
 import styled from 'styled-components';
 import { Dialog, DialogTitle, DialogContent, DialogActions, Button } from '@mui/material';
 
 const FormPopup = styled(Dialog)`
   .MuiPaper-root {
     border-radius: 10px;
     padding: 20px;
   }
 
   .MuiDialogTitle-root {
     text-align: center;
   }
 
   .MuiDialogContent-root {
     display: flex;
     flex-direction: column;
     align-items: center;
   }
 
   .MuiDialogActions-root {
     justify-content: center;
   }
 `;
 
 const PopupForm = () => {
   const [open, setOpen] = useState(false);
 
   const handleClickOpen = () => {
     setOpen(true);
   };
 
   const handleClose = () => {
     setOpen(false);
   };
 
   return (
     <div>
       <Button variant="contained" color="primary" onClick={handleClickOpen}>
         Open Form Popup1
       </Button>
       <FormPopup open={open} onClose={handleClose}>
         <DialogTitle>Create User Profile</DialogTitle>
         <DialogContent>
           <InputField autoFocus margin="dense" label="Name" type="text" fullWidth />
           <InputField margin="dense" label="Contact Detail" type="text" fullWidth />
           <InputField margin="dense" label="Date of Birth" type="date" fullWidth shrink />
           <InputField margin="dense" label="Email Address" type="email" fullWidth />
         </DialogContent>
         <DialogActions>
           <Button onClick={handleClose} color="primary">
             Cancel
           </Button>
           <Button onClick={handleClose} color="primary">
             Save
           </Button>
         </DialogActions>
       </FormPopup>
     </div>
   );
 };
 
 const InputField = styled.input`
   margin-bottom: 10px;
   border-radius: 5px;
   padding: 10px;
 `;
 
 export default PopupForm;
 