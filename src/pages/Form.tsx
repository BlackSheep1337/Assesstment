import { useState } from "react";
import Stepper from "../components/Stepper";
import InputForm from "../components/inputForm";
import { FiGift } from "react-icons/fi";


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

        {/* Form Header */}
        <div className="text-center mb-8">
            <h1 className="text-2xl font-semibold text-gray-800">Your Education 🎏</h1>
            <p className="text-gray-600 mt-2">Tell us about your academic background</p>
            <p className="text-sm text-blue-600 mt-2">800 WESPoints remaining to unlock ESA</p>
        </div>

        {/* Reward Box */}
        <div className="p-4 bg-blue-50 text-blue-700 rounded-lg shadow-md mb-8">
            <p className="flex gap-2 text-xl"><FiGift /> Your reward for this step is <strong>200 WESPoints</strong></p>
        </div>

        {/* Form Inputs */}
            <InputForm />

        {/* Buttons */}
            <div className="flex justify-between items-center mt-12">
            <button className="text-gray-500 hover:text-gray-700 transition cursor-pointer">
                Skip For Now
            </button>

            <button
                className="bg-blue-600 text-white font-medium py-2 px-6 rounded-lg hover:bg-blue-700 transition cursor-pointer"
                onClick={handleNext}
                type="button"
            >
                Continue
            </button>
            </div>
        </div>
    </div>
  );
};

export default Form;
