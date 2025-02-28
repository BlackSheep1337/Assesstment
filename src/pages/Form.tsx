import { useState } from "react";
import Stepper from "../components/Stepper";
import InputForm from "../components/inputForm";
import Congratulations from "../components/Congratulations";

const Form: React.FC = () => {
  const [currentStep, setCurrentStep] = useState(1);
  const totalSteps = 4;

  const handleNext = () => {
    if (currentStep < totalSteps) setCurrentStep(currentStep + 1);
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-6 space-y-6 w-4xl">
        <div className="w-full max-w-lg bg-white p-6 rounded-lg shadow-md">
        {/* Stepper Progress Bar */}
        <Stepper steps={totalSteps} currentStep={currentStep} />
        {currentStep === 4 ? <Congratulations setCurrentStep={setCurrentStep} /> : <InputForm handleNext={handleNext}  />}
        </div>
    </div>
  );
};

export default Form;
