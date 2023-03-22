import { React } from 'react';
import styled from 'styled-components';
import { TextField } from '@mui/material';

const InputField = styled(TextField)`
  margin-bottom: 10px;
  border-radius: 5px;
  border: none;
  padding: 10px;
`;

export default function SuportersForm({ handleChange }) {
  return (
    <>
        <InputField
          id="firstName"
          label="First Name"
          type="text"
          variant="outlined"
          onChange={handleChange}
          required
        />
        <InputField
          id="lastName"
          label="Last Name"
          type="text"
          variant="outlined"
          onChange={handleChange}
          required
        />
        <InputField
          id="email"
          label="Email Address"
          type="email"
          variant="outlined"
          onChange={handleChange}
          required
        />
        <InputField
          id="dateOfBirth"
          label="Date of Birth"
          type="Date"
          variant="outlined"
          InputLabelProps={{ shrink: true }}
          onChange={handleChange}
          required
        />
        <InputField
          id="gender"
          label="Gender"
          type="text"
          variant="outlined"
          onChange={handleChange}
          required
        />
        <InputField
          id="dateOfBirth"
          label="Date of Birth"
          type="Date"
          variant="outlined"
          onChange={handleChange}
          required
        />
      </>
  )
}
