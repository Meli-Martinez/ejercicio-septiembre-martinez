import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

const UsersCountry = () => {
  const { idPais } = useParams();
  const [ users, setUsers ] = useState([]);

  useEffect(() => {
    fetch(`https://randomuser.me/api/?${idPais}`)
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

export { UsersCountry };