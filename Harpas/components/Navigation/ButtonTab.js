import React, { useState } from "react";
import { View, Text, StyleSheet, TextInput, TouchableOpacity } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

export default function App(){
    const Tab = createButtomTabNavigator ();
    return(
        <Tab.Navigator>
            <Tab.Screen name="SignIn" component={page1}/>
            <Tab.Screen name="SignUp" component={page1}/>
        </Tab.Navigator>
    )
}