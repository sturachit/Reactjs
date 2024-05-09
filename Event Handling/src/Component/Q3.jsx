//3)Write a program to perform conditional rendering 
import React, { useState } from "react";

function Q3() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLogin = () => {
    setIsLoggedIn(true);
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
  };

  return (
    <div>
      {isLoggedIn ? (
        <div>
          <h2>Welcome To Login Page</h2>
          <button onClick={handleLogout}>Logout</button>
        </div>
      ) : (
        <div>
          <h2>Please Login</h2>
          <button onClick={handleLogin}>Login</button>
        </div>
      )}
    </div>
  );
}

export default Q3;