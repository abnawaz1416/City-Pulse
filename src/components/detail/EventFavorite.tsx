import { StyleSheet, TouchableOpacity } from 'react-native';
import React from 'react';
import { Octicons } from '@react-native-vector-icons/octicons';
import { useFavorite } from '../../common/hooks/useFavorite';

interface EventFavoriteProps {
  eventId: string;
}
const EventFavorite = ({ eventId }: EventFavoriteProps) => {
  const { addFavorite, removeFavorite, isFavorite } = useFavorite();

  const onFavoritePress = () => {
    if (isFavorite(eventId)) {
      removeFavorite(eventId);
    } else {
      addFavorite(eventId);
    }
  };

  return (
    <TouchableOpacity
      style={styles.favoriteButton}
      onPress={onFavoritePress}
      activeOpacity={0.7}
    >
      {isFavorite(eventId) ? (
        <Octicons name="heart-fill" size={24} color="red" />
      ) : (
        <Octicons name="heart" size={24} color="gray" />
      )}
    </TouchableOpacity>
  );
};

export default EventFavorite;

const styles = StyleSheet.create({
  favoriteButton: {
    width: 44,
    height: 44,
    borderRadius: 22,
    backgroundColor: '#fff',
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
    borderWidth: 1,
    borderColor: '#f0f0f0',
  },
  favoriteIcon: {
    fontSize: 24,
  },
});
