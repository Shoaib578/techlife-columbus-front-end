import React from 'react'
import {View,Text, Image, TextInput, TouchableOpacity, ScrollView, Dimensions, SafeAreaView} from 'react-native'
import LinearGradient from 'react-native-linear-gradient';
import AntDesign from 'react-native-vector-icons/AntDesign'
import Feather from 'react-native-vector-icons/Feather'

export default class TechLifeColubusChannels extends React.Component{

    state = {
        data:[
            {
                "id":1,
                "title":"Tech"
            },
            {
                "id":2,
                "title":"Cycle"
            },
            {
                "id":3,
                "title":"Car"
            }, {
                "id":4,
                "title":"truck"
            }

        ],
        
    }

    goToHome() {
        this.props.navigation.goBack()
    }


    render(){
        return(
            <SafeAreaView>
            <ScrollView>
            <View>
            <LinearGradient  colors={['#5FA7C0', '#5FA7C0','#91C73E']} style={{width:'100%',height:Dimensions.get('window').width*2/8.5,alignItems:'center', flexDirection:'row', paddingLeft:'6%'}}>
                <TouchableOpacity onPress={() => this.goToHome()}>
                    <Image style={{width:8, height:14}} source={require('../../assets/backArrow.png')}/>
                </TouchableOpacity>
                <Text style={{color:'white',fontSize:18, marginLeft:'5%'}}>TechLife Columbus</Text>


                </LinearGradient>

            
            <View style={{flexDirection:'row',borderColor:'gray',borderWidth:1,borderRadius:10,marginTop:20,width:'92%',alignSelf:'center'}}>
            <Feather name="search" size={25} style={{padding:10}}/>
            <TextInput placeholder="Search"/>
            </View>


            <Text style={{color:'black',fontWeight:'bold',padding:15,fontSize:16}}>Channels</Text>


            

            {this.state.data.map(data=>{
                return(
                    <TouchableOpacity key={data.id} onPress={() => this.props.navigation.navigate('TechnologyUpdates')} style={{flexDirection:'row',marginTop:20,width:'92%',alignSelf:'center',padding:3}}>
                    <Feather name="lock" size={25} />
                    <Text style={{color:'black',fontSize:16,left:20}}>{data.title}</Text>
                    </TouchableOpacity>
                )
            })}
            </View>
            </ScrollView>
            </SafeAreaView>
            
            
        )
    }
}
