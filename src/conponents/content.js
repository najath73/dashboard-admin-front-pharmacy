import React from 'react';
import { Box, Toolbar, Typography } from '@mui/material';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import AddProductForm from './addProductForm';
import AddPharmacyForm from './addPharmacyForm';

const ContentWrapper =() => {
  return (  
    <AddPharmacyForm/>
  );
}

export default ContentWrapper;
