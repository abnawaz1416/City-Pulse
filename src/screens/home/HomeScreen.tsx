import { useNavigation } from '@react-navigation/native';
import React, { useState } from 'react';
import { StyleSheet, View } from 'react-native';
import { Event } from '../../common/types/event.types';

import EventSearch from '../../components/home/EventSearch';
import EventList from '../../components/home/EventList';

const HomeScreen = () => {
  const navigation = useNavigation<any>();
  const [searchKeyword, setSearchKeyword] = useState<string | undefined>();
  const [searchCity, setSearchCity] = useState<string | undefined>();

  const handleEventPress = (event: Event) => {
    navigation.navigate('EventDetail', {
      id: event.id,
    });
  };

  const handleSearch = (keyword: string, city: string) => {
    setSearchKeyword(keyword.trim() || undefined);
    setSearchCity(city.trim() || undefined);
  };

  return (
    <View style={styles.container}>
      <EventSearch onSearch={handleSearch} />
      <EventList
        onEventPress={handleEventPress}
        keyword={searchKeyword}
        city={searchCity}
      />
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
