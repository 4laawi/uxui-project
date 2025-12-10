import { useState } from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar';
import '../styles/Search.css';

function Search() {
  const [showResults, setShowResults] = useState(false);

  const results = [
    { id: 1, name: 'Mark', price: '15$', rating: '⭐️⭐️⭐️', image: '/images/profile5.png' },
    { id: 2, name: 'JENNY', price: '10$', rating: '⭐️⭐️⭐️', image: '/images/profile6.png' },
    { id: 3, name: 'JHON', price: '20$', rating: '⭐️⭐️⭐️', image: '/images/profile4.png' }
  ];

  return (
    <div className="app-container">
      <Navbar title="recherche" />
      <div className="page-content">
        <div className="search-form">
          <div className="form-group">
            <label>ville de depart</label>
            <input type="text" className="form-input" />
          </div>
          <div className="form-group">
            <label>ville de d'arrivee</label>
            <input type="text" className="form-input" />
          </div>
          <div className="form-group">
            <label>date et heure</label>
            <input type="text" className="form-input" />
          </div>
          <button onClick={() => setShowResults(true)} className="search-submit">rechercher</button>
          <Link to="/" className="search-cancel">Annuler</Link>
        </div>

        {showResults && (
          <div className="results-list">
            {results.map(result => (
              <div key={result.id} className="result-card">
                <img src={result.image} alt={result.name} className="result-avatar" />
                <div className="result-info">
                  <span className="result-name">{result.name}</span>
                  <span className="result-rating">{result.rating}</span>
                </div>
                <span className="result-price">{result.price}</span>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

export default Search;
