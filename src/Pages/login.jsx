import React, { useState } from "react";
// import { useNavigate } from "react-router-dom";

const LoginPage = () => {
  // const [collegeName, setCollegeName] = useState("");
  // const [category, setCategory] = useState("Student");
  // const [showSignup, setShowSignup] = useState(false);
  // const [error, setError] = useState(""); // State to hold error messages
  // const navigate = useNavigate(); // Use the useNavigate hook

  // const handleSubmit = async e => {
  //   e.preventDefault();

  //   try {
  //     const response = await fetch("http://localhost:3001/login", {
  //       method: "POST",
  //       headers: {
  //         "Content-Type": "application/json"
  //       },
  //       body: JSON.stringify({ collegeName, category })
  //     });

  //     const data = await response.json();

  //     if (!response.ok) {
  //       setError(data.error || "An error occurred during login");
  //       return;
  //     }

  //     console.log("Login successful:", data);

  //     // Redirect to the home page
  //     navigate("/"); // Adjust the path according to your route setup
  //   } catch (error) {
  //     console.error("There was an error!", error);
  //     setError("An error occurred during login"); // General error message
  //   }
  // };

  const [role, setRole] = useState("");

  const handleLogin = e => {
    e.preventDefault();
    // Implement login logic based on role
    console.log(`Logging in as ${role}`);
  };

  return (
    <>
      <section
        className="min-h-screen flex py-24 justify-center bg-gray-100"
        style={{
          backgroundImage: `url('/images/Ajeenkya_DY_Patil_SOE_bg.png')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="max-w-md w-full bg-white p-8 rounded-lg shadow-lg">
          <h2 className="text-2xl font-bold mb-6 text-center">ERP System Login</h2>
          <form onSubmit={handleLogin}>
            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
                Email
              </label>
              <input
                id="email"
                type="email"
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                required
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="password">
                Password
              </label>
              <input
                id="password"
                type="password"
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                required
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2">Role</label>
              <select
                className="block appearance-none w-full bg-white border border-gray-300 hover:border-gray-500 px-4 py-2 pr-8 rounded shadow leading-tight focus:outline-none focus:shadow-outline"
                value={role}
                onChange={(e) => setRole(e.target.value)}
                required
              >
                <option value="" disabled>
                  Select Role
                </option>
                <option value="student">Student</option>
                <option value="admin">Admin</option>
                <option value="teacher">Teacher</option>
              </select>
            </div>
            <div className="mb-6">
              <button
                type="submit"
                className="w-full bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              >
                Login
              </button>
            </div>
          </form>
        </div>
      </section>
    </>
  );
};


export default LoginPage;
