import React from "react"
import { SafeAreaView, Text, View, Image, FlatList, ScrollView, TouchableOpacity } from "react-native"
import styles from "./styles"
import base_url from "../../base_url"
import AsyncStorage from '@react-native-async-storage/async-storage'
const allPosts = [
    {
        "id":"1",
        "image":require('../../assets/cardsImages/image1.jpg'),
    },{
        "id":"2",
        "image":require('../../assets/cardsImages/image2.jpg')
    },{
        "id":"3",
        "image":require('../../assets/cardsImages/image3.jpg'),
    },{
        "id":"4",
        "image":require('../../assets/cardsImages/image4.jpg'),
    }
]

class EventDetails extends React.Component{

    state ={
        event_details:[],
        is_saved:false,
        is_going:false
    }

    get_viewed_event = async()=>{
        const user = await AsyncStorage.getItem('user')
        const parse = JSON.parse(user)
        console.log(parse.user_id)
        fetch(base_url+'/api/view_event?event_id='+this.props.route.params.id+"&&user_id="+parse.user_id,{
            method:'get',
            
            headers:{
                "Accept":"application/json",
                "Content-Type":"application/json"
            }
        })
        .then(res=>res.json()
        .then(resp=>{
            console.log(resp.event)
            if(resp.event.is_saved == 0){
                this.setState({is_saved:false})
            }else{
                this.setState({is_saved:true})

            }

            if(resp.event.is_going == 0){
                this.setState({is_going:false})
            }else{
                this.setState({is_going:true})

            }
            this.setState({event_details:resp.event})

        })
        )
    }


    save_event = async()=>{
        const user = await AsyncStorage.getItem('user')
        const parse = JSON.parse(user)
        console.log(parse.user_id)
        fetch(base_url+'/api/save_event',{
            method:'post',
            body:JSON.stringify({
                "event_id":this.state.event_details.event_id,
                "user_id":parse.user_id,
               
            }),
            headers:{
                "Accept":"application/json",
                "Content-Type":"application/json"
            }
        })
        .then(res=>{
            res.json()
            .then(resp=>{
                console.log(resp.msg)

                if(this.state.is_saved){
                    this.setState({is_saved:false})
                }else{
                    this.setState({is_saved:true})

                }
            })
        })
    }



    make_going_event = async()=>{
        const user = await AsyncStorage.getItem('user')
        const parse = JSON.parse(user)
        console.log(parse.user_id)
        fetch(base_url+'/api/make_going_event',{
            method:'post',
            body:JSON.stringify({
                "event_id":this.state.event_details.event_id,
                "user_id":parse.user_id,
               
            }),
            headers:{
                "Accept":"application/json",
                "Content-Type":"application/json"
            }
        })
        .then(res=>{
            res.json()
            .then(resp=>{
                console.log(resp.msg)

                if(this.state.is_going){
                    this.setState({is_going:false})
                }else{
                    this.setState({is_going:true})

                }
            })
        })
    }

    componentDidMount(){
        this.get_viewed_event()

       
    }
    render(){
        return(
            <ScrollView>
            <SafeAreaView style={styles.container}>
            {console.log(this.state.event_details)}
                <View style={styles.Card}>
                <Text style={styles.EventDetailsStyle}>Event Details</Text>
                <Image style={styles.DetailImage} source={{uri:base_url+'/uploads/'+this.state.event_details.event_image}}/>
                <Text style={styles.Name}>{this.state.event_details.event_title}</Text>
                <Text style={styles.EventDescription}>Event Description</Text>
                <Text style={styles.FirstSectionOfText}>{this.state.event_details.event_description}</Text>
                
                <View style={styles.FollowUsOnFaceBook}>
                <Text style={styles.ThirdSectionOfText}>follow us on Facebook : </Text>
                <TouchableOpacity>
                    <Text style={styles.freeCodeCampColumbs}>free.code.camp.columbus</Text>
                </TouchableOpacity>
                </View>
                <View style={styles.WorkTogetherOnProjects}>
                <Text style={styles.WeAreMeetingUp}>We are meeting in-person at the CoHatch Upper Arlington location. The CoHatch Covid policy is "mask optional" for all attendees. <TouchableOpacity><Text style={styles.SeeMore}>See more</Text></TouchableOpacity></Text>
                </View>
                
                </View>

                


            </SafeAreaView>

            <View style={{flexDirection:'row'}}>
            <TouchableOpacity onPress={this.make_going_event} style={styles.going_button}>
                    <Text>{this.state.is_going == false?'Make it Going':'Make it Ungoing'}</Text>
            </TouchableOpacity>

            <TouchableOpacity onPress={this.save_event} style={styles.save_button}>
                    <Text>{this.state.is_saved == false ? 'Make it Save':'Make it Unsave'}</Text>
            </TouchableOpacity>
            </View>

            </ScrollView>
        )
    }
}

export default EventDetails