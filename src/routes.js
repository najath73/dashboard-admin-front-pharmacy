import React from 'react';
import { Route, Routes, Navigate} from 'react-router-dom';

import LoginForm from './conponents/loginForm';
import AddProductInPharmacyForm from './conponents/addProductPharmacy'
import DashboardAdmin from './pages/dashboardAdmin'
import AddUserForm from './conponents/addUserToPharmacyForm'
import ProdutListPage from './pages/productListPage'
import PharmacyListPage from './pages/pharmacyListPage'
import AddProductPage from './pages/addProductPage'
import AddPharmacyPage from './pages/addPharmacyPage'
import UpdatePharmacyPage from './pages/updatePharmacyPage'
import UpdateProductPage from './pages/updateProductPage'
import UserListPage from './pages/userListPage'
import AddUserToPharmacyPage from './pages/addUserPage'
import PharmacyDetailsPage from './pages/pharmacyDetailsPage'
import AddAdminPage from './pages/addAdminPage'
import PrivateRoute from './conponents/privateRoute';

const AppRoutes = ()=> {
  return (

    <Routes>
      {/* Route publique pour la page de login */}
      <Route path="/login" element={<LoginForm />} />
      {/* Routes protégées */}
      <Route path="/add-user" element={<PrivateRoute element={<AddUserForm />} />} />
      <Route path="/dashboard-admin" element={<PrivateRoute element={<DashboardAdmin />} />} />
      <Route path="/" element={<PrivateRoute element={<DashboardAdmin />} />} />
      <Route path="/add-user-to-pharmacy/:id" element={<PrivateRoute element={<AddUserToPharmacyPage />} />} />
      <Route path="/update-pharmacy/:id" element={<PrivateRoute element={<UpdatePharmacyPage />} />} />
      <Route path="/update-product/:id" element={<PrivateRoute element={<UpdateProductPage />} />} />
      <Route path="/pharmacy-details/:id" element={<PrivateRoute element={<PharmacyDetailsPage />} />} />
      <Route path="/product-list" element={<PrivateRoute element={<ProdutListPage />} />} />
      <Route path="/pharmacy-list" element={<PrivateRoute element={<PharmacyListPage />} />} />
      <Route path="/user-list" element={<PrivateRoute element={<UserListPage />} />} />
      <Route path="/add-admin" element={<PrivateRoute element={<AddAdminPage />} />} />








      {/* Nouvelles routes protégées */}
      <Route path="/add-product" element={<PrivateRoute element={<AddProductPage />} />} />
      <Route path="/add-pharmacy" element={<PrivateRoute element={<AddPharmacyPage />} />} />
      <Route path="/add-product-to-pharmacy" element={<PrivateRoute element={<AddProductInPharmacyForm />} />} />

      {/* Redirection de la racine vers le dashboard par défaut */}
       <Route path="/" element={<Navigate to="/dashboard-admin" />} />




    </Routes>

  );
}

export default AppRoutes;