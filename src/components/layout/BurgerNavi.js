import { NavLink } from 'react-router-dom';
import React from 'react';
import { slide as Menu } from 'react-burger-menu';
import '../../dist/css/header.css';

class BurgerNavi extends React.Component {
  showSettings (event) {
    event.preventDefault();
  }

  render () {
    return (
        <Menu right>
          <NavLink to={ "/" }>Home</NavLink>
          <NavLink to={ "/movies" }>Movies</NavLink>
          <NavLink to={ "/tvshows" }>Tv Shows</NavLink>
          <NavLink to={ "/contacts" }>Contacts</NavLink>
          <NavLink to={ "/about" }>About</NavLink>
        </Menu>
    );
  }
}

export default BurgerNavi;
