import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ImageBackground,
  ImageSourcePropType,
} from 'react-native';
import Feather from 'react-native-vector-icons/Feather';

// Interface props card
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
      style={cardStyles.container}
      activeOpacity={0.85}
      onPress={onPress}
    >
      <ImageBackground
        source={imageUrl}
        style={cardStyles.imageBackground}
        imageStyle={cardStyles.imageStyle} // moved inline -> stylesheet reference
      >
        {/* Heart Icon (Top Right) */}
        <TouchableOpacity style={cardStyles.heartButton} activeOpacity={0.8}>
          <Feather name="heart" size={18} color="white" />
        </TouchableOpacity>

        {/* Content Overlay (Bottom) */}
        <View style={cardStyles.overlay}>
          <View style={cardStyles.locationContainer}>
            <Text style={cardStyles.titleText}>{title}</Text>
            <Text style={cardStyles.locationText}>{country}</Text>
          </View>

          <View style={cardStyles.infoRow}>
            <View>
              <Text style={cardStyles.priceText}>{price}</Text>
            </View>

            <View style={cardStyles.ratingPriceContainer}>
              <Text style={cardStyles.ratingText}>{rating.toFixed(1)}</Text>
            </View>
          </View>
        </View>
      </ImageBackground>
    </TouchableOpacity>
  );
};

const cardStyles = StyleSheet.create({
  container: {
    width: '100%',
    height: 250,
    marginBottom: 20,
    borderRadius: 20,
    overflow: 'hidden',
    // Shadow Styling
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
    fontFamily: 'PlusJakartaSans-Regular',
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
    fontFamily: 'PlusJakartaSans-Bold',
    fontSize: 20,
    color: 'white',
    maxWidth: '70%',
  },
  ratingPriceContainer: {
    alignItems: 'flex-end',
  },
  ratingText: {
    fontFamily: 'PlusJakartaSans-SemiBold',
    backgroundColor: 'rgba(0,0,0,0.5)',
    paddingHorizontal: 8,
    paddingVertical: 2,
    borderRadius: 10,
    color: 'white',
    fontSize: 12,
    marginBottom: 5,
  },
  priceText: {
    fontFamily: 'PlusJakartaSans-Bold',
    fontSize: 16,
    color: '#00C7B1', // Teal Color
  },
});

export default DestinationCard;
