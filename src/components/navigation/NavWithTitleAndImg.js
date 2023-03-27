import { Link } from 'react-router-dom';
import React from 'react';
import '../../dist/css/NavWithTitleAndImg.css';
import defaultImg from '../../dist/img/defaultImg.webp';

const NavWithTitleAndImg = (props) => {
  const listItems = props.links.map((item, index) =>
    <li key={index}>
      <Link to={ item.path }>
        <img src={item.img.name} alt={item.img.alt}/>
        { item.link }
      </Link>
    </li>
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

NavWithTitleAndImg.defaultProps = {
  title:  "Menu title",
  links: [
    {
      img: {
        name: defaultImg,
        alt: "img",
      },
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
  ]
}

export default NavWithTitleAndImg;