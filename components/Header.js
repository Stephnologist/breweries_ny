import headerStyles from "../styles/Header.module.css";

const Header = () => {
  return (
    <div>
      <h1 className={headerStyles.title}>
        <span>New York</span> Breweries
      </h1>
      <p className={headerStyles.description}>
        Keep up to date with breweries in New York.
      </p>
    </div>
  );
};

export default Header;
