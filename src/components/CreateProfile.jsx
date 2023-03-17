import {React, useState} from 'react';
import styled from 'styled-components';
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Button,
  Select,
  MenuItem,
  InputLabel,
  TextField
} from '@mui/material';

const FormPopup = styled(Dialog)`
.MuiPaper-root {
  border-radius: 0px;
  width: 1170px;
  max-width: 2000px;
  height: 900px;
}
.MuiDialogTitle-root {
  font-weight: bold;
  box-shadow: 0px 3px 3px rgba(0, 0, 0, 0.3);
}
.MuiDialogContent-root {
   
}
.MuiButtonBase-root{
  border: 1px solid rgba(13, 46, 153, 0.568);
  border-radius: 7px;
  width: 100px;
  height: 30px;
}
.MuiFormControl-root {
  margin: 20px 20px 0 0;
  width: 350px;
}
`;

const AccountTypeSection = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 10px;
  width: 220px;

  .MuiInputLabel-root {
    font-size: 18px;
    margin-bottom: 5px;
  }

  .MuiSelect-root {
    font-size: 16px;
    background-color: #fff;
    border: 1px solid #ccc;
    border-radius: 5px;
    padding: 10px;
    width: 100%;
  }
`;

const InputField = styled(TextField)`
  margin-bottom: 10px;
  border-radius: 5px;
  border: none;
  padding: 10px;
`;

export const CreateProfile = ({ open, onClose }) => {
  const [accountType, setAccountType] = useState("");
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    dateOfBirth: ""
  });

  const handleSubmit = (event) => {
    //send the data
    setAccountType("")
    onClose()
  };

  const handleAccountTypeChange = (event) => {
    setAccountType(event.target.value);
  };

  return (
    <FormPopup open={open} onClose={onClose}>
      <DialogTitle>Create New Profile</DialogTitle>
      <DialogContent>
      <AccountTypeSection>
        <InputLabel id="accountTypeLabel">Type of Account</InputLabel>
        <Select
          autoFocus
          labelId="accountTypeLabel"
          id="accountType"
          value={accountType}
          onChange={handleAccountTypeChange}
        >
          <MenuItem value="headOfSchool">Head of School</MenuItem>
          <MenuItem value="assistantHeadOfSchool">Assistant Head of School</MenuItem>
        </Select>
      </AccountTypeSection>
      <InputField
        id="firstName"
        label="First Name"
        type="text"
        variant="outlined"
        required
      />
      <InputField
        id="lastName"
        label="Last Name"
        type="text"
        variant="outlined"
        required
      />
      <InputField
        id="email"
        label="Email Address"
        type="email"
        variant="outlined"
        required
      />
      <InputField
        id="dateOfBirth"
        label=""
        type="Date"
        variant="outlined"
        required
      />
      </DialogContent>
      <DialogActions>
        <Button onClick={onClose}>Back</Button>
        <Button onClick={(event) => handleSubmit(event)}>Create</Button>
      </DialogActions>
    </FormPopup>
  );
}