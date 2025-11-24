import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import LocalizedText from '../common/LocalizedText';
import { Venue } from '../../common/types/event.details.types';

interface VenueCardProps {
  venue: Venue;
}
const VenueCard = ({ venue }: VenueCardProps) => {
  return (
    <View style={styles.card}>
      <View style={styles.cardHeader}>
        <Text style={styles.cardIcon}>📍</Text>
        <LocalizedText i18nKey="eventDetail.venue" style={styles.cardTitle} />
      </View>
      <View style={styles.infoRow}>
        <LocalizedText style={styles.label} i18nKey="eventDetail.name" />
        <Text style={styles.value}>{venue.name}</Text>
      </View>
      <View style={styles.infoRow}>
        <LocalizedText i18nKey="eventDetail.location" style={styles.label} />

        <Text style={styles.value}>
          {venue.city.name}
          {venue.state && `, ${venue.state.name}`}
          {venue.country && `, ${venue.country.name}`}
        </Text>
      </View>
      {venue.address && (
        <View style={styles.infoRow}>
          <LocalizedText style={styles.label} i18nKey="eventDetail.address" />
          <Text style={styles.value}>{venue.address.line1}</Text>
        </View>
      )}
      {venue.postalCode && (
        <View style={styles.infoRow}>
          <LocalizedText
            style={styles.label}
            i18nKey="eventDetail.postalCode"
          />
          <Text style={styles.value}>{venue.postalCode}</Text>
        </View>
      )}
    </View>
  );
};

export default VenueCard;

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
  infoRow: {
    flexDirection: 'row',
    marginBottom: 12,
    flexWrap: 'wrap',
  },
  label: {
    fontSize: 15,
    fontWeight: '600',
    color: '#666',
    marginEnd: 12,
    minWidth: 100,
  },
  value: {
    fontSize: 15,
    color: '#1a1a1a',
    flex: 1,
    fontWeight: '400',
    textAlign: 'left',
  },
});
