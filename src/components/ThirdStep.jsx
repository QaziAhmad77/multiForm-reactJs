import { Button, TextField } from '@mui/material';
import { multiStepContext } from '../StepContext';
import { useContext } from 'react';

const ThirdStep = () => {
  const { setStep, userData, setUserData, submitData } =
    useContext(multiStepContext);

  return (
    <div className="flex flex-col justify-center items-center">
      <div>
        <TextField
          label="City"
          margin="normal"
          variant="outlined"
          color="secondary"
        />
      </div>
      <div>
        <TextField
          label="Landmark"
          margin="normal"
          variant="outlined"
          color="secondary"
          value={userData['landmark']}
          onChange={(e) =>
            setUserData({ ...userData, landmark: e.target.value })
          }
        />
      </div>
      <div>
        <TextField
          label="Postal code"
          margin="normal"
          variant="outlined"
          color="secondary"
          value={userData['postcode']}
          onChange={(e) =>
            setUserData({ ...userData, postcode: e.target.value })
          }
        />
      </div>
      <div>
        <Button
          onClick={() => setStep(2)}
          variant="contained"
          color="secondary"
        >
          Back
        </Button>
        <Button onClick={submitData} variant="contained" color="primary">
          Submit
        </Button>
      </div>
    </div>
  );
};

export default ThirdStep;
