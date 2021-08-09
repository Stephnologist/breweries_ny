// import { useRouter } from "next/router";
import Link from "next/link";
import Meta from "../../../components/Meta";

const brewery = ({ brewery }) => {
  // const router = useRouter();
  // const { id } = router.query;
  const url = brewery.website_url;
  const city = brewery.city;
  const name = brewery.name;

  return (
    <>
      <Meta title={name} description={brewery.brewery_type} />
      <h1>{name}</h1>
      {url ? <p>{url}</p> : <p>{city}</p>}

      <br />
      <Link href="/">Go back</Link>
    </>
  );
};

export const getServerSideProps = async (context) => {
  const res = await fetch(
    `https://api.openbrewerydb.org/breweries/${context.params.id}`
  );

  const brewery = await res.json();

  return {
    props: {
      brewery,
    },
  };
};

export default brewery;
