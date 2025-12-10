import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar';
import '../styles/Home.css';

function Home() {
  const drivers = [
    { id: 1, name: 'Mark', image: '/images/profile1.png' },
    { id: 2, name: 'JENNY', image: '/images/profile2.png' },
    { id: 3, name: 'JHON', image: '/images/profile3.png' }
  ];

  return (
    <div className="app-container">
      <Navbar title="Covoiturage" />
      <div className="page-content">
        <Link to="/search" className="search-button">
          Rechercher un trajet
        </Link>
        <h2 className="page-title">chat avec chauffeurs</h2>
        <div className="drivers-list">
          {drivers.map(driver => (
            <div key={driver.id} className="driver-card">
              <img src={driver.image} alt={driver.name} className="driver-avatar" />
              <span className="driver-name">{driver.name}</span>
              <div className="chat-button">chat</div>
            </div>
          ))}
        </div>
        <Link to="/publish" className="publish-button">
          Publier un trajet
        </Link>
      </div>
    </div>
  );
}

export default Home;
