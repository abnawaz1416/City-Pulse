import React from 'react';
import { StyleSheet, TouchableOpacity, View } from 'react-native';
import LocalizedText from './LocalizedText';
import { Octicons } from '@react-native-vector-icons/octicons';

type RadioItemProps = {
  text: string;
  selected: boolean;
  onPress: () => void;
};

const RadioItem = ({ text, selected, onPress }: RadioItemProps) => {
  return (
    <TouchableOpacity
      style={styles.container}
      disabled={selected}
      onPress={onPress}
    >
      {selected ? (
        <Octicons name="check-circle" style={styles.icon} />
      ) : (
        <Octicons name="circle" style={styles.unselectedIcon} />
      )}

      <View style={styles.spacer} />
      <LocalizedText i18nKey={text} style={styles.text} />
    </TouchableOpacity>
  );
};

export default RadioItem;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    borderBottomWidth: 1,
    borderBottomColor: '#f0f0f0',
    paddingVertical: 17.5,
    width: '100%',
  },
  icon: {
    color: '#007AFF',
    fontSize: 24,
  },
  unselectedIcon: {
    color: '#000',
    fontSize: 24,
  },
  text: {
    fontSize: 16,
    fontWeight: '500',
  },
  spacer: {
    width: 12,
  },
});
