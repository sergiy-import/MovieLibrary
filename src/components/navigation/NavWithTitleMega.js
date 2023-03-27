import { Link } from 'react-router-dom';
import React from 'react';
import '../../dist/css/NavWithTitleAndImg.css';
import defaultImg from '../../dist/img/defaultImg.webp';

const NavWithTitleMega = (props) => {
  const listItems = props.links.map((item, index) => {
        if (item.img) {
          return <li key={index}>
            <Link to={ item.path }>
              <img src={item.img.name} alt={item.img.alt}/>
              { item.link }
            </Link>
          </li>
        } else if (!item.link && !item.path) {
          return <li key={index}>
            <img src={item.img.name} alt={item.img.alt}/>
          </li>
        }
        else {
          return <li key={index}>
            <Link to={ item.path }>{ item.link }</Link>
          </li>
        }
      }
  );

  return (
  <nav>
    <div>
      <h3>{ props.title }</h3>
      <ul>{ listItems }</ul>
    </div>
  </nav>
  );
}

NavWithTitleMega.defaultProps = {
  title:  "Menu title",
  links: [
    {
      link: "Link",
      path: "/"
    },
    {
      img: {
        name: defaultImg,
        alt: "img",
      },
      link: "Link",
      path: "/",
    },
    {
      img: {
        name: defaultImg,
        alt: "img",
      },
    },
  ]
}

export default NavWithTitleMega;