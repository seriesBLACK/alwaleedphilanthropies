import { useState, useRef } from "react";

export default function ComplaintsForm({ dir = "rtl" }) {
  const [form, setForm] = useState({
    fullName: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });

  const [files, setFiles] = useState([]);
  const [submitting, setSubmitting] = useState(false);
  const [success, setSuccess] = useState(null);
  const [errors, setErrors] = useState({});

  const fileInputRef = useRef(null);

  const maxMessageLength = 2000;

  function validate() {
    const e = {};
    if (!form.fullName.trim()) e.fullName = "يرجى إدخال الاسم الكامل";
    if (!form.email.trim()) e.email = "البريد الإلكتروني مطلوب";
    else if (!/^\S+@\S+\.\S+$/.test(form.email)) e.email = "البريد الإلكتروني غير صالح";
    if (!form.subject.trim()) e.subject = "الموضوع مطلوب";
    if (!form.message.trim()) e.message = "يرجى إدخال الرسالة";
    if (form.message.length > maxMessageLength)
      e.message = `الرسالة محددة بعدد ${maxMessageLength} حرفًا`;
    setErrors(e);
    return Object.keys(e).length === 0;
  }

  async function handleSubmit(e) {
    e.preventDefault();
    if (!validate()) return;
    setSubmitting(true);
    setSuccess(null);

    try {

      const payload = {
        ...form,
        createdAt: new Date().toISOString(),
      };


      setSuccess(true);
      setForm({ fullName: "", email: "", phone: "", subject: "", message: "" });
      setFiles([]);
      if (fileInputRef.current) fileInputRef.current.value = null;
    } catch (err) {
      console.error(err);
      setSuccess(false);
    } finally {
      setSubmitting(false);
    }
  }

  function handleFileChange(e) {
    const selected = Array.from(e.target.files).slice(0, 5); // limit 5 files
    setFiles(selected);
  }

  return (
    <div dir={dir} className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-3xl">
        <div className="bg-white shadow-md rounded-2xl p-8">
          <div className="mb-6 text-center">
            <h2 className="text-2xl font-extrabold">تقديم شكوى / استفسار</h2>
            <p className="mt-2 text-sm text-gray-600">نحن نأخذ جميع الشكاوى على محمل الجد. يرجى تزويدنا بأكبر قدر ممكن من التفاصيل.</p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <label className="block">
                <span className="text-sm font-medium text-gray-700">الاسم الكامل</span>
                <input
                  aria-label="الاسم الكامل"
                  value={form.fullName}
                  onChange={(e) => setForm({ ...form, fullName: e.target.value })}
                  className={`mt-1 block w-full rounded-lg border ${errors.fullName ? 'border-red-500' : 'border-gray-300'} shadow-sm py-2 px-3 focus:outline-none focus:ring-2 focus:ring-indigo-300`}
                  placeholder="مثال: محمد أحمد"
                />
                {errors.fullName && <p className="mt-1 text-xs text-red-600">{errors.fullName}</p>}
              </label>

              <label className="block">
                <span className="text-sm font-medium text-gray-700">البريد الإلكتروني</span>
                <input
                  aria-label="البريد الإلكتروني"
                  value={form.email}
                  onChange={(e) => setForm({ ...form, email: e.target.value })}
                  className={`mt-1 block w-full rounded-lg border ${errors.email ? 'border-red-500' : 'border-gray-300'} shadow-sm py-2 px-3 focus:outline-none focus:ring-2 focus:ring-indigo-300`}
                  placeholder="name@example.com"
                />
                {errors.email && <p className="mt-1 text-xs text-red-600">{errors.email}</p>}
              </label>

              <label className="block">
                <span className="text-sm font-medium text-gray-700">الهاتف (اختياري)</span>
                <input
                  aria-label="الهاتف"
                  value={form.phone}
                  onChange={(e) => setForm({ ...form, phone: e.target.value })}
                  className="mt-1 block w-full rounded-lg border border-gray-300 shadow-sm py-2 px-3 focus:outline-none focus:ring-2 focus:ring-indigo-300"
                  placeholder="+966 5XXXXXXXX"
                />
              </label>

              <label className="block">
                <span className="text-sm font-medium text-gray-700">الموضوع</span>
                <input
                  aria-label="الموضوع"
                  value={form.subject}
                  onChange={(e) => setForm({ ...form, subject: e.target.value })}
                  className={`mt-1 block w-full rounded-lg border ${errors.subject ? 'border-red-500' : 'border-gray-300'} shadow-sm py-2 px-3 focus:outline-none focus:ring-2 focus:ring-indigo-300`}
                  placeholder="موضوع الشكوى"
                />
                {errors.subject && <p className="mt-1 text-xs text-red-600">{errors.subject}</p>}
              </label>
            </div>

            <div>
              <label className="block">
                <span className="text-sm font-medium text-gray-700">الرسالة</span>
                <textarea
                  aria-label="الرسالة"
                  value={form.message}
                  onChange={(e) => setForm({ ...form, message: e.target.value })}
                  rows={6}
                  maxLength={maxMessageLength}
                  className={`mt-1 block w-full rounded-lg border ${errors.message ? 'border-red-500' : 'border-gray-300'} shadow-sm py-2 px-3 focus:outline-none focus:ring-2 focus:ring-indigo-300`}
                  placeholder="يرجى وصف تفاصيل الشكوى..."
                />
                <div className="flex items-center justify-between mt-1">
                  {errors.message ? (
                    <p className="text-xs text-red-600">{errors.message}</p>
                  ) : (
                    <p className="text-xs text-gray-500">{form.message.length}/{maxMessageLength} محارف</p>
                  )}
                </div>
              </label>
            </div>

            <div>
              <label className="block">
                <span className="text-sm font-medium text-gray-700">إرفاق مرفقات (اختياري، حتى 5 ملفات)</span>
                <input
                  ref={fileInputRef}
                  aria-label="إرفاق ملفات"
                  type="file"
                  multiple
                  onChange={handleFileChange}
                  className="mt-1 block w-full text-sm text-gray-600"
                />
                {files.length > 0 && (
                  <ul className="mt-2 space-y-1">
                    {files.map((f, i) => (
                      <li key={i} className="text-sm text-gray-700 flex items-center justify-between">
                        <span className="truncate">{f.name}</span>
                        <button
                          type="button"
                          onClick={() => setFiles(files.filter((_, idx) => idx !== i))}
                          className="ml-4 text-xs underline"
                        >
                          إزالة
                        </button>
                      </li>
                    ))}
                  </ul>
                )}
              </label>
            </div>

            <div className="pt-4 border-t">
              <div className="flex items-center justify-between gap-4">
                <div className="text-sm text-gray-600">
                  <p className="font-medium">السرية</p>
                  <p className="mt-1">سنقوم بمراجعة الشكوى والرد وفقًا لإجراءاتنا لمعالجة الشكاوى.</p>
                </div>

                <div className="flex items-center gap-2">
                  <button
                    type="submit"
                    disabled={submitting}
                    className="inline-flex items-center justify-center rounded-md bg-indigo-600 px-4 py-2 text-white font-semibold shadow-sm hover:bg-indigo-700 disabled:opacity-60"
                  >
                    {submitting ? (
                      <svg className="animate-spin h-5 w-5" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v4a4 4 0 00-4 4H4z"></path>
                      </svg>
                    ) : (
                      'إرسال'
                    )}
                  </button>
                </div>
              </div>

              {success === true && (
                <div className="mt-4 rounded-md flex flex-col gap-3 items-center bg-green-50 p-3 text-sm text-green-800">
                  <p>شكرًا لك — تم إرسال شكواك.</p>
                  <a href="/">
                    <button type="button" className="bg-green-500 hover:bg-green-600 text-white font-medium py-3 px-6 rounded-lg transition duration-200 focus:outline-none focus:ring-2 focus:ring-green-300 focus:ring-opacity-50">
                      العودة إلى الصفحة الرئيسية
                    </button>
                  </a>
                </div>
              )}
              {success === false && (
                <div className="mt-4 rounded-md bg-red-50 p-3 text-sm text-red-800">حدث خطأ أثناء إرسال الشكوى. يرجى المحاولة لاحقًا.</div>
              )}
            </div>
          </form>
        </div>

        <div className="mt-6 text-center text-xs text-gray-500">
          بإرسال النموذج، فإنك توافق على الشروط وسياسة التعامل مع الشكاوى.
        </div>
      </div>
    </div>
  );
}
