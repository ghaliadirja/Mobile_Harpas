import React from 'react';
import { SafeAreaView, Text, View, Image, StyleSheet, TextInput, } from 'react-native';
import { TouchableOpacity } from 'react-native-web';
import { KeyboardAvoidingView } from "react-native";
import Icon from 'react-native-vector-icons/FontAwesome';


const TransactionHistory = ({navigation}) => {
    return (
        <View>

            <Image source={require('../assets/images/image-sampah.png')}
                style={styles.gambarIcon} />
            <View>
                <Text style={{
                    fontSize: 15, fontWeight: "bold", alignItems: "center", textAlign: "center", color: "#31308B",
                }}
                >Unfortunately,  any history can’t found yet</Text>
            </View>

            <View style={styles.bawah}>
                <TouchableOpacity  onPress={() => navigation.navigate('Home')}>
                    <Text style={{ color: "#31308B" }}>go to Event - </Text>
                </TouchableOpacity>
            </View>
        </View>

    );
}

const styles = StyleSheet.create({

    gambarIcon: {
        width: 356,
        height: 356,
        marginTop: 20,
        alignItems: "center",
        justifyContent: "center",
        
    },

    bawah: {
        textAlign: "right",
        marginTop: 150,
        marginRight: 10,

    },

})

export default TransactionHistory;
