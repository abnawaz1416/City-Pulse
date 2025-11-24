import { StyleSheet, View } from 'react-native';
import React from 'react';
import LocalizedText from './LocalizedText';

const EmptyState = () => {
  return (
    <View style={styles.centerContainer}>
      <LocalizedText i18nKey="home.noEvents" style={styles.emptyText} />
    </View>
  );
};

export default EmptyState;

const styles = StyleSheet.create({
  centerContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  emptyText: {
    fontSize: 16,
    color: '#666',
    textAlign: 'center',
  },
});
