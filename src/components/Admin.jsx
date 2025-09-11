import React, { useEffect, useState } from "react";
import db from "../firebase"; // your firebase.js init file
import { collection, getDocs } from "firebase/firestore";

export default function AdminSubmissions() {
  const [submissions, setSubmissions] = useState([]);
  const [complaints, setComplaints] = useState([]);
  const [loading, setLoading] = useState(true);
  const [view, setView] = useState("submissions");

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        if (view === "submissions") {
          const querySnapshot = await getDocs(collection(db, "submissions"));
          const data = querySnapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
          setSubmissions(data);
        } else {
          // fetch complaints from 'complaints' collection
          const querySnapshot = await getDocs(collection(db, "complaints"));
          const data = querySnapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
          setComplaints(data);
        }
      } catch (error) {
        console.error("Error fetching data:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [view]);

  // small helper to render dynamic complaints table
  const renderDynamicTable = (items) => {
    if (!items || items.length === 0) {
      return (
        <div dir="rtl" className="text-center text-gray-400 py-10">
          لا توجد شكاوى.
        </div>
      );
    }

    // derive headers from first item keys (except id)
    const headers = Object.keys(items[0]).filter((k) => k !== "id");

    const arabicHeader = (key) => {
      const map = {
        name: "الاسم",
        email: "البريد الإلكتروني",
        phone: "الهاتف",
        subject: "الموضوع",
        message: "الرسالة",
        createdAt: "التاريخ",
      };
      return map[key] || key;
    };

    return (
      <div className="overflow-x-auto">
        <table className="min-w-full border border-gray-700 text-sm">
          <thead className="bg-gray-800 text-gray-200">
            <tr>
              {headers.map((h) => (
                <th key={h} className="px-4 py-2 border border-gray-700">
                  {arabicHeader(h)}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {items.map((item) => (
              <tr key={item.id} className="text-center odd:bg-gray-900 even:bg-gray-800 hover:bg-gray-700">
                {headers.map((h) => (
                  <td key={h} className="px-4 py-2 border border-gray-700 text-gray-200 text-right">
                    {String(item[h] ?? "")}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  };

  if (loading) {
    return (
      <div dir="rtl" className="flex justify-center items-center h-64 text-gray-300">
        جارٍ التحميل...
      </div>
    );
  }


  return (
    <div dir="rtl" className="p-6 bg-gray-900 min-h-screen rounded-2xl shadow-md">
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-xl font-bold text-gray-100">{view === "submissions" ? "إرساليات المستخدمين" : "شكاوى المستخدمين"}</h2>
        <div className="flex gap-2">
          <button
            onClick={() => setView("submissions")}
            className={`px-3 py-1 rounded ${view === "submissions" ? "bg-gray-700 text-gray-100" : "bg-gray-800 text-gray-300"}`}>
            الإرساليات
          </button>
          <button
            onClick={() => setView("complaints")}
            className={`px-3 py-1 rounded ${view === "complaints" ? "bg-gray-700 text-gray-100" : "bg-gray-800 text-gray-300"}`}>
            الشكاوى
          </button>
        </div>
      </div>

      {view === "submissions" ? (
        // existing submissions table
        submissions.length === 0 ? (
          <div dir="rtl" className="text-center text-gray-400 py-10">لا توجد إرسالات.</div>
        ) : (
          <div className="overflow-x-auto">
            <table className="min-w-full border border-gray-700 text-sm">
              <thead className="bg-gray-800 text-gray-200">
                <tr>
                  <th className="px-4 py-2 border border-gray-700">النوع</th>
                  <th className="px-4 py-2 border border-gray-700">الاسم</th>
                  <th className="px-4 py-2 border border-gray-700">البريد الإلكتروني</th>
                  <th className="px-4 py-2 border border-gray-700">الهاتف</th>
                  <th className="px-4 py-2 border border-gray-700">الجنسية</th>
                  <th className="px-4 py-2 border border-gray-700">اسم البنك</th>
                  <th className="px-4 py-2 border border-gray-700">رقم الحساب</th>
                  <th className="px-4 py-2 border border-gray-700">رقم الهوية</th>
                  <th className="px-4 py-2 border border-gray-700">العنوان</th>
                  <th className="px-4 py-2 border border-gray-700">التفاصيل</th>
                </tr>
              </thead>
              <tbody>
                {submissions.map((item) => (
                  <tr key={item.id} className="text-center odd:bg-gray-900 even:bg-gray-800 hover:bg-gray-700">
                    <td className="px-4 py-2 border border-gray-700 text-gray-200">{item.type}</td>
                    <td className="px-4 py-2 border border-gray-700 text-gray-200">{item.name}</td>
                    <td className="px-4 py-2 border border-gray-700 text-gray-200">{item.email}</td>
                    <td className="px-4 py-2 border border-gray-700 text-gray-200">{item.phone}</td>
                    <td className="px-4 py-2 border border-gray-700 text-gray-200">{item.nationality}</td>
                    <td className="px-4 py-2 border border-gray-700 text-gray-200">{item.bankName}</td>
                    <td className="px-4 py-2 border border-gray-700 text-gray-200">{item.bankNum}</td>
                    <td className="px-4 py-2 border border-gray-700 text-gray-200">{item.idNum}</td>
                    <td className="px-4 py-2 border border-gray-700 text-gray-200">{item.address}</td>
                    <td className="px-4 py-2 border border-gray-700 text-right text-gray-200">{item.explain}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )
      ) : (
        // complaints view
        renderDynamicTable(complaints)
      )}
    </div>
  );
}
