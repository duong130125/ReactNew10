import React, { memo } from "react";

interface User {
  id: number;
  userName: string;
  email: string;
  address: string;
}

const B8con = memo(({ id, userName, email, address }: User) => {
  return (
    <div>
        <p>ID: {id}</p>
        <p>UserName: {userName}</p>
        <p>Email: {email}</p>
        <p>Address: {address}</p>
    </div>
  );
});

export default B8con;