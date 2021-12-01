import React from "react";
import { SafeAreaView, Text, FlatList, Image, View } from "react-native";
import styles from './styles';

const allPosts = [
    {
        "id":"1",
        "name":"Redbud Software",
        "image":require('../../assets/cardsImages/image1.jpg'),
        "description":"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Purus facilisis auctor at sem justo, vestibulum."
    },{
        "id":"2",
        "name":"Redbud Software",
        "image":require('../../assets/cardsImages/image2.jpg'),
        "description":"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Purus facilisis auctor at sem justo, vestibulum."
    },{
        "id":"3",
        "name":"Redbud Software",
        "image":require('../../assets/cardsImages/image3.jpg'),
        "description":"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Purus facilisis auctor at sem justo, vestibulum."
    },{
        "id":"4",
        "name":"Redbud Software",
        "image":require('../../assets/cardsImages/image4.jpg'),
        "description":"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Purus facilisis auctor at sem justo, vestibulum."
    },{
        "id":"5",
        "name":"Redbud Software",
        "image":require('../../assets/cardsImages/image4.jpg'),
        "description":"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Purus facilisis auctor at sem justo, vestibulum."
    },{
        "id":"6",
        "name":"Redbud Software",
        "image":require('../../assets/cardsImages/image4.jpg'),
        "description":"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Purus facilisis auctor at sem justo, vestibulum."
    },
]

class StartUpLifeScreen extends React.Component{
    render(){
        return(
            <SafeAreaView style={styles.container}>
                <FlatList
                showsVerticalScrollIndicator={false}
                data={allPosts}
                renderItem={({item}) => (
                    <View key={item.id} style={styles.StartUpCard}>
                        <View style={styles.StartUpImageBox}>
                        <Image style={styles.StartUpImage} source={item.image}/>
                        </View>
                        <View style={styles.StartUpTexts}>
                            <Text style={styles.StartUpName}>{item.name}</Text>
                            <Text style={styles.StartUpDescription}>{item.description}</Text>
                        </View>
                    </View>
                )}
                />
            </SafeAreaView>
        )
    }
}

export default StartUpLifeScreen;