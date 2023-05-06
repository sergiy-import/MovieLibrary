import HeaderNavi from '../navigation/HeaderNavi';
import Logo from './Logo';
import '../../dist/css/header.css';
import BurgerNavi from './BurgerNavi';
import React from 'react';
import { slide as Menu } from 'react-burger-menu';



let primaryNavi = {
  links: [
    {
      link: "Home",
      path: "/"
    },
    {
      link: "Movies",
      path: "/movies"
    },
    {
      link: "Tv Shows",
      path: "/tvshows"
    },
    {
      link: "Contacts",
      path: "/contacts"
    },
    {
      link: "About",
      path: "/about"
    },
  ]
};

class Example extends React.Component {
  showSettings (event) {
    event.preventDefault();

        
  }
  
  render () {

    return (
      <Menu>
        <div>
          <p>Hello</p>
          <BurgerNavi { ...primaryNavi}/>
        </div>
        
      </Menu>
    );
  }
};

const Header = () => {
  return (
    <header>
      <div className="header-wrapper container">
        < Menu right/>
        < Logo />
        < HeaderNavi { ...primaryNavi }/>
      </div>
    </header>
  )
}

export default Header;
