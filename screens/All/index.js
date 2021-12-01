import React from "react"
import { SafeAreaView, View, Text, FlatList, Image, TouchableOpacity, ActivityIndicator } from "react-native"
import styles from "./styles"
import base_url from "../../base_url"

    

class All extends React.Component{
    state = {
        all_events:[],
        is_loading:true,
        network_error:false
    }

    get_all_events = ()=>{
        fetch(base_url+'/api/get_all_events',{
            method:'get',
            
            headers:{
                "Accept":"application/json",
                "Content-Type":"application/json"
            }
        })
        .then(res=>res.json()
        .then(resp=>{
            this.setState({all_events:resp.all_event,is_loading:false})
        })
        )
        .catch(err=>{
            console.log('this is the error '+err)
            this.setState({network_error:true,is_loading:false})
        })

    }
  async  componentDidMount(){
       
        await  this.get_all_events()
        this.props.navigation.addListener('focus',async()=>{
            this.setState({is_loading:true})
            await this.get_all_events()
          })

    }
    GoToEventDetails(event_id){
        this.props.navigation.navigate('EventDetails',{id:event_id})
    }
    render(){
        if(this.state.is_loading == false ){

        return(

            <SafeAreaView style={styles.container}>
                <FlatList
                data={this.state.all_events}
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
        return <View>

            {this.state.is_loading?<ActivityIndicator color="skyblue" size="large" style={{marginTop:30}} />:null}
            {this.state.network_error?
            <View>
            <Text style={{fontSize:17,fontWeight:"bold",textAlign:'center'}}>Something Went Wrong</Text>
            <TouchableOpacity onPress={()=>{
                this.setState({is_loading:true})
                this.get_all_events()
            }} style={{marginTop:10,alignSelf:'center'}}>
                <Text>Click Here To Try Again</Text>
            </TouchableOpacity>
            </View>
            :null}
            </View>
       
    }

    }
}

export default All