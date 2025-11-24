import React, { useRef } from 'react';
import {
  StyleSheet,
  View,
  TouchableOpacity,
  KeyboardAvoidingView,
  Platform,
  ScrollView,
  Alert,
  ActivityIndicator,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import LocalizedText from '../../components/common/LocalizedText';
import { Dimension } from '../../common/constants/dimension';
import Animated, { FadeInDown } from 'react-native-reanimated';
import FastImage from '@d11/react-native-fast-image';
import { MaterialDesignIcons } from '@react-native-vector-icons/material-design-icons';
import LoginFooter from '../../components/auth/LoginFooter';
import LoginInput from '../../components/auth/LoginInput';
import { useLogin } from '../../common/hooks/useLogin';

const LoginScreen = () => {
  const navigation = useNavigation<any>();
  const emailRef = useRef<string>('');
  const passwordRef = useRef<string>('');
  const { handleUserSignIn, loading, handleBiometricLogin } = useLogin();

  const handleSignIn = async () => {
    if (!emailRef.current.trim() || !passwordRef.current.trim()) {
      Alert.alert('Error', 'Please fill in all fields');
      return;
    }
    const success = await handleUserSignIn(
      emailRef.current,
      passwordRef.current,
    );
    if (success) {
      navigation.replace('MainTabs');
    } else {
      Alert.alert('Error', 'Invalid credentials');
    }
  };

  const handleBiometricLoginClick = async () => {
    const success = await handleBiometricLogin();
    if (success) {
      navigation.replace('MainTabs');
    } else {
      Alert.alert('Error', 'Biometric authentication failed');
    }
  };

  return (
    <KeyboardAvoidingView
      style={styles.container}
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
    >
      <ScrollView
        contentContainerStyle={styles.scrollContent}
        keyboardShouldPersistTaps="handled"
      >
        <Animated.View
          entering={FadeInDown.duration(600)}
          style={styles.logoContainer}
        >
          <FastImage
            source={require('../../assets/city_pulse.png')}
            style={styles.logo}
            resizeMode={FastImage.resizeMode.contain}
          />
        </Animated.View>

        <Animated.View
          entering={FadeInDown.delay(200).duration(600)}
          style={styles.formContainer}
        >
          <LocalizedText style={styles.title} i18nKey="auth.signIn" />
          <LocalizedText
            style={styles.subtitle}
            i18nKey="auth.welcomeBack"
            fallback="Welcome back! Please sign in to continue"
          />

          <LoginInput
            labelText={'auth.email'}
            placeholderText={'auth.emailPlaceholder'}
            keyboardType="email-address"
            autoCapitalize="none"
            autoCorrect={false}
            textContentType="emailAddress"
            autoComplete="email"
            onChangeText={text => {
              emailRef.current = text;
            }}
          />
          <LoginInput
            labelText={'auth.password'}
            placeholderText={'auth.passwordPlaceholder'}
            secureTextEntry
            autoCapitalize="none"
            autoCorrect={false}
            textContentType="password"
            autoComplete="password"
            onChangeText={text => {
              passwordRef.current = text;
            }}
          />

          <View style={styles.buttonRow}>
            <TouchableOpacity
              style={[styles.signInButton, loading && styles.buttonDisabled]}
              onPress={handleSignIn}
              disabled={loading}
            >
              {loading ? (
                <ActivityIndicator color="#fff" />
              ) : (
                <LocalizedText
                  style={styles.signInButtonText}
                  i18nKey="auth.signIn"
                />
              )}
            </TouchableOpacity>

            <TouchableOpacity
              style={[styles.biometricButton, loading && styles.buttonDisabled]}
              onPress={handleBiometricLoginClick}
              disabled={loading}
            >
              {loading ? (
                <ActivityIndicator color="#007AFF" />
              ) : (
                <MaterialDesignIcons
                  name="fingerprint"
                  size={24}
                  color="#007AFF"
                />
              )}
            </TouchableOpacity>
          </View>
          <LoginFooter />
        </Animated.View>
      </ScrollView>
    </KeyboardAvoidingView>
  );
};

export default LoginScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  scrollContent: {
    paddingHorizontal: Dimension.sizeX(24),
    paddingTop: Dimension.sizeY(40),
    paddingBottom: Dimension.sizeY(40),
  },
  logoContainer: {
    alignItems: 'center',
    marginBottom: Dimension.sizeY(20),
  },
  logo: {
    width: Dimension.sizeX(120),
    height: Dimension.sizeY(120),
  },
  formContainer: {
    flex: 1,
  },
  title: {
    fontSize: Dimension.sizeX(32),
    fontWeight: '700',
    color: '#333',
    marginBottom: Dimension.sizeY(8),
  },
  subtitle: {
    fontSize: Dimension.sizeX(16),
    color: '#666',
    marginBottom: Dimension.sizeY(32),
  },
  buttonRow: {
    flexDirection: 'row',
    gap: Dimension.sizeX(12),
    marginTop: Dimension.sizeY(8),
    marginBottom: Dimension.sizeY(12),
  },
  signInButton: {
    flex: 1,
    height: Dimension.sizeY(52),
    backgroundColor: '#007AFF',
    borderRadius: Dimension.radius(12),
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonDisabled: {
    opacity: 0.6,
  },
  signInButtonText: {
    color: '#fff',
    fontSize: Dimension.sizeX(16),
    fontWeight: '600',
  },
  biometricButton: {
    width: Dimension.sizeY(52),
    height: Dimension.sizeY(52),
    borderWidth: 2,
    borderColor: '#007AFF',
    borderRadius: Dimension.radius(12),
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
});
