import { View, Text, StyleSheet, TextInput, Button, Alert } from 'react-native'
import React from 'react';
import { Ionicons, MaterialIcons, Entypo, FontAwesome } from '@expo/vector-icons';

export default function Login() {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>Login</Text>
            <View style={styles.body}>
                <TextInput style={styles.input} placeholder="Email/Username" />
                <TextInput style={[styles.input, styles.passwordInput]} secureTextEntry={true} placeholder="Password" />
                <Ionicons name="eye" size={25} style={styles.iconStyle} color="#999" />
                <Ionicons name="eye-off" size={25} style={styles.iconStyle} color="#999" />
                <Text style={{ color: 'darkgray', fontSize: 17, textAlign: 'right', marginBottom: 10 }}>Forgot Password?</Text>
                <View style style={styles.btn}>
                    <Button title="Login" onPress={() => Alert.alert('Right button pressed')} />
                </View>
                <Text style={{ color: 'black', textAlign: 'center', fontSize: 18, marginTop: 20 }}>Create An Account?</Text>
                <Text style={{ color: 'gray', fontSize: 20, textAlign: 'center', marginTop: 60 }}>Or</Text>
                <View style={styles.socialIcons}>
                    <Text style={{ paddingHorizontal: 10 }}>
                        <FontAwesome name="google-plus-circle" size={43} color="crimson" />
                    </Text>
                    <Text style={{ paddingHorizontal: 10 }}>
                        <Entypo name="twitter-with-circle" size={40} color="deepskyblue" />
                    </Text>
                    <Text style={{ paddingHorizontal: 10 }}>
                        <MaterialIcons name="facebook" size={40} color="royalblue" />
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
        fontSize: 40,
        color: '#66B57C',
        fontWeight: 'bold',
        textAlign: 'center',
        marginBottom: 20
    },
    input: {
        fontSize: 18,
        color: 'black',
        borderColor: 'lightgray',
        borderStyle: 'solid',
        borderWidth: 1,
        padding: 10,
        borderRadius: 5,
        marginVertical: 10
    },
    passwordInput: {
        paddingRight: 50
    },
    btn: {
        marginTop: 30,
        marginHorizontal: 50
    },
    iconStyle: {
        position: 'absolute',
        top: '23%',
        left: '90%'
    },
    socialIcons: {
        flexDirection: 'row',
        justifyContent: 'center',
        marginTop: 20,
    }
});