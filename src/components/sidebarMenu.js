import React, { useState } from 'react';
import { List, ListItem, ListItemIcon, ListItemText, Collapse } from '@mui/material';
import LocalPharmacyIcon from '@mui/icons-material/LocalPharmacy';
import InventoryIcon from '@mui/icons-material/Inventory';
import PeopleIcon from '@mui/icons-material/People';
import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';
import { useNavigate } from 'react-router-dom';

const SidebarMenu = () => {
  const [openPharmacies, setOpenPharmacies] = useState(false);
  const [openProducts, setOpenProducts] = useState(false);
  const [openUsers, setOpenUsers] = useState(false);
  const navigate = useNavigate();

  const handlePharmaciesClick = () => {
    setOpenPharmacies(!openPharmacies);
  };

  const handleProductsClick = () => {
    setOpenProducts(!openProducts);
  };

  const handleUsersClick = () => {
    setOpenUsers(!openUsers);
  };

  const handleNavigation = (path) => {
    navigate(path);
  };

  return (
    <List>
      {/* Pharmacies */}
      <ListItem button onClick={handlePharmaciesClick}>
        <ListItemIcon>
          <LocalPharmacyIcon sx={{ color: '#4CAF50' }} />
        </ListItemIcon>
        <ListItemText primary="Pharmacies" sx={{ color: '#fff' }} />
        {openPharmacies ? <ExpandLess /> : <ExpandMore />}
      </ListItem>
      <Collapse in={openPharmacies} timeout="auto" unmountOnExit>
        <List component="div" disablePadding>
          <ListItem button sx={{ pl: 4 }} onClick={() => handleNavigation('/add-pharmacy')}>
            <ListItemText primary="Ajout d'une pharmacie" sx={{ color: '#fff' }} />
          </ListItem>
          <ListItem button sx={{ pl: 4 }} onClick={() => handleNavigation('/pharmacy-list')}>
            <ListItemText primary="Liste des pharmacies" sx={{ color: '#fff' }} />
          </ListItem>
        </List>
      </Collapse>

      {/* Produits */}
      <ListItem button onClick={handleProductsClick}>
        <ListItemIcon>
          <InventoryIcon sx={{ color: '#4CAF50' }} />
        </ListItemIcon>
        <ListItemText primary="Produits" sx={{ color: '#fff' }} />
        {openProducts ? <ExpandLess /> : <ExpandMore />}
      </ListItem>
      <Collapse in={openProducts} timeout="auto" unmountOnExit>
        <List component="div" disablePadding>
          <ListItem button sx={{ pl: 4 }} onClick={() => handleNavigation('/add-product')}>
            <ListItemText primary="Ajout d'un produit" sx={{ color: '#fff' }} />
          </ListItem>
          <ListItem button sx={{ pl: 4 }} onClick={() => handleNavigation('/product-list')}>
            <ListItemText primary="Liste des produits" sx={{ color: '#fff' }} />
          </ListItem>
        </List>
      </Collapse>

      {/* Utilisateurs */}
      <ListItem button onClick={handleUsersClick}>
        <ListItemIcon>
          <PeopleIcon sx={{ color: '#4CAF50' }} />
        </ListItemIcon>
        <ListItemText primary="Utilisateurs" sx={{ color: '#fff' }} />
        {openUsers ? <ExpandLess /> : <ExpandMore />}
      </ListItem>
      <Collapse in={openUsers} timeout="auto" unmountOnExit>
        <List component="div" disablePadding>
          <ListItem button sx={{ pl: 4 }} onClick={() => handleNavigation('/add-user')}>
            <ListItemText primary="Ajout d'un utilisateur" sx={{ color: '#fff' }} />
          </ListItem>
          <ListItem button sx={{ pl: 4 }} onClick={() => handleNavigation('/user-list')}>
            <ListItemText primary="Liste des utilisateurs" sx={{ color: '#fff' }} />
          </ListItem>
        </List>
      </Collapse>
    </List>
  );
};

export default SidebarMenu;
