import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Feather from 'react-native-vector-icons/Feather';

// EXPO IMPORTS UNTUK LOADING ASSET DAN FONT
import * as SplashScreen from 'expo-splash-screen';
import * as Font from 'expo-font';
import * as Asset from 'expo-asset';
import { ASSET_MAP, FONT_MAP } from './assets/assetMap';

// Import screens
import HomeScreen from './screens/HomeScreen';
import LabuanBajoDetail from './screens/LabuanBajoDetail';
import TicketsScreen from './screens/TicketScreen';

// Nonaktifkan splash screen bawaan Expo
SplashScreen.preventAutoHideAsync();

// === DEFINISI PARAM LIST UNTUK TYPING ===
export type TabParamList = {
  HomeMain: undefined;
  Explore: undefined;
  Tickets: undefined;
  Profile: undefined;
};

export type RootStackParamList = {
  Tabs: undefined;
  LabuanBajoDetail: { destinationId: string };
};

const Stack = createNativeStackNavigator<RootStackParamList>();
const Tab = createBottomTabNavigator<TabParamList>();

// === Placeholder/Dummy Screens ===
const ExploreScreen: React.FC = () => (
  <View style={tabStyles.dummyContainer}>
    <Text style={tabStyles.dummyText}>Explore Screen</Text>
  </View>
);
const ProfileScreen: React.FC = () => (
  <View style={tabStyles.dummyContainer}>
    <Text style={tabStyles.dummyText}>Profile Screen</Text>
  </View>
);

// Typed, stable tab icon components for proper signature
type TabIconProps = { focused: boolean; color: string; size: number };

const HomeTabIcon = ({ focused, color, size }: TabIconProps) => (
  <Feather name="home" size={size ?? 24} color={focused ? '#FF7043' : color} />
);

const ExploreTabIcon = ({ focused, color, size }: TabIconProps) => (
  <Feather name="grid" size={size ?? 24} color={focused ? '#FF7043' : color} />
);

const TicketsTabIcon = ({ focused, color, size }: TabIconProps) => (
  <View
    style={[tabStyles.ticketsIcon, focused && tabStyles.ticketsIconFocused]}
  >
    <Feather
      name="credit-card"
      size={size ?? 24}
      color={focused ? '#333' : color}
    />
  </View>
);

const ProfileTabIcon = ({ focused, color, size }: TabIconProps) => (
  <Feather name="user" size={size ?? 24} color={focused ? '#FF7043' : color} />
);

const HomeTabs: React.FC = () => {
  return (
    <Tab.Navigator
      initialRouteName="HomeMain"
      screenOptions={{
        headerShown: false,
        tabBarShowLabel: false,
        tabBarStyle: tabStyles.tabBar,
        tabBarInactiveTintColor: '#fff',
        tabBarActiveTintColor: '#FF7043',
      }}
    >
      <Tab.Screen
        name="HomeMain"
        component={HomeScreen as React.ComponentType<any>}
        options={{
          tabBarIcon: HomeTabIcon,
        }}
      />
      <Tab.Screen
        name="Explore"
        component={ExploreScreen}
        options={{
          tabBarIcon: ExploreTabIcon,
        }}
      />
      <Tab.Screen
        name="Tickets"
        component={TicketsScreen}
        options={{
          tabBarIcon: TicketsTabIcon,
        }}
      />
      <Tab.Screen
        name="Profile"
        component={ProfileScreen}
        options={{
          tabBarIcon: ProfileTabIcon,
        }}
      />
    </Tab.Navigator>
  );
};

const App: React.FC = () => {
  // STATE UNTUK MELACAK KESIAPAN APLIKASI
  const [appIsReady, setAppIsReady] = React.useState(false);

  React.useEffect(() => {
    async function prepare() {
      try {
        // 1. Load Custom Fonts
        await Font.loadAsync(FONT_MAP);

        // 2. Load Static Assets

        const assetPromises = Object.values(ASSET_MAP).map(imageModule => {
          return Asset.Asset.fromModule(imageModule as number).downloadAsync();
        });
        await Promise.all(assetPromises);
      } catch (e) {
        console.error('Gagal memuat font atau aset:', e);
      } finally {
        setAppIsReady(true);
        SplashScreen.hideAsync();
      }
    }

    prepare();
  }, []);

  if (!appIsReady) {
    return null;
  }

  return (
    <SafeAreaProvider>
      <NavigationContainer>
        <Stack.Navigator
          initialRouteName="Tabs"
          screenOptions={{ headerShown: false }}
        >
          <Stack.Screen name="Tabs" component={HomeTabs} />
          <Stack.Screen name="LabuanBajoDetail" component={LabuanBajoDetail} />
        </Stack.Navigator>
      </NavigationContainer>
    </SafeAreaProvider>
  );
};

const tabStyles = StyleSheet.create({
  tabBar: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    height: 90,
    backgroundColor: '#202A44',
    borderTopWidth: 0,
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
    paddingBottom: 20,
  },
  ticketsIcon: {
    backgroundColor: 'transparent',
    padding: 10,
    borderRadius: 20,
  },
  ticketsIconFocused: {
    backgroundColor: 'white',
  },
  dummyContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F7F7F7',
  },
  dummyText: {
    fontSize: 20,
    color: '#333',
  },
});

export default App;
