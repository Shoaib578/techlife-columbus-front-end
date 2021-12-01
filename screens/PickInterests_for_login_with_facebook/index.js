import React from "react"
import {Text, View, SafeAreaView, ScrollView, TouchableOpacity,Image} from 'react-native'
import styles from "./styles"
import  AsyncStorage  from "@react-native-async-storage/async-storage"
import base_url from '../../base_url'
class PickInterestForLoginwithFacebook extends React.Component{
    state = {
        data:[],
        selected_interest:[],
        is_navigated_to_login:false
    }
    componentDidMount(){
        fetch(base_url+'/api/get_all_interests',{
            method:'get',
           
            headers:{
                "Accept":"application/json",
                "Content-Type":"application/json"
            }
        })
        .then(resp=>{
            resp.json()
            .then(interests=>{
                console.log(interests)
                this.setState({data:interests.interests})
            
            })
        })
        
    }
    
    
    select_interest = (interest)=>{
      
        if(this.state.selected_interest.includes(interest)){
            this.setState({select_interest:this.state.selected_interest.splice(this.state.selected_interest.indexOf(interest))})
        }else{
            
           this.setState({select_interest:this.state.selected_interest.push(interest)})
           

        }
        
        
        
    }


    insert_interests = async()=>{
        
        this.state.selected_interest.map(interest=>{
            fetch(base_url+'/api/insert_interests',{
                method:'post',
                body:JSON.stringify({
                    "user_id":this.props.route.params.user_id,
                    "interest":interest,
                   
                }),
                headers:{
                    "Accept":"application/json",
                    "Content-Type":"application/json"
                }
            })
            .then(res=>{
                res.json()
                .then(async(resp)=>{
                   
                  
                    
                        if(!this.state.is_navigated_to_login){
                            this.setState({is_navigated_to_login:true})
                            await AsyncStorage.setItem('user',JSON.stringify(this.props.route.params.user))
                            return this.props.navigation.reset({
                                index:0,
                                routes:[{name:'HomeScreen'}],
                               
                            });
                        }
                        
                   
                  
                })
            })
        })
    }
        UpComingEvents(){
        this.props.navigation.navigate('HomeScreen')
        }
    render(){
        
        return(
            <SafeAreaView>
                <ScrollView>
                <View style={styles.container}>
                <View style={styles.InterestInfo}>
                    <Text style={styles.PickInterests}>Pick your interests</Text>
                    <Text style={styles.InfoToPersonalizeFeed}>We’ll use this info to personalize your feed to recommend things you’ll like.</Text>
                </View>

                <View style={styles.Cards}>
                
                

                
                {this.state.data.length>0?this.state.data.map(data=>{
                    return(
                       
                       
                        
                        <TouchableOpacity onPress={()=>this.select_interest(data.interest_id)} key={data.interest_id} style={styles.SingleCard}>
                       
                        
                        <Image style={styles.CardImage} source={{uri:'http://192.168.10.5:8000/uploads/'+data.interest_image}}/>
                       
                        <View style={{ flexDirection:'row',flexWrap:'wrap',position:'absolute',}}>
                        <Text style={{position:'absolute',fontSize:16,fontWeight:'bold',color:'white', right:13, top:-18}}>{data.interest_title}</Text>

                        {this.state.selected_interest.includes(data.interest_id)?<View style={{borderColor:'white',width:20,height:20,borderRadius:30,backgroundColor:'white', position:'absolute', left:50, top:-12}}></View>:<View style={{borderColor:'white',width:20,height:20,borderRadius:30,borderWidth:1, position:'absolute', left:50, top:-12}}></View>}
                        </View>


                    </TouchableOpacity>
                       
                       
                    )
                }):null}
               
               
           
                
                </View>

                <TouchableOpacity onPress={() => this.insert_interests()} style={styles.ContinueButton}>
                    <Text style={styles.ContinueButtonText}>Continue</Text>
                </TouchableOpacity>
                </View>
                </ScrollView>
            </SafeAreaView>
        )
    }
}

export default PickInterestForLoginwithFacebook