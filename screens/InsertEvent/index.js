import React from 'react'
import {View,Text, Image, TextInput, TouchableOpacity, ScrollView, Dimensions} from 'react-native'
import LinearGradient from 'react-native-linear-gradient';
import AntDesign from 'react-native-vector-icons/AntDesign'
import Feather from 'react-native-vector-icons/Feather'
import Ionicons from 'react-native-vector-icons/Ionicons'
import EvilIcons from 'react-native-vector-icons/EvilIcons'
import DateTimePickerModal from "react-native-modal-datetime-picker";
import Moment from 'moment';

export default class InsertEvent extends React.Component{
    state = {
        isShownDatePicker:false,
        isShownTimePicker:false,
        date:null,
        time:null
    }
    ShowDatePicker = ()=>{
        if(this.state.isShownDatePicker){
            this.setState({isShownDatePicker:false})
        }else{
            this.setState({isShownDatePicker:true})

        }
    }



    ShowTimePicker = ()=>{
        if(this.state.isShownTimePicker){
            this.setState({isShownTimePicker:false})
        }else{
            this.setState({isShownTimePicker:true})

        }
    }

    handleDateConfirm = (date) => {
       
        
       this.setState({date:new Date(date)})
      

       this.ShowDatePicker();
   
      };

    handleTimeConfirm = (time)=>{
        console.log(time)
        this.setState({time:time})
        this.ShowTimePicker();
    }



    render(){
        Moment.locale('en');
        return(
            <View style={{flex:1,}}>
                <View style={{marginTop:20,}}>
                <Text style={{fontSize:16,fontWeight:'bold',color:'black',padding:20}}>Event Name</Text>
                
                <View style={{borderColor:'#E8E8E8',borderWidth:1,borderRadius:10,width:'92%',alignSelf:'center',backgroundColor:'#E8E8E8'}}>
               
                <TextInput placeholder="Enter the name of event" style={{left:10}}/>
                </View>



                </View>



                <View style={{marginTop:20,flexDirection:'row',width:'100%'}}>
                <View style={{width:'50%'}}>
                
                <TouchableOpacity onPress={this.ShowTimePicker} style={{flexDirection:'row',justifyContent:'space-between',borderColor:'#E8E8E8',borderWidth:1,borderRadius:10,width:'92%',alignSelf:'center',backgroundColor:'#E8E8E8',padding:10}}>
               
                <Text   style={{left:10}}>{this.state.time?Moment(this.state.time).format('hh:mm:ss a'):'Pick the time'}</Text>
                <Ionicons name="time" size={22}/>
                </TouchableOpacity>
                </View>



                <View style={{width:'50%'}}>
                
                <TouchableOpacity onPress={this.ShowDatePicker} style={{flexDirection:'row',justifyContent:'space-between',borderColor:'#E8E8E8',borderWidth:1,borderRadius:10,width:'92%',alignSelf:'center',backgroundColor:'#E8E8E8',padding:10}}>
               
                <Text   style={{left:10}}>{this.state.date?Moment(this.state.date).format('d MMM'):'Pick the Date'}</Text>
                <EvilIcons name="calendar" size={30}/>
                </TouchableOpacity>
                </View>
                



                </View>


                <View style={{marginTop:20,}}>
                <Text style={{fontSize:16,fontWeight:'bold',color:'black',padding:20}}>Event Description</Text>
                
                <View style={{borderColor:'#E8E8E8',borderWidth:1,padding:10,borderRadius:10,width:'92%',alignSelf:'center',backgroundColor:'#E8E8E8'}}>
               
                <TextInput placeholder="Enter the description of event" multiline  numberOfLines={4}  />
                </View>


                <TouchableOpacity style={{backgroundColor:'#5FA7C0',borderColor:'#5FA7C0',borderWidth:1,borderRadius:10,padding:10,alignItems:'center',width:'90%',alignSelf:'center',marginTop:80}}>
                    <Text style={{color:'white',fontWeight:'bold'}}>Submit</Text>
                </TouchableOpacity>


                </View>

                <DateTimePickerModal
                isVisible={this.state.isShownDatePicker}
                mode="date"
                onCancel={this.ShowDatePicker}
                onConfirm={this.handleDateConfirm}
                />




                <DateTimePickerModal
                isVisible={this.state.isShownTimePicker}
                mode="time"
                onCancel={this.ShowTimePicker}
                onConfirm={this.handleTimeConfirm}
                />
                
            </View>
        )
    }
}