import { Button } from '@mui/material';
import { useState } from 'react';
import { CreateProfile } from './CreateProfile';

export const LandingPage = () => { 

  const [creatingProfile, setCreatingProfile] = useState(false);

  return( 
  <div>
    <Button variant="outlined" onClick={() => setCreatingProfile(true)}>
      Create New Profile
    </Button>

    <CreateProfile open={creatingProfile} onClose={() => setCreatingProfile(false)} />

  </div>
  )
}