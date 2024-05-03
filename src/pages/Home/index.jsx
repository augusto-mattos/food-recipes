import { useContext } from "react";
import { AuthGoogleContext } from "../../contexts/authGoogle";

import Hero from "../../components/_hero";
import FeaturedRecipes from "../../components/_featuredRecipes";
import AdvancedSearch from "../../components/_advancedSearch";
import FavoriteRecipes from "../../components/_favoriteRecipes";

function Home() {
  const { signed } = useContext(AuthGoogleContext);

  return (
    <>
      <Hero />
      <FeaturedRecipes />
      <AdvancedSearch />
      {signed && <FavoriteRecipes />}
    </>
  );
}

export default Home;
