import { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBookmark as solidBookmark } from "@fortawesome/free-solid-svg-icons";
import { faBookmark as regularBookmark } from "@fortawesome/free-regular-svg-icons";
import { getFirestore, doc, setDoc, getDoc } from "firebase/firestore";
import PropTypes from "prop-types";

function FavoriteRecipeButton({ recipeId, label, image }) {
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

  useEffect(() => {
    // Verificar se a receita está na lista de favoritos sempre que o componente for montado
    if (currentUser && recipeId) {
      checkIfLiked(currentUser.uid, recipeId);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [currentUser, recipeId]);

  const checkIfLiked = async (userId, recipeId) => {
    const docRef = doc(db, "favorites", userId);
    const docSnap = await getDoc(docRef);
    if (docSnap.exists()) {
      const favorites = docSnap.data();
      if (
        favorites.recipes &&
        favorites.recipes.some((recipe) => recipe.id === recipeId)
      ) {
        setIsLiked(true);
      } else {
        setIsLiked(false);
      }
    }
  };

  const toggleLike = async (e) => {
    e.preventDefault();
    const userId = currentUser.uid;
    const docRef = doc(db, "favorites", userId);
    const docSnap = await getDoc(docRef);

    if (docSnap.exists()) {
      const favorites = docSnap.data();
      let updatedFavorites;
      if (isLiked) {
        updatedFavorites = favorites.recipes.filter(
          (recipe) => recipe.id !== recipeId
        );
      } else {
        updatedFavorites = [
          ...(favorites.recipes || []),
          { id: recipeId, label: label, image: image },
        ];
      }
      await setDoc(docRef, { recipes: updatedFavorites }, { merge: true });
    } else {
      await setDoc(docRef, {
        recipes: [{ id: recipeId, label: label, image: image }],
      });
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
  label: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
};

export default FavoriteRecipeButton;
