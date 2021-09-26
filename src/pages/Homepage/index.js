import logo from './logo.svg';
import './Homepage.css';


function Homepage() {

  return (
    <div className="Homepage">
      <header className="Homepage-header">
        <img src={logo} className="Homepage-logo" alt="logo" />
        <p>
          Movie Recommendation System
        </p>
        <a
          className="Homepage-link"
          href="/register"
          target="_blank"
          rel="noopener noreferrer"
        >
          Register
        </a>
        <a
          className="Homepage-link"
          href="/login"
          target="_blank"
          rel="noopener noreferrer"
        >
          Login
        </a>
      </header>
    </div>
  );
}

export default Homepage;
