import SearchCuisineType from "./_searchCuisineType";
import SearchDietLabel from "./_searchDietLabel";
import SearchMealType from "./_searchMealType";

function Search() {
  return (
    <section className="search-recipe-container">
      <div>
        <h3>Buscar por categorias</h3>
        <p>
          Selecione uma categoria e clique apenas uma categoria por pesquisa
        </p>
      </div>
      <div className="category-filters">
        <SearchCuisineType />
        <span className="selector">OU</span>
        <SearchDietLabel />
        <span className="selector">OU</span>
        <SearchMealType />
      </div>
    </section>
  );
}

export default Search;
