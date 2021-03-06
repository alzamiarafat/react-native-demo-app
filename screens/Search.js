import { View, StatusBar, KeyboardAvoidingView, TextInput, ScrollView, StyleSheet, Image, Text, Platform, TouchableWithoutFeedback, Keyboard } from 'react-native'
import React, { useState } from 'react';
import Header from '../componants/Header';
import { AntDesign } from '@expo/vector-icons';
import { Video } from 'expo-av';

export default function Search() {
    const video = React.useRef(null);
    const [status, setStatus] = React.useState({});
    return (
        <View style={styles.container}>
            <Header></Header>
            <ScrollView>
                <KeyboardAvoidingView
                    behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
                    style={{ flex: 1 }}>
                    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
                        <View style={{ flex: 1, flexDirection: 'row', margin: 10 }}>
                            <TextInput style={styles.input} placeholder="Enter Text..." />
                            <Text style={styles.searchBtn}>
                                <AntDesign name="search1" size={24} color="gray" />
                            </Text>
                        </View>
                    </TouchableWithoutFeedback>
                </KeyboardAvoidingView>
                <View style={{ flex: 1, flexDirection: 'row', flexWrap: 'wrap', margin: 10 }}>
                    <Image source={{ uri: "https://images.pexels.com/photos/674010/pexels-photo-674010.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" }} style={{ flex: 4, width: 200, height: 159, marginRight: 5 }} />
                    <Image source={{ uri: "https://images.unsplash.com/photo-1544526226-d4568090ffb8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8aGQlMjBpbWFnZXxlbnwwfHwwfHw%3D&w=1000&q=80" }} style={{ flex: 4, width: 200, height: 159, marginLeft: 5 }} />
                </View>
                <View style={{ flex: 1, flexDirection: 'row', flexWrap: 'wrap', margin: 10 }}>
                    <Image source={{ uri: "https://st.depositphotos.com/1006706/2671/i/600/depositphotos_26715369-stock-photo-which-way-to-choose-3d.jpg" }} style={{ flex: 4, width: 200, height: 159, marginRight: 5 }} />
                    <Video
                        ref={video}
                        style={[styles.video, styles.rightVideo]}
                        source={{
                            uri: 'http://d23dyxeqlo5psv.cloudfront.net/big_buck_bunny.mp4',
                        }}
                        useNativeControls
                        resizeMode="cover"
                        isLooping
                        shouldPlay
                        isMuted={true}
                        onPlaybackStatusUpdate={status => setStatus(() => status)}
                    />
                </View>
                <View style={{ flex: 1, flexDirection: 'row', flexWrap: 'wrap', margin: 10 }}>
                    <Video
                        ref={video}
                        style={styles.video}
                        source={{
                            uri: 'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/Sintel.mp4',
                        }}
                        useNativeControls
                        resizeMode="cover"
                        isLooping
                        shouldPlay
                        isMuted={true}
                        onPlaybackStatusUpdate={status => setStatus(() => status)}
                    />
                    <Video
                        ref={video}
                        style={[styles.video, styles.rightVideo]}
                        source={{
                            uri: 'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerMeltdowns.mp4',
                        }}
                        useNativeControls
                        resizeMode="cover"
                        isLooping
                        shouldPlay
                        isMuted={true}
                        onPlaybackStatusUpdate={status => setStatus(() => status)}
                    />
                </View>
                <View style={{ flex: 1, flexDirection: 'row', flexWrap: 'wrap', margin: 10 }}>
                    <Video
                        ref={video}
                        style={styles.video}
                        source={{
                            uri: 'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4',
                        }}
                        useNativeControls
                        resizeMode="cover"
                        isLooping
                        shouldPlay
                        isMuted={true}
                        onPlaybackStatusUpdate={status => setStatus(() => status)}
                    />
                    <Image source={{ uri: "https://st.depositphotos.com/1006706/2671/i/600/depositphotos_26715369-stock-photo-which-way-to-choose-3d.jpg" }} style={{ flex: 4, width: 200, height: 159, marginLeft: 5 }} />
                </View>
                <View style={{ flex: 1, flexDirection: 'row', flexWrap: 'wrap', margin: 10 }}>
                    <Image source={{ uri: "https://images.unsplash.com/photo-1516617442634-75371039cb3a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8cGhvdG8lMjBiYWNrZ3JvdW5kfGVufDB8fDB8fA%3D%3D&w=1000&q=80" }} style={{ flex: 4, width: 200, height: 159, marginRight: 5 }} />
                    <Video
                        ref={video}
                        style={[styles.video, styles.rightVideo]}
                        source={{
                            uri: 'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerEscapes.mp4',
                        }}
                        useNativeControls
                        resizeMode="cover"
                        isLooping
                        shouldPlay
                        isMuted={true}
                        onPlaybackStatusUpdate={status => setStatus(() => status)}
                    />
                </View>
                <View style={{ flex: 1, flexDirection: 'row', flexWrap: 'wrap', margin: 10 }}>
                    <Image source={{ uri: "https://www.mmppicture.co.in/wp-content/uploads/2020/09/Background-1-802x1080.jpg" }} style={{ flex: 4, width: 200, height: 159, marginRight: 5 }} />
                    <Video
                        ref={video}
                        style={[styles.video, styles.rightVideo]}
                        source={{
                            uri: 'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerFun.mp4',
                        }}
                        useNativeControls
                        resizeMode="cover"
                        isLooping
                        shouldPlay
                        isMuted={true}
                        onPlaybackStatusUpdate={status => setStatus(() => status)}
                    />
                </View>
                <View style={{ flex: 1, flexDirection: 'row', flexWrap: 'wrap', margin: 10 }}>
                    <Video
                        ref={video}
                        style={styles.video}
                        source={{
                            uri: 'http://d23dyxeqlo5psv.cloudfront.net/big_buck_bunny.mp4',
                        }}
                        useNativeControls
                        resizeMode="cover"
                        isLooping
                        shouldPlay
                        isMuted={true}
                        onPlaybackStatusUpdate={status => setStatus(() => status)}
                    />
                    <Image source={{ uri: "https://images.unsplash.com/photo-1592743263126-bb241ee76ac7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8bmF0dXJhbCUyMGJhY2tncm91bmR8ZW58MHx8MHx8&w=1000&q=80" }} style={{ flex: 4, width: 200, height: 159, marginLeft: 5 }} />
                </View>
                <View style={{ flex: 1, flexDirection: 'row', flexWrap: 'wrap', margin: 10 }}>
                    <Image source={{ uri: "https://www.w3schools.com/howto/img_forest.jpg" }} style={{ flex: 4, width: 200, height: 159, marginRight: 5 }} />
                    <Image source={{ uri: "https://images.unsplash.com/photo-1530083271320-8b3a0f7b31a8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1yZWxhdGVkfDd8fHxlbnwwfHx8fA%3D%3D&w=1000&q=80" }} style={{ flex: 4, width: 200, height: 159, marginLeft: 5 }} />
                </View>
                <View style={{ flex: 1, flexDirection: 'row', flexWrap: 'wrap', margin: 10 }}>
                    <Image source={{ uri: "https://www.seoclerk.com/pics/000/994/191/0502baf5c7102567436b970eb38652b9.jpg" }} style={{ flex: 4, width: 200, height: 159, marginRight: 5 }} />
                    <Image source={{ uri: "https://media.istockphoto.com/photos/colored-powder-explosion-on-black-background-picture-id1057506940?k=20&m=1057506940&s=612x612&w=0&h=3j5EA6YFVg3q-laNqTGtLxfCKVR3_o6gcVZZseNaWGk=" }} style={{ flex: 4, width: 200, height: 159, marginLeft: 5 }} />
                </View>
                <View style={{ flex: 1, flexDirection: 'row', flexWrap: 'wrap', margin: 10 }}>
                    <Image source={{ uri: "https://149369349.v2.pressablecdn.com/wp-content/uploads/2012/10/twitter-cover.jpg" }} style={{ flex: 4, width: 200, height: 159, marginRight: 5 }} />
                    <Image source={{ uri: "https://f.hubspotusercontent00.net/hubfs/53/image-file-extensions.jpg" }} style={{ flex: 4, width: 200, height: 159, marginLeft: 5 }} />
                </View>
                <View style={{ flex: 1, flexDirection: 'row', flexWrap: 'wrap', margin: 10 }}>
                    <Video
                        ref={video}
                        style={styles.video}
                        source={{
                            uri: 'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4',
                        }}
                        useNativeControls
                        resizeMode="cover"
                        isLooping
                        shouldPlay
                        isMuted={true}
                        onPlaybackStatusUpdate={status => setStatus(() => status)}
                    />
                    <Image source={{ uri: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRXJfZxdWK4TSK8xQiMzv3Q-fkKQI0fg_lDG4bssfK9lUtV0YYYzqFtZcKuH8ozBqfSuXo&usqp=CAU" }} style={{ flex: 4, width: 200, height: 159, marginLeft: 5 }} />
                </View>
                <View style={{ flex: 1, flexDirection: 'row', flexWrap: 'wrap', margin: 10 }}>
                    <Image source={{ uri: "https://images.unsplash.com/photo-1523358527035-6d9887f03cac?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8Ymlhc3xlbnwwfHwwfHw%3D&w=1000&q=80" }} style={{ flex: 4, width: 200, height: 159, marginRight: 5 }} />
                    <Image source={{ uri: "https://nystudio107-ems2qegf7x6qiqq.netdna-ssl.com/img/blog/_1200x675_crop_center-center_82_line/image_optimzation.jpg" }} style={{ flex: 4, width: 200, height: 159, marginLeft: 5 }} />
                </View>
                <View style={{ flex: 1, flexDirection: 'row', flexWrap: 'wrap', margin: 10 }}>
                    <Image source={{ uri: "https://jssors8.azureedge.net/demos/image-slider/img/px-fun-man-person-2361598-image.jpg" }} style={{ flex: 4, width: 200, height: 159, marginRight: 5 }} />
                    <Image source={{ uri: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQLmPVulUDNkmk6G0irYxKWZiPnwRXXuM8_T_2fFrLHnRNmjC5LPG1l94olPbrYJjikH4s&usqp=CAU" }} style={{ flex: 4, width: 200, height: 159, marginLeft: 5 }} />
                </View>
            </ScrollView>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
        marginTop: StatusBar.currentHeight,
    },
    input: {
        flex: 6,
        borderColor: 'lightgray',
        borderStyle: 'solid',
        borderWidth: 1,
        padding: 7,
        height: 45,
        borderRadius: 10
    },
    searchBtn: {
        flex: 1,
        height: 45,
        marginLeft: 10,
        borderColor: 'lightgray',
        borderStyle: 'solid',
        borderWidth: 1,
        textAlign: "center",
        paddingTop: 10,
        borderRadius: 10
    },
    video: {
        flex: 4,
        width: 200,
        height: 159,
        marginRight: 5
    },
    rightVideo: {
        marginLeft: 5
    },
});