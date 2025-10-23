import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  ImageBackground,
  TouchableOpacity,
} from 'react-native';
import Feather from 'react-native-vector-icons/Feather';

// Interface props card
interface CardProps {
  title: string;
  country: string;
  rating: number;
  price: string;
  imageUrl: string;
}

const DestinationCard: React.FC<CardProps> = ({
  title,
  country,
  rating,
  price,
  imageUrl,
}) => {
  return (
    <TouchableOpacity style={cardStyles.container} activeOpacity={0.8}>
      <ImageBackground
        source={{ uri: imageUrl }}
        style={cardStyles.imageBackground}
        imageStyle={cardStyles.imageStyle}
      >
        {/* Heart Icon (Top Right) */}
        <TouchableOpacity style={cardStyles.heartButton}>
          <Feather name="heart" size={20} color="white" />
        </TouchableOpacity>

        {/* Content Overlay (Bottom) */}
        <View style={cardStyles.overlay}>
          <View style={cardStyles.locationContainer}>
            <Feather name="map-pin" size={14} color="white" />
            <Text style={cardStyles.locationText}>{country}</Text>
          </View>

          <View style={cardStyles.infoRow}>
            <Text style={cardStyles.titleText}>{title}</Text>

            <View style={cardStyles.ratingPriceContainer}>
              <Text style={cardStyles.ratingText}>⭐ {rating.toFixed(1)}</Text>
              <Text style={cardStyles.priceText}>${price}</Text>
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
    backgroundColor: 'rgba(0,0,0,0.4)',
    padding: 8,
    borderRadius: 20,
  },
  overlay: {
    padding: 15,
    backgroundColor: 'rgba(0, 0, 0, 0.4)', // Overlay gelap di bagian bawah
  },
  locationContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 5,
  },
  locationText: {
    fontFamily: 'PlusJakartaSans-Regular',
    color: 'white',
    marginLeft: 5,
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
    maxWidth: '60%',
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
