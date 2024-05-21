import React, { useMemo, useState } from 'react'
interface User {
    id: number
    name:string
    age:number
}
let users:User[] = [
    {
    id:1,
    name: 'Chiến',
    age: 10
    },
    {
    id:2,
    name: 'Nhất',
    age:20
    },   
    {
    id:3,
    name: 'Nam',
    age: 19
    },
    {
    id:4,
    name: 'Hùng',
    age: 17
    }
]

export default function B2() {
    const [user,setUser] = useState<User[]>(users) 

    const filteredUsers = useMemo(() => {
        return users.filter(user => user.age > 18);
      }, [user]);
  return (
    <>
    <h3>Danh sách người dùng đã lọc:</h3>
    {filteredUsers.map(user => (
        <p key={user.id}>
        {user.name}, {user.age} tuổi.
        </p>
    ))}
    </>
  )
}
