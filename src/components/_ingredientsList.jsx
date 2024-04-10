import { useState } from "react";

function IngredientsList() {
  const storedRecipe = JSON.parse(sessionStorage.getItem("recipeData"))?.recipe || {};
  const { ingredientLines } = storedRecipe;

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
    <>
      <h2>Ingredients:</h2>
      <div>
        {items.map((item) => (
          <div key={item.id}>
            <input
              type="checkbox"
              checked={item.isChecked}
              onChange={() => toggleCheck(item.id)}
            />
            <span>{item.text}</span>
          </div>
        ))}
      </div>
    </>
  );
}

export default IngredientsList;
