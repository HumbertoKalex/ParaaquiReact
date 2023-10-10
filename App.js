import React, { useState } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import {
  StatusBar,
  StyleSheet,
  View,
  TextInput,
  Button,
  Image,
} from "react-native";
import logo from "./assets/logo_transparent_background.png";
import Checkins from "./Checkins";
import { Alert } from "react-native";

const Stack = createStackNavigator();

function LoginScreen({ navigation }) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = () => {
    console.log("Username:", username, "Password:", password);
    if (username == "admin" && password == "1234") {
      navigation.navigate("Checkins");
    } else {
      Alert.alert("Erro", "Usuário ou senha incorretos.");
    }
  };
  return (
    <View style={styles.container}>
      <Image source={logo} style={styles.logo} resizeMode="contain" />

      <TextInput
        style={styles.input}
        placeholder="Usuário"
        placeholderTextColor="#fff"
        onChangeText={(text) => setUsername(text)}
        value={username}
      />
      <TextInput
        style={styles.input}
        placeholder="Senha"
        placeholderTextColor="#fff"
        secureTextEntry={true}
        onChangeText={(text) => setPassword(text)}
        value={password}
      />

      <Button title="Login" onPress={handleLogin} />
      <StatusBar style="auto" />
    </View>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login">
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="Checkins" component={Checkins} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#001857",
    alignItems: "center",
    justifyContent: "center",
  },
  input: {
    width: 250,
    height: 40,
    color: "#fff",
    padding: 10,
    borderWidth: 1,
    borderColor: "gray",
    marginBottom: 10,
    borderRadius: 5,
  },
  logo: {
    width: 200,
    height: 200,
    marginBottom: 20,
  },
});
