import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import FastImage from '@d11/react-native-fast-image';
import useUserStore from '../../common/store/useUserStore';

const ProfileHeader = () => {
  const { user } = useUserStore();

  // Default avatar if user is not logged in
  const avatarUri = user
    ? `https://ui-avatars.com/api/?name=${encodeURIComponent(user.name)}&background=007AFF&color=fff&size=200`
    : 'https://i.pravatar.cc/300';

  return (
    <View style={[styles.card]}>
      <FastImage source={{ uri: avatarUri }} style={styles.avatar} />

      <View style={[styles.userInfo]}>
        <Text style={[styles.userName]}>
          {user?.name || 'Guest User'}
        </Text>
        <Text style={[styles.userEmail]}>
          {user?.email || 'Not logged in'}
        </Text>
      </View>
    </View>
  );
};

export default ProfileHeader;

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#FFFFFF',
    marginHorizontal: 20,
    marginTop: 20,
    padding: 20,
    borderRadius: 16,
    // Shadow
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.08,
    shadowRadius: 12,
    elevation: 5,
    alignItems: 'center',
  },
  avatar: {
    width: 70,
    height: 70,
    borderRadius: 35,
  },
  userInfo: {
    flex: 1,
    justifyContent: 'center',
    marginStart: 15,
    alignItems: 'center',
    marginTop: 5,
  },
  userName: {
    fontSize: 20,
    fontWeight: '700',
    color: '#1A1A1A',
  },
  userEmail: {
    fontSize: 14,
    color: '#8E8E93',
  },
  statsRow: {
    alignItems: 'center',
    flexDirection: 'row',
  },
  stat: {
    alignItems: 'center',
  },
  statNumber: {
    fontSize: 16,
    fontWeight: '700',
    color: '#007AFF',
  },
  statLabel: {
    fontSize: 12,
    color: '#8E8E93',
  },
  statDivider: {
    width: 1,
    height: 24,
    backgroundColor: '#E5E5EA',
    marginHorizontal: 20,
  },
});
