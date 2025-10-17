import React from 'react';
import {
  View,
  Text,
  ImageBackground,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
} from 'react-native';

const LabuanBajoDetail = ({ navigation }: any) => {
  const [quantity, setQuantity] = React.useState(1);

  const increaseQuantity = () => setQuantity(quantity + 1);
  const decreaseQuantity = () => {
    if (quantity > 1) setQuantity(quantity - 1);
  };

  return (
    <View style={styles.container}>
      {/* Header Section */}
      <ImageBackground
        source={require('../assets/lb.jpeg')}
        style={styles.headerImage}
        resizeMode="cover"
      >
        <View style={styles.headerOverlay}>
          <View style={styles.topBar}>
            <TouchableOpacity
              style={styles.backButton}
              onPress={() => navigation.goBack()}
            >
              <Text style={styles.backButtonText}>←</Text>
            </TouchableOpacity>

            <View style={styles.topRight}>
              <Text style={styles.time}>14:53</Text>
              <View style={styles.weatherBox}>
                <Text style={styles.weatherIcon}>☀️</Text>
                <Text style={styles.temperature}>24° C</Text>
              </View>
            </View>
          </View>

          {/* Bottom Info */}
          <View style={styles.imageBottomInfo}>
            <View style={styles.ratingBox}>
              <Text style={styles.starIcon}>⭐</Text>
              <Text style={styles.rating}>5.0</Text>
            </View>
            <Text style={styles.locationTitle}>Labuan Bajo</Text>
            <Text style={styles.locationDescription}>
              From crystal-clear waters to breathtaking sunsets, Labuan Bajo is
              calling! Explore hidden islands, swim with manta rays, and create
              memories that last a lifetime.
            </Text>
          </View>
        </View>
      </ImageBackground>

      {/* Content Section */}
      <ScrollView style={styles.contentSection}>
        <View style={styles.countryBadge}>
          <View style={styles.flagCircle}>
            <Text style={styles.flagEmoji}>🇮🇩</Text>
          </View>
          <Text style={styles.countryText}>Indonesia</Text>
        </View>

        <Text style={styles.mainTitle}>Discover the Beauty of Labuan Bajo</Text>

        {/* Review */}
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
            like it! Very good very well!
          </Text>
        </View>

        <TouchableOpacity style={styles.viewAllButton}>
          <Text style={styles.viewAllText}>View All</Text>
        </TouchableOpacity>

        {/* Recommendation */}
        <View style={styles.recommendationSection}>
          <Text style={styles.recommendationTitle}>Recommendation in Bajo</Text>

          <View style={styles.tripCard}>
            <ImageBackground
              source={require('../assets/lb.jpeg')}
              style={styles.tripImage}
              imageStyle={styles.tripImageStyle}
            >
              <View style={styles.tripOverlay} />
            </ImageBackground>
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

      {/* Bottom Booking Bar */}
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
  topRight: { flexDirection: 'row', alignItems: 'center', gap: 10 },
  time: { color: '#fff', fontSize: 14, fontWeight: '600' },
  weatherBox: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'rgba(255,255,255,0.25)',
    paddingHorizontal: 12,
    paddingVertical: 8,
    borderRadius: 20,
    gap: 5,
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
    gap: 4,
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
    gap: 8,
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
    gap: 10,
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
  reviewInfo: {
    flex: 1,
  },

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
  tripFeature: { flexDirection: 'row', alignItems: 'center', gap: 6 },
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
  quantityControl: { flexDirection: 'row', alignItems: 'center', gap: 15 },
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
