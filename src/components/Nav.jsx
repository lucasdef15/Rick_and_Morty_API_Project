import { Link } from 'react-router-dom';
import '../styles/Nav.css';

const Nav = ({ search, setSearch }) => {
  return (
    <nav className="Nav">
      <form className="SerachForm" onSubmit={(e) => e.preventDefault()}>
        <label htmlFor="search">Search</label>
        <input
          id="search"
          type="text"
          placeholder="Search"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </form>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/episodes">Episodes</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Nav;
