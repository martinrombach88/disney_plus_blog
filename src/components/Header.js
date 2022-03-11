import { useNavigate } from "react-router-dom";

const Header = () => {
  const navigate = useNavigate();
  return (
    <nav className="header">
      <div className="title" onClick={() => navigate("/")}>
        <h2>Sci Fi and Superheroes</h2>
        <h4>An interactive blog</h4>
      </div>
      <div className="homeButtons">
        <button>CREATE REVIEW</button>
        <button>Create Top Ten</button>
        <input
          type="text"
          name="search"
          id="blogSearch"
          placeholder="Search for posts"
          autoComplete="off"
        />
      </div>
      <button>Watchlist</button>
    </nav>
  );
};

export default Header;
