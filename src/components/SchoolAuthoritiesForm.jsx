import {React, useState} from 'react';
import styled from 'styled-components';
import { TextField } from '@mui/material';
 
const FormContainer = styled.div `
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

export default function SchoolAuthoritiesForm() {
    const [formData, setFormData] = useState({});

    // async function signUp() {
    //     try {
    //         const { user } = await Auth.signUp({
    //         username: formData.email,
    //         password: generatePassword(),
    //         attributes: {
    //             given_name: formData.firstName,
    //             family_name: formData.lastName,
    //             "custom:age": formData.age.toString()
    //         },
    //         group: accountType
    //         })
    //         return user;
    //     } catch (error) {
    //         console.log('error signing up:', error);
    //     }
    // }

    function generatePassword () {

    }

    const handleChange = (fieldName, fieldValue) => {
        setFormData({
            ...formData,
            [fieldName]: fieldValue,
        });
    }

    return (
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
  )
}

