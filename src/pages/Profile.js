import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar';
import '../styles/Profile.css';

function Profile() {
  const trips = [
    { id: 1, driver: 'Mark', date: '24 Oct', price: '15$' },
    { id: 2, driver: 'JHON', date: '22 Oct', price: '20$' }
  ];

  return (
    <div className="app-container">
      <Navbar title="Profil" />
      <div className="page-content">
        <Link to="/" className="home-button">Accueil</Link>
        
        <div className="profile-header">
          <img src="/images/profile7.png" alt="Profile" className="profile-avatar" />
          <div className="profile-name">Nom</div>
        </div>

        <h2 className="section-title">Historique des trajets</h2>
        <div className="trips-list">
          {trips.map(trip => (
            <div key={trip.id} className="trip-card">
              <span className="trip-driver">{trip.driver}</span>
              <span className="trip-date">{trip.date}</span>
              <span className="trip-price">{trip.price}</span>
            </div>
          ))}
        </div>

        <div className="settings-section">
          <div className="settings-item">
            <span className="settings-label">Parametres</span>
            <div className="settings-row">
              <span className="settings-label-small">Notifications</span>
              <div className="toggle-switch">
                <div className="toggle-active"></div>
              </div>
            </div>
            <div className="settings-row">
              <span className="settings-label-small">Preferences</span>
              <div className="toggle-switch">
                <div className="toggle-inactive"></div>
              </div>
            </div>
          </div>
        </div>

        <div className="edit-profile-button">Modifier profil</div>
      </div>
    </div>
  );
}

export default Profile;
