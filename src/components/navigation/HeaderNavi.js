import { NavLink } from 'react-router-dom';
import React from 'react';
import '../../dist/css/HeaderNavi.css';



const HeaderNavi = (props) => {
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

      {/* <div className='burger-holder'>
        <button className='burger-opener js-nav-opener'>
          <span className='burger-lines'></span>
        </button>
      </div> */}
    </div>
  );
}

HeaderNavi.defaultProps = {
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

export default HeaderNavi;