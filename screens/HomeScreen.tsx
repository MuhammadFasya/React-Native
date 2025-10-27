import React, { useState } from 'react';
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
import { Feather } from '@expo/vector-icons';
import DestinationCard from '../components/DestinationCard';
import { useNavigation } from '@react-navigation/native';
import type { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from '../App';
import { ASSET_MAP } from '../assets/assetMap';

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
    imageUrl: ASSET_MAP.lb,
  },
  {
    id: '2',
    title: 'Venice',
    country: 'Italia',
    rating: 4.7,
    price: '3.500/pax',
    imageUrl: ASSET_MAP.venice,
  },
  {
    id: '3',
    title: 'Sumba Island',
    country: 'Indonesia',
    rating: 4.9,
    price: '4.500/pax',
    imageUrl: ASSET_MAP.sumba,
  },
];

const HomeScreen: React.FC = () => {
  const navigation =
    useNavigation<NativeStackNavigationProp<RootStackParamList>>();

  //
  const [query, setQuery] = useState('');

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

        {/* search uses query state */}
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
              value={query}
              onChangeText={setQuery}
            />
          </View>
          <TouchableOpacity style={styles.filterButton}>
            <Feather name="sliders" size={24} color="white" />
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
                  destination: dest, // pass full object
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
  safeArea: { flex: 1, backgroundColor: '#F7F7F7' },
  scrollContent: { paddingHorizontal: 25, paddingTop: 10, paddingBottom: 40 },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 20,
  },
  greetingTitle: { fontSize: 28, color: '#888', lineHeight: 30 },
  greetingName: { fontSize: 32, color: '#333', lineHeight: 35 },
  heartButton: { position: 'relative', padding: 5 },
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
  cardList: {},
  searchContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 20,
  },
  searchInputGroup: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'white',
    borderRadius: 25,
    paddingHorizontal: 15,
    paddingVertical: 10,
    elevation: 1,
  },
  searchIcon: { marginRight: 10 },
  searchInput: {
    flex: 1,
    fontSize: 16,
    color: '#333',
  },
  filterButton: {
    width: 50,
    height: 50,
    borderRadius: 25,
    backgroundColor: '#FF7043',
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: 10,
  },
});

export default HomeScreen;
