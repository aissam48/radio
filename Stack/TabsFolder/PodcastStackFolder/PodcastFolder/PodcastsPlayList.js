import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { StyleSheet, Text, TouchableOpacity, View, Image, FlatList, ScrollView } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { WebView } from 'react-native-webview';
import YoutubePlayer from "react-native-youtube-iframe";
import { useDispatch, useSelector } from 'react-redux';

export default function PodcastsPlayList({ navigation }) {

    const dispatch = useDispatch()

    var [numLines, setNumLines] = useState(2)
    const listPodcasts = [
        { titile: 'The Morning Show', duration: '07:30' },
        { titile: 'The Morning Show', duration: '03:80' },
        { titile: 'The Morning Show', duration: '01:30' },
        { titile: 'The Morning Show', duration: '17:30' },
        { titile: 'The Morning Show', duration: '18:40' },
        { titile: 'The Morning Show', duration: '09:10' },
        { titile: 'The Morning Show', duration: '03:00' },
        { titile: 'The Morning Show', duration: '01:00' },
        { titile: 'The Morning Show', duration: '10:30' },
    ]


    return (
        <SafeAreaView style={{ flex: 1, flexDirection: 'column', width: '100%' }}>

            <ScrollView nestedScrollEnabled style={{ flex: 1, flexDirection: 'column' }}>
                <View style={{ flex: 1, flexDirection: 'column', width: '100%' }}>

                    <View style={{ marginTop: 20, marginStart: 5 }}>
                        <TouchableOpacity
                            onPress={() => {
                                navigation.pop()
                            }}
                        >
                            <Image source={require('../../../../assets/back.png')} style={{ height: 30, width: 30 }} />
                        </TouchableOpacity>
                    </View>

                    <View style={{ flexDirection: 'row', marginTop: 35, width: '100%' }}>

                        <View style={{ width: '40%', backgroundColor: '#ffffff', marginStart: 20, borderRadius: 20, height: 150 }}>
                            <Image source={require('../../../../assets/jou.png')} style={{ height: '100%', width: '100%', borderRadius: 10 }} />
                        </View>
                        <View style={{ width: '60%' }}>
                            <Text style={{ marginStart: 15, marginEnd: 20, fontSize: 17, fontWeight: 'bold' }}>Sefarim</Text>
                        </View>
                    </View>

                    <View style={{ marginTop: 35, width: '100%' }}>
                        <Text style={{ fontWeight: 'bold', marginStart: 20, fontSize: 20 }}> Journalistes</Text>
                    </View>

                    <View style={{ flexDirection: 'row', marginTop: 15, width: '100%' }}>

                        <View style={{ height: 70, width: 70, backgroundColor: '#ffffff', marginStart: 20, borderRadius: 10 }}>
                            <Image source={require('../../../../assets/jou.png')} style={{ height: '100%', width: '100%', borderRadius: 10 }} />
                        </View>
                        <View style={{ width: '70%' }}>
                            <Text style={{ marginStart: 15, marginEnd: 20, fontSize: 12, fontWeight: 'bold' }}>Michel Zerbib</Text>
                        </View>
                    </View>

                    <View style={{ flexDirection: 'column', marginTop: 15, width: '100%' }}>
                        <View style={{ marginStart: 20, marginEnd: 20, marginTop: 5 }}>

                            <Text
                                numberOfLines={numLines}
                            >
                                Sefarim ( les livres ) c’est le nouveau rendez-vous de l’actualité vivante des livres et des auteurs . SEFARIM conversations avec Michel Zerbib pour découvrir des écrivains que l’on croit connaître , tous les samedi à 21h30 sur RADIO J. </Text>
                            <TouchableOpacity
                                onPress={() => {

                                    switch (numLines) {
                                        case undefined: {
                                            setNumLines(2)
                                            break
                                        }
                                        case 2: {
                                            setNumLines(undefined)
                                            break
                                        }
                                    }
                                }}
                            >
                                <Text style={{ fontWeight: 'bold' }}>
                                    {numLines == 2 ? 'show more > ' : ' show less <'}
                                </Text>
                            </TouchableOpacity>

                        </View>
                    </View>

                    <View style={{ marginTop: 35, width: '100%' }}>

                        <Text style={{ fontWeight: 'bold', marginStart: 20, fontSize: 20 }}> Les Podcasts</Text>

                    </View>

                    <View style={{ marginTop: 20, width: '100%', marginBottom: 15 }}>

                        <FlatList
                            keyExtractor={(item, index) => index}
                            nestedScrollEnabled
                            data={listPodcasts}
                            renderItem={({ item }) => {

                                var count = 1

                                return (

                                    <View style={{ width: '100%' }}>

                                        <View style={{ marginStart: 20, marginEnd: 20, marginTop: 5, flexDirection: 'row', justifyContent: 'space-between', backgroundColor: '#ffffff', height: 70, borderRadius: 15 }}>
                                            <View style={{ flexDirection: 'column', justifyContent: 'space-around' }}>
                                                <Text style={{ marginStart: 15 }}>{item.titile}</Text>
                                                <Text style={{ marginStart: 15 }}>{item.duration}</Text>
                                            </View>

                                            <TouchableOpacity
                                                style={{ alignSelf: 'center' }}
                                                onPress={() => {

                                                    count = count + 1
                                                    console.log(count)

                                                    dispatch({ type: 'playThis', podcastData: { text: 'https://www2.cs.uic.edu/~i101/SoundFiles/CantinaBand60.wav', nu: count } })
                                                    //navigation.navigate('PlayPodcast')
                                                }}
                                            >
                                                <View style={{ backgroundColor: '#1251A0', height: 40, width: 40, alignSelf: 'center', justifyContent: 'center', alignItems: 'center', borderRadius: 100, marginEnd: 15 }}>

                                                    <Image source={require('../../../../assets/playradio.png')} style={{ height: 20, width: 20 }} />
                                                </View>
                                            </TouchableOpacity>



                                        </View>

                                    </View>
                                )
                            }}
                        />

                    </View>

                </View>
            </ScrollView>




        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'flex-start',
    },
});