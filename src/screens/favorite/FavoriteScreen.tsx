import { StyleSheet, View } from 'react-native';
import React from 'react';
import { useNavigation } from '@react-navigation/native';
import { Event } from '../../common/types/event.types';
import { useFavorite } from '../../common/hooks/useFavorite';
import EmptyState from '../../components/common/EmptyState';
import EventFavoriteList from '../../components/favorite/EventFavoriteList';

const FavoriteScreen = () => {
  const navigation = useNavigation<any>();
  const { favorites, removeFavorite } = useFavorite();

  const handleEventPress = (event: Event) => {
    navigation.navigate('EventDetail', {
      id: event.id,
    });
  };
  const handleFavoritePress = (eventId: string) => {
    removeFavorite(eventId);
  };

  return (
    <View style={styles.container}>
      {favorites.length > 0 ? (
        <EventFavoriteList
          onEventPress={handleEventPress}
          favoritesIds={favorites}
          onFavoritePress={handleFavoritePress}
        />
      ) : (
        <EmptyState />
      )}
    </View>
  );
};

export default FavoriteScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
