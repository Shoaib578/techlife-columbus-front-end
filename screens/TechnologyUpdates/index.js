import React from 'react'

import  Entypo   from "react-native-vector-icons/Entypo";
import  AntDesign  from 'react-native-vector-icons/AntDesign'; 
import EvilIcons from 'react-native-vector-icons/EvilIcons'
import {View,Text, Alert,ActivityIndicator,StyleSheet,StatusBar,TouchableOpacity,Dimensions, Image,Button, TextInput,ScrollView} from 'react-native'
import LinearGradient from 'react-native-linear-gradient';

const allPosts = [
    {
        "id":"1",
        "name":"John Doe",
        "profile_image":require('../../assets/dummy_profile_pic.png'),
        "message":"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam orci quisque leo mattis tortor. In in curabitur ac massa facilisis.",
        "time":"01:00 PM"
    },{
        "id":"2",
        "name":"John Doe",
        "profile_image":require('../../assets/dummy_profile_pic.png'),
        "message":"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam orci quisque leo mattis tortor. In in curabitur ac massa facilisis.",
        "time":"01:00 PM"
    },{
        "id":"3",
        "name":"John Doe",
        "profile_image":require('../../assets/dummy_profile_pic.png'),
        "message":"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam orci quisque leo mattis tortor. In in curabitur ac massa facilisis.",
        "time":"01:00 PM"
    },{
        "id":"4",
        "name":"John Doe",
        "profile_image":require('../../assets/dummy_profile_pic.png'),
        "message":"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam orci quisque leo mattis tortor. In in curabitur ac massa facilisis.",
        "time":"01:00 PM"
    },{
        "id":"5",
        "name":"John Doe",
        "profile_image":require('../../assets/dummy_profile_pic.png'),
        "message":"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam orci quisque leo mattis tortor. In in curabitur ac massa facilisis.",
        "time":"01:00 PM"
    },{
        "id":"6",
        "name":"John Doe",
        "profile_image":require('../../assets/dummy_profile_pic.png'),
        "message":"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam orci quisque leo mattis tortor. In in curabitur ac massa facilisis.",
        "time":"01:00 PM"
    },
]

export default class TechnologyUpdates extends React.Component{
    goToHome(){
        this.props.navigation.goBack()
    }
    render(){
        return(
            <View style={ {
                backgroundColor: "white",
                
                alignItems: "center",
                flex: 1,
              }}>

<LinearGradient  colors={['#5FA7C0', '#5FA7C0','#91C73E']} style={{width:'100%',height:Dimensions.get('window').width*2/8.5,alignItems:'center', flexDirection:'row', paddingLeft:'6%'}}>
                <TouchableOpacity onPress={() => this.goToHome()}>
                    <Image style={{width:10, height:17}} source={require('../../assets/backArrow.png')}/>
                </TouchableOpacity>
                <View style={{marginLeft:'4%'}}>
                <View style={{flexDirection:'row', alignItems:'center'}}>
                <Image style={{width:14, height:15.18,}} source={require('../../assets/headerLock.png')}/>
                <Text style={{color:'white',fontSize:18, marginLeft:'1%'}}>Technology Updates</Text>
                </View>
                <Text style={{color:'#FFFFFF'}}>218 members</Text>
                </View>


                </LinearGradient>          
                
           
        <ScrollView style={{width:'100%'}}>
         
            
         <View style={{padding:'4%', width:'100%'}}>

             {allPosts.map((item) => (
                 <View key={item.id} style={{flexDirection:'row', width:'100%', paddingRight:'3%', marginTop:'3%'}}>
                 <View>
                 <Image source={item.profile_image} style={{width:45,height:45,borderRadius:5,}}/>
                 </View>
                 <View style={{ width:'100%', paddingRight:'3%', paddingLeft:'3%'}}>
                     <View style={{flexDirection:'row', alignItems:'center'}}>
                         <Text style={{color:'#000000', fontSize:16, fontWeight:'bold'}}>{item.name}</Text>
                         <Text>  {item.time}</Text>
                     </View>
                     <View>
                         <Text style={{color:'#000000'}}>{item.message}</Text>
                     </View>
                 </View>
                 </View>
             ))}           

            </View>

         </ScrollView>
         
         <View style={{width:Dimensions.get('window').width,flexDirection:'row'}}>
            
             <TouchableOpacity style={{marginLeft:10,top:4}} >
             <EvilIcons name="image" size={50} color="gray" />

             </TouchableOpacity>

             
             <View style={{borderWidth:.5,borderColor:'#E8E8E8',height:50,marginBottom:10,position:'relative',borderRadius:20,width:'80%',backgroundColor:'#E8E8E8',flexDirection:'row'}}>
             <TextInput placeholder="Type Your Text" placeholderTextColor='gray' style={{color:'black',padding:10}} multiline={true}
            
             numberOfLines={5}
             
             />
             <TouchableOpacity style={{marginLeft:'50%',top:8.5}}>
             <Entypo name="emoji-neutral" size={30} color="gray" />
            </TouchableOpacity>

             </View>
           
           

             </View>



        </View>
        )
    }
}