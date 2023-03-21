import React from 'react'
import SchoolAuthoritiesForm from './SchoolAuthoritiesForm';

export default function RenderForm( {handleSubmit, accountType} ) {
  return (
    <SchoolAuthoritiesForm onSubmit={() => handleSubmit(handleSubmit)}/>
  )
}

