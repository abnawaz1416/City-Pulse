import { BottomSheetModal } from '@gorhom/bottom-sheet';
import React, { forwardRef, Ref, useState } from 'react';
import { I18nManager, StyleSheet, TouchableOpacity, View } from 'react-native';
import CustomBottomSheet from '../common/CustomBottomSheet';
import LocalizedText from '../common/LocalizedText';
import { LanguageBottomSheetData } from '../../common/data/language.data';
import RadioItem from '../common/RadioItem';
import { useLanguage } from '../../common/hooks/useLanguage';
import { Language } from '../../common/types/language.types';
import RNRestart from 'react-native-restart';

type LanguageBottomSheetProps = {
  dismissBottomSheet?: () => void;
};

const LanguageBottomSheet = (
  { dismissBottomSheet }: LanguageBottomSheetProps,
  ref: Ref<BottomSheetModal>,
) => {
  const { language, setLanguage } = useLanguage();
  const [selectedLanguage, setSelectedLanguage] = useState<string>(language);

  const onItemPress = (item: Language) => {
    setSelectedLanguage(item.key);
  };

  const onApplyPress = async () => {
    if (selectedLanguage !== language) {
      setLanguage(selectedLanguage);
      I18nManager.forceRTL(selectedLanguage === 'ar-AE' ? true : false);
      RNRestart.restart();
    } else {
      if (dismissBottomSheet) dismissBottomSheet();
    }
  };

  return (
    <CustomBottomSheet ref={ref} name="language">
      <LocalizedText i18nKey="language.title" style={styles.title} />
      <View style={styles.spacer} />
      {LanguageBottomSheetData.map(item => (
        <RadioItem
          key={item.key}
          text={item.value}
          selected={selectedLanguage === item.key}
          onPress={() => onItemPress(item)}
        />
      ))}
      <View style={styles.spacer} />
      <TouchableOpacity
        style={styles.ticketButton}
        onPress={onApplyPress}
        activeOpacity={0.8}
      >
        <LocalizedText i18nKey="common.apply" style={styles.ticketButtonText} />
      </TouchableOpacity>
    </CustomBottomSheet>
  );
};

export default forwardRef(LanguageBottomSheet);

const styles = StyleSheet.create({
  title: {
    fontSize: 20,
    fontWeight: '500',
  },
  spacer: {
    height: 16,
  },
  ticketButton: {
    backgroundColor: '#007AFF',
    paddingVertical: 18,
    borderRadius: 12,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 8,
    marginBottom: 24,
    shadowColor: '#007AFF',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 8,
    elevation: 5,
    width: '100%',
  },

  ticketButtonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: '700',
  },
});
