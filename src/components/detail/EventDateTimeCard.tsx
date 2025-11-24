import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import LocalizedText from '../common/LocalizedText';
import {
  formatDate,
  formatDateTime,
  formatTime,
} from '../../common/utils/util';

interface EventDateTimeCardProps {
  dateTime: string;
  startDate: string;
  startTime: string;
}
const EventDateTimeCard = ({
  dateTime,
  startDate,
  startTime,
}: EventDateTimeCardProps) => {
  return (
    <View style={styles.card}>
      <View style={styles.cardHeader}>
        <Text style={styles.cardIcon}>📅</Text>
        <LocalizedText
          style={styles.cardTitle}
          i18nKey="eventDetail.dateAndTime"
        />
      </View>
      {dateTime ? (
        <>
          <View style={styles.infoRow}>
            <LocalizedText i18nKey="eventDetail.date" style={styles.label} />

            <Text style={styles.value}>
              {formatDate(dateTime, 'EEEE, MMMM d, yyyy')}
            </Text>
          </View>
          <View style={styles.infoRow}>
            <LocalizedText i18nKey="eventDetail.time" style={styles.label} />
            <Text style={styles.value}>
              {formatDateTime(dateTime, 'h:mm a')}
            </Text>
          </View>
        </>
      ) : (
        <>
          {startDate && (
            <View style={styles.infoRow}>
              <LocalizedText i18nKey="eventDetail.date" style={styles.label} />
              <Text style={styles.value}>
                {formatDate(startDate, 'EEEE, MMMM d, yyyy')}
              </Text>
            </View>
          )}
          {startTime && (
            <View style={styles.infoRow}>
              <LocalizedText i18nKey="eventDetail.time" style={styles.label} />
              <Text style={styles.value}>
                {formatTime(startTime, 'h:mm a')}
              </Text>
            </View>
          )}
        </>
      )}
    </View>
  );
};

export default EventDateTimeCard;

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
