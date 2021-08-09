import BreweryList from "../components/BreweryList";

export default function Home({ breweries }) {
  return (
    <div>
      <BreweryList breweries={breweries} />
    </div>
  );
}
export const getStaticProps = async () => {
  const res = await fetch(
    `https://api.openbrewerydb.org/breweries?by_state=new_york`
  );
  const breweries = await res.json();

  return {
    props: {
      breweries,
    },
  };
};
