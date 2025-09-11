const SuccessSubmission = () => {

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-green-900 p-4">
      <div className="bg-gray-200 rounded-lg shadow-lg p-8 max-w-md w-full text-center">
        {/* أيقونة النجاح */}
        <div className="flex justify-center mb-6">
          <div className="w-20 h-20 bg-green-200 rounded-full flex items-center justify-center">
            <svg
              className="w-12 h-12 text-green-500"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M5 13l4 4L19 7"
              ></path>
            </svg>
          </div>
        </div>

        {/* عنوان النجاح */}
        <h1 className="text-2xl font-bold text-green-600 mb-4">
          تم الإرسال بنجاح
        </h1>

        {/* رسالة التأكيد */}
        <p className="text-gray-600 mb-8 text-lg">
          لقد تم استلام معلوماتك بنجاح وسيتم الرد عليك في أقرب وقت ممكن.
        </p>

        <a href="/">
          <button className="bg-green-500 hover:bg-green-600 text-white font-medium py-3 px-6 rounded-lg transition duration-200 focus:outline-none focus:ring-2 focus:ring-green-300 focus:ring-opacity-50">
            العودة إلى الصفحة الرئيسية
          </button>
        </a>
      </div>
    </div>
  );
};

export default SuccessSubmission;