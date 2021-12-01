import React from "react";
import {Text,  SafeAreaView, TouchableOpacity, View, Keyboard, TouchableWithoutFeedback, TextInput, Alert, ActivityIndicator} from 'react-native'
import styles from './styles'
import base_url from "../../base_url";
class ForgotPassword extends React.Component{
    state = {
        
        email:"",
        
        is_loading:false,
    }


    VerifyOTP(){
        if(this.state.email.length>0){
            this.setState({is_loading:true})
            
            fetch(base_url+'/api/forgot_password',{
                method:'post',
                body:JSON.stringify({
                    "email":this.state.email,
                   
                   
                }),
                headers:{
                    "Accept":"application/json",
                    "Content-Type":"application/json"
                }
            })
            .then(res=>res.json().then(resp=>{
                if(resp.msg == "found"){
                    this.setState({is_loading:false})
                    return this.props.navigation.navigate('Otp',{otp:resp.otp,user_id:resp.user_id,email:this.state.email})

                }else{
                    this.setState({is_loading:false})

                    return Alert.alert("Email Not Found")
                }

            }))

        }else{
            this.setState({is_loading:false})

            return Alert.alert('Please Enter Your Email')
        }
    }


    async componentDidMount(){
        this.setState({email:"",is_loading:false,})
        this.props.navigation.addListener('focus',async()=>{
            this.setState({email:"",is_loading:false,})

          })
    }

    render(){
        return(
            <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
            <SafeAreaView style={styles.container}>
                <View style={styles.ForgotPassInfo}>
                    <Text style={styles.ForgotPassText}>Forgot password</Text>
                    <Text style={styles.EnterEmailToResetPassText}>Please enter your email address to reset your password</Text>
                </View>
                <View style={styles.EnteringData}>
                    <TextInput style={styles.EmailInput} value={this.state.email} placeholderTextColor="#929292" placeholder="Email" onChangeText={(val)=>this.setState({email:val})}/>

              {this.state.is_loading?<ActivityIndicator color="blue" size="large"/>:null}      
            <TouchableOpacity onPress={() => this.VerifyOTP()} style={styles.ContinueButton}>
                    <Text style={styles.ContinueButtonText}>Continue</Text>
            </TouchableOpacity>
                </View>
            </SafeAreaView>
            </TouchableWithoutFeedback>
        )
    }
}

export default ForgotPassword;