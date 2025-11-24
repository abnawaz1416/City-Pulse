import {
  I18nManager,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';
import LocalizedText from '../common/LocalizedText';

interface ProfileListItemProps {
  onPress: () => void;
  icon: string;
  title: string;
  subtitle: string;
}
const ProfileListItem = ({
  onPress,
  icon,
  title,
  subtitle,
}: ProfileListItemProps) => {
  const chevron = I18nManager.isRTL ? '‹' : '›';
  return (
    <View style={styles.section}>
      <TouchableOpacity
        style={styles.menuItem}
        onPress={onPress}
        activeOpacity={0.7}
      >
        <View style={styles.menuItemLeft}>
          <Text style={styles.menuIcon}>{icon}</Text>
          <View style={styles.menuItemContent}>
            <LocalizedText i18nKey={title} style={styles.menuItemTitle} />

            <LocalizedText i18nKey={subtitle} style={styles.menuItemSubtitle} />
          </View>
        </View>
        <Text style={styles.chevron}>{chevron}</Text>
      </TouchableOpacity>
    </View>
  );
};

export default ProfileListItem;

const styles = StyleSheet.create({
  section: {
    marginTop: 24,
    marginHorizontal: 20,
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
    alignItems: 'flex-start',
  },
  menuItemTitle: {
    fontSize: 16,
    fontWeight: '600',
    color: '#1a1a1a',
    marginBottom: 4,
  },
  menuItemSubtitle: {
    fontSize: 14,
    color: '#8E8E93',
  },
  chevron: {
    fontSize: 24,
    color: '#C7C7CC',
    fontWeight: '300',
  },
});
