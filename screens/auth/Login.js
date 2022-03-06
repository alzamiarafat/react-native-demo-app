import { View, Text, StyleSheet, TextInput, TouchableOpacity, Image, Button, Alert } from 'react-native'
import React from 'react';
import { Ionicons, MaterialIcons, Entypo, FontAwesome } from '@expo/vector-icons';

export default function Login({ navigation }) {
    return (
        <View style={styles.container}>
            <View style={{ alignItems: 'center', marginTop: 10 }}>
                <Image source={{ uri: 'https://pathwayport.com/saasland/images/login@4x.png' }} style={{ width: 350, height: 300 }} resizeMode='contain'></Image>
            </View>
            <Text style={styles.title}>Login</Text>
            <View style={styles.body}>
                <TextInput style={styles.input} placeholder="Email/Username" />
                <TextInput style={[styles.input, styles.passwordInput]} secureTextEntry={true} placeholder="Password" />
                <Ionicons name="eye" size={25} style={styles.iconStyle} color="#999" />
                <Ionicons name="eye-off" size={25} style={styles.iconStyle} color="#999" />
                <Text style={{ color: 'darkgray', fontSize: 17, textAlign: 'right', marginBottom: 10 }}>Forgot Password?</Text>
                <TouchableOpacity onPress={() => navigation.navigate('Home')}>
                    <Text style={styles.btn}>Log In</Text>
                </TouchableOpacity>
                <Text style={{ color: 'black', textAlign: 'center', fontSize: 18, marginTop: 15 }}>Create an Account?</Text>
                <Text style={{ color: 'gray', fontSize: 20, textAlign: 'center', marginTop: 15 }}>Or</Text>
                <View style={styles.socialIcons}>
                    <Text style={{ paddingHorizontal: 10 }}>
                        <FontAwesome name="google-plus-circle" size={53} color="crimson" />
                    </Text>
                    <Text style={{ paddingHorizontal: 10 }}>
                        <Entypo name="twitter-with-circle" size={50} color="deepskyblue" />
                    </Text>
                    <Text style={{ paddingHorizontal: 10 }}>
                        <MaterialIcons name="facebook" size={50} color="royalblue" />
                    </Text>
                </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        backgroundColor: 'whitesmoke'
    },
    body: {
        margin: 10
    },
    title: {
        fontSize: 30,
        color: 'black',
        fontWeight: 'bold',
        textAlign: 'center',
        marginBottom: 10,
    },
    input: {
        fontSize: 18,
        color: 'black',
        borderColor: 'lightgray',
        borderStyle: 'solid',
        borderWidth: 1,
        padding: 13,
        borderRadius: 5,
        marginVertical: 10
    },
    passwordInput: {
        paddingRight: 50
    },
    btn: {
        color: 'white',
        textAlign: 'center',
        fontSize: 22,
        // fontWeight: 'bold',
        borderRadius: 5,
        marginTop: 20,
        backgroundColor: '#66B57C',
        padding: 12,
        // marginHorizontal: 80
    },
    iconStyle: {
        position: 'absolute',
        top: '26%',
        left: '90%'
    },
    socialIcons: {
        flexDirection: 'row',
        justifyContent: 'center',
        marginTop: 15,
    }
});