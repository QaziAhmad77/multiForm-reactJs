import { Step, StepLabel, Stepper } from '@mui/material';
import FirstStep from './components/FirstStep';
import SecondStep from './components/SecondStep';
import ThirdStep from './components/ThirdStep';
import { multiStepContext } from './StepContext';
import { useContext } from 'react';
import DisplayData from './components/DisplayData';

function App() {
  const { currentStep, finalData } = useContext(multiStepContext);
  const showStep = (step) => {
    switch (step) {
      case 1:
        return <FirstStep />;
      case 2:
        return <SecondStep />;
      case 3:
        return <ThirdStep />;
    }
  };
  return (
    <div>
      <h1 className="text-red-500 underline text-xl text-center font-bold tracking-wider">
        ReactJS Multi Step Application
      </h1>
      <div className="flex items-center justify-center mt-10">
        <Stepper
          style={{ width: '15%' }}
          activeStep={currentStep - 1}
          orientation="horizontal"
        >
          <Step>
            <StepLabel></StepLabel>
          </Step>
          <Step>
            <StepLabel></StepLabel>
          </Step>
          <Step>
            <StepLabel></StepLabel>
          </Step>
        </Stepper>
      </div>
      {showStep(currentStep)}
      {finalData.length > 0 ? <DisplayData /> : ''}
    </div>
  );
}

export default App;
