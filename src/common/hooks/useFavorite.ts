import useUserStore from '../store/useUserStore';

export const useFavorite = () => {
  const favorites = useUserStore(state => state.favorites);
  const addFavorite = useUserStore(state => state.addFavorite);
  const removeFavorite = useUserStore(state => state.removeFavorite);

  const isFavorite = (id: string) => {
    return favorites.includes(id);
  };

  return { favorites, addFavorite, removeFavorite, isFavorite };
};
