import { useState } from 'react';

function NutritionalFacts() {
  const storedRecipe = JSON.parse(sessionStorage.getItem("recipeData"))?.recipe || {};
  const { totalNutrients } = storedRecipe;
  const [showAll, setShowAll] = useState(false);

  const limitedNutrients = Object.keys(totalNutrients).slice(0, 18);

  return (
    <>
      <div className="nutritional-facts">
        <h4>Nutritional Facts</h4>
        <div className="nutritional-items">
        {limitedNutrients.map((nutrientLabel, index) => (
            <div key={index}>
              <p>
                {totalNutrients[nutrientLabel].label}:
              </p>
              <p>
                <strong>{parseFloat(totalNutrients[nutrientLabel].quantity).toFixed(0)}{" "}
                {totalNutrients[nutrientLabel].unit} </strong>
              </p>
            </div>
          ))}
          {!showAll && Object.keys(totalNutrients).length > 18 && (
            <button onClick={() => setShowAll(true)}>Ver mais</button>
          )}
          {showAll && Object.keys(totalNutrients).slice(18).map((nutrientLabel, index) => (
            <div key={index}>
              <p>
                <strong>{totalNutrients[nutrientLabel].label}: </strong>
              </p>
              <p>
                {parseFloat(totalNutrients[nutrientLabel].quantity).toFixed(0)}{" "}
                {totalNutrients[nutrientLabel].unit}
              </p>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default NutritionalFacts;
