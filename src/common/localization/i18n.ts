import useUserStore from '../store/useUserStore';
import translationAr from './ar.json';
import translationEn from './en.json';
import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

const resources = {
  'en-US': { translation: translationEn },
  'ar-AE': { translation: translationAr },
};

const initI18n = async () => {
  await useUserStore.persist.rehydrate();
  const language = useUserStore.getState().language;

  i18n.use(initReactI18next).init({
    resources,
    lng: language,
    fallbackLng: 'en-US',
    interpolation: {
      escapeValue: false,
    },
  });
};

initI18n();

export default i18n;
