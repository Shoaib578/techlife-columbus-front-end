import React from 'react'
import {View,Text, Image, TextInput, TouchableOpacity, ScrollView, Dimensions,} from 'react-native'
import LinearGradient from 'react-native-linear-gradient';
import AntDesign from 'react-native-vector-icons/AntDesign'
import Feather from 'react-native-vector-icons/Feather'
import Ionicons from 'react-native-vector-icons/Ionicons'
import {Picker} from '@react-native-picker/picker';

export default class Support extends React.Component{

    state = {
        select:''
    }

    goToHome() {
        this.props.navigation.goBack()
    }


    render(){
        
        return(
            <View style={{flex:1,}}>
            <LinearGradient  colors={['#5FA7C0', '#5FA7C0','#91C73E']} style={{width:'100%',height:Dimensions.get('window').width*2/8.5,alignItems:'center', flexDirection:'row', paddingLeft:'6%'}}>
                <TouchableOpacity onPress={() => this.goToHome()}>
                    <Image style={{width:8, height:14}} source={require('../../assets/backArrow.png')}/>
                </TouchableOpacity>
                <Text style={{color:'white',fontSize:18, marginLeft:'5%'}}>Support</Text>


                </LinearGradient>
            <ScrollView>
            <View style={{marginTop:20,}}>
            <Text style={{fontSize:16,fontWeight:'bold',color:'black',padding:20}}>Type of Request</Text>
            
            <View style={{borderColor:'#E8E8E8',borderWidth:1,borderRadius:10,width:'92%',alignSelf:'center',backgroundColor:'#E8E8E8'}}>
           
            <Picker
            selectedValue={this.state.select}
            onValueChange={(itemValue, itemIndex) =>
               this.setState({select:itemValue})
            }>
            <Picker.Item label="Select Type of Request"  />

            <Picker.Item label="Java" value="java" />
            <Picker.Item label="JavaScript" value="js" />
            </Picker>


            </View>



            </View>

            <View style={{marginTop:20,}}>
                <Text style={{fontSize:16,fontWeight:'bold',color:'black',padding:20}}>Subject</Text>
                
                <View style={{borderColor:'#E8E8E8',borderWidth:1,borderRadius:10,width:'92%',alignSelf:'center',backgroundColor:'#E8E8E8'}}>
               
                <TextInput placeholder="Email" style={{left:10}}/>
                </View>



                </View>



            <View style={{marginTop:20,}}>
            <Text style={{fontSize:16,fontWeight:'bold',color:'black',padding:20}}>Problem</Text>
            
            <View style={{borderColor:'#E8E8E8',borderWidth:1,padding:10,borderRadius:10,width:'92%',alignSelf:'center',backgroundColor:'#E8E8E8'}}>
           
            <TextInput placeholder="Enter the description of event" multiline  numberOfLines={4}/>
            </View>


            <TouchableOpacity style={{backgroundColor:'#5FA7C0',borderColor:'#5FA7C0',borderWidth:1,borderRadius:10,padding:10,alignItems:'center',width:'90%',alignSelf:'center', marginTop:'7%', marginBottom:'4%'}}>
                <Text style={{color:'white',fontWeight:'bold', fontSize:16}}>Submit</Text>
            </TouchableOpacity>


            </View>

            </ScrollView>
            
        </View>
        )
    }
}