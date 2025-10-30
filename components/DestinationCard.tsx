import React from 'react';
import {
  TouchableOpacity,
  View,
  Text,
  Image,
  ImageSourcePropType,
} from 'react-native';

interface CardProps {
  id?: string;
  title: string;
  country: string;
  rating?: number;
  price?: string;
  imageUrl?: ImageSourcePropType | { uri: string };
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
      onPress={onPress}
      style={{
        marginBottom: 12,
        borderRadius: 8,
        overflow: 'hidden',
        borderWidth: 1,
        borderColor: '#eee',
      }}
    >
      {imageUrl ? (
        <Image
          source={imageUrl as any}
          style={{ width: '100%', height: 140 }}
        />
      ) : (
        <View style={{ height: 140, backgroundColor: '#ddd' }} />
      )}
      <View style={{ padding: 12 }}>
        <Text style={{ fontWeight: '700' }}>{title}</Text>
        <Text style={{ color: '#666' }}>{country}</Text>
        <Text style={{ marginTop: 6 }}>${price}</Text>
      </View>
    </TouchableOpacity>
  );
};

export default DestinationCard;
