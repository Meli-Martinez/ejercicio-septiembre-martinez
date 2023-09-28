import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

import styles from "./three-users.module.scss";

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

  let i = 1;
  
  return (
    <div className={styles.container}>
      {users.results && users.results.map(user =>
        <>
        <h2>User number: {i++}</h2>
          <ul className={styles.infoContainer}>
            <li>
              <p>Name:</p> 
              {user.name.first}
            </li>
            <li>
              <p>Last Name:</p> 
              {user.name.last}
            </li>
            <li>
              <p>Email:</p> 
              {user.email}
            </li>
            <li>
              <p>City:</p> 
              {user.location.country}
            </li>
            <li>
              <p>Photo:</p> 
              <img src={user.picture.medium} alt={`${user.name.first}`}/>
            </li>
            <li>
              <p>Phone:</p> 
              {user.phone}
            </li>
          </ul>
        </>
      )}
      <Link to="/" className={styles.link}>Vovler</Link>
    </div>
  );
};

export { ThreeUsers };