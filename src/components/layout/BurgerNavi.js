import { NavLink } from 'react-router-dom';
import React from 'react';
// import { slide as Menu } from 'react-burger-menu';
import '../../dist/css/header.css';

const BurgerNavi = (props) => {
    const listItems = props.links.map((item, index) =>
        <li key={index} className='nav-item'>
          <NavLink to={ item.path }>{ item.link }</NavLink>
        </li>
    );
  
    return (
      <div>
        <div className='nav-holder js-nav-holder'>
          <nav>
            <ul>{ listItems }</ul>
          </nav>
        </div>
      </div>
    );
  }
  
  BurgerNavi.defaultProps = {
    links: [
      {
        link: "Link",
        path: "/"
      },
      {
        link: "Link",
        path: "/"
      },
    ]
  }
  
  export default BurgerNavi;