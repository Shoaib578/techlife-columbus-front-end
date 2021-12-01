import React from 'react'
import { SafeAreaView, Image, View, Text, ScrollView, Dimensions, TouchableOpacity } from 'react-native'
import LinearGradient from 'react-native-linear-gradient';
import styles from './styles'

const Cards = [
    {
        "id":"1",
        "header":"What is TechLife Columbus?",
        "description":"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec justo, magna quam nunc. Mus sit massa, sagittis, sem viverra a neque blandit. Orci pulvinar bibendum nunc amet etiam placerat. Mus in at tempor ac dui turpis eros, imperdiet auctor."
    },{
        "id":"2",
        "header":"What is TechLife Columbus?",
        "description":"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec justo, magna quam nunc. Mus sit massa, sagittis, sem viverra a neque blandit. Orci pulvinar bibendum nunc amet etiam placerat. Mus in at tempor ac dui turpis eros, imperdiet auctor."
    },{
        "id":"3",
        "header":"What is TechLife Columbus?",
        "description":"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec justo, magna quam nunc. Mus sit massa, sagittis, sem viverra a neque blandit. Orci pulvinar bibendum nunc amet etiam placerat. Mus in at tempor ac dui turpis eros, imperdiet auctor."
    },{
        "id":"4",
        "header":"What is TechLife Columbus?",
        "description":"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec justo, magna quam nunc. Mus sit massa, sagittis, sem viverra a neque blandit. Orci pulvinar bibendum nunc amet etiam placerat. Mus in at tempor ac dui turpis eros, imperdiet auctor."
    },{
        "id":"5",
        "header":"What is TechLife Columbus?",
        "description":"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec justo, magna quam nunc. Mus sit massa, sagittis, sem viverra a neque blandit. Orci pulvinar bibendum nunc amet etiam placerat. Mus in at tempor ac dui turpis eros, imperdiet auctor."
    },
]

class About extends React.Component{
    goToHome(){
        this.props.navigation.goBack()
    }
    render(){
        return(
            <SafeAreaView>
                <LinearGradient  colors={['#5FA7C0', '#5FA7C0','#91C73E']} style={{width:'100%',height:Dimensions.get('window').width*2/8.5,alignItems:'center', flexDirection:'row', paddingLeft:'6%'}}>
                <TouchableOpacity onPress={() => this.goToHome()}>
                    <Image style={{width:8, height:14}} source={require('../../assets/backArrow.png')}/>
                </TouchableOpacity>
                <Text style={{color:'white',fontSize:18, marginLeft:'5%'}}>About TechLife Columbus</Text>


                </LinearGradient>
                <ScrollView>
                <View style={styles.container}>
                <Image style={styles.AboutUsImage} source={require('../../assets/aboutUsImage.png')}/>
                {Cards.map((item) => (
                    <View key={item.id} style={styles.AboutUsText}>
                    <Text style={styles.WhatIsTechLifeColumbus}>{item.header}</Text>
                    <Text style={styles.Description}>{item.description}</Text>
                    </View>
                ))}
                </View>
                </ScrollView>
            </SafeAreaView>
        )
    }
}

export default About