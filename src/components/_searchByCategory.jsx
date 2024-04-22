import PropTypes from "prop-types";
import fetchCategory from "../data/_searchByCategory";
import SearchCuisineType from "./_searchCuisineType";
import SearchDietLabel from "./_searchDietLabel";
import SearchMealType from "./_searchMealType";

function SearchByCategory({ setSelectedParams, selectedParams }) {
    const handleSearch = async () => {
        try {
          // Executa o fetch com os parâmetros selecionados
          const data = await fetchCategory(selectedParams);
          console.log("Resposta do fetch:", data);
        } catch (error) {
          console.error("Erro ao buscar receitas:", error);
        }
      };
      return (
        <section className="serch-recipe-container">
          <h3>Buscar por categorias</h3>
          <div className="category-filters">
            <SearchCuisineType setSelectedParams={setSelectedParams} />
            <SearchDietLabel setSelectedParams={setSelectedParams} />
            <SearchMealType setSelectedParams={setSelectedParams} />
          </div>
          <button onClick={handleSearch}>Go</button>
        </section>
      );
    }

    SearchByCategory.propTypes = {
        setSelectedParams: PropTypes.func.isRequired,
        selectedParams: PropTypes.object.isRequired,
      };
    
    export default SearchByCategory;