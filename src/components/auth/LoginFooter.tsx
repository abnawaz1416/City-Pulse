import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import Animated, { FadeInDown } from 'react-native-reanimated';
import LocalizedText from '../common/LocalizedText';
import { Dimension } from '../../common/constants/dimension';

const LoginFooter = () => {
  return (
    <Animated.View
      entering={FadeInDown.delay(400).duration(600)}
      style={styles.footerCard}
    >
      <LocalizedText
        style={styles.footerCardTitle}
        i18nKey="auth.testCredentials"
        fallback="Test Credentials"
      />
      <View style={styles.credentialRow}>
        <LocalizedText style={styles.credentialLabel} i18nKey="auth.email" />

        <Text style={styles.credentialText}>user@example.com</Text>
      </View>
      <View style={styles.credentialRow}>
        <LocalizedText style={styles.credentialLabel} i18nKey="auth.password" />

        <Text style={styles.credentialText}>password123</Text>
      </View>
    </Animated.View>
  );
};

export default LoginFooter;

const styles = StyleSheet.create({
  footerCard: {
    backgroundColor: '#f5f5f5',
    borderRadius: Dimension.radius(12),
    padding: Dimension.sizeX(16),
    marginTop: Dimension.sizeY(24),
    borderWidth: 1,
    borderColor: '#e0e0e0',
  },
  footerCardTitle: {
    fontSize: Dimension.sizeX(14),
    fontWeight: '600',
    color: '#333',
    marginBottom: Dimension.sizeY(12),
  },
  credentialRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: Dimension.sizeY(8),
  },
  credentialLabel: {
    fontSize: Dimension.sizeX(13),
    fontWeight: '500',
    color: '#666',
    width: Dimension.sizeX(70),
  },
  credentialValue: {
    flex: 1,
  },
  credentialText: {
    fontSize: Dimension.sizeX(13),
    color: '#007AFF',
    fontWeight: '500',
  },
});
