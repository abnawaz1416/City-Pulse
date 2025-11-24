import AsyncStorage from '@react-native-async-storage/async-storage';
import { create } from 'zustand';
import { createJSONStorage, persist } from 'zustand/middleware';
import { User } from '../types/user.types';

type State = {
  favorites: string[];
  language: string;
  user: User | null;
};

type Actions = {
  addFavorite: (id: string) => void;
  removeFavorite: (id: string) => void;
  setLanguage: (language: string) => void;
  setUser: (user: User) => void;
  logout: () => void;
};

const useUserStore = create<State & Actions>()(
  persist(
    set => ({
      favorites: [],
      language: 'en-US',
      user: null,
      addFavorite: (id: string) =>
        set(state => ({ favorites: [...state.favorites, id] })),
      removeFavorite: (id: string) =>
        set(state => ({
          favorites: state.favorites.filter(favorite => favorite !== id),
        })),
      setLanguage: (language: string) => set({ language }),
      setUser: (user: User) => set({ user }),
      logout: () =>
        set({
          user: null,
        }),
    }),
    {
      name: 'user-storage',
      storage: createJSONStorage(() => AsyncStorage),
    },
  ),
);

export default useUserStore;
