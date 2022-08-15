import React from 'react';
import AddProduct from '../components/products/AddProduct';

const AdminPage = () => {
  return (
    <div>
      <h2>Admin Panel</h2>
      <h3>If you are not an admin, please leave!</h3>
      <AddProduct />
    </div>
  )
}

export default AdminPage