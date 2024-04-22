import Hero from "../../components/_hero";
import FeaturedRecipes from "../../components/_featuredRecipes";
import Search from "../../components/_searchRecipe";
import { AdvancedSearch } from "../../components/_advancedSearch";
import FavoriteRecipes from "../../components/_favoriteRecipes";

function Home() {
  return (
    <>
      <Hero />
      <FeaturedRecipes />
      <Search />
<      AdvancedSearch />
      <FavoriteRecipes />
    </>
  );
}

export default Home;
