import React from 'react';

const LoginCard = ({ role, photo, onSubmit }) => {
  return (
    <div className="w-56 mx-auto bg-white shadow-lg rounded-lg overflow-hidden mb-8 ">
        <a href='#' >
      <div className="flex items-center justify-center mt-6 hover:border-black">
        <img 
          className="w-24 h-24 object-cover rounded-full border-2 border-gray-500" 
          src={photo} 
          alt={`${role} photo`} 
        />
      </div>
      <div className="px-6 py-4">
        <h2 className="text-center text-2xl font-semibold text-gray-800">{role}</h2> 
      </div>
      </a>
    </div>
  );
};

const FacultyLogin = () => {
  const handleLogin = async (event) => {
    event.preventDefault();
    try{
      const checker = await fetch("http://localhost:3001/api/users", {

      })
    }catch(error){

    }
  };

const handleSubmit = () => {

}
  return (
    <>
    <div className="flex flex-wrap justify-center gap-6 mt-24 mb-56">
      <LoginCard 
        role="Head of Department" 
        photo="/images/faculty_login.png" 
        onSubmit={handleLogin} 
      />
      <LoginCard 
        role="Teacher" 
        photo="/images/faculty_login.png" 
        onSubmit={handleLogin} 
      />
      <LoginCard 
        role="Faculty" 
        photo="/images/faculty_login.png" 
        onSubmit={handleLogin} 
      />
    </div>
    </>
  );
};

export default FacultyLogin;








// import { useEffect, useState } from "react";

// function FacultyLogin(){
    
//   const [data , setData] = useState(null);
//   useEffect(()=>{
//     fetch("https://jsonplaceholder.typicode.com/users")
//     .then((response) => response.json())
//     .then((data) => setData(data))
//     .catch((error) => console.error("there was an error in getting data", error))
//   },[]);
//     return(
//         <>
//           <div>
//               {data ? (
//                 <ul>
//                   {data.map((user)=>(
//                     <li key={user.id}>{user.name}</li>
//                   ))}
//                 </ul>
//               ):(
//                 <p>user not found</p>
//               )}  
//           </div>
//         </>
//     )
// }

// export default FacultyLogin;
