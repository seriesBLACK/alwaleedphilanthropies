const SuccessSubmission = () => {

  return (
    <div className="flex flex-col gap-5 items-center justify-center min-h-screen bg-[#013a19] text-white p-4">
      <div className="flex w-full h-[120px] items-center justify-center gap-7">
        <img
          className=" h-[120px]"
          src="/palm-logo.png"
          alt="شعار المؤسسة"
        />

        <img
          className="w-[137px] h-[60px]"
          src="/logo.png"
          alt="شعار المؤسسة"
        />

      </div>
      <div className="rounded-lg p-8 max-w-md w-full text-center border">
        {/* أيقونة النجاح */}
        <div className="flex flex-col justify-center mb-6 items-center">
          <h1 className="text-3xl font-bold mb-4">
            تم أستلام طلبك بنجاح
          </h1>
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

        {/* رسالة التأكيد */}
        <p className="mb-8 text-lg">
          عزيزي المستفيد <br />
          لقد تم استلام معلوماتك بنجاح وسيتم الرد عليك في أقرب وقت ممكن.
        </p>
        <p className="mb-8 text-lg">
          تم ارسال رسالة التاكيد الى بريدك الالكتروني<br />
          الرجاء التحقق من البريد الالكتروني الآن.
          لتتبع الطلب تواصل معنا عبر الواتس اب
        </p>

        <div className="flex justify-center gap-5">

          <a href="mailto:alkhyrytm108@gmail.com" target="_blank" rel="noopener noreferrer" aria-label="Gmail" className="bg-gray-500 rounded-2xl p-3">
            <svg className="h-13 w-13 text-white" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" role="img">
              <rect x="2" y="5" width="20" height="14" rx="2" stroke="currentColor" strokeWidth="2" />
              <path d="M3 7.5l8.5 6L20 7.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </a>

          <a href="https://wa.me/966545157247" target="_blank" rel="noopener noreferrer" aria-label="WhatsApp" className="bg-gray-500 rounded-2xl p-3">
            <svg className="h-13 w-13 text-green-400" xmlns="http://www.w3.org/2000/svg" width="34" height="34" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none" /><path d="M3 21l1.65 -3.8a9 9 0 1 1 3.4 2.9l-5.05 .9" /><path d="M9 10a.5 .5 0 0 0 1 0v-1a.5 .5 0 0 0 -1 0v1a5 5 0 0 0 5 5h1a.5 .5 0 0 0 0 -1h-1a.5 .5 0 0 0 0 1" /></svg>
          </a>
        </div>
      </div>

      <a href="/" className="">
        <button className="bg-green-500 hover:bg-green-600 text-white font-medium py-3 px-6 rounded-lg transition duration-200 focus:outline-none focus:ring-2 focus:ring-green-300 focus:ring-opacity-50">
          العودة إلى الصفحة الرئيسية
        </button>
      </a>
    </div>
  );
};

export default SuccessSubmission;