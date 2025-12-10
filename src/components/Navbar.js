import { Link, useLocation } from 'react-router-dom';
import '../styles/Navbar.css';

function Navbar({ title }) {
  const location = useLocation();
  const isProfilePage = location.pathname === '/profile';

  return (
    <div className="navbar">
      {!isProfilePage && (
        <img src="/images/logo.png" alt="logo" className="navbar-logo navbar-logo-left" />
      )}
      <div className={`navbar-content ${isProfilePage ? 'navbar-profile-page' : ''}`}>
        {isProfilePage ? (
          <span className="navbar-title navbar-title-centered">{title}</span>
        ) : (
          <span className="navbar-title navbar-title-centered">{title}</span>
        )}
      </div>
      {!isProfilePage && (
        <Link to="/profile" className="navbar-profile navbar-profile-right">Profil</Link>
      )}
    </div>
  );
}

export default Navbar;
