import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import LocalPharmacyIcon from '@mui/icons-material/LocalPharmacy';
import InventoryIcon from '@mui/icons-material/Inventory';
import PeopleIcon from '@mui/icons-material/People';
import Collapse from '@mui/material/Collapse';
import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';

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
      <ListItem 
        button 
        onClick={handlePharmaciesClick} 
      >
        <ListItemIcon sx={{ minWidth: '30px' }}>
          <LocalPharmacyIcon fontSize="small" />
        </ListItemIcon>
        <ListItemText primary="Pharmacies" sx={{ fontSize: '0.8rem', fontWeight: 300 }}/>
        {openPharmacies ? <ExpandLess /> : <ExpandMore />}
      </ListItem>
      <Collapse in={openPharmacies} timeout="auto" unmountOnExit>
        <List component="div" disablePadding>
          <ListItem 
            button 
            sx={{ pl: 4, py: 0.5, fontSize: '0.8rem', fontWeight: 300 }} // Taille et poids réduits
            onClick={() => handleNavigation('/add-pharmacy')}
          >
            <ListItemText primary="Ajout d'une pharmacie" />
          </ListItem>
          <ListItem 
            button 
            sx={{ pl: 4, py: 0.5, fontSize: '0.8rem', fontWeight: 300 }} // Taille et poids réduits
            onClick={() => handleNavigation('/pharmacy-list')}
          >
            <ListItemText primary="Liste des pharmacies" />
          </ListItem>
        </List>
      </Collapse>

      <ListItem 
        button 
        onClick={handleProductsClick} 
        sx={{ py: 1, fontSize: '0.9rem', fontWeight: 300 }} // Taille et poids réduits
      >
        <ListItemIcon sx={{ minWidth: '30px' }}>
          <InventoryIcon fontSize="small" />
        </ListItemIcon>
        <ListItemText primary="Produits" />
        {openProducts ? <ExpandLess /> : <ExpandMore />}
      </ListItem>
      <Collapse in={openProducts} timeout="auto" unmountOnExit>
        <List component="div" disablePadding>
          <ListItem 
            button 
            sx={{ pl: 4, py: 0.5, fontSize: '0.8rem', fontWeight: 300 }} // Taille et poids réduits
            onClick={() => handleNavigation('/add-product')}
          >
            <ListItemText primary="Ajout d'un produit" />
          </ListItem>
          <ListItem 
            button 
            sx={{ pl: 4, py: 0.5, fontSize: '0.8rem', fontWeight: 300 }} // Taille et poids réduits
            onClick={() => handleNavigation('/product-list')}
          >
            <ListItemText primary="Liste des produits" />
          </ListItem>
        </List>
      </Collapse>

      <ListItem 
        button 
        onClick={handleUsersClick} 
        sx={{ py: 1, fontSize: '0.9rem', fontWeight: 300 }} // Taille et poids réduits
      >
        <ListItemIcon sx={{ minWidth: '30px' }}>
          <PeopleIcon fontSize="small" />
        </ListItemIcon>
        <ListItemText primary="Utilisateurs" />
        {openUsers ? <ExpandLess /> : <ExpandMore />}
      </ListItem>
      <Collapse in={openUsers} timeout="auto" unmountOnExit>
        <List component="div" disablePadding>
          <ListItem 
            button 
            sx={{ pl: 4, py: 0.5, fontSize: '0.8rem', fontWeight: 300 }} // Taille et poids réduits
            onClick={() => handleNavigation('/add-admin')}
          >
            <ListItemText primary="Ajout d'un utilisateur" />
          </ListItem>
          <ListItem 
            button 
            sx={{ pl: 4, py: 0.5, fontSize: '0.8rem', fontWeight: 300 }} // Taille et poids réduits
            onClick={() => handleNavigation('/user-list')}
          >
            <ListItemText primary="Liste des utilisateurs" />
          </ListItem>
        </List>
      </Collapse>
    </List>
  );
}

export default SidebarMenu;
