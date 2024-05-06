import { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBookmark as solidBookmark } from "@fortawesome/free-solid-svg-icons";
import { faBookmark as regularBookmark } from "@fortawesome/free-regular-svg-icons";
import { getFirestore, doc, setDoc, getDoc } from "firebase/firestore";
import PropTypes from "prop-types";

function FavoriteRecipeButton({ recipeId }) {
  const [isLiked, setIsLiked] = useState(false);
  const [currentUser, setCurrentUser] = useState(null);
  const db = getFirestore();

  useEffect(() => {
    const sessionUser = sessionStorage.getItem("@AuthFirebase:user");
    if (sessionUser) {
      const user = JSON.parse(sessionUser);
      setCurrentUser(user);
      if (recipeId) {
        checkIfLiked(user.uid, recipeId); 
      }
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [recipeId]);

  const checkIfLiked = async (userId, recipeId) => {
    // Verifica no Firestore se a receita aparece na lista de favoritos do usuário pra renderizar a flag certa
    const docRef = doc(db, "favorites", userId);
    const docSnap = await getDoc(docRef);
    if (docSnap.exists()) {
      const favorites = docSnap.data();
      if (favorites.recipes && favorites.recipes.includes(recipeId)) {
        setIsLiked(true);
      }
    }
  };

  const toggleLike = async (e) => {
    e.preventDefault();
    // Adiciona ou remove receita da lista de favoritos do usuário
    const userId = currentUser.uid;
    const docRef = doc(db, "favorites", userId);
    const docSnap = await getDoc(docRef);

    if (docSnap.exists()) {
      // Se o documento do usuário existe na base, atualiza a lista de favoritos
      const favorites = docSnap.data();
      let updatedFavorites;
      if (isLiked) {
        updatedFavorites = favorites.recipes.filter((id) => id !== recipeId);
      } else {
        updatedFavorites = [...(favorites.recipes || []), recipeId];
      }
      await setDoc(docRef, { recipes: updatedFavorites }, { merge: true });
    } else {
      // Se o documento do usuário não existir na base, cria com a lista de favoritos
      await setDoc(docRef, { recipes: [recipeId] });
    }

    setIsLiked(!isLiked);
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

FavoriteRecipeButton.propTypes = {
  recipeId: PropTypes.string.isRequired,
};

export default FavoriteRecipeButton;
