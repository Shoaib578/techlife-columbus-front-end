import React from "react";
import {Text, Image,  SafeAreaView, TouchableOpacity, View, Keyboard, TouchableWithoutFeedback, Alert,TextInput, ActivityIndicator} from 'react-native'
import { ScrollView } from "react-native-gesture-handler";
import styles from './styles'
import AsyncStorage from '@react-native-async-storage/async-storage'
import base_url from "../../base_url";
import { LoginButton, AccessToken } from 'react-native-fbsdk';
import { LoginManager } from 'react-native-fbsdk'


  

class SignIn extends React.Component{

    state = {
        showPass:true,
        email:"",
        password:"",
        email_error_state:'',
        password_error_state:'',
        is_loading:false,
    }

   

    ForgotPassword(){
        this.props.navigation.navigate('ForgotPass')
    }

    GoToSignUp(){
        this.props.navigation.navigate('SignUp')
    }
    
    GoBack(){
        this.props.navigation.goBack()
    }




    

    validate = ()=>{
       
        let email_error = ''
        let password_error= ''
       

        



        if(!this.state.email.includes('@') && this.state.email.length<4){
            email_error = "Invalid Email"
        }


        if(this.state.password.length<8){
            password_error = "Password Must Be Atleast 8 Chars"
        }else if(this.state.password.length>15){
            password_error = "Password Must Be Max 15 Chars"

        }


      
        if( email_error || password_error ){
            this.setState({email_error_state:email_error,password_error_state:password_error})
            return false
        }

        return true
    }

    
    initUser = (token)=>{
        
        fetch('https://graph.facebook.com/v2.5/me?fields=email,name,friends&access_token=' + token)
        .then((response) => response.json())
        .then((json) => {
            console.log(json.email)
          // Some user object has been set up somewhere, build that user here
          fetch(base_url+'/api/login_with_facebook',{
            method:'post',
            body:JSON.stringify({
                "email":json.email,
                "fullname":json.name,
               
            }),
            headers:{
                "Accept":"application/json",
                "Content-Type":"application/json"
            }
        })
        .then(res=>res.json().then(resp=>{
            if(resp.msg == "found"){
                AsyncStorage.setItem('user',JSON.stringify(resp.user)) 
                            
                           this.props.navigation.reset({
                                index:0,
                                routes:[{name:'HomeScreen'}],
                               
                            });
            }else{
                this.props.navigation.navigate('PickInterestForLoginWithFacebook',{user:resp.user,user_id:resp.user_id})
    
            }
        }))
    
    
        })
    }



    SignInWithFacebook = () => {
        LoginManager.logInWithPermissions(["public_profile", "email"]).then(result=>{
            if (result.isCancelled) {
                console.log("==> Login cancelled");
              } else {
                  
                console.log(
                    AccessToken.getCurrentAccessToken().then((data) => {
                        const { accessToken } = data
                        this.initUser(accessToken)
                      })
                );
                
              }
        },
            
            
            
             function(error) {
              console.log("==> Login fail with error: " + error);
             }
           );
    }




    SignInUser = ()=>{
        const is_validate  = this.validate()
        if(is_validate){
            this.setState({is_loading:true})
            
            fetch(base_url+'/api/login_user',{
                method:'post',
                body:JSON.stringify({
                    "email":this.state.email,
                    "password":this.state.password,
                   
                }),
                headers:{
                    "Accept":"application/json",
                    "Content-Type":"application/json"
                }
            })
            .then(res=>{
                
                res.json()
                .then((resp)=>{
                    if(resp.msg == 'logged in'){
                        this.setState({
                           
                            email:'',
                            password:'',
                            //errors
                           
                            email_error_state:'',
                            password_error_state:'',
                            
                        })
                        
                         AsyncStorage.setItem('user',JSON.stringify(resp.user)) 
                        this.setState({is_loading:false})
                        this.props.navigation.reset({
                            index:0,
                            routes:[{name:'HomeScreen'}],
                           
                        });
                        
                        
                    }
                    this.setState({is_loading:false})

                   Alert.alert(resp.msg)
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
                <View style={styles.LoginInfo}>
                    <Text style={styles.LoginText}>Login</Text>
                    <Text style={styles.EnterEmailText}>Enter your email address and password to access your account</Text>
                </View>
                <View style={styles.EnteringData}>
                    <TextInput style={styles.EmailInput} placeholderTextColor="#929292" placeholder="Email" onChangeText={(val)=>this.setState({email:val})}/>
                    {this.state.email_error_state?<Text style={{textAlign:'center',color:'red'}}>{this.state.email_error_state}</Text>:null}
                    
                <View style={styles.PasswordInput}>
                {this.state.showPass == true ? 
                <TouchableOpacity onPress={() => this.setState({showPass:!(this.state.showPass)})} style={styles.EyeButton}>
                <Image source={require('../../assets/eye.png')} style={styles.imageStyle}/>
                </TouchableOpacity>:
                <TouchableOpacity onPress={() => this.setState({showPass:!(this.state.showPass)})} style={styles.EyeButton}>
                <Image source={require('../../assets/crosseye.png')} style={styles.imageStyle}/>
                </TouchableOpacity>
                }
                

                <TextInput placeholderTextColor="#929292" secureTextEntry={this.state.showPass} placeholder="Password" style={styles.InputField} onChangeText={(val)=>this.setState({password:val})}/>

            </View>

            {this.state.password_error_state?<Text style={{textAlign:'center',color:'red'}}>{this.state.password_error_state}</Text>:null}

            <View style={styles.ForgotPasswordButton}>
            <TouchableOpacity onPress={() => this.ForgotPassword()}>
            <Text style={styles.ForgotPassword}>Forgot Password?</Text>
            </TouchableOpacity>
            </View>
            {this.state.is_loading?<ActivityIndicator size="large" color="blue"/>:null}
            <TouchableOpacity onPress={() => this.SignInUser()} style={styles.LoginButton}>
                    <Text style={styles.LoginButtonText}>Login</Text>
            </TouchableOpacity>




            <View style={styles.Line}>
                <View style={styles.LeftLine}></View>
                <Text style={styles.OR}>or</Text>
                <View style={styles.RightLine}></View>
            </View>
            <View style={styles.SocialMediaButtons}>
                {/* <TouchableOpacity style={styles.GoogleBbutton}>
                <Image style={styles.googleIcon} source={require('../../assets/googleIcon.png')}/>
                    <Text style={styles.GoogleButtonText}>Google</Text>
                </TouchableOpacity> */}
                <TouchableOpacity onPress={this.SignInWithFacebook} style={styles.FacebookBbutton}>
                <Image style={styles.facebookIcon} source={require('../../assets/facebookIcon.png')}/>
                    <Text style={styles.FacebookButtonText}>Facebook</Text>
                </TouchableOpacity>


        


            </View>
            <View style={styles.DontHaveAccount}>
                <Text style={styles.DontHaveAccountText}>Don't have an account?</Text>
                <TouchableOpacity onPress={() => this.GoToSignUp()} style={styles.SignUpLink}>
                    <Text style={styles.DontHaveAccountSignUpLink}>Sign Up</Text>
                </TouchableOpacity>
            </View>
                </View>
            </SafeAreaView>
            </ScrollView>
            </TouchableWithoutFeedback>
        )
    }
}

export default SignIn;