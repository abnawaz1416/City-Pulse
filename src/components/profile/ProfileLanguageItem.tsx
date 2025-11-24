import React from 'react';
import ProfileListItem from './ProfileListItem';
import { useLanguage } from '../../common/hooks/useLanguage';

type ProfileLanguageItemProps = {
  onPress: () => void;
};
const ProfileLanguageItem = ({ onPress }: ProfileLanguageItemProps) => {
  const { language } = useLanguage();
  const languageName =
    language === 'en-US' ? 'language.english' : 'language.arabic';
  return (
    <ProfileListItem
      onPress={onPress}
      icon="🌐"
      title="common.language"
      subtitle={languageName}
    />
  );
};

export default ProfileLanguageItem;
