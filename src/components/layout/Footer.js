import { Link } from 'react-router-dom';
import '../../dist/css/footer.css';
import NavWithTitle from '../navigation/NavWithTitle';
import NavWithTitleAndImg from "../navigation/NavWithTitleAndImg";
import facebook from '../../dist/img/facebook.webp';
import twitter from '../../dist/img/twitter.webp';
import youtube from '../../dist/img/youtube.webp';
import instagram from '../../dist/img/instagram.webp';
import logo from '../../dist/img/logo.webp';

const currentYear = new Date().getFullYear();

let primaryNav = {
  title:  "Site map",
  links: [
    { id: "page-1",
      link: "Home",
      path: "/"
    },
    {
      id: "page-2",
      link: "Movies",
      path: "/movies"
    },
    {
      id: "page-3",
      link: "TvShows",
      path: "/tvshows"
    },
    {
      id: "page-4",
      link: "Contacts",
      path: "/contacts"
    },
    {
      id: "page-5",
      link: "About",
      path: "/about"
    },
    {
      id: "page-6",
      link: "FAQ",
      path: "/faq"
    },
    {
      id: "page-7",
      link: "Privacy & Policy",
      path: "/privacy-and-policy"
    },
  ]
};

let socialNavImg = {
  title:  "Follow us",
  links: [
    {
      img: {
        name: youtube,
        alt: "img",
      },
      link: "YouTube",
      path: "https://www.youtube.com"
    },
    {
      img: {
        name: instagram,
        alt: "img",
      },
      link: "Instagram",
      path: "https://www.instagram.com"
    },
    {
      img: {
        name: twitter,
        alt: "img",
      },
      link: "Twitter",
      path: "https://twitter.com"
    },
    {
      img: {
        name: facebook,
        alt: "img",
      },
      link: "FaceBook",
      path: "https://www.facebook.com"
    },
  ]
};

const Footer = () => {
  return (
      <footer>
        <div className="content container">
          <div className="text-area">
            <div className="logo">
              <img src={ logo } />
            </div>
            <h3>Movie library</h3>
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's  It was popularised in the 1960s with the release of Letraset sheets containing.
            </p>
          </div>
          <NavWithTitle { ...primaryNav } />
          <NavWithTitleAndImg { ...socialNavImg } />
          
        </div>
        <div className="copyright">
          <p className="container">
            Copyright © { currentYear } Bloggar by <Link to="/">Movie library</Link> All Rights Reserved.
          </p>
        </div>
      </footer>
  )
}

export default Footer;
