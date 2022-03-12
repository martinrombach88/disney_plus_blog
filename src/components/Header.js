import { useNavigate } from "react-router-dom";

const Header = () => {
  const navigate = useNavigate();

  return (
    <nav className="header">
      <div className="header__title" onClick={() => navigate("/")}>
        <img
          className="header__logo"
          src="https://static-assets.bamgrid.com/product/disneyplus/images/logo.1a56f51c764022ee769c91d894d44326.svg"
        ></img>
        <h3>Unofficial Blog</h3>
      </div>
      <div className="header__homeButtons">
        <input
          className="header__input"
          type="text"
          name="search"
          id="blogSearch"
          placeholder="Search for posts"
          autoComplete="off"
        />
        <button className="header__btn">Create Review</button>
        <button className="header__btn">Create Top Ten</button>

        <button className="header__btn">Watchlist</button>
      </div>
    </nav>
  );
};

export default Header;
