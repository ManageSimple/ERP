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
  const handleLogin = (event) => {
    event.preventDefault();
    // Handle login logic here
  };

  return (
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
  );
};

export default FacultyLogin;
