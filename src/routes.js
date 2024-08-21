import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import LoginForm from './pages/loginForm';
import AddProductInPharmacyForm from './conponents/addProductPharmacy'
import DashboardAdmin from './pages/dashboardAdmin'
import AddUserForm from './conponents/addUserForm'
import ProdutListPage from './pages/productListPage'
import PharmacyListPage from './pages/pharmacyListPage'
import AddProductPage from './pages/addProductPage'
import AddPharmacyPage from './pages/addPharmacyPage'
import UpdatePharmacyPage from './pages/updatePharmacyPage'
import UpdateProductPage from './pages/updateProductPage'
import UserListPage from './pages/userListPage'
import AddUserToPharmacyPage from './pages/addUserPage'
import PharmacyDetailsPage from './pages/pharmacyDetailsPage'

const AppRoutes = ()=> {
  return (

    <Routes>
      <Route path="/add-user" element={<AddUserForm />} />
      <Route path="/login" element={<LoginForm />} />
      <Route path="/dashboard-admin" element={<DashboardAdmin />} />
      <Route path="/add-user-to-pharmacy/:id" element={<AddUserToPharmacyPage />} />
      <Route path="/update-pharmacy/:id" element={<UpdatePharmacyPage />} />
      <Route path="/update-product/:id" element={<UpdateProductPage />} />
      <Route path="/pharmacy-details/:id" element={<PharmacyDetailsPage />} />
      <Route path="/product-list" element={<ProdutListPage />} />
      <Route path="/pharmacy-list" element={<PharmacyListPage />} />
      <Route path="/user-list" element={<UserListPage />} />







      <Route path="/add-product" element={<AddProductPage />} />
      <Route path="/add-pharmacy" element={<AddPharmacyPage />} />
      <Route path="/add-product-to-pharmacy" element={<AddProductInPharmacyForm />} />




    </Routes>

  );
}

export default AppRoutes;