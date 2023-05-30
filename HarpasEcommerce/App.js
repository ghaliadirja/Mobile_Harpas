import React from "react";
import { StyleSheet, Text, View } from "react-native";
import SplashScreen from "../HarpasEcommerce/src/components/Splashscreen.js"; // Sesuaikan path ke komponen SplashScreen

export default function App() {
  return (
    <View style={Styles.container}>
      <SplashScreen />
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
