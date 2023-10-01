import { Button, TextField } from '@mui/material';
import { useContext } from 'react';
import { multiStepContext } from '../StepContext';
const FirstStep = () => {
  const { setStep, userData, setUserData } = useContext(multiStepContext);
  return (
    <div className="flex flex-col justify-center items-center">
      <div>
        <TextField
          label="First name"
          margin="normal"
          variant="outlined"
          color="secondary"
          value={userData['firstname']}
          onChange={(e) =>
            setUserData({ ...userData, firstname: e.target.value })
          }
        />
      </div>
      <div>
        <TextField
          label="Last name"
          margin="normal"
          variant="outlined"
          color="secondary"
          value={userData['lastname']}
          onChange={(e) =>
            setUserData({ ...userData, lastname: e.target.value })
          }
        />
      </div>
      <div>
        <TextField
          label="Contact Number"
          margin="normal"
          variant="outlined"
          color="secondary"
          value={userData['contact']}
          onChange={(e) =>
            setUserData({ ...userData, contact: e.target.value })
          }
        />
      </div>
      <div>
        <Button onClick={() => setStep(2)} variant="contained" color="primary">
          Next
        </Button>
      </div>
    </div>
  );
};

export default FirstStep;
