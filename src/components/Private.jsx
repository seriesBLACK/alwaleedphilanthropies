import { useEffect, useState } from "react";
import AdminSubmissions from "../pages/Admin";


export default function PasswordGate() {
  const [vervied, setvervied] = useState(false);


  useEffect(() => {
    const storedPassword = typeof window !== "undefined" ? localStorage.getItem("adminAuth") : null;
    if (storedPassword) {
      setvervied(true)
    }
  }, [])

  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    const savedPassword = "admin";

    if (password === savedPassword) {
      localStorage.setItem("adminAuth", savedPassword);
      setError("");
      setvervied(true);
    } else {
      setError("Incorrect password. Try again.");
    }
  };

  return (
    <>
      {vervied ? <AdminSubmissions /> :
        <div className="h-screen flex items-center justify-center bg-gray-100">
          <form
            onSubmit={handleSubmit}
            className="bg-white p-6 rounded-2xl shadow-md w-80 text-center"
          >
            <h1 className="text-xl font-semibold mb-4">Enter Admin Password</h1>
            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full p-2 border rounded-lg mb-3"
            />
            {error && <p className="text-red-500 text-sm mb-2">{error}</p>}
            <button
              type="submit"
              className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700"
            >
              Login
            </button>
          </form>
        </div>
      }
    </>
  );
}
