import Users from "./Users";
import Admin from "./Admin";
import { useState } from "react";
const SecondTask = () => {
  const [userData, setUserData] = useState(false);
  const [adminData, setAdminData] = useState(false);

  const users = [
    { id: 1, name: "Virat", age: 18, gender: "M", emailId: "virat@gmail.com" },
    {
      id: 2,
      name: "Sachin",
      age: 24,
      gender: "M",
      emailId: "sachin@gmail.com",
    },
    { id: 3, name: "Messi", age: 30, gender: "M", emailId: "messi@gmail.com" },
    {
      id: 4,
      name: "Sindhu",
      age: 35,
      gender: "F",
      emailId: "sindhu@gmail.com",
    },
    {
      id: 5,
      name: "Ronaldo",
      age: 40,
      gender: "M",
      emailId: "ronaldo@gmail.com",
    },
  ];
  const admins = [
    {
      id: 1,
      name: "Rajesh",
      adminEmailId: "rajesh@gmail.com",
      password: "raj@123",
    },
    {
      id: 2,
      name: "Pradeep",
      adminEmailId: "pradep@gmail.com",
      password: "pra@123",
    },
  ];

  const showUsers = () => setUserData(true);
  const showAdmins = () => setAdminData(true);
  return (
    <div>
      {userData && <Users userDetails={users} />}
      <br />
      {adminData && <Admin adminDetails={admins} />}

      <button onClick={showUsers} className="move">
        Show Users
      </button>
      <button onClick={showAdmins} className="move">
        Show Admins
      </button>
    </div>
  );
};
export default SecondTask;
