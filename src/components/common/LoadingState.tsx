import { ActivityIndicator, StyleSheet, View } from 'react-native';
import React from 'react';
import LocalizedText from './LocalizedText';

const LoadingState = () => {
  return (
    <View style={styles.centerContainer}>
      <ActivityIndicator size="large" />
      <LocalizedText i18nKey="common.loading" style={styles.loadingText} />
    </View>
  );
};

export default LoadingState;

const styles = StyleSheet.create({
  centerContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  loadingText: {
    marginTop: 12,
    fontSize: 16,
    color: '#666',
  },
});
