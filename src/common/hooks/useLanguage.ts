import useUserStore from '../store/useUserStore';

export const useLanguage = () => {
  const language = useUserStore(state => state.language);
  const setLanguage = useUserStore(state => state.setLanguage);

  return { language, setLanguage };
};
