import SearchCuisineType from "./_searchCuisineType";
import SearchDietLabel from "./_searchDietLabel";
import SearchMealType from "./_searchMealType";

function Search() {
  return (
    <section className="serch-recipe-container">
      <h3>Buscar por categorias</h3>
      <div className="category-filters">
        <SearchCuisineType />
        <SearchDietLabel />
        <SearchMealType />
      </div>
    </section>
  );
}

export default Search;
