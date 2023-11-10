import React from 'react';


const UserLoginComponent = () => {

    const userLoginData = [
        {
          id: 1,
          username: "john_doe",
          loginTime: "2023-11-01 08:30:00",
        },
        {
          id: 2,
          username: "jane_smith",
          loginTime: "2023-11-02 09:15:00",
        },
        {
          id: 3,
          username: "alex_johnson",
          loginTime: "2023-11-03 10:00:00",
        },
      
      ];


  return (
    <div>
      <h2>User Login Data</h2>
      <ul>
        {userLoginData.map((user) => (
          <li key={user.id}>
            Username: {user.username} | Login Time: {user.loginTime}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default UserLoginComponent;
