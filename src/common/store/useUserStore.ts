import AsyncStorage from '@react-native-async-storage/async-storage';
import { create } from 'zustand';
import { createJSONStorage, persist } from 'zustand/middleware';

type State = {
  favorites: string[];
  language: string;
};

type Actions = {
  addFavorite: (id: string) => void;
  removeFavorite: (id: string) => void;
  setLanguage: (language: string) => void;
};

const useUserStore = create<State & Actions>()(
  persist(
    set => ({
      favorites: [],
      language: 'en-US',
      addFavorite: (id: string) =>
        set(state => ({ favorites: [...state.favorites, id] })),
      removeFavorite: (id: string) =>
        set(state => ({
          favorites: state.favorites.filter(favorite => favorite !== id),
        })),
      setLanguage: (language: string) => set({ language }),
    }),
    {
      name: 'user-storage',
      storage: createJSONStorage(() => AsyncStorage),
    },
  ),
);

export default useUserStore;
