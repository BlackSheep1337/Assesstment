const inputForm = () => {
  return (
    <form className="mt-8">
        <div className="mb-4">
        <label htmlFor="institution" className="block text-gray-700 font-medium">
            Name of Institution <span className="text-red-600">*</span>
        </label>
        <input
            type="text"
            id="institution"
            className="w-full p-2 mt-1 border rounded-lg focus:ring focus:ring-blue-300 focus:outline-none"
            placeholder="WESOnline"
        />
        </div>

        <div className="mb-4">
        <label htmlFor="journey" className="block text-gray-700 font-medium">
            Where are you on your journey? <span className="text-red-600">*</span>
        </label>
        <input
            type="text"
            id="journey"
            className="w-full p-2 mt-1 border rounded-lg focus:ring focus:ring-blue-300 focus:outline-none"
            placeholder="100"
        />
        </div>
        <div className="flex gap-6">
            <div className="mb-4">
                <label htmlFor="field" className="block text-gray-700 font-medium">
                    Field Of Study <span className="text-red-600">*</span>
                </label>
                <input
                    type="text"
                    id="field"
                    className="w-full p-2 mt-1 border rounded-lg focus:ring focus:ring-blue-300 focus:outline-none"
                    placeholder="E.g., Chimestry"
                />
            </div>

            <div className="mb-4">
                <label htmlFor="gpa" className="block text-gray-700 font-medium">
                    GPA <span className="text-red-600">*</span>
                </label>
                <input
                    type="text"
                    id="gpa"
                    className="w-full p-2 mt-1 border rounded-lg focus:ring focus:ring-blue-300 focus:outline-none"
                    placeholder="Your GPA"
                />
            </div>
        </div>
        <div className="mb-6">
        <label htmlFor="interest" className="block text-gray-700 font-medium">
            What areas interest you most? <span className="text-red-600">*</span>
        </label>
        <input
            type="text"
            id="interest"
            className="w-full p-2 mt-1 border rounded-lg focus:ring focus:ring-blue-300 focus:outline-none"
            placeholder="Business & Management"
        />
        </div>
    </form>
  )
}

export default inputForm;