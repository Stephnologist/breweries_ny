import breweryStyles from "../styles/Brewery.module.css";
import BreweryItem from "./BreweryItem";

export const BreweryList = ({ breweries }) => {
  return (
    <div className={breweryStyles.grid}>
      {breweries.map((brewery) => (
        <BreweryItem brewery={brewery} />
      ))}
    </div>
  );
};

export default BreweryList;
