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

export default function CreateProfile() {
  const [creatingProfile, setCreatingProfile] = useState(false);
  const [accountType, setAccountType] = useState("");

  const handleClickOpen = () => {
    setCreatingProfile(true);
  };

  const handleClose = () => {
    setCreatingProfile(false);
  };

  const handleSubmit = () => {
    //send the data
    setCreatingProfile(false);
    setAccountType("")
  };

  const handleAccountTypeChange = (event) => {
    setAccountType(event.target.value);
  };

  return (
    <div>
      <Button variant="outlined" onClick={handleClickOpen}>
        Create New Profile
      </Button>
      <FormPopup open={creatingProfile} onClose={handleClose}>
        <DialogTitle>Create New Profile</DialogTitle>
        <DialogContent>
        <AccountTypeSection>
          <InputLabel id="account-type-label">Type of Account</InputLabel>
          <Select
            labelId="account-type-label"
            id="account-type"
            value={accountType}
            onChange={handleAccountTypeChange}
          >
            <MenuItem value="head-of-school">Head of School</MenuItem>
            <MenuItem value="assistant-head-of-school">Assistant Head of School</MenuItem>
          </Select>
        </AccountTypeSection>
        <InputField
          autoFocus
          margin="dense"
          id="first-name"
          label="First Name"
          type="text"
          variant="outlined"
        />
        <InputField
          autoFocus
          margin="dense"
          id="last-name"
          label="Last Name"
          type="text"
          variant="outlined"
        />
        <InputField
          autoFocus
          margin="dense"
          id="email"
          label="Email Address"
          type="email"
          variant="outlined"
        />
        <InputField
          autoFocus
          margin="dense"
          id="dob"
          label=""
          type="Date"
          variant="outlined"
        />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Back</Button>
          <Button onClick={handleSubmit}>Create</Button>
        </DialogActions>
      </FormPopup>
    </div>
  );
}