import { Link } from 'react-router-dom';
import '../../dist/css/logo.css';
import logo from '../../dist/img/logo.webp';

const Logo = () => {
  return (
    <div className="logo">
      {/* <img src={ logo } /> */}
      <Link to="/"> <img src={ logo } /></Link>
      {/* <Link to="/"><img src={ logo } /> Movie Portal</Link> */}
    </div>
  )
}

export default Logo;
