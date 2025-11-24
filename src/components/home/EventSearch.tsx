import { StyleSheet, TextInput, TouchableOpacity, View } from 'react-native';
import React, { useRef } from 'react';
import LocalizedText from '../common/LocalizedText';
import { useTranslation } from 'react-i18next';

interface EventSearchProps {
  onSearch: (keyword: string, city: string) => void;
}

const EventSearch = ({ onSearch }: EventSearchProps) => {
  const keyword = useRef<string>('');
  const city = useRef<string>('');
  const { t } = useTranslation();
  const handleSearch = () => {
    onSearch(keyword.current, city.current);
  };

  return (
    <View style={styles.searchContainer}>
      <TextInput
        style={styles.searchInput}
        placeholder={t('home.searchPlaceholder')}
        placeholderTextColor="#999"
        onChangeText={text => {
          keyword.current = text;
        }}
      />
      <TextInput
        style={styles.searchInput}
        placeholder={t('home.cityPlaceholder')}
        placeholderTextColor="#999"
        onChangeText={text => {
          city.current = text;
        }}
      />
      <TouchableOpacity style={styles.searchButton} onPress={handleSearch}>
        <LocalizedText
          style={styles.searchButtonText}
          i18nKey="common.search"
        />
      </TouchableOpacity>
    </View>
  );
};

export default EventSearch;

const styles = StyleSheet.create({
  searchContainer: {
    padding: 16,
    backgroundColor: '#fff',
    borderBottomWidth: 1,
    borderBottomColor: '#e0e0e0',
  },
  searchInput: {
    height: 48,
    borderWidth: 1,
    borderColor: '#e0e0e0',
    borderRadius: 8,
    paddingHorizontal: 16,
    fontSize: 16,
    backgroundColor: '#f5f5f5',
    marginBottom: 12,
    color: '#333',
  },
  searchButton: {
    height: 48,
    backgroundColor: '#007AFF',
    borderRadius: 8,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 4,
  },
  searchButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '600',
  },
});
