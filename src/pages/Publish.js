import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar';
import '../styles/Publish.css';

function Publish() {
  return (
    <div className="app-container">
      <Navbar title="Publication d'un trajectoire" />
      <div className="page-content">
        <div className="publish-form">
          <div className="form-group">
            <label>Depart</label>
            <input type="text" className="form-input" />
          </div>
          <div className="form-group">
            <label>Arrivee</label>
            <input type="text" className="form-input" />
          </div>
          <div className="form-group">
            <label>Date</label>
            <input type="text" className="form-input" />
          </div>
          <div className="form-group">
            <label>Heure</label>
            <input type="text" className="form-input" />
          </div>
          <div className="form-group">
            <label>Prix</label>
            <input type="text" className="form-input" />
          </div>
          <Link to="/" className="publish-submit">publier</Link>
          <Link to="/" className="publish-cancel">Annuler</Link>
        </div>
      </div>
    </div>
  );
}

export default Publish;
