import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBookmark as solidBookmark } from "@fortawesome/free-solid-svg-icons";
import { faBookmark as regularBookmark } from "@fortawesome/free-regular-svg-icons";

function FavoriteRecipeButton() {
  const [isLiked, setIsLiked] = useState(false);

  const toggleLike = (e) => {
    e.preventDefault();
    setIsLiked(!isLiked);
    //CONTINUAR LOGICA PARA SALVAR A INFORMACAO NA BASE E POPULAR A LISTA DE FAVORITOS
  };

  return (
    <div
      className="recipe-like"
      onClick={toggleLike}
    >
      <FontAwesomeIcon
        icon={isLiked ? solidBookmark : regularBookmark}
        className={isLiked ? "solid-heart" : ""}
      />
    </div>
  );
}

export default FavoriteRecipeButton;
