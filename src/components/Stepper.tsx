const Stepper = ({ steps = 1, currentStep = 1 }) => {
  return (
    <div className="flex items-center space-x-4 mb-12">
      {Array.from({ length: steps }).map((_, index) => (
        <div
          key={index}
          className={`text-4xl font-bold rounded-xs ${currentStep > index ? 'text-blue-500' : 'text-gray-300'}`}
        >
          {currentStep > index ? '_____' : '_____'}
        </div>
      ))}
    </div>
  );
};

export default Stepper;