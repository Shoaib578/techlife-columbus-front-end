import React from "react"
import { SafeAreaView, View, Text, FlatList, Image,ActivityIndicator,TouchableOpacity } from "react-native"
import styles from "./styles"
import base_url from "../../base_url"
import AsyncStorage from '@react-native-async-storage/async-storage'
class Going extends React.Component{

    state = {
        going_events:[],
        is_loading:true,
        network_error:false,
        events_length:0
    }


    get_all_going_events = async()=>{
        const user = await AsyncStorage.getItem('user')
        const parse = JSON.parse(user)
        if(parse == null){
            this.setState({going_events:[],is_loading:false})
        }else{
            fetch(base_url+'/api/get_going_events?user_id='+parse.user_id,{
                method:'get',
               
                headers:{
                    "Accept":"application/json",
                    "Content-Type":"application/json"
                }
            })
            .then(res=>res.json()
            .then(resp=>{
            
                this.setState({going_events:resp.going_events,is_loading:false})
            })
            )
            .catch(err=>{
                console.log('this is the error '+err)
                this.setState({network_error:true,is_loading:false})
            })
        }
        

    }

    GoToEventDetails(event_id){
        this.props.navigation.navigate('EventDetails',{id:event_id})
    }


  async  componentDidMount(){
        
        await  this.get_all_going_events()
        this.props.navigation.addListener('focus',async()=>{
            this.setState({is_loading:true})
            await this.get_all_going_events()
          })
    }


    render(){
        if(this.state.is_loading == false ){
        if(this.state.going_events.length>0){

        return(
            <SafeAreaView style={styles.container}>
                <FlatList
                data={this.state.going_events}
                renderItem={({item}) => (
                    <TouchableOpacity onPress={() => this.GoToEventDetails(item.event_id)} key={item.event_id} style={styles.Card}>
                        <View style={styles.Information}>
                            <Text style={styles.PostName}>{item.event_title}</Text>
                            <View style={styles.ClockAndCalender}>
                                <View style={styles.CalenderAndDate}>
                                    <Image style={styles.CalendarSize} source={require('../../assets/calender.png')}/>
                                    <Text style={styles.Date}>{item.event_date}</Text>
                                </View>

                                <View style={styles.ClockAndTime}>
                                    <Image style={styles.ClockSize} source={require('../../assets/clock.png')}/>
                                    <Text style={styles.Time}>{item.event_time}</Text>
                                </View>
                            </View>
                        </View>
                        <View style={styles.PostImage}>
                            <Image style={styles.PostImageStyle} source={{uri:base_url+'/uploads/'+item.event_image}}/>
                        </View>
                    </TouchableOpacity>
                )}
                />
            </SafeAreaView>
        )

    }else{
        return(
            <SafeAreaView style={styles.Container}>
                <View style={styles.NotFoundContent}>
                    <Image style={styles.NothingFoundImage} source={require('../../assets/nothingfound.png')}/>
                    <Text style={styles.OOPs}>OOPs!</Text>
                    <Text style={styles.NoSavedEventsText}>It seems you dont have any going events</Text>
                    <Text style={styles.GoHomeAndSaveEvents}>Just Go to Home Page and make going events there</Text>
                </View>
            </SafeAreaView>
        )
    }

        }else{
            return <View>

            {this.state.is_loading?<ActivityIndicator color="skyblue" size="large" style={{marginTop:30}} />:null}
            {this.state.network_error?
            <View>
            <Text style={{fontSize:17,fontWeight:"bold",textAlign:'center'}}>Something Went Wrong</Text>
            <TouchableOpacity onPress={()=>{
                this.setState({is_loading:true})
                this.get_all_going_events()
            }} style={{marginTop:10,alignSelf:'center'}}>
                <Text>Click Here To Try Again</Text>
            </TouchableOpacity>
            </View>
            :null}
            </View>
        }
    }
}

export default Going