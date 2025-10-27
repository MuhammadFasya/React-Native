import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ImageBackground,
  ImageSourcePropType,
} from 'react-native';
import { Feather } from '@expo/vector-icons';

interface CardProps {
  id?: string;
  title: string;
  country: string;
  rating: number;
  price: string;
  imageUrl: ImageSourcePropType;
  onPress?: () => void;
}

const DestinationCard: React.FC<CardProps> = ({
  title,
  country,
  rating,
  price,
  imageUrl,
  onPress,
}) => {
  return (
    <TouchableOpacity
      style={styles.container}
      activeOpacity={0.85}
      onPress={onPress}
    >
      <ImageBackground
        source={imageUrl}
        style={styles.imageBackground}
        imageStyle={styles.imageStyle}
      >
        <TouchableOpacity style={styles.heartButton} activeOpacity={0.8}>
          <Feather name="heart" size={18} color="white" />
        </TouchableOpacity>

        <View style={styles.overlay}>
          <View style={styles.locationContainer}>
            <Text style={styles.titleText}>{title}</Text>
            <Text style={styles.locationText}>{country}</Text>
          </View>

          <View style={styles.infoRow}>
            <Text style={styles.priceText}>{price}</Text>
            <Text style={styles.ratingText}>{rating.toFixed(1)}</Text>
          </View>
        </View>
      </ImageBackground>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: 250,
    marginBottom: 20,
    borderRadius: 20,
    overflow: 'hidden',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 5,
  },
  imageBackground: {
    flex: 1,
    justifyContent: 'flex-end',
  },
  imageStyle: {
    borderRadius: 20,
  },
  heartButton: {
    position: 'absolute',
    top: 15,
    right: 15,
    backgroundColor: 'rgba(0,0,0,0.35)',
    padding: 8,
    borderRadius: 20,
    zIndex: 2,
  },
  overlay: {
    padding: 15,
    backgroundColor: 'rgba(0, 0, 0, 0.35)',
  },
  locationContainer: {
    marginBottom: 8,
  },
  locationText: {
    color: 'white',
    marginTop: 4,
    fontSize: 14,
  },
  infoRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-end',
  },
  titleText: {
    fontWeight: '700',
    fontSize: 20,
    color: 'white',
    maxWidth: '70%',
  },
  ratingText: {
    color: 'white',
    backgroundColor: 'rgba(0,0,0,0.5)',
    paddingHorizontal: 8,
    paddingVertical: 2,
    borderRadius: 10,
    fontSize: 12,
  },
  priceText: {
    fontWeight: '700',
    fontSize: 16,
    color: '#00C7B1',
  },
});

export default DestinationCard;
