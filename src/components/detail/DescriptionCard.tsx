import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import LocalizedText from '../common/LocalizedText';

interface DescriptionCardProps {
  description: string;
}
const DescriptionCard = ({ description }: DescriptionCardProps) => {
  return (
    <View style={styles.card}>
      <View style={styles.cardHeader}>
        <Text style={styles.cardIcon}>ℹ️</Text>
        <LocalizedText
          i18nKey="eventDetail.pleaseNote"
          style={styles.cardTitle}
        />
      </View>
      <Text style={styles.description}>{description}</Text>
    </View>
  );
};

export default DescriptionCard;

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#fff',
    borderRadius: 12,
    padding: 16,
    marginBottom: 16,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  cardHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 16,
    paddingBottom: 12,
    borderBottomWidth: 1,
    borderBottomColor: '#f0f0f0',
  },
  cardIcon: {
    fontSize: 20,
    marginEnd: 8,
  },
  cardTitle: {
    fontSize: 18,
    fontWeight: '700',
    color: '#1a1a1a',
  },
  description: {
    fontSize: 15,
    color: '#333',
    lineHeight: 24,
    marginTop: 4,
  },
});
