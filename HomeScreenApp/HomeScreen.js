import React from 'react';
import { View, StyleSheet, StatusBar, TouchableOpacity, Text } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { Ionicons } from '@expo/vector-icons';


const HomeScreen = () => {
  return (
    <LinearGradient
      colors={['#C525FF', '#391EDC']}
      style={styles.container}
    >
      <StatusBar barStyle="light-content" />

      {/* Header section */}
      <View style={styles.topBar}>
      <TouchableOpacity onPress={() => console.log('Profile pressed')}>
          <Ionicons name="person-circle-outline" size={32} color="#fff" />
        </TouchableOpacity>

        <Text style={styles.title}>XILLION</Text>

        <TouchableOpacity onPress={() => console.log('Notifications pressed')}>
          <Ionicons name="notifications-outline" size={28} color="#fff" />
        </TouchableOpacity>
      </View>

    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: StatusBar.currentHeight + 10,
    paddingHorizontal: 20,
  },
  topBar: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 10,
  },
  title: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#fff',
  },
});

export default HomeScreen;
