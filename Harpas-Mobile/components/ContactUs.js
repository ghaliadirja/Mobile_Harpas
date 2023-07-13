import React from 'react';
import { SafeAreaView, Text, View, Image, StyleSheet, TextInput, } from 'react-native';
import { TouchableOpacity } from 'react-native-web';
import { KeyboardAvoidingView } from "react-native";
import Icon from 'react-native-vector-icons/FontAwesome';

const ContactUs = () => {
    return (
        <View>

            <View style={styles.nav}>
                <TouchableOpacity style={{ flexDirection: "row", alignItems: "center" }}>
                    <Image source={require("../assets/images/panah2.png")} style={{ width: 20, height: 20, marginLeft: 13, }} />
                    <Text style={{ fontSize: 18, }}> Back </Text>
                </TouchableOpacity>
            </View>

            <View style={styles.judul}>
                <Text style={{ fontSize: 35, fontWeight: "bold", }}>Let’s Connect</Text>
            </View>

            <View style={{ flexDirection: 'row', alignItems: 'center', marginBottom: 35, borderBottomWidth:1, borderBottomColor: "black"}}>
                <Image source={require("../assets/images/whatsapp.png")} style={{ width: 60, height: 60, marginLeft: 13, marginBottom: 5,}} />
                    <Text style={{ marginLeft: 10, fontSize: 20,  }}>08xx-xxxx-xxx</Text>
            </View>

            <View style={{ flexDirection: 'row', alignItems: 'center', marginBottom:35, borderBottomWidth:1,}}>
                <Image source={require("../assets/images/youtube.png")} style={{ width: 60, height: 60, marginLeft: 13, marginBottom
                : 5}} />
                    <Text style={{ marginLeft: 10, fontSize: 20, }}>HarpasKesatuan</Text>
            </View>

            <View style={{ flexDirection: 'row', alignItems: 'center', marginBottom:35, borderBottomWidth:1,}}>
                <Image source={require("../assets/images/instagram.png")} style={{ width: 60, height: 60, marginLeft: 13, marginBottom:2,}} />
                    <Text style={{ marginLeft: 10,  fontSize:20 }}>HarpasKesatuan</Text>
            </View>

            



        </View>
    );
}

const styles = StyleSheet.create({
    nav: {
        flex: 1,
        justifyContent: "center",
        marginTop: 8,
        // backgroundColor: "red",
    },

    judul: {
        fontWeight: "bold",
        marginTop: 10,
        alignItems: "center",
        marginBottom: 50,


    },



})

export default ContactUs;