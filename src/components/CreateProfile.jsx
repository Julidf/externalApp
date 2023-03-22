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
  TextField,
  Box,
} from '@mui/material';


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

const FormContainer = styled(Box) `
display: grid;
grid-template-columns: repeat(3, 1fr);
gap: 15px;

@media (max-width: 1850px) {
grid-template-columns: repeat(2, 1fr);
}

@media (max-width: 1250px) {
grid-template-columns: repeat(1, 1fr);
}

`;

const InputField = styled(TextField)`
margin-bottom: 10px;
border-radius: 5px;
border: none;
padding: 10px;
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
  const [formData, setFormData] = useState({});

  // async function signUp() {
  //     try {
  //         const { user } = await Auth.signUp({
  //         username: formData.email,
  //         password: generatePassword(),
  //         attributes: {
  //             given_name: formData.firstName,
  //             family_name: formData.lastName,
  //             birthdate: formData.dateOfBirth,
  //             "custom:age": formData.age.toString()
  //         },
  //         group: accountType
  //         })
  //         console.log(user);
  //     } catch (error) {
  //         console.log('error signing up:', error);
  //     }
  // };

  function generatePassword () {

  };
  
  const handleSubmit = (e) => {
    e.preventDefault()
    // const user = signUp()
    console.log(formData)
  };
  
  const handleAccountTypeChange = (value) => {
    setAccountType(value);
  };
  
  const closeForm = () => {
    setFormData({})
    setAccountType("")
    onClose()
  };

  const handleChange = (fieldName, fieldValue) => {
      setFormData({
          ...formData,
          [fieldName]: fieldValue,
      });
  };
  
  function renderForm () {
  };

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
            <MenuItem value="headOfSchool"> Head of School </MenuItem>
            <MenuItem value="assistantHeadOfSchool"> Assistant Head of School </MenuItem>
          </Select>
        </AccountTypeSection>
        <FormContainer>
          <InputField
            id="firstName"
            label="First Name"
            type="text"
            variant="outlined"
            onChange={(e) => handleChange(e.target.getAttribute("id"), e.target.value)}
            required
          />
          <InputField
            id="lastName"
            label="Last Name"
            type="text"
            variant="outlined"
            onChange={(e) => handleChange(e.target.getAttribute("id"), e.target.value)}
            required
          />
          <InputField
            id="email"
            label="Email Address"
            type="email"
            variant="outlined"
            onChange={(e) => handleChange(e.target.getAttribute("id"), e.target.value)}
            required
          />
          <InputField
            id="dateOfBirth"
            label="Date of Birth"
            type="Date"
            variant="outlined"
            InputLabelProps={{ shrink: true }}
            onChange={(e) => handleChange(e.target.getAttribute("id"), e.target.value)}
            required
          />
        </FormContainer> 
      </DialogContent>
      <DialogActions>
        <BackButton onClick={closeForm}> Back </BackButton>
        <CreateButton onClick={(e) => handleSubmit(e)}> Create </CreateButton>
      </DialogActions>
    </FormPopup>
  );
}