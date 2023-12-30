import { createContext, useState } from "react";

//We declared for better auto completion
export const FavoritesContext = createContext({
  ids: [],
  addFavorite: (id) => {},
  removeFavorite: (id) => {},
});

const FavoritesContextProvider = ({ children }) => {
  const [favoritesMealIds, setFavoritesMealIds] = useState([]);
  const addFavorite = (id) => {
    setFavoritesMealIds((prevIds) => [...prevIds, id]);
  };
  const removeFavorite = (id) => {
    setFavoritesMealIds((prevIds) => prevIds.filter((mealId) => mealId !== id));
  };
  const values = {
    ids: favoritesMealIds,
    addFavorite,
    removeFavorite,
  }
  return <FavoritesContext.Provider value={values} >{children}</FavoritesContext.Provider>;
};

export default FavoritesContextProvider;
