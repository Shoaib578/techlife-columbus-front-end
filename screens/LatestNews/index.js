import React from "react"
import { FlatList, SafeAreaView, Text, TouchableOpacity, View, Image } from "react-native"
import styles from "./styles"

const allPosts = [
    {
        "id":"1",
        "name":"Free Code Camp Columbus - Pair Programming",
        "image":require('../../assets/cardsImages/image1.jpg'),
        "news":"Tech News",
        "time":"4min ago"
    },{
        "id":"2",
        "name":"Free Code Camp Columbus - Pair Programming",
        "image":require('../../assets/cardsImages/image2.jpg'),
        "news":"Tech News",
        "time":"4min ago"
    },{
        "id":"3",
        "name":"Free Code Camp Columbus - Pair Programming",
        "image":require('../../assets/cardsImages/image3.jpg'),
        "news":"Tech News",
        "time":"4min ago"
    },{
        "id":"4",
        "name":"Free Code Camp Columbus - Pair Programming",
        "image":require('../../assets/cardsImages/image4.jpg'),
        "news":"Tech News",
        "time":"4min ago"
    },{
        "id":"5",
        "name":"Free Code Camp Columbus - Pair Programming",
        "image":require('../../assets/cardsImages/image4.jpg'),
        "news":"Tech News",
        "time":"4min ago"
    },{
        "id":"6",
        "name":"Free Code Camp Columbus - Pair Programming",
        "image":require('../../assets/cardsImages/image4.jpg'),
        "news":"Tech News",
        "time":"4min ago"
    },
]

class LatestNews extends React.Component{
    render(){
        return(
            <SafeAreaView style={styles.container}>
                <View style={styles.LatestNews}>
                <Text style={styles.LatestNewsText}>Latest News</Text>
                <TouchableOpacity>
                <Text style={styles.ViewAll}>View All</Text>
                </TouchableOpacity>
                </View>
                <View style={styles.LatestNewsCards}>
                    <FlatList
                    showsHorizontalScrollIndicator={false}
                    horizontal={true}
                    data={allPosts}
                    renderItem={({item}) => (
                        <View style={styles.NewsCard} key={item.id}>
                            <Image style={styles.NewsCardImage} source={item.image}/>
                            <Text style={styles.NewsCardText}>{item.name}</Text>
                            <View style={styles.NewsTypeAndTime}>
                            <Text style={styles.NewsType}>{item.news}</Text>
                            <Text style={styles.Time}>{item.time}</Text>
                            </View>
                        </View>
                    )}/>
                </View>
                <View style={styles.TodaysNews}>
                    <View style={styles.TodaysNewsHeaderAndViewAll}>
                    <Text style={styles.TodaysNewsHeader}>Today’s News</Text>
                    <TouchableOpacity>
                    <Text style={styles.ViewAll}>View All</Text>
                    </TouchableOpacity>
                    </View>
                    <View style={styles.TodaysNewsVerticalCards}>
                        <FlatList
                        showsVerticalScrollIndicator={false}
                        data={allPosts}
                        renderItem={({item}) => (
                            <View style={styles.TodaysNewsCard}>
                                <View style={styles.TodaysNewsCardTexts}>
                                    <Text style={styles.TodaysNewsCardName}>{item.name}</Text>
                                    <View style={styles.ChannelTypeAndTime}>
                                        <Text style={styles.ChannelType}>{item.news}</Text>
                                        <Text style={styles.Time}>{item.time}</Text>
                                    </View>
                                </View>
                                <View style={styles.TodaysNewsCardImageBox}>
                                <Image style={styles.TodaysNewsCardImage} source={item.image}/>
                                </View>
                            </View>
                        )}/>
                    </View>
                </View>
            </SafeAreaView>
        )
    }
}

export default LatestNews