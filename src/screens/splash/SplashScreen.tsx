import { StyleSheet, View } from 'react-native';
import React, { useEffect } from 'react';
import { useNavigation } from '@react-navigation/native';
import LocalizedText from '../../components/common/LocalizedText';
import FastImage from '@d11/react-native-fast-image';
import Animated, { ZoomIn, FadeInUp, Easing } from 'react-native-reanimated';

const SplashScreen = () => {
  const navigation = useNavigation<any>();

  useEffect(() => {
    // Navigate after 2 seconds
    const timer = setTimeout(() => {
      navigation.replace('MainTabs');
    }, 2500);

    return () => clearTimeout(timer);
  }, [navigation]);

  return (
    <View style={styles.container}>
      <Animated.View
        entering={ZoomIn.duration(800).easing(Easing.out(Easing.ease))}
      >
        <FastImage
          source={require('../../assets/city_pulse.png')}
          style={styles.logo}
          resizeMode={FastImage.resizeMode.contain}
        />
      </Animated.View>
      <Animated.View
        style={styles.textContainer}
        entering={FadeInUp.delay(800)
          .duration(600)
          .easing(Easing.out(Easing.ease))}
      >
        <LocalizedText i18nKey="splash.welcome" style={styles.welcomeText} />
      </Animated.View>
    </View>
  );
};

export default SplashScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  logo: {
    width: 200,
    height: 200,
  },
  textContainer: {
    marginTop: 32,
    paddingHorizontal: 32,
  },
  welcomeText: {
    fontSize: 18,
    fontWeight: '500',
    color: '#666',
    textAlign: 'center',
  },
});
