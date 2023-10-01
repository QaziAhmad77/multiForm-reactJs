import { Button, TextField } from '@mui/material';
import { useContext } from 'react';
import { multiStepContext } from '../StepContext';

const SecondStep = () => {
  const { setStep, userData, setUserData } = useContext(multiStepContext);

  return (
    <div className="flex flex-col justify-center items-center">
      <div>
        <TextField
          label="Email"
          margin="normal"
          variant="outlined"
          color="secondary"
          value={userData['email']}
          onChange={(e) => setUserData({ ...userData, email: e.target.value })}
        />
      </div>
      <div>
        <TextField
          label="Country"
          margin="normal"
          variant="outlined"
          color="secondary"
          value={userData['country']}
          onChange={(e) =>
            setUserData({ ...userData, country: e.target.value })
          }
        />
      </div>
      <div>
        <TextField
          label="District"
          margin="normal"
          variant="outlined"
          color="secondary"
          value={userData['district']}
          onChange={(e) =>
            setUserData({ ...userData, district: e.target.value })
          }
        />
      </div>
      <div>
        <Button
          onClick={() => setStep(1)}
          variant="contained"
          color="secondary"
        >
          Back
        </Button>
        <Button onClick={() => setStep(3)} variant="contained" color="primary">
          Next
        </Button>
      </div>
    </div>
  );
};

export default SecondStep;
