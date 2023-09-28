import { useState, useEffect } from "react";

const ThreeUsers = () => {
  const [ users, setUsers ] = useState([]);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await fetch('https://randomuser.me/api/?results=3');
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const data = await response.json();
        console.log(data)
        setUsers(data);
      } catch (error) {
        console.error('Error fetching users:', error);
      }
    };
  
    fetchUsers();
  }, []);

  return (
    <div>
      {users.results && users.results.map(user =>
        <>
          <p>Name: {user.name.first}</p>
          <p>Last Name: {user.name.last}</p>
          <p>Email: {user.email}</p>
        </>
      )}
    </div>
  );
};

export { ThreeUsers };