import { useState } from 'react';
import useUserStore from '../store/useUserStore';
import {
  isSensorAvailable,
  simplePrompt,
} from '@sbaiahmed1/react-native-biometrics';

export const useLogin = () => {
  const [loading, setLoading] = useState(false);
  const setUser = useUserStore(state => state.setUser);
  const isAuthenticated = useUserStore(state => state.user !== null);
  const logout = useUserStore(state => state.logout);

  const handleUserSignIn = async (
    email: string,
    password: string,
  ): Promise<boolean> => {
    setLoading(true);
    if (email === 'user@example.com' && password === 'password123') {
      setUser({ name: 'John Doe', email, token: '1234567890' });
      await new Promise(resolve => setTimeout(resolve as () => void, 1000));
      setLoading(false);
      return true;
    }
    setLoading(false);
    return false;
  };

  const handleBiometricLogin = async () => {
    setLoading(true);
    try {
      const sensorInfo = await isSensorAvailable();
      if (sensorInfo.available && sensorInfo.biometryType === 'FaceID') {
        const result = await simplePrompt('Confirm fingerprint');
        if (result) {
          setUser({
            name: 'John Doe',
            email: 'user@example.com',
            token: '1234567890',
          });
          await new Promise(resolve => setTimeout(resolve as () => void, 1000));
          setLoading(false);
          return true;
        } else {
          console.log('User cancelled or authentication failed');
        }
      } else {
        console.log(
          '❌ Biometric authentication not available:',
          sensorInfo.error,
        );
      }
    } catch (error) {
      console.error('💥 Authentication error:', error);
    }
    setLoading(false);
    return false;
  };

  return {
    loading,
    handleUserSignIn,
    isAuthenticated,
    logout,
    handleBiometricLogin,
  };
};
