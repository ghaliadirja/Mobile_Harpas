import React from "react";
import { StyleSheet, Text, View, Image } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#8a2be2",
    alignItems: "center",
    justifyContent: "center",
  },
  logo: {
    width: 150,
    height: 150,
    resizeMode: "contain",
  },
  loading: {
    position: "absolute",
    bottom: 50,
  },
  loadingText: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#fff",
  },
});

export default function SplashScreen() {
  return (
    <View style={styles.container}>
      <Image source={require("../../assets/img/Logo.png")} style={styles.logo} />
      <View style={styles.loading}>
        <Text style={styles.loadingText}>Loading...</Text>
      </View>
    </View>
  );
}
