// ProfileScreen.js
import React from "react";
import userImage from "./assets/user.png";
import estacionamento1 from "./assets/estacionamento1.png";
import estacionamento2 from "./assets/estacionamento2.jpeg";
import { View, Text, Image, FlatList, StyleSheet } from "react-native";

const DATA = [
  {
    id: "1",
    title: "Estacionamento Duas Terezas",
    description: "21/09/2023 - 2 horas",
    imageUrl: estacionamento1,
  },
  {
    id: "2",
    title: "Estacionamento Lisboa",
    description: "05/08/2023 - 1 hora",
    imageUrl: estacionamento2,
  },
];

export default function ProfileScreen() {
  const renderItem = ({ item }) => (
    <View style={styles.itemContainer}>
      <Image source={item.imageUrl} style={styles.image} />
      <Text style={styles.title}>{item.title}</Text>
      <Text style={styles.description}>{item.description}</Text>
    </View>
  );

  return (
    <View style={styles.container}>
      <View style={styles.topBar}>
        <Image source={userImage} style={styles.userImage} />
        <Text style={styles.userName}>Usuario</Text>
      </View>
      <FlatList
        data={DATA}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  itemContainer: {
    borderWidth: 1,
    borderColor: "#ccc",
    margin: 10,
    padding: 20,
    borderRadius: 10,
  },
  image: {
    width: 320,
    height: 100,
    resizeMode: "cover",
    marginBottom: 10,
    backgroundColor: "red",
  },
  title: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 10,
    color: "white",
  },
  description: {
    fontSize: 14,
    color: "white",
  },
  container: {
    flex: 1,
    backgroundColor: "#272639",
  },
  topBar: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#001857",
    padding: 16,
  },
  userImage: {
    width: 40,
    height: 40,
    borderRadius: 20,
    marginRight: 10,
  },
  userName: {
    color: "#ffffff",
    fontSize: 16,
  },
});
