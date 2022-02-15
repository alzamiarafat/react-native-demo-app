import { View, Image, Text, StyleSheet, StatusBar, ScrollView } from 'react-native'
import React from 'react';
import Header from '../componants/Header';
import { AntDesign, Feather, Ionicons } from '@expo/vector-icons';
import { Video } from 'expo-av';


export default function Home() {
    const video = React.useRef(null);
    const [status, setStatus] = React.useState({});
    const [Isliked, setIsLiked] = React.useState(false);

    const handleLike = () => {
        if (Isliked) setIsLiked(false)
        else setIsLiked(true)
    }

    return (
        <View style={styles.container}>
            <Header></Header>
            <ScrollView style={styles.bodyContainer}>
                <View style={{ marginRight: 10, marginBottom: 10, borderBottomWidth: 1, borderBottomColor: 'lightgray' }}>
                    <View style={{ flex: 1, flexDirection: 'row' }}>
                        <Image source={{ uri: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTncxHwv7BXAjmaSBtTzrsp1mVdUkJGEKrUuA&usqp=CAU" }} style={{ borderRadius: 50, width: 55, height: 55 }} />
                        <View style={{ flex: 1, flexDirection: 'column', marginLeft: 10 }}>
                            <Text style={{ fontSize: 17, fontWeight: 'bold', marginTop: 4, }}>Maria Hess</Text>
                            <Text style={{ fontSize: 17, color: 'gray' }}>Dhaka,Bangladesh</Text>
                        </View>
                    </View>
                    <View style={{ marginTop: 10 }}>
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
                        <View style={{ flex: 1, flexDirection: 'row', marginVertical: 10 }}>
                            <Feather name="message-circle" size={24} color="gray" style={{ paddingHorizontal: 10 }} />
                            {
                                Isliked ?
                                    <AntDesign name="like2" size={24} color="gray" style={{ paddingHorizontal: 10 }} onPress={handleLike} /> :
                                    <AntDesign name="like1" size={24} color="blue" style={{ paddingHorizontal: 10 }} onPress={handleLike} />
                            }
                            <Ionicons name="bookmark-outline" size={24} color="gray" style={{ paddingHorizontal: 10 }} />
                        </View>
                    </View>
                </View>
                <View style={{ marginRight: 10, marginBottom: 10, borderBottomWidth: 1, borderBottomColor: 'lightgray' }}>
                    <View style={{ flex: 1, flexDirection: 'row' }}>
                        <Image source={{ uri: "https://www.pixinvent.com/materialize-material-design-admin-template/laravel/demo-4/images/avatar/avatar-7.png" }} style={{ borderRadius: 50, width: 55, height: 55 }} />
                        <View style={{ flex: 1, flexDirection: 'column', marginLeft: 10 }}>
                            <Text style={{ fontSize: 17, fontWeight: 'bold', marginTop: 4, }}>John Deo</Text>
                            <Text style={{ fontSize: 17, color: 'gray' }}>Dhaka,Bangladesh</Text>
                        </View>
                    </View>
                    <View style={{ marginTop: 10 }}>
                        <Image source={{ uri: "https://jssors8.azureedge.net/demos/image-slider/img/px-fun-man-person-2361598-image.jpg" }} style={{ width: '100%', height: 200 }} />
                        <View style={{ flex: 1, flexDirection: 'row', marginVertical: 10 }}>
                            <Feather name="message-circle" size={24} color="gray" style={{ paddingHorizontal: 10 }} />
                            <AntDesign name="like2" size={24} color="gray" style={{ paddingHorizontal: 10 }} />
                            <Ionicons name="bookmark-outline" size={24} color="gray" style={{ paddingHorizontal: 10 }} />
                        </View>
                    </View>
                </View>
                <View style={{ marginRight: 10, marginBottom: 10, borderBottomWidth: 1, borderBottomColor: 'lightgray' }}>
                    <View style={{ flex: 1, flexDirection: 'row' }}>
                        <Image source={{ uri: "https://media.istockphoto.com/photos/millennial-male-team-leader-organize-virtual-workshop-with-employees-picture-id1300972574?b=1&k=20&m=1300972574&s=170667a&w=0&h=2nBGC7tr0kWIU8zRQ3dMg-C5JLo9H2sNUuDjQ5mlYfo=" }} style={{ borderRadius: 50, width: 55, height: 55 }} />
                        <View style={{ flex: 1, flexDirection: 'column', marginLeft: 10 }}>
                            <Text style={{ fontSize: 17, fontWeight: 'bold', marginTop: 4, }}>John Deo</Text>
                            <Text style={{ fontSize: 17, color: 'gray' }}>Dhaka,Bangladesh</Text>
                        </View>
                    </View>
                    <View style={{ marginTop: 10 }}>
                        <Image source={{ uri: "https://media.istockphoto.com/photos/very-closeup-view-of-amazing-domestic-pet-in-mirror-round-fashion-is-picture-id1281804798?b=1&k=20&m=1281804798&s=170667a&w=0&h=HIWbeaP_cQSngCz7l9t3xwyE2eyzVgIy3K6xIqPhJQA=" }} style={{ width: '100%', height: 200 }} />
                        <View style={{ flex: 1, flexDirection: 'row', marginVertical: 10 }}>
                            <Feather name="message-circle" size={24} color="gray" style={{ paddingHorizontal: 10 }} />
                            <AntDesign name="like2" size={24} color="gray" style={{ paddingHorizontal: 10 }} />
                            <Ionicons name="bookmark-outline" size={24} color="gray" style={{ paddingHorizontal: 10 }} />
                        </View>
                    </View>
                </View>
                <View style={{ marginRight: 10, marginBottom: 10, borderBottomWidth: 1, borderBottomColor: 'lightgray' }}>
                    <View style={{ flex: 1, flexDirection: 'row' }}>
                        <Image source={{ uri: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRxtI1nfVuk6C2AKDuh3mZeRqTayvRiJ96mEQ&usqp=CAU" }} style={{ borderRadius: 50, width: 55, height: 55 }} />
                        <View style={{ flex: 1, flexDirection: 'column', marginLeft: 10 }}>
                            <Text style={{ fontSize: 17, fontWeight: 'bold', marginTop: 4, }}>Ann Counselman</Text>
                            <Text style={{ fontSize: 17, color: 'gray' }}>Dhaka,Bangladesh</Text>
                        </View>
                    </View>
                    <View style={{ marginTop: 10 }}>
                        <Image source={{ uri: "https://nystudio107-ems2qegf7x6qiqq.netdna-ssl.com/img/blog/_1200x675_crop_center-center_82_line/image_optimzation.jpg" }} style={{ width: '100%', height: 200 }} />
                        <View style={{ flex: 1, flexDirection: 'row', marginVertical: 10 }}>
                            <Feather name="message-circle" size={24} color="gray" style={{ paddingHorizontal: 10 }} />
                            <AntDesign name="like2" size={24} color="gray" style={{ paddingHorizontal: 10 }} />
                            <Ionicons name="bookmark-outline" size={24} color="gray" style={{ paddingHorizontal: 10 }} />
                        </View>
                    </View>
                </View>
                <View style={{ marginRight: 10, marginBottom: 60 }}>
                    <View style={{ flex: 1, flexDirection: 'row' }}>
                        <Image source={{ uri: "https://i.pinimg.com/280x280_RS/8d/3e/cd/8d3ecd98d283dce2dd722a953018334d.jpg" }} style={{ borderRadius: 50, width: 55, height: 55 }} />
                        <View style={{ flex: 1, flexDirection: 'column', marginLeft: 10 }}>
                            <Text style={{ fontSize: 17, fontWeight: 'bold', marginTop: 4, }}>Razan Maklada</Text>
                            <Text style={{ fontSize: 17, color: 'gray' }}>Dhaka,Bangladesh</Text>
                        </View>
                    </View>
                    <View style={{ marginTop: 10 }}>
                        <Image source={{ uri: "https://media.istockphoto.com/photos/colorful-background-of-pastel-powder-explosionrainbow-color-dust-on-picture-id1180542165?k=20&m=1180542165&s=612x612&w=0&h=43hlhk8qdGYP4V-u3AAxD3kPDRIzHjMNWpr-VdBQ2Js=" }} style={{ width: '100%', height: 200 }} />
                        <View style={{ flex: 1, flexDirection: 'row', marginVertical: 10 }}>
                            <Feather name="message-circle" size={24} color="gray" style={{ paddingHorizontal: 10 }} />
                            <AntDesign name="like2" size={24} color="gray" style={{ paddingHorizontal: 10 }} />
                            <Ionicons name="bookmark-outline" size={24} color="gray" style={{ paddingHorizontal: 10 }} />
                        </View>
                    </View>
                </View>
            </ScrollView>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        minHeight: '100%',
        marginTop: StatusBar.currentHeight,
    },
    bodyContainer: {
        paddingVertical: 5,
        paddingLeft: 10,
        paddingRight: 1
    },
    video: {
        width: '100%',
        height: 200,
    },
});