import React from 'react'
import {View,Text, Image, TextInput, TouchableOpacity, ScrollView, Dimensions, ActivityIndicator, Alert, } from 'react-native'
import LinearGradient from 'react-native-linear-gradient'
import AntDesign from 'react-native-vector-icons/AntDesign'
import Fontisto from 'react-native-vector-icons/Fontisto'
import base_url from '../../base_url'
import AsyncStorage from '@react-native-async-storage/async-storage'
class Profile extends React.Component{
    state = {
        user_info:'',
        is_loading:true,
        fullname:'',
        email:'',
        user_interests:[]

    }

    get_user_info= async()=>{
    const user = await AsyncStorage.getItem('user')
    const parse = JSON.parse(user)
    fetch(base_url+'/api/get_user_info?user_id='+parse.user_id,{
        method:'get',
       
        headers:{
            "Accept":"application/json",
            "Content-Type":"application/json"
        }
    })
    .then(res=>res.json()
    .then(resp=>{
        console.log(resp.user)
        this.setState({user_info:resp.user,email:resp.user.email,fullname:resp.user.fullname,is_loading:false})
    })
    )
    .catch(err=>{
        console.log('this is the error '+err)
        this.setState({network_error:true,is_loading:false})
    })
    }


 update_user = async()=>{
     const user = await AsyncStorage.getItem('user')
     const parse = JSON.parse(user)
     if(this.state.fullname.length<5 || this.state.fullname.length>15){
         return Alert.alert("Full Name Must Be Atleast Min 5 and Full Name Must Be Max 15")
     }else if( !this.state.email.includes('@') || this.state.email.length<4){
         return Alert.alert('Invalid Email')
     }else{
        fetch(base_url+'/api/update_user',{
            method:'post',
            body:JSON.stringify({
                "email":this.state.email,
                "user_id":parse.user_id,
                "fullname":this.state.fullname
            }),
            headers:{
                "Accept":"application/json",
                "Content-Type":"application/json"
            }
        })
        .then(res=>{
            res.json()
            .then(resp=>{
                if(resp.msg == 'user updated'){
                    Alert.alert('user updated successfully')
                    this.setState({is_loading:true})
                    this.get_user_info()
                }else{
                    Alert.alert('Something Went Wrong')

                }
            })
        })
        .catch(err=>{
            Alert.alert('Something Went Wrong')

        })
     }
 }



 get_user_interests = async()=>{
    const user = await AsyncStorage.getItem('user')
    const parse = JSON.parse(user)
    fetch(base_url+'/api/get_user_interests?user_id='+parse.user_id,{
        method:'get',
       
        headers:{
            "Accept":"application/json",
            "Content-Type":"application/json"
        }
    })
    .then(res=>res.json().then(resp=>{
        console.log(resp.interests)
        this.setState({user_interests:resp.interests})
    }))

 }


  async  componentDidMount(){
    await this.get_user_info()
    await this.get_user_interests()
    this.props.navigation.addListener('focus',async()=>{
        this.setState({is_loading:true})
        await this.get_user_info()
        await this.get_user_interests()

      })
    }

    render(){
        if(this.state.is_loading == false ){
        return(
            <ScrollView>
            <LinearGradient  colors={['#5FA7C0', '#5FA7C0','#91C73E']} style={{width:'100%',height:Dimensions.get('window').width*2/8,alignItems:'center',justifyContent:'center'}}>
                <View >
                
                
                <View style={{width:120,height:120,borderRadius:100,backgroundColor:'gray',position:'relative',borderColor:'gray',borderWidth:1,top:60,}}>

                <View style={{borderColor:'white',borderWidth:5,borderRadius:120,position:'relative',height:120,alignItems:'center',justifyContent:'center'}}>
                <Image source={require('../../assets/icon.png')} />
                
                </View>


                </View>
              

                </View>
                </LinearGradient>


                <View style={{marginTop:'15%',flexDirection:'row',padding:'4%',width:'95%'}}>
                <AntDesign name="user" size={30} style={{top:20,color:'gray',opacity:.3}}/>

                <View style={{width:'90%',left:20}}>
                    <Text style={{color:'black'}}>Name</Text>
                    <TextInput placeholder="Name" value={this.state.fullname} style={{borderBottomWidth:.3,borderColor:'gray',width:'100%'}} onChangeText={(val)=>this.setState({fullname:val})}/>
                </View>
                </View>

                <View style={{marginTop:10,flexDirection:'row',paddingRight:'4%', paddingLeft:'4%', paddingTop:10, paddingBottom:10, width:'95%'}}>
                <Fontisto name="email" size={30} style={{top:20,color:'gray',opacity:.3}}/>

                <View style={{width:'90%',left:20}}>
                    <Text style={{color:'black'}}>Email</Text>
                    <TextInput placeholder="Email" value={this.state.email} style={{borderBottomWidth:.9,borderColor:'gray',width:'100%'}} onChangeText={(val)=>this.setState({email:val})}/>
                </View>
                </View>


                <View style={{marginTop:10,flexDirection:'row',paddingRight:'4%', paddingLeft:'4%', paddingTop:10, paddingBottom:10,width:'95%'}}>
                <Image source={require('../../assets/prefences.png')} style={{width:30,height:30,top:20}}/>



                <View style={{width:'90%',left:20}}>
                    <Text style={{color:'black'}}>prefences</Text>
                    
                    <View style={{flexDirection:'row',width:'90%',flexWrap:'wrap',justifyContent:'space-between',top:20}}>
                     
                        {this.state.user_interests.map(data=>{
                            return(
                            <TouchableOpacity key={data.interest_id} style={{padding:5,alignItems:'center',justifyContent:'center',borderColor:'gray',borderWidth:1,borderRadius:20,marginTop:5,}}>
                            <Text>{data.interest_title}</Text>
                        </TouchableOpacity>
                            )
                        })}
                        
                        

                        
                        <TouchableOpacity style={{padding:5,alignItems:'center',justifyContent:'center',borderColor:'gray',borderWidth:1,borderRadius:20,marginTop:5,}}>
                            <Text>Add more+</Text>
                        </TouchableOpacity>

                    </View>


                   
                </View>
                </View>


                <TouchableOpacity onPress={this.update_user} style={{backgroundColor:'#5FA7C0',borderColor:'#5FA7C0',borderWidth:1,borderRadius:10,marginRight:'5%', marginLeft:'5%', marginTop:'5%', marginBottom:'5%',alignItems:'center', justifyContent:'center',width:'90%', height:45 ,marginTop:80}}>
                    <Text style={{color:'white',fontWeight:'bold', fontSize:16}}>Update</Text>
                </TouchableOpacity>


            </ScrollView>
        )
        }else{
            return(
                <ActivityIndicator color="blue" size="large" style={{marginTop:20}}/>
            )
        }
    }
}

export default Profile