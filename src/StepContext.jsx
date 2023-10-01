import { createContext, useState } from 'react';
import App from './App';

// Define your own StepContext here
export const multiStepContext = createContext();

const StepContext = () => {
  const [currentStep, setStep] = useState(1);
  const [userData, setUserData] = useState([]);
  const [finalData, setFinalData] = useState([]);
  function submitData() {
    setFinalData((finaldata) => [...finaldata, userData]);
    setUserData('');
    setStep(1);
  }
  return (
    <multiStepContext.Provider
      value={{
        currentStep,
        setStep,
        userData,
        setUserData,
        finalData,
        setFinalData,
        submitData,
      }}
    >
      <App />
    </multiStepContext.Provider>
  );
};

export default StepContext;
