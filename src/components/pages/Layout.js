import { Outlet } from "react-router-dom";
import Header from '../layout/Header';
import Footer from '../layout/Footer';
import "../../dist/css/layout.css";


const Layout = () => {
  return (
    <div>
      <Header />
      <main>
        <div className="main-wrapper container">
          <Outlet />
        </div>
      </main>
      <Footer />
    </div>
    )
};

export default Layout;