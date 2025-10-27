import React from 'react';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Feather } from '@expo/vector-icons';

// Import screens
import GetStartedScreen from './screens/GetStartedScreen';
import HomeScreen from './screens/HomeScreen';
import LabuanBajoDetail from './screens/LabuanBajoDetail';
import TicketScreen from './screens/TicketScreen';

export type TabParamList = {
  HomeMain: undefined;
  Explore: undefined;
  Tickets: undefined;
  Profile: undefined;
};

export type RootStackParamList = {
  Tabs: undefined;
  LabuanBajoDetail: {
    destination: {
      id: string;
      title: string;
      country: string;
      rating: number;
      price: string;
      imageUrl: any;
    };
  };
  GetStarted: undefined;
};

const Stack = createNativeStackNavigator<RootStackParamList>();
const Tab = createBottomTabNavigator<TabParamList>();

const HomeTabs = () => (
  <Tab.Navigator screenOptions={{ headerShown: false }}>
    <Tab.Screen
      name="HomeMain"
      component={HomeScreen}
      options={{
        tabBarIcon: (props: { color: string; size: number }) => (
          <Feather name="home" size={props.size} color={props.color} />
        ),
      }}
    />
    <Tab.Screen
      name="Tickets"
      component={TicketScreen}
      options={{
        tabBarIcon: (props: { color: string; size: number }) => (
          <Feather name="credit-card" size={props.size} color={props.color} />
        ),
      }}
    />
  </Tab.Navigator>
);

export default function App() {
  return (
    <SafeAreaProvider>
      <NavigationContainer>
        <Stack.Navigator screenOptions={{ headerShown: false }}>
          <Stack.Screen name="GetStarted" component={GetStartedScreen} />
          <Stack.Screen name="Tabs" component={HomeTabs} />
          <Stack.Screen name="LabuanBajoDetail" component={LabuanBajoDetail} />
        </Stack.Navigator>
      </NavigationContainer>
    </SafeAreaProvider>
  );
}
