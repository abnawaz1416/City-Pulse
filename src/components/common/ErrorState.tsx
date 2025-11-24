import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import React from 'react';
import LocalizedText from './LocalizedText';

interface ErrorStateProps {
  refetch: () => void;
  error: string;
}
const ErrorState = ({ refetch, error }: ErrorStateProps) => {
  return (
    <View style={styles.centerContainer}>
      <Text style={styles.errorIcon}>⚠️</Text>
      <LocalizedText
        i18nKey={'error'}
        fallback={error}
        style={styles.errorText}
      />
      <TouchableOpacity style={styles.retryButton} onPress={refetch}>
        <LocalizedText i18nKey="common.retry" style={styles.retryText} />
      </TouchableOpacity>
    </View>
  );
};

export default ErrorState;

const styles = StyleSheet.create({
  centerContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  errorText: {
    fontSize: 16,
    color: '#d32f2f',
    textAlign: 'center',
    marginBottom: 16,
  },
  retryButton: {
    backgroundColor: '#007AFF',
    paddingHorizontal: 24,
    paddingVertical: 12,
    borderRadius: 8,
  },
  retryText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '600',
  },
  errorIcon: {
    fontSize: 48,
    marginBottom: 16,
  },
});
