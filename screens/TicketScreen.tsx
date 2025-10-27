import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  StatusBar,
  FlatList,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import Feather from '@expo/vector-icons/Feather';
import Entypo from '@expo/vector-icons/Entypo';

// --- Types ---
type Ticket = {
  id: string;
  departureCode: string;
  departureCity: string;
  arrivalCode: string;
  arrivalCity: string;
  departureTime: string;
  arrivalTime: string;
  departureDate: string;
  arrivalDate: string;
  price: string;
  isHighlight: boolean;
};

type CategoryChipProps = {
  title: string;
  isSelected?: boolean;
};

type TicketListItemProps = {
  ticket: Ticket;
};

type TicketsScreenProps = {
  navigation?: { goBack?: () => void };
};

// --- Data Dummy ---
const CATEGORIES: string[] = [
  'Hotel',
  'Aircraft',
  'Villa',
  'Attractions',
  'Car Rental',
];

const TICKET_DATA: Ticket[] = [
  {
    id: '1',
    departureCode: 'NL',
    departureCity: 'Rotterdam',
    arrivalCode: 'IDN',
    arrivalCity: 'Labuan Bajo',
    departureTime: '5:30pm',
    arrivalTime: '3:30am',
    departureDate: 'Mon, 23 Jun',
    arrivalDate: 'Tue, 24 Jun',
    price: '1.700',
    isHighlight: true,
  },
  {
    id: '2',
    departureCode: 'NL',
    departureCity: 'Rotterdam',
    arrivalCode: 'IDN',
    arrivalCity: 'Labuan Bajo',
    departureTime: '5:30pm',
    arrivalTime: '3:30am',
    departureDate: 'Mon, 23 Jun',
    arrivalDate: 'Tue, 24 Jun',
    price: '1.850',
    isHighlight: false,
  },
];

// Sub Component: Chip Category
const CategoryChip: React.FC<CategoryChipProps> = ({
  title,
  isSelected = false,
}) => (
  <TouchableOpacity
    activeOpacity={0.8}
    style={[styles.categoryChip, isSelected && styles.categoryChipSelected]}
  >
    <Text
      style={[styles.categoryText, isSelected && styles.categoryTextSelected]}
    >
      {title}
    </Text>
  </TouchableOpacity>
);

// Sub Component: Ticket Item
const TicketListItem: React.FC<TicketListItemProps> = ({ ticket }) => {
  const isHighlight = ticket.isHighlight;

  return (
    <View
      style={[styles.ticketCard, isHighlight && styles.ticketCardHighlight]}
    >
      {/* Left Vertical Badge (AIRLINES & Plane Icon) */}
      <View
        style={[styles.leftBadge, isHighlight && styles.leftBadgeHighlight]}
      >
        <Text style={styles.leftBadgeText}>AIRLINES</Text>
        <Feather
          name="plus-circle"
          size={20}
          color="white"
          style={styles.planeIcon}
        />
      </View>

      {/* Main Content */}
      <View style={styles.ticketContent}>
        {/* 1. Departure Info (Left) */}
        <View style={styles.infoColumn}>
          <Text style={styles.locationCode}>{ticket.departureCode}</Text>
          <Text style={styles.cityText}>{ticket.departureCity}</Text>
          <Text style={styles.timeText}>{ticket.departureTime}</Text>
          <Text style={styles.dateText}>{ticket.departureDate}</Text>
          <Text style={styles.priceValue}>${ticket.price}</Text>
        </View>

        {/* 2. Middle Separator (Plane Icon) */}
        <View style={styles.separator}>
          <Feather name="send" size={22} color="#444" style={styles.sendIcon} />
        </View>

        {/* 3. Arrival Info (Right) */}
        <View style={styles.infoColumn}>
          <Text style={[styles.locationCode, styles.locationCodeRight]}>
            {ticket.arrivalCode}
          </Text>
          <Text style={styles.cityText}>{ticket.arrivalCity}</Text>
          <Text style={styles.timeText}>{ticket.arrivalTime}</Text>
          <Text style={styles.dateText}>{ticket.arrivalDate}</Text>
        </View>
      </View>
    </View>
  );
};

// Main Component: Tickets Screen
const TicketsScreen: React.FC<TicketsScreenProps> = ({ navigation }) => {
  const DATE_DATA = [
    { day: 'S', date: 22, isSelected: false },
    { day: 'M', date: 23, isSelected: true },
    { day: 'T', date: 24, isSelected: false },
    { day: 'W', date: 25, isSelected: false },
    { day: 'T', date: 26, isSelected: false },
    { day: 'F', date: 27, isSelected: false },
    { day: 'S', date: 28, isSelected: false },
  ];

  return (
    <SafeAreaView style={styles.safeArea}>
      <StatusBar barStyle="dark-content" backgroundColor="#F7F7F7" />

      {/* Top Header */}
      <View style={styles.topHeader}>
        <TouchableOpacity onPress={() => navigation?.goBack?.()}>
          <Feather name="arrow-left" size={24} color="#333" />
        </TouchableOpacity>
        <Text style={styles.screenTitle}>Tickets</Text>
        <TouchableOpacity>
          <Entypo name="dots-three-vertical" size={20} color="#333" />
        </TouchableOpacity>
      </View>

      <ScrollView
        style={styles.contentContainer}
        contentContainerStyle={styles.scrollContent}
      >
        {/* Current Location and Dropdown */}
        <View style={styles.locationInfo}>
          <Text style={styles.locationLabel}>Current locations</Text>
          <View style={styles.locationValue}>
            <Text style={styles.locationText}>Netherlands</Text>
            <Entypo name="chevron-down" size={16} color="#333" />
          </View>
        </View>

        {/* Categories (Horizontal FlatList) */}
        <FlatList
          data={CATEGORIES}
          renderItem={({ item }) => (
            <CategoryChip title={item} isSelected={item === 'Aircraft'} />
          )}
          keyExtractor={item => item}
          horizontal
          showsHorizontalScrollIndicator={false}
          style={styles.categoryList}
        />

        {/* Month and Date Selector */}
        <View style={styles.dateSelectorContainer}>
          <View style={styles.monthTitleGroup}>
            <Text style={styles.monthTitle}>June, 2025</Text>
            <Entypo name="chevron-down" size={16} color="#333" />
          </View>

          <ScrollView horizontal showsHorizontalScrollIndicator={false}>
            {DATE_DATA.map((item, index) => (
              <TouchableOpacity
                key={index}
                activeOpacity={0.8}
                style={[
                  styles.dateChip,
                  item.isSelected && styles.dateChipSelected,
                ]}
              >
                <Text
                  style={[
                    styles.dateDay,
                    item.isSelected && styles.dateTextSelected,
                  ]}
                >
                  {item.day}
                </Text>
                <Text
                  style={[
                    styles.dateNumber,
                    item.isSelected && styles.dateTextSelected,
                  ]}
                >
                  {item.date}
                </Text>
              </TouchableOpacity>
            ))}
          </ScrollView>
        </View>

        {/* Ticket Count */}
        <Text style={styles.ticketCount}>4 Tickets Found</Text>

        {/* Tickets List (Vertical FlatList) */}
        <FlatList
          data={TICKET_DATA}
          renderItem={({ item }) => <TicketListItem ticket={item} />}
          keyExtractor={item => item.id}
          scrollEnabled={false}
          contentContainerStyle={styles.ticketList}
        />
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#F7F7F7',
  },
  // Top Header (Back, Title, More)
  topHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 25,
    paddingTop: 10,
    paddingBottom: 15,
    backgroundColor: '#F7F7F7',
  },
  screenTitle: {
    fontFamily: 'PlusJakartaSans-SemiBold',
    fontSize: 18,
    color: '#333',
  },
  contentContainer: {
    flex: 1,
    paddingHorizontal: 25,
    paddingTop: 10,
  },
  scrollContent: {
    paddingBottom: 40,
  },

  // Location Info (Netherlands)
  locationInfo: {
    marginBottom: 20,
  },
  locationLabel: {
    fontFamily: 'PlusJakartaSans-Regular',
    fontSize: 14,
    color: '#888',
  },
  locationValue: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 5,
  },
  locationText: {
    fontFamily: 'PlusJakartaSans-Bold',
    fontSize: 24,
    color: '#333',
    marginRight: 5,
  },

  // Category Chips
  categoryList: {
    marginBottom: 25,
  },
  categoryChip: {
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 12,
    backgroundColor: 'white',
    marginRight: 10,
    borderWidth: 1,
    borderColor: '#EFEFEF',
  },
  categoryChipSelected: {
    backgroundColor: '#FF7043',
    borderColor: '#FF7043',
  },
  categoryText: {
    fontFamily: 'PlusJakartaSans-SemiBold',
    fontSize: 15,
    color: '#333',
  },
  categoryTextSelected: {
    color: 'white',
  },

  // Date Selector
  dateSelectorContainer: {
    marginBottom: 30,
  },
  monthTitleGroup: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 15,
  },
  monthTitle: {
    fontFamily: 'PlusJakartaSans-SemiBold',
    fontSize: 18,
    color: '#333',
    marginRight: 5,
  },
  dateChip: {
    width: 45,
    height: 65,
    borderRadius: 12,
    backgroundColor: 'white',
    justifyContent: 'center',
    alignItems: 'center',
    marginHorizontal: 5,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.05,
    shadowRadius: 2,
    elevation: 1,
  },
  dateChipSelected: {
    backgroundColor: '#FF7043',
  },
  dateDay: {
    fontFamily: 'PlusJakartaSans-Regular',
    fontSize: 14,
    color: '#888',
    marginBottom: 2,
  },
  dateNumber: {
    fontFamily: 'PlusJakartaSans-SemiBold',
    fontSize: 18,
    color: '#333',
  },
  dateTextSelected: {
    color: 'white',
    fontFamily: 'PlusJakartaSans-SemiBold',
  },

  // Ticket List
  ticketCount: {
    fontFamily: 'PlusJakartaSans-SemiBold',
    fontSize: 16,
    color: '#333',
    marginBottom: 20,
  },
  ticketList: {
    paddingBottom: 40,
  },
  ticketCard: {
    backgroundColor: 'white',
    borderRadius: 15,
    marginBottom: 20,
    flexDirection: 'row',
    position: 'relative',
    height: 140,
    overflow: 'hidden',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  ticketCardHighlight: {
    borderWidth: 2,
    borderColor: '#FF7043',
  },

  // Left Vertical Badge
  leftBadge: {
    width: 45,
    backgroundColor: '#FF7043',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 10,
  },
  leftBadgeHighlight: {
    backgroundColor: '#FF7043',
  },
  leftBadgeText: {
    fontFamily: 'PlusJakartaSans-Bold',
    fontSize: 10,
    color: 'white',
    transform: [{ rotate: '-90deg' }],
    width: 60,
    textAlign: 'center',
  },
  planeIcon: {
    marginBottom: 10,
    transform: [{ rotate: '45deg' }],
  },

  // Main Content
  ticketContent: {
    flexDirection: 'row',
    flex: 1,
    paddingHorizontal: 15,
    paddingVertical: 15,
    justifyContent: 'space-between',
  },
  infoColumn: {
    width: '40%',
    justifyContent: 'space-between',
  },
  locationCode: {
    fontFamily: 'PlusJakartaSans-ExtraBold',
    fontSize: 36,
    color: '#333',
    lineHeight: 40,
  },
  locationCodeRight: {
    alignSelf: 'flex-end',
    textAlign: 'right',
  },
  cityText: {
    fontFamily: 'PlusJakartaSans-Regular',
    fontSize: 14,
    color: '#555',
    marginBottom: 10,
  },
  timeText: {
    fontFamily: 'PlusJakartaSans-SemiBold',
    fontSize: 16,
    color: '#333',
  },
  dateText: {
    fontFamily: 'PlusJakartaSans-Regular',
    fontSize: 12,
    color: '#888',
  },
  priceValue: {
    fontFamily: 'PlusJakartaSans-Bold',
    fontSize: 18,
    color: '#FF7043',
    marginTop: 5,
  },
  separator: {
    width: '10%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  sendIcon: {
    transform: [{ rotate: '45deg' }],
  },
});

export default TicketsScreen;
