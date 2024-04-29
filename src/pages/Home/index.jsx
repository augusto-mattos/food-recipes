import Hero from "../../components/_hero";
import FeaturedRecipes from "../../components/_featuredRecipes";
import AdvancedSearch from "../../components/_advancedSearch";
import FavoriteRecipes from "../../components/_favoriteRecipes";

function Home() {
  return (
    <>
      <Hero />
      <FeaturedRecipes />
      <AdvancedSearch />
      <FavoriteRecipes />
    </>
  );
}

export default Home;
