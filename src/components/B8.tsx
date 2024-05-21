import React, { useMemo, useState } from 'react'
import B8con from './B8con'
interface User {
    id:number
    userName:string
    email:string
    address:string
}
let users:User[] = [
    {
      id: 1,
      userName: "Nguyễn Văn Hung",
      email: "nvh@gmail.com",
      address: "Nghệ An",
    },
    {
      id: 2,
      userName: "Đặng Tiến Thành",
      email: "dtt@gmail.com",
      address: "Đà Nẵng",
    },
    {
      id: 3,
      userName: "Hồ Xuân Dũng",
      email: "hxd@gmail.com",
      address: "Cà Mau",
    },
];
export default function B8() {
    const [user,setUser] = useState<User[]>(users)

    const userList = useMemo(() => {
        return user.map((user) => (
          <B8con
            key={user.id}
            id={user.id}
            userName={user.userName}
            email={user.email}
            address={user.address}
          />
        ));
    }, [user]);
  return (
    <>
    <h2>Danh sách người dùng:</h2>
    {userList}
    </>
  )
}
