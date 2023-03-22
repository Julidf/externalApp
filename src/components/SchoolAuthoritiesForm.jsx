import {React, useState} from 'react';
import styled from 'styled-components';
import {  } from '@mui/material';
 

export default function SchoolAuthoritiesForm() {


    return (
      <>
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
            error
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
        </>
  )
}

