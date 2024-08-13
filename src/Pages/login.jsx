import React, { useState , useEffect } from "react";
import { useNavigate } from 'react-router-dom' ; 
const LoginPage = () => {
  const navigate = useNavigate();
  const [data , setdata] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3001/api/users") 
     .then(response => response.json()) 
     .then(setdata => data ) 
     .catch(error => console.error("there was an error retrieving data"))
  } ,[]);

  const Loginfunc = async (event) =>{
    event.preventDefault();
  
    const email = event.target.email.value;
    const password = event.target.password.value;
  
    try{
      const response = await fetch("http://localhost:3001/api/users" , {
        method:"put",
        headers: {
          "content-type" : "application/json"
        },
        body: JSON.stringify({email , password})
      })
    const result = await response.json();
  
    if(response.ok){
      navigate("/teacher");
      console.log("login confirmed")
    }else{
      console.error(result.issue ||"invalid password or id");
    }
    }catch(error){
      console.error("there was an error loggin in" , error);
    }
  }

  return (
    <>
    <section
    className="min-h-screen flex py-44 justify-center bg-gray-100"
    style={{
      backgroundImage:`url('/images/Ajeenkya_DY_Patil_SOE_bg.png')`,
      backgroundSize: `cover`,
      backgroundPosition: `center`
    }}
    >
      <div className='max-w-md w-full bg-white p-8 rounded-lg shadow-lg'>
        <h2 className="text-2xl font-bold mb-6 text-center">Faculty Login</h2>
        <form onSubmit={Loginfunc}>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
              Email
            </label>
            <input
            id="email"
            name="email"
            type="email" 
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            required
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2 ">
              Password
            </label>
            <input
            id="password"
            type="password"
            name="password"
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            required
            />
          </div>
          <button
           type="submit"
           className="w-full bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
          >
          Login
          </button>
        </form>
      </div>
    </section>
    </>
  );
};

export default LoginPage;
