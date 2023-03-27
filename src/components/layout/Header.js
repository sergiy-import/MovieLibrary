import HeaderNavi from '../navigation/HeaderNavi';
import Logo from './Logo';
import '../../dist/css/header.css';

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
const Header = () => {
  return (
    <header>
      <div className="header-wrapper container">
        < Logo />
        < HeaderNavi { ...primaryNavi }/>
      </div>
    </header>
  )
}

export default Header;
