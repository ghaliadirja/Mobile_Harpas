import React, { useState } from "react";
import { View, Text, StyleSheet, TextInput, TouchableOpacity } from "react-native";
import FontAwesome5 from "react-native-vector-icons/FontAwesome5";

const SignUp = () => {
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const handleSignUp = () => {
    // Logika untuk memproses pendaftaran pengguna
    console.log("Pendaftaran berhasil:", email, password);
  };

  const toggleShowPassword = () => {
    setShowPassword(!showPassword);
  };

  return (
    <View>
      <View style={styles.judul}>
        <Text style={{ fontSize: 40, fontWeight: "bold" }}>Sign Up</Text>
        <Text>Create an account, it’s free</Text>
      </View>

      <View style={{ marginTop: 20 }}>
        <Text style={{ marginLeft: 48, color: "blue" }}>Email</Text>
      </View>
      <View style={{ alignItems: "center", marginTop: 5 }}>
        <TextInput placeholder="" style={styles.textemail}></TextInput>
      </View>

      <View style={{ marginTop: 20 }}>
        <Text style={{ marginLeft: 48, color: "blue" }}>Username</Text>
      </View>
      <View style={{ alignItems: "center", marginTop: 5 }}>
        <TextInput placeholder="" style={styles.textemail}></TextInput>

      </View>

      <View style={{ marginTop: 20 }}>
        <Text style={{ marginLeft: 48, color: "blue" }}>Password</Text>
      </View>

      <View style={{ alignItems: "center", marginTop: 5 }}>
        <View style={styles.passwordContainer}>
          <TextInput style={styles.textemail} secureTextEntry={!showPassword} value={password} onChangeText={setPassword} /> 
          <TouchableOpacity style={styles.eyeIcon} onPress={toggleShowPassword}>
            <FontAwesome5 name={showPassword ? "eye-slash" : "eye"} size={18} color={"black"} />
          </TouchableOpacity>
        </View>
      </View>

      <View style={{ alignItems: "center" }}>
        <TouchableOpacity style={styles.button}  >
          <Text style={styles.buttonText}>Sign Up</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.bawah}>
        <Text>Already have an account? SignIn</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  judul: {
    alignItems: "center",
  },

  textemail: {
    borderWidth: 1,
    color: "blue",
    width: 300,
    height: 50,
    padding: 5,
    borderRadius: 10,
  },

  passwordContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    width: 300,
    height: 50,
    marginTop: 5,
    borderWidth: 1,
    borderRadius: 10,
    padding: 5,
    
    
  },
  eyeIcon: {
    marginRight: 5,
  },
  button: {
    backgroundColor: "#31308B",
    marginTop: 80,
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 300,
    width: 200,
  },
  buttonText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold",
    textAlign: "center",
  },

  bawah: {
    alignItems: "center",
    marginTop: 20,
  },
});

export default SignUp;

