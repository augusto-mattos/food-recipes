import { useState } from "react";
import html2canvas from 'html2canvas';
import jsPDF from 'jspdf';

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

  const handleGeneratePDF = () => {
    const doc = new jsPDF();
    const ingredientsList = document.querySelector("#ingredientsList");

    html2canvas(ingredientsList, { width: ingredientsList.offsetWidth, height: ingredientsList.offsetHeight }).then(canvas => {
      const imgData = canvas.toDataURL("image/png");
      
      const imgWidth = 210;
      const imgHeight = (canvas.height * imgWidth) / canvas.width;
      const margin = 10; 

      doc.addImage(imgData, "PNG", margin, margin, imgWidth, imgHeight); 
      doc.save("lista_ingredientes.pdf");
    });
  };

  const handleGenerateShoppingList = () => {
    const doc = new jsPDF();

    const shoppingListItems = items.filter(item => !item.isChecked);
    const shoppingListContent = shoppingListItems.map(item => item.text).join("\n");

    const title = "Lista de Compras";
  const contentWithTitle = `${title}\n\n${shoppingListContent}`;

    doc.text(contentWithTitle, 10, 10); // Posição inicial da lista de compras
    doc.save("lista_de_compras.pdf");
  };

  return (
    <section>
      <div id="ingredientsList" className="ingredients-list">
      <h3>Ingredients:</h3>
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
      <div className="recipe-actions">
        <button className="ingrendients-list-btn" onClick={handleGeneratePDF}>
          Imprimir lista de ingredientes
        </button>
        <button className="market-list-btn" onClick={handleGenerateShoppingList} >
          Gerar lista de compras
        </button>
      </div>
    </section>
  );
}

export default IngredientsList;
