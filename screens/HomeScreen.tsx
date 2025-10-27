import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TextInput,
  TouchableOpacity,
  StatusBar,
  ImageSourcePropType,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import Feather from 'react-native-vector-icons/Feather';
import Entypo from 'react-native-vector-icons/Entypo';
import DestinationCard from '../components/DestinationCard';
import { useNavigation } from '@react-navigation/native';
import type { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from '../App';

type Destination = {
  id: string;
  title: string;
  country: string;
  rating: number;
  price: string;
  imageUrl: ImageSourcePropType;
};

const DUMMY_DESTINATIONS: Destination[] = [
  {
    id: '1',
    title: 'Labuan Bajo',
    country: 'Indonesia',
    rating: 5.0,
    price: '4.000/pax',
    imageUrl: require('../assets/lb.jpeg'),
  },
  {
    id: '2',
    title: 'Venice',
    country: 'Italia',
    rating: 4.7,
    price: '3.500/pax',
    imageUrl: require('../assets/venice.jpg'),
  },
  {
    id: '3',
    title: 'Sumba Island',
    country: 'Indonesia',
    rating: 4.9,
    price: '4.500/pax',
    imageUrl: require('../assets/sumba.jpeg'),
  },
];

const HomeScreen: React.FC = () => {
  const navigation =
    useNavigation<NativeStackNavigationProp<RootStackParamList>>();

  return (
    <SafeAreaView style={styles.safeArea}>
      <StatusBar barStyle="dark-content" backgroundColor="white" />
      <ScrollView contentContainerStyle={styles.scrollContent}>
        <View style={styles.header}>
          <View>
            <Text style={styles.greetingTitle}>Hi,</Text>
            <Text style={styles.greetingName}>Haikal</Text>
          </View>
          <TouchableOpacity style={styles.heartButton}>
            <Feather name="heart" size={24} color="#FF7043" />
            <View style={styles.notificationDot} />
          </TouchableOpacity>
        </View>

        <View style={styles.planCard}>
          <Text style={styles.planTitle}>Plan Your Summer!</Text>
          <TouchableOpacity style={styles.planArrowButton}>
            <Entypo name="chevron-right" size={24} color="white" />
          </TouchableOpacity>
        </View>

        <View style={styles.searchContainer}>
          <View style={styles.searchInputGroup}>
            <Feather
              name="search"
              size={20}
              color="#AAAAAA"
              style={styles.searchIcon}
            />
            <TextInput
              style={styles.searchInput}
              placeholder="Search destination..."
              placeholderTextColor="#AAAAAA"
            />
          </View>
          <TouchableOpacity style={styles.filterButton}>
            <Feather name="sliders" size={24} color="white" />
          </TouchableOpacity>
        </View>

        <View style={styles.sectionHeader}>
          <Text style={styles.sectionTitle}>Popular Destination</Text>
          <TouchableOpacity>
            <Text style={styles.viewAllText}>View All</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.cardList}>
          {DUMMY_DESTINATIONS.map(dest => (
            <DestinationCard
              key={dest.id}
              id={dest.id}
              title={dest.title}
              country={dest.country}
              rating={dest.rating}
              price={dest.price}
              imageUrl={dest.imageUrl}
              onPress={() =>
                navigation.navigate('LabuanBajoDetail', {
                  destinationId: dest.id,
                })
              }
            />
          ))}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#F7F7F7',
  },
  scrollContent: {
    paddingHorizontal: 25,
    paddingTop: 10,
    paddingBottom: 40,
  },

  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 20,
  },
  greetingTitle: {
    fontFamily: 'PlusJakartaSans-Regular',
    fontSize: 28,
    color: '#888',
    lineHeight: 30,
  },
  greetingName: {
    fontFamily: 'PlusJakartaSans-Bold',
    fontSize: 32,
    color: '#333',
    lineHeight: 35,
  },
  heartButton: {
    position: 'relative',
    padding: 5,
  },
  notificationDot: {
    position: 'absolute',
    top: 0,
    right: 0,
    width: 10,
    height: 10,
    borderRadius: 5,
    backgroundColor: '#FF7043',
    borderWidth: 2,
    borderColor: '#F7F7F7',
  },

  planCard: {
    backgroundColor: '#FF7043',
    borderRadius: 25,
    padding: 25,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 25,
    height: 130,
  },
  planTitle: {
    fontFamily: 'PlusJakartaSans-ExtraBold',
    fontSize: 34,
    color: 'white',
    width: '75%',
    lineHeight: 40,
  },
  planArrowButton: {
    backgroundColor: 'rgba(255, 255, 255, 0.2)',
    padding: 10,
    borderRadius: 25,
  },

  searchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 30,
  },
  searchInputGroup: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'white',
    borderRadius: 15,
    paddingHorizontal: 15,
    marginRight: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 3,
    elevation: 2,
  },
  searchIcon: {
    marginRight: 10,
  },
  searchInput: {
    flex: 1,
    height: 55,
    fontFamily: 'PlusJakartaSans-Regular',
    fontSize: 16,
    color: '#333',
  },
  filterButton: {
    backgroundColor: '#333',
    height: 55,
    width: 55,
    borderRadius: 15,
    justifyContent: 'center',
    alignItems: 'center',
  },

  sectionHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 20,
  },
  sectionTitle: {
    fontFamily: 'PlusJakartaSans-SemiBold',
    fontSize: 22,
    color: '#333',
  },
  viewAllText: {
    fontFamily: 'PlusJakartaSans-SemiBold',
    color: '#FF7043',
    fontSize: 16,
  },

  cardList: {},
});

export default HomeScreen;
