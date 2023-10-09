// ProfileScreen.js
import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import userImage from './assets/user.png';

export default function ProfileScreen() {
  return (
    <View style={styles.container}>
      <View style={styles.topBar}>
        <Image source={userImage} style={styles.userImage} />
        <Text style={styles.userName}>Usuario</Text>
      </View>

      <View style={styles.card}>
        <Text style={styles.cardText}>Mapa</Text>
      </View>
      <View style={styles.divider} />
      <View style={styles.card}>
        <Text style={styles.cardText}>Checkin's</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#272639',
  },
  topBar: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#001857',
    padding: 16,
  },
  userImage: {
    width: 40,
    height: 40,
    borderRadius: 20,
    marginRight: 10,
  },
  userName: {
    color: '#ffffff',
    fontSize: 16,
  },
  card: {
    backgroundColor: '#ffffff',
    padding: 16,
    margin: 16,
    borderRadius: 5,
    alignItems: 'center',
    justifyContent: 'center',
  },
  cardText: {
    fontSize: 16,
  },
  divider: {
    height: 1,
    backgroundColor: 'gray',
    marginHorizontal: 16,
  },
});
