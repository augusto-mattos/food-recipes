import Hero from "../../components/_hero";
import FeaturedRecipes from "../../components/_featuredRecipes";
import Search from "../../components/_searchRecipe";
import FavoriteRecipes from "../../components/_favoriteRecipes";

function Home() {
  return (
    <>
      <Hero />
      <FeaturedRecipes />
      <Search />
      <FavoriteRecipes />
    </>
  );
}

export default Home;
