import React, { useEffect, useState } from 'react';
import {
  View,
  Text,
  Image,
  ActivityIndicator,
  ScrollView,
  StatusBar,
  ImageSourcePropType,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';
import type { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootStackParamList } from '../App';
import { getDestination, Destination } from '../services/api';
import { ASSET_MAP } from '../assets/assetMap';

type Props = NativeStackScreenProps<RootStackParamList, 'LabuanBajoDetail'>;

const LabuanBajoDetail: React.FC<Props> = ({ navigation, route }) => {
  // assume navigation passed { id: string } from HomeScreen
  const { id, destination } = route.params as any;
  const [data, setData] = useState<Destination | null>(destination ?? null);
  const [loading, setLoading] = useState(!destination);
  const [error, setError] = useState<string | null>(null);
  const [quantity, setQuantity] = React.useState(1);

  useEffect(() => {
    if (data) return;
    let mounted = true;
    getDestination(id)
      .then(d => mounted && setData(d))
      .catch(e => mounted && setError(e.message))
      .finally(() => mounted && setLoading(false));
    return () => {
      mounted = false;
    };
  }, [id]);

  const increaseQuantity = () => setQuantity(q => q + 1);
  const decreaseQuantity = () => setQuantity(q => (q > 1 ? q - 1 : q));

  // fallback mapping from destination.id -> asset key
  const ID_TO_ASSET_KEY: { [key: string]: string } = {
    '1': 'lb',
    '2': 'venice',
    '3': 'sumba',
  };

  // choose image: prefer passed imageUrl, else fallback via id mapping
  const image: ImageSourcePropType | undefined =
    destination?.imageUrl ??
    ASSET_MAP[ID_TO_ASSET_KEY[destination?.id ?? '1']] ??
    undefined;

  if (loading) return <ActivityIndicator style={styles.activityIndicator} />;
  if (error)
    return (
      <View>
        <Text>{error}</Text>
      </View>
    );
  if (!data) return null;

  return (
    <View style={styles.container}>
      <StatusBar
        barStyle="light-content"
        translucent
        backgroundColor="transparent"
      />

      {image ? (
        <Image source={image} style={styles.headerImage} resizeMode="cover" />
      ) : null}

      <ScrollView style={styles.contentSection}>
        <View style={styles.countryBadge}>
          <View style={styles.flagCircle}>
            <Text style={styles.flagEmoji}>🇮🇩</Text>
          </View>
          <Text style={styles.countryText}>{destination?.country ?? ''}</Text>
        </View>

        <Text style={styles.mainTitle}>
          Discover the Beauty of {destination?.title ?? 'this place'}
        </Text>

        <View style={styles.reviewCard}>
          <View style={styles.reviewHeader}>
            <View style={styles.avatarCircle}>
              <Text style={styles.avatarText}>R</Text>
            </View>
            <View style={styles.reviewInfo}>
              <Text style={styles.reviewerName}>By Rifqi starboy</Text>
            </View>
          </View>

          <Text style={styles.reviewText}>
            Wow amazing yahh, best experience in my life very very worth it I
            like it!
          </Text>
        </View>

        <TouchableOpacity style={styles.viewAllButton}>
          <Text style={styles.viewAllText}>View All</Text>
        </TouchableOpacity>

        {/* Recommendation example */}
        <View style={styles.recommendationSection}>
          <Text style={styles.recommendationTitle}>Recommendation in Bajo</Text>
          <View style={styles.tripCard}>
            <Image
              source={image}
              style={styles.tripImage}
              imageStyle={styles.tripImageStyle}
            >
              <View style={styles.tripOverlay} />
            </Image>
            <View style={styles.tripInfo}>
              <Text style={styles.tripTitle}>Phinisi Luxury Private Trip</Text>
              <View style={styles.tripFeature}>
                <Text style={styles.tripFeatureIcon}>🚢</Text>
                <Text style={styles.tripFeatureText}>
                  Complimentary pick-up
                </Text>
              </View>
            </View>
          </View>
        </View>
      </ScrollView>

      <View style={styles.bookingBar}>
        <View style={styles.quantityControl}>
          <TouchableOpacity
            style={styles.quantityButton}
            onPress={increaseQuantity}
          >
            <Text style={styles.quantityButtonText}>+</Text>
          </TouchableOpacity>
          <Text style={styles.quantity}>{quantity}</Text>
          <TouchableOpacity
            style={styles.quantityButton}
            onPress={decreaseQuantity}
          >
            <Text style={styles.quantityButtonText}>-</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.priceSection}>
          <Text style={styles.totalAmountLabel}>Total Amount</Text>
          <Text style={styles.price}>${(10.0 * quantity).toFixed(3)}</Text>
        </View>

        <TouchableOpacity style={styles.bookButton}>
          <Text style={styles.bookButtonText}>Book Now</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#fff' },
  activityIndicator: { flex: 1 },
  headerImage: { height: 380, width: '100%' },
  headerOverlay: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.3)',
    justifyContent: 'space-between',
  },
  topBar: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingTop: 50,
  },
  backButton: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: 'rgba(255,255,255,0.2)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  backButtonText: { color: '#fff', fontSize: 24, fontWeight: 'bold' },
  topRight: { flexDirection: 'row', alignItems: 'center' },
  time: { color: '#fff', fontSize: 14, fontWeight: '600' },
  weatherBox: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'rgba(255,255,255,0.25)',
    paddingHorizontal: 12,
    paddingVertical: 8,
    borderRadius: 20,
    marginLeft: 10,
  },
  weatherIcon: { fontSize: 14 },
  temperature: { color: '#fff', fontSize: 14, fontWeight: '600' },
  imageBottomInfo: { paddingHorizontal: 20, paddingBottom: 25 },
  ratingBox: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'rgba(255,255,255,0.9)',
    paddingHorizontal: 10,
    paddingVertical: 6,
    borderRadius: 15,
    alignSelf: 'flex-start',
    marginBottom: 12,
  },
  starIcon: { fontSize: 14 },
  rating: { color: '#333', fontSize: 14, fontWeight: 'bold' },
  locationTitle: {
    fontSize: 32,
    fontWeight: 'bold',
    color: '#fff',
    marginBottom: 8,
  },
  locationDescription: {
    fontSize: 13,
    color: '#fff',
    lineHeight: 19,
    opacity: 0.95,
  },
  contentSection: {
    flex: 1,
    backgroundColor: '#fff',
    paddingHorizontal: 20,
    paddingTop: 20,
    paddingBottom: 100,
  },
  countryBadge: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 15,
  },
  flagCircle: {
    width: 28,
    height: 28,
    borderRadius: 14,
    backgroundColor: '#f0f0f0',
    justifyContent: 'center',
    alignItems: 'center',
  },
  flagEmoji: { fontSize: 16 },
  countryText: { fontSize: 14, color: '#666', fontWeight: '500' },
  mainTitle: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#1a1a1a',
    marginBottom: 20,
  },
  reviewCard: {
    backgroundColor: '#f8f8f8',
    borderRadius: 12,
    padding: 15,
    marginBottom: 12,
  },
  reviewHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
  avatarCircle: {
    width: 32,
    height: 32,
    borderRadius: 16,
    backgroundColor: '#42E0D1',
    justifyContent: 'center',
    alignItems: 'center',
  },
  avatarText: { color: '#fff', fontWeight: 'bold', fontSize: 16 },
  reviewInfo: { flex: 1 },
  reviewerName: { fontSize: 14, color: '#333', fontWeight: '600' },
  reviewText: { fontSize: 13, color: '#555', lineHeight: 19 },
  viewAllButton: {
    alignSelf: 'center',
    paddingVertical: 8,
    paddingHorizontal: 20,
    marginBottom: 20,
  },
  viewAllText: { fontSize: 14, color: '#42E0D1', fontWeight: '600' },
  recommendationSection: { marginBottom: 20 },
  recommendationTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#1a1a1a',
    backgroundColor: '#FFE4B5',
    paddingHorizontal: 12,
    paddingVertical: 6,
    alignSelf: 'flex-start',
    marginBottom: 15,
  },
  tripCard: {
    flexDirection: 'row',
    backgroundColor: '#fff',
    borderRadius: 12,
    overflow: 'hidden',
    borderWidth: 1,
    borderColor: '#e0e0e0',
  },
  tripImage: { width: 120, height: 100 },
  tripImageStyle: { borderTopLeftRadius: 12, borderBottomLeftRadius: 12 },
  tripOverlay: { flex: 1, backgroundColor: 'rgba(0,0,0,0.1)' },
  tripInfo: { flex: 1, padding: 12, justifyContent: 'center' },
  tripTitle: {
    fontSize: 15,
    fontWeight: 'bold',
    color: '#1a1a1a',
    marginBottom: 8,
  },
  tripFeature: { flexDirection: 'row', alignItems: 'center' },
  tripFeatureIcon: { fontSize: 14 },
  tripFeatureText: { fontSize: 12, color: '#666' },
  bookingBar: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    backgroundColor: '#2c3e50',
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
    paddingHorizontal: 20,
    paddingVertical: 20,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  quantityControl: { flexDirection: 'row', alignItems: 'center' },
  quantityButton: {
    width: 32,
    height: 32,
    borderRadius: 16,
    backgroundColor: '#FF6347',
    justifyContent: 'center',
    alignItems: 'center',
  },
  quantityButtonText: { color: '#fff', fontSize: 20, fontWeight: 'bold' },
  quantity: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#fff',
    minWidth: 25,
    textAlign: 'center',
  },
  priceSection: { alignItems: 'flex-end' },
  totalAmountLabel: { fontSize: 11, color: '#bbb', marginBottom: 2 },
  price: { fontSize: 18, fontWeight: 'bold', color: '#fff' },
  bookButton: {
    backgroundColor: '#FF6347',
    paddingHorizontal: 35,
    paddingVertical: 12,
    borderRadius: 25,
  },
  bookButtonText: { color: '#fff', fontWeight: 'bold', fontSize: 15 },
});

export default LabuanBajoDetail;
