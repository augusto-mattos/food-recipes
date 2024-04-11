import { useState } from "react";

function IngredientsList() {
  const storedRecipe =
    JSON.parse(sessionStorage.getItem("recipeData"))?.recipe || {};
  let { ingredientLines } = storedRecipe;

  //usei para retirar o * do inicio da string quando vem assim da api
  ingredientLines = ingredientLines.map((ingredient) =>
    ingredient.replace(/^\*/, "")
  );

  const [items, setItems] = useState(
    ingredientLines.map((ingredient, index) => ({
      id: index,
      text: ingredient,
      isChecked: false,
    }))
  );

  const toggleCheck = (id) => {
    const updatedItems = items.map((item) =>
      item.id === id ? { ...item, isChecked: !item.isChecked } : item
    );
    setItems(updatedItems);
  };

  return (
    <section>
      <h3>Ingredients:</h3>
      <div className="ingredients-list">
        {items.map((item) => (
          <div key={item.id}>
            <label className={item.isChecked ? "checked" : ""}>
              <input
                type="checkbox"
                checked={item.isChecked}
                onChange={() => toggleCheck(item.id)}
              />
              {item.text}
            </label>
          </div>
        ))}
      </div>
    </section>
  );
}

export default IngredientsList;
