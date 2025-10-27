import { ImageSourcePropType } from 'react-native';

// File ini memegang semua referensi require() dan font untuk memastikan
// proses loading berjalan dengan benar di Expo Go sebelum komponen dirender.

// Anda harus memastikan path relatif ini benar.
export const ASSET_MAP: { [key: string]: ImageSourcePropType } = {
  // --- Gambar untuk HomeScreen/DestinationCard/LabuanBajoDetail ---
  lb: require('../assets/lb.jpeg'),
  venice: require('../assets/venice.jpg'),
  sumba: require('../assets/sumba.jpeg'),
};

// --- Font yang akan dimuat ---
export const FONT_MAP: { [key: string]: any } = {
  'PlusJakartaSans-Regular': require('./fonts/PlusJakartaSans-Regular.ttf'),
  'PlusJakartaSans-SemiBold': require('./fonts/PlusJakartaSans-SemiBold.ttf'),
  'PlusJakartaSans-Bold': require('./fonts/PlusJakartaSans-Bold.ttf'),
  'PlusJakartaSans-ExtraBold': require('./fonts/PlusJakartaSans-ExtraBold.ttf'),
};
