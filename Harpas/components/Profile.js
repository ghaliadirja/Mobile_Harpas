import React from 'react';
import { SafeAreaView, Text, View, Image, StyleSheet, TextInput, } from 'react-native';
import { TouchableOpacity } from 'react-native-web';
import Icon from 'react-native-vector-icons/FontAwesome';

const Profile = () => {
    return (
        <SafeAreaView style={{ alignItems: "center", flex:1 }}>


            <View style={styles.judul}>
                <View style={{width:40, }}>
                    <Text></Text>
                </View>
                <Text style={{ fontSize: 40, fontWeight: "bold" }}>PROFILE</Text>
                <Image style={styles.pengaturan} source={require("../assets/images/settings.png")} />
            </View>

            <View style={{ alignItems: "center", marginTop: 10, }}>
                <Image style={styles.emot} source={require("../assets/images/emot4.png")} />
            </View>

                <Text style={{ fontSize: 20, fontWeight: "bold", marginTop: 10, marginBottom: 30, }}>Shepilla Dirja</Text>

            <View style={styles.box1}>
                <Text style={{ fontSize: 22 }}>Transaction History</Text>
                <TouchableOpacity onpress={true}>
                    <Image source={require('../assets/images/panah.png')} style={{ width: 20, height: 20 }} />
                </TouchableOpacity>

            </View>
            <View style={styles.box1}>
                <Text style={{ fontSize: 22 }}>Our Services</Text>
                <TouchableOpacity onpress={true}>
                    <Image source={require('../assets/images/panah.png')} style={{ width: 20, height: 20 }} />
                </TouchableOpacity>

            </View>
            <View style={styles.box1}>
                <Text style={{ fontSize: 22 }}>Contact Us</Text>
                <TouchableOpacity onpress={true}>
                    <Image source={require('../assets/images/panah.png')} style={{ width: 20, height: 20 }} />
                </TouchableOpacity>

            </View>
            <View style={styles.box1}>
                <Text style={{ fontSize: 22 }}>Privacy & Policy</Text>
                <TouchableOpacity onpress={true}>
                    <Image source={require('../assets/images/panah.png')} style={{ width: 20, height: 20 }} />
                </TouchableOpacity>

            </View>



        </SafeAreaView >
    );
}

const styles = StyleSheet.create({
    judul: {
        fontWeight: "bold",
        marginTop: 5,
        alignItems: "center",
        flexDirection:"row",
        justifyContent:"space-between",
        width:"100%",
        padding:10,
    },

    container: {
        flex: 1,
    },
    pengaturan: {
        width: 30,
        height: 30,
        marginRight: 10,
        

    },
    emot: {
        marginTop: 10,
        alignItems: "center",
        width: 150,
        height: 150,
    },
    box1: {
        width: 350,
        height: 58,
        padding: 15,
        borderWidth: 2,
        borderColor: 'black',
        marginTop: 10,
        borderRadius: 10,
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center"

    },


});

export default Profile;
