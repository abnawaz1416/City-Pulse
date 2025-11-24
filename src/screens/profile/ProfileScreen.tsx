import React, { useRef } from 'react';
import {
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Alert,
} from 'react-native';
import LocalizedText from '../../components/common/LocalizedText';
import ProfileHeader from '../../components/profile/ProfileHeaer';
import ProfileListItem from '../../components/profile/ProfileListItem';
import LanguageBottomSheet from '../../components/profile/LanguageBottomSheet';
import { BottomSheetModal } from '@gorhom/bottom-sheet';
import ProfileLanguageItem from '../../components/profile/ProfileLanguageItem';
import { useNavigation } from '@react-navigation/native';
import { useLogin } from '../../common/hooks/useLogin';

const ProfileScreen = () => {
  const navigation = useNavigation<any>();
  const languageBottomSheetModalRef = useRef<BottomSheetModal>(null);
  const { logout } = useLogin();

  const onDismissLanguageBottomSheet = () => {
    languageBottomSheetModalRef.current?.dismiss();
  };

  const handleFavorites = () => {
    navigation.navigate('Favorite');
  };

  const handleChangeLanguage = () => {
    languageBottomSheetModalRef.current?.present();
  };

  const handleLogout = () => {
    Alert.alert('Logout', 'Are you sure you want to logout?', [
      {
        text: 'Cancel',
        style: 'cancel',
      },
      {
        text: 'Logout',
        style: 'destructive',
        onPress: async () => {
          logout();
          navigation.reset({
            index: 0,
            routes: [{ name: 'Login' }],
          });
        },
      },
    ]);
  };

  return (
    <>
      <LanguageBottomSheet
        ref={languageBottomSheetModalRef}
        dismissBottomSheet={onDismissLanguageBottomSheet}
      />

      <ScrollView
        style={styles.container}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.contentContainer}
      >
        <ProfileHeader />

        <ProfileListItem
          onPress={handleFavorites}
          icon="❤️"
          title="profile.favoriteEvents"
          subtitle="profile.viewSavedEvents"
        />

        <ProfileLanguageItem onPress={handleChangeLanguage} />

        <View style={styles.section}>
          <TouchableOpacity
            style={[styles.menuItem, styles.logoutItem]}
            onPress={handleLogout}
            activeOpacity={0.7}
          >
            <View style={styles.menuItemLeft}>
              <Text style={[styles.menuIcon, styles.logoutIcon]}>🚪</Text>
              <Text style={[styles.menuItemTitle, styles.logoutText]}>
                <LocalizedText i18nKey="common.logout" />
              </Text>
            </View>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </>
  );
};

export default ProfileScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  contentContainer: {
    paddingBottom: 32,
  },
  section: {
    marginTop: 24,
    marginHorizontal: 20,
  },
  sectionTitle: {
    fontSize: 14,
    fontWeight: '600',
    color: '#8E8E93',
    marginBottom: 12,
    marginStart: 4,
    textTransform: 'uppercase',
    letterSpacing: 0.5,
  },
  menuItem: {
    backgroundColor: '#fff',
    borderRadius: 12,
    padding: 16,
    marginBottom: 8,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.05,
    shadowRadius: 3,
    elevation: 2,
  },
  menuItemLeft: {
    flexDirection: 'row',
    alignItems: 'center',
    flex: 1,
  },
  menuIcon: {
    fontSize: 24,
    marginEnd: 16,
  },
  menuItemContent: {
    flex: 1,
  },
  menuItemTitle: {
    fontSize: 16,
    fontWeight: '600',
    color: '#1a1a1a',
    marginBottom: 4,
  },
  logoutItem: {
    backgroundColor: '#fff',
    borderWidth: 1,
    borderColor: '#FF3B30',
  },
  logoutIcon: {
    fontSize: 24,
  },
  logoutText: {
    color: '#FF3B30',
    marginBottom: 0,
  },
});
