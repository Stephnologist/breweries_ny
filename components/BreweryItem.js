import breweryStyles from "../styles/Brewery.module.css";
import Link from "next/link";

export const BreweryItem = ({ brewery }) => {
  return (
    <Link href="/brewery/[id]" as={`/brewery/${brewery.id}`}>
      <a className={breweryStyles.card}>
        <h3>{brewery.name}</h3>
        <p>{brewery.city}</p>
      </a>
    </Link>
  );
};

export default BreweryItem;
