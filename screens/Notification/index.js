import React from "react";
import { SafeAreaView, Text, FlatList, Image, View } from "react-native";
import styles from './styles';

const allPosts = [
    {
        "id":"1",
        "name":"Redbud Software",
        "image":require('../../assets/cardsImages/image1.jpg'),
        "description":"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Purus facilisis auctor at sem justo, vestibulum.",
        "time":"10:32 AM"
    },{
        "id":"2",
        "name":"Redbud Software",
        "image":require('../../assets/cardsImages/image2.jpg'),
        "description":"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Purus facilisis auctor at sem justo, vestibulum.",
        "time":"10:32 AM"
    },{
        "id":"3",
        "name":"Redbud Software",
        "image":require('../../assets/cardsImages/image3.jpg'),
        "description":"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Purus facilisis auctor at sem justo, vestibulum.",
        "time":"10:32 AM"
    },{
        "id":"4",
        "name":"Redbud Software",
        "image":require('../../assets/cardsImages/image4.jpg'),
        "description":"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Purus facilisis auctor at sem justo, vestibulum.",
        "time":"10:32 AM"
    },{
        "id":"5",
        "name":"Redbud Software",
        "image":require('../../assets/cardsImages/image4.jpg'),
        "description":"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Purus facilisis auctor at sem justo, vestibulum.",
        "time":"10:32 AM"
    },{
        "id":"6",
        "name":"Redbud Software",
        "image":require('../../assets/cardsImages/image4.jpg'),
        "description":"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Purus facilisis auctor at sem justo, vestibulum.",
        "time":"10:32 AM"
    },
]

class Notification extends React.Component{
    render(){
        return(
            <SafeAreaView style={styles.container}>
                <FlatList
                showsVerticalScrollIndicator={false}
                data={allPosts}
                renderItem={({item}) => (
                    <View key={item.id} style={styles.NotificationCard}>
                        <View style={styles.NotificationImageBox}>
                        <Image style={styles.NotificationImage} source={item.image}/>
                        </View>
                        <View style={styles.NotificationTexts}>
                            <View style={{flexDirection:'row'}}>
                            <Text style={styles.NotificationName}>{item.name}  </Text>
                            <Text>{item.time}</Text>
                            </View>
                            <Text style={styles.NotificationDescription}>{item.description}</Text>
                        </View>
                    </View>
                )}
                />
            </SafeAreaView>
        )
    }
}

export default Notification;