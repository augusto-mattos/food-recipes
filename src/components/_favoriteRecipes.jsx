import { useState, useEffect } from "react";
import { getFirestore, doc, getDoc } from "firebase/firestore";

function FavoriteRecipes() {
  const [favoriteRecipes, setFavoriteRecipes] = useState([]);
  // eslint-disable-next-line no-unused-vars
  const [currentUser, setCurrentUser] = useState(null);
  const db = getFirestore();

  useEffect(() => {
    const sessionUser = sessionStorage.getItem("@AuthFirebase:user");
    if (sessionUser) {
      const user = JSON.parse(sessionUser);
      setCurrentUser(user);
      fetchFavoriteRecipes(user.uid);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const fetchFavoriteRecipes = async (userId) => {
    const docRef = doc(db, "favorites", userId);
    const docSnap = await getDoc(docRef);
    if (docSnap.exists()) {
      const favorites = docSnap.data();
      if (favorites.recipes) {
        setFavoriteRecipes(favorites.recipes);
      } else {
        setFavoriteRecipes([]);
      }
    } else {
      setFavoriteRecipes([]);
    }
  };

  return (
    <section id="favoriteRecipes">
      <div>
        <h3>Suas receitas favoritas</h3>
        <p>Consulte suas receitas favoritas</p>
      </div>
      <div className="favorites-recipes-list">
        {favoriteRecipes.map((recipe) => (
          <div key={recipe.id} className="favorite-recipe">
            <img
              src={recipe.image}
              alt={recipe.label}
              />
              <h5>{recipe.label}</h5>
          </div>
        ))}
      </div>
    </section>
  );
}

export default FavoriteRecipes;
