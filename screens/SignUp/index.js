import React from "react";
import {Text, Image,  SafeAreaView, TouchableOpacity, View, Keyboard, TouchableWithoutFeedback, TextInput, Alert,ActivityIndicator} from 'react-native'
import { ScrollView } from "react-native-gesture-handler";
import styles from './styles'
import base_url from "../../base_url";
import  Axios  from "axios";
import AsyncStorage from  '@react-native-async-storage/async-storage';
class SignUp extends React.Component{

    state = {
        showPass:true,
        showConfirmPass:true,
        name:'',
        email:'',
        password:'',
        confirm_password:'',
        is_loading:false,
        //errors
        name_error_state:'',
        email_error_state:'',
        password_error_state:'',
        confirm_password_error_state:''
    }

    GoToLogin(){
      
        this.props.navigation.navigate('SignIn')
    }
    
    GoBack(){
        this.props.navigation.goBack()
    }

    validate = ()=>{
        let name_error = ''
        let email_error = ''
        let password_error= ''
        let confirm_password_error = ''

        if(this.state.name.length < 5){
            name_error = "Name Must Be 5 Chars"
        }else if(this.state.name.length>15){
            name_error = "Name Must be Max 15 Chars"
        }



        if(!this.state.email.includes('@') || this.state.email.length<4){
            email_error = "Invalid Email"
        }


        if(this.state.password.length<8){
            password_error = "Password Must Be Atleast 8 Chars"
        }else if(this.state.password.length>15){
            password_error = "Password Must Be Max 15 Chars"

        }


        if(this.state.confirm_password != this.state.password){
            confirm_password_error = "Confirm Your Password"
        }

        if(name_error || email_error || password_error || confirm_password_error){
            this.setState({email_error_state:email_error,password_error_state:password_error,name_error_state:name_error,confirm_password_error_state:confirm_password_error})
            return false
        }

        return true
    }

    SignUpUser = ()=>{

        const is_validate  = this.validate()
        if(is_validate){
            
            this.setState({is_loading:true})
            fetch(base_url+'/api/signup_user',{
                method:'post',
                body:JSON.stringify({
                    "email":this.state.email,
                    "password":this.state.password,
                    "fullname":this.state.name
                }),
                headers:{
                    "Accept":"application/json",
                    "Content-Type":"application/json"
                }
            })
            .then(res=>{
                res.json()
                .then(async(resp)=>{
                    if(resp.msg == 'User Registered Successfully'){
                        this.setState({
                            name:'',
                            email:'',
                            password:'',
                            confirm_password:'',


                            //errors
                            name_error_state:'',
                            email_error_state:'',
                            password_error_state:'',
                            confirm_password_error_state:''
                        })
                        await AsyncStorage.setItem('interest',resp.user_id.toString())
                        this.setState({is_loading:false})
                        this.props.navigation.navigate('Interest');
                    }else{
                        this.setState({is_loading:false})

                        Alert.alert(resp.msg)
                    }
                    
                })
            })
            .catch(err=>Alert.alert('Something Went Wrong'))
        
        
        }
       
    }


    render(){
        return(
            <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
            <ScrollView>
            <SafeAreaView style={styles.container}>
                <TouchableOpacity onPress={() => this.GoBack()} style={styles.Back}>
                    <Image style={styles.BackArrow} source={require('../../assets/Arrow.png')}/>
                    <Text style={styles.BackText}>Back</Text>
                </TouchableOpacity>
                <View style={styles.SignUpInfo}>
                    <Text style={styles.SignUpText}>Sign up</Text>
                    <Text style={styles.EnterInfoText}>Please fill information to create an account and sign up to continue</Text>
                </View>
                <View style={styles.EnteringData}>
                    <TextInput style={styles.NameInput} placeholderTextColor="#929292" placeholder="Name" onChangeText={(val)=>this.setState({name:val})}/>
                    {this.state.name_error_state?<Text style={{textAlign:'center',color:'red'}}>{this.state.name_error_state}</Text>:null}
                    <TextInput style={styles.EmailInput} placeholderTextColor="#929292" placeholder="Email" onChangeText={val=>this.setState({email:val})}/>
                    {this.state.email_error_state?<Text style={{textAlign:'center',color:'red'}}>{this.state.email_error_state}</Text>:null}
                    
                <View style={styles.PasswordInput}>
                {this.state.showPass == true ? 
                <TouchableOpacity onPress={() => this.setState({showPass: !(this.state.showPass)})} style={styles.EyeButton}>
                <Image source={require('../../assets/eye.png')} style={styles.imageStyle}/>
                </TouchableOpacity>:
                <TouchableOpacity onPress={() => this.setState({showPass: !(this.state.showPass)})} style={styles.EyeButton}>
                <Image source={require('../../assets/crosseye.png')} style={styles.imageStyle}/>
                </TouchableOpacity>
                }
                

                <TextInput placeholderTextColor="#929292" secureTextEntry={this.state.showPass} placeholder="Password" style={styles.InputField} onChangeText={(val)=>this.setState({password:val})}/>

               </View>
               {this.state.password_error_state?<Text style={{textAlign:'center',color:'red'}}>{this.state.password_error_state}</Text>:null}

               <View style={styles.ConfirmPasswordInput}>
                {this.state.showConfirmPass == true ? 
                <TouchableOpacity onPress={() => this.setState({showConfirmPass:!(this.state.showConfirmPass)})} style={styles.EyeButton}>
                <Image source={require('../../assets/eye.png')} style={styles.imageStyle}/>
                </TouchableOpacity>:
                <TouchableOpacity onPress={() => this.setState({showConfirmPass:!(this.state.showConfirmPass)})} style={styles.EyeButton}>
                <Image source={require('../../assets/crosseye.png')} style={styles.imageStyle}/>
                </TouchableOpacity>
                }
                

                <TextInput placeholderTextColor="#929292" secureTextEntry={this.state.showConfirmPass} placeholder="Confirm Password" style={styles.InputField} onChangeText={(val)=>this.setState({confirm_password:val})}/>

               </View>
               {this.state.confirm_password_error_state?<Text style={{textAlign:'center',color:'red'}}>{this.state.confirm_password_error_state}</Text>:null}
              
              
              
              {this.state.is_loading?<ActivityIndicator size="large" color="blue"/>:null}

            <TouchableOpacity style={styles.SignUpButton} onPress={this.SignUpUser}>
                    <Text style={styles.SignUpButtonText}>Sign up</Text>
            </TouchableOpacity>

            <View style={styles.AlreadyHaveAccount}>
                <Text style={styles.AlreadyHaveAccountText}>Already have an account?</Text>
                <TouchableOpacity onPress={() => this.GoToLogin()} style={styles.SignInLink}>
                    <Text style={styles.AlreadyHaveAccountSignInLink}>Login</Text>
                </TouchableOpacity>
            </View>
                </View>
            </SafeAreaView>
            </ScrollView>
            </TouchableWithoutFeedback>
        )
    }
}

export default SignUp;