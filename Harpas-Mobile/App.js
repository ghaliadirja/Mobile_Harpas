import { StatusBar } from 'expo-status-bar';
import { SafeAreaView } from 'react-native';
import { StyleSheet, Text, View, Image } from 'react-native';
import Splash from './components/Splash';
import SignUp from './components/SignUp';
import OnBoard from './components/OnBoard';
import SignIn from './components/SignIn';
import Home from './components/Home';
import Profile from './components/Profile';
import Profile2 from './components/Profile2';
import ContactUs from './components/ContactUs';
import CommunityInfo from './components/CommunityInfo';
import TransactionHistory from './components/TransactionHistory';
import EventPhotos from './components/EventPhotos';
import EventVideos from './components/EventVideos';
import ShopingCart from './components/ShopingCart';


import ButtonTab from './components/Navigation/ButtonTab';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { BottomTabBar, createBottomTabNavigator } from '@react-navigation/bottom-tabs';

const Stack = createNativeStackNavigator();

const Tab = createBottomTabNavigator();


function Dashboard() {
  return (
    <Tab.Navigator>
      <Tab.Screen name='Home' component={Home} options={{
        headerShown: false, tabBarIcon: () => (
          <Image source={require("../Harpas/assets/images/home.png")} style={{ width: 30, height: 30 }} />
        )
      }} />

      <Tab.Screen name='Event' component={EventPhotos} options={{
        headerShown: false, tabBarIcon: () => (
          <Image source={require("../Harpas/assets/images/calendar.png")} style={{ width: 30, height: 30 }} />
        )
      }} />

      <Tab.Screen name='ShopingCart' component={ShopingCart} options={{
        headerShown: false, tabBarIcon: () => (
          <Image source={require("../Harpas/assets/images/shopping-cart.png")} style={{ width: 30, height: 30 }} />
        )
      }} />


      <Tab.Screen name='Profile' component={Profile} options={{
        headerShown: false, tabBarIcon: () => (
          <Image source={require("../Harpas/assets/images/user.png")} style={{ width: 30, height: 30 }} />
        )
      }} />

    </Tab.Navigator>

  );
}

export default function Navigation() {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name='Splash' component={Splash} options={{ headerShown: false }} />
          <Stack.Screen name='OnBoard' component={OnBoard} options={{ headerShown: false }} />
          <Stack.Screen name='SignIn' component={SignIn} options={{ headerShown: false }} />
          <Stack.Screen name='SignUp' component={SignUp} options={{ headerShown: false }} />
          <Stack.Screen name='Dashboard' component={Dashboard} options={{ headerShown: false }} />
          <Stack.Screen name='TransactionHistory' component={TransactionHistory} options={{ headerShown: false }} />
          <Stack.Screen name='Profile2' component={Profile2} options={{ headerShown: false }} />
          <Stack.Screen name='EventVideos' component={EventVideos} options={{ headerShown: false }} />
        </Stack.Navigator>

        <Stack.Screen name='ContactUs' component={ContactUs} options={{ headerShown: false }} />

      </NavigationContainer>
      {/* 
    <Profile/> */}
      {/* <TransactionHistory/> */}


    </SafeAreaView>
  );
};