import React from 'react';
import {View, StyleSheet} from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import EventPhotos from '../EventPhotos';
import Profile from '../Profile';

const ButtonTab = ({navigation,route}) => {
    const Tab = createBottomTabNavigator();
    return (
        <View>
            <Tab.Navigator>
                <Tab.Screen name='Home' component={Home} />
                <Tab.Screen name='EventPhotos' component={EventPhotos} />
                <Tab.Screen name='Profile' component={Profile} />
            </Tab.Navigator>
        </View>
    );
}

const styles = StyleSheet.create({})

export default ButtonTab;
