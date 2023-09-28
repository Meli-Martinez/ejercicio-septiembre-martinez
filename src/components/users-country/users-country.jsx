import { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";

import styles from "./users-country.module.scss";

const UsersCountry = () => {
  const { idPais } = useParams();
  const [ users, setUsers ] = useState([]);

  useEffect(() => {
    fetch(`https://randomuser.me/api/?nat=${idPais}`)
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.json();
      })
      .then((data) => {
        setUsers(data || []);
      })
      .catch((error) => {
        console.error("Error fetching users details:", error);
      });
  }, [idPais]);

  return (
    <div className={styles.container}>
      {users.results && users.results.map(user =>
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
            <p>Country:</p> 
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
      )}
      <Link to="/" className={styles.link}>Vovler</Link>
    </div>
  );
};

export { UsersCountry };