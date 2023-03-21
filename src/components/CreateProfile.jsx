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
} from '@mui/material';
import SchoolAuthoritiesForm from './SchoolAuthoritiesForm';

const FormPopup = styled(Dialog)`
.MuiPaper-root {
  border-radius: 0px;
  height: 700px;
  max-width: 100%;
}
.MuiDialogTitle-root {
  font-weight: bold;
  box-shadow: 0px 3px 3px rgba(0, 0, 0, 0.3);
}
.MuiDialogContent-root {
  
}
.MuiButtonBase-root{
  border-radius: 7px;
  width: 100px;
  height: 30px;
  border: 1px solid #3576cb;
}
.MuiButtonBase-root:hover {
  
}
.MuiFormControl-root {
  margin: 20px 0 0 0;
  width: 350px;
}
`;

const BackButton = styled(Button)`
  background-color: white;
  color: #3576cb;
`;

const CreateButton = styled(Button) `
  background-color: #3576cb;
  color: white;
`;

const AccountTypeSection = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 20px;
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

export const CreateProfile = ({ open, onClose }) => {
  const [accountType, setAccountType] = useState("");

  const handleSubmit = () => {
    // const user = signUp()
  };

  const handleAccountTypeChange = (value) => {
    setAccountType(value);
  };

  const closeForm = () => {
    setAccountType("")
    onClose()
  }

  function renderForm () {
    return <SchoolAuthoritiesForm handleSubmit />
  }

  return (
    <FormPopup open={open} onClose={closeForm}>
      <DialogTitle>Create New Profile</DialogTitle>
      <DialogContent>
        <AccountTypeSection>
          <InputLabel id="accountTypeLabel">Type of Account</InputLabel>
          <Select
            autoFocus
            labelId="accountTypeLabel"
            id="accountType"
            value={accountType}
            onChange={(e) => handleAccountTypeChange(e.target.value)}
          >
            <MenuItem value="headOfSchool">Head of School</MenuItem>
            <MenuItem value="assistantHeadOfSchool">Assistant Head of School</MenuItem>
          </Select>
        </AccountTypeSection>
        { renderForm() } 
      </DialogContent>
      <DialogActions>
        <BackButton onClick={closeForm}>Back</BackButton>
        <CreateButton onClick={handleSubmit}>Create</CreateButton>
      </DialogActions>
    </FormPopup>
  );
}