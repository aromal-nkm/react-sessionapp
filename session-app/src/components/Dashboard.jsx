import React from 'react'

export const Dashboard = () => {
    const user =localStorage.getItem("username");
  return (
    <>
    <div>Dashboard</div>
    <div>welcome {user}</div>
    
    </>
  )
}
export default Dashboard