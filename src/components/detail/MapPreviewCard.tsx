import {
  I18nManager,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';
import LocalizedText from '../common/LocalizedText';
import { Venue } from '../../common/types/event.details.types';
import { showLocation } from 'react-native-map-link';

interface MapPreviewCardProps {
  venue: Venue;
}

const MapPreviewCard = ({ venue }: MapPreviewCardProps) => {
  const fullAddress = [
    venue.address?.line1,
    venue.city.name,
    venue.state?.name,
    venue.country.name,
  ]
    .filter(Boolean)
    .join(', ');

  const handleOpenMaps = () => {
    showLocation({
      latitude: Number(venue.location.latitude),
      longitude: Number(venue.location.longitude),
      title: venue.name,
    });
  };

  return (
    <View style={styles.card}>
      <View style={styles.cardHeader}>
        <Text style={styles.cardIcon}>🗺️</Text>
        <LocalizedText
          i18nKey="eventDetail.location"
          style={styles.cardTitle}
        />
      </View>

      <View style={styles.mapContainer}>
        <View style={styles.mapPlaceholder}>
          <View style={styles.mapContent}>
            <Text style={styles.mapIcon}>📍</Text>
          </View>
          <View style={styles.mapGrid}>
            {Array.from({ length: 16 }).map((_, i) => (
              <View key={i} style={styles.gridLine} />
            ))}
          </View>
        </View>
        <View style={styles.mapOverlay}>
          <Text style={styles.mapLabel}>Google Maps</Text>
        </View>
      </View>

      <View style={styles.addressContainer}>
        <Text style={styles.addressText} numberOfLines={2}>
          {fullAddress}
        </Text>
      </View>

      <TouchableOpacity
        style={styles.openMapsButton}
        onPress={handleOpenMaps}
        activeOpacity={0.8}
      >
        <Text style={styles.openMapsIcon}>🗺️</Text>
        <LocalizedText
          i18nKey="eventDetail.viewOnGoogleMaps"
          style={styles.openMapsText}
        />
        <Text style={styles.chevron}>{I18nManager.isRTL ? '‹' : '›'}</Text>
      </TouchableOpacity>
    </View>
  );
};

export default MapPreviewCard;

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
    marginBottom: 12,
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
  mapContainer: {
    position: 'relative',
    height: 180,
    borderRadius: 8,
    overflow: 'hidden',
    marginBottom: 12,
    backgroundColor: '#f5f5f5',
  },
  mapPlaceholder: {
    width: '100%',
    height: '100%',
    backgroundColor: '#e8f5e9',
    position: 'relative',
    overflow: 'hidden',
  },
  mapContent: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    justifyContent: 'center',
    alignItems: 'center',
    zIndex: 2,
  },
  mapIcon: {
    fontSize: 32,
  },
  mapGrid: {
    position: 'absolute',
    width: '100%',
    height: '100%',
    flexDirection: 'row',
    flexWrap: 'wrap',
    opacity: 0.1,
  },
  gridLine: {
    width: '25%',
    height: '25%',
    borderRightWidth: 1,
    borderBottomWidth: 1,
    borderColor: '#666',
  },
  mapOverlay: {
    position: 'absolute',
    top: 8,
    right: 8,
    backgroundColor: 'rgba(255, 255, 255, 0.9)',
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 4,
    flexDirection: 'row',
    alignItems: 'center',
  },
  mapLabel: {
    fontSize: 10,
    fontWeight: '600',
    color: '#1a1a1a',
  },
  addressContainer: {
    marginBottom: 12,
  },
  addressText: {
    fontSize: 14,
    color: '#666',
    lineHeight: 20,
  },
  openMapsButton: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#f8f9fa',
    paddingVertical: 12,
    paddingHorizontal: 16,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: '#e0e0e0',
  },
  openMapsIcon: {
    fontSize: 18,
    marginEnd: 8,
  },
  openMapsText: {
    fontSize: 15,
    fontWeight: '600',
    color: '#1a73e8',
    flex: 1,
    textAlign: 'left',
  },
  chevron: {
    fontSize: 24,
    color: '#1a73e8',
    fontWeight: '300',
  },
});
