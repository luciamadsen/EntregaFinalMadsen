import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, MenuItem, Button } from '@mui/material';
import CartWidget from './CartWidget';


const Navbar = () => {
  const [anchorEl, setAnchorEl] = useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <nav className="navbar">
      <Link to="/" className="logo">
        <h1>BAYSIDE TEAM</h1>
        
      </Link>
      <ul className="menu">

        <li>
          <Link className="menu-link" to="/nosotros">
            Nosotros
          </Link>
        </li>

        <li>
          <Link className="menu-link" to="/productos/equipos">
            Equipos
          </Link>
        </li>
        <li>
          <Link className="menu-link" to="/contacto">
            Contacto
          </Link>
        </li>

        <li>
          <Button
            className="menu-link"
            onClick={handleClick}
          >
            Productos
          </Button>
          <Menu
            anchorEl={anchorEl}
            open={Boolean(anchorEl)}
            onClose={handleClose}
          >
            <MenuItem>
              <Link to="/productos/indumentaria" className="submenu-link">
                Indumentaria
              </Link>
            </MenuItem>
            <MenuItem>
              <Link to="/productos/accesorios" className="submenu-link">
                Accesorios
              </Link>
            </MenuItem>
          </Menu>
        </li>
        <li>
          <CartWidget />
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;


