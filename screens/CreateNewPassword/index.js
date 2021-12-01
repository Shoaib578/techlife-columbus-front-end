import React from "react";
import {Text, Image,  SafeAreaView, TouchableOpacity, View, Keyboard, TouchableWithoutFeedback, TextInput, Alert, ActivityIndicator} from 'react-native'
import styles from './styles'
import base_url from "../../base_url";
class CreateNewPassword extends React.Component{

    state = {
        showPass: true,
        showRetypePass:true,
        confirm_password:'',
        password:'',
        is_loading:false
    }
    ChangePassword = ()=>{
        if(this.state.password.length<8){
            return Alert.alert("Password Must Be Atleast 8 Chars")
        }else if(this.state.confirm_password != this.state.password){
            return Alert.alert("Please Confirm your password")
        }else{
            this.setState({is_loading:true})
            fetch(base_url+'/api/create_new_password',{
                method:'post',
                body:JSON.stringify({
                    "user_id":this.props.route.params.user_id,
                    "password":this.state.password
                    
                }),
                headers:{
                    "Accept":"application/json",
                    "Content-Type":"application/json"
                }
            })
            .then(res=>res.json().then(resp=>{
                this.setState({is_loading:false})
                if(resp.msg == "user password is updated"){
                    Alert.alert("Password is Updated")

                    return this.props.navigation.navigate("SignIn")
                }else{
                    return Alert.alert("Something Went Wrong")
                }
                
            }))
            .catch(err=>{
                this.setState({is_loading:false})
                Alert.alert("Something Went Wrong")
            })

        }
    }

    render(){
        return(
            <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
            <SafeAreaView style={styles.container}>
                <View style={styles.NewPassWordInfo}>
                    <Text style={styles.CreateNewPassText}>Create New Password</Text>
                    <Text style={styles.PleaseSetYourPasswordForLogin}>Please set your password for login</Text>
                </View>
                <View style={styles.EnteringData}>
                
                <Text style={styles.PasswordPlaceholder}>Password</Text>
                <View style={styles.PasswordInput}>

                <TouchableOpacity style={styles.LockButton}>
                <Image source={require('../../assets/lock.png')} style={styles.LockImageStyle}/>
                </TouchableOpacity>

                <TextInput secureTextEntry={this.state.showPass} onChangeText={(val)=>this.setState({password:val})} style={styles.InputField}/>
                {this.state.showPass == true ? 
                <TouchableOpacity onPress={() => this.setState({showPass:!(this.state.showPass)})} style={styles.EyeButton}>
                <Image source={require('../../assets/eye.png')} style={styles.imageStyle}/>
                </TouchableOpacity>:
                <TouchableOpacity onPress={() => this.setState({showPass:!(this.state.showPass)})} style={styles.EyeButton}>
                <Image source={require('../../assets/crosseye.png')} style={styles.imageStyle}/>
                </TouchableOpacity>
                }
                
               </View>

               <Text style={styles.PasswordPlaceholder}>Retype Password</Text>
               <View style={styles.ConfirmPasswordInput}>

               <TouchableOpacity style={styles.LockButton}>
                <Image source={require('../../assets/lock.png')} style={styles.LockImageStyle}/>
                </TouchableOpacity>

                <TextInput secureTextEntry={this.state.showRetypePass} onChangeText={(val)=>this.setState({confirm_password:val})} style={styles.InputField}/>

                {this.state.showRetypePass == true ? 
                <TouchableOpacity onPress={() => this.setState({showRetypePass:!(this.state.showRetypePass)})} style={styles.EyeButton}>
                <Image source={require('../../assets/eye.png')} style={styles.imageStyle}/>
                </TouchableOpacity>:
                <TouchableOpacity onPress={() => this.setState({showRetypePass:!(this.state.showRetypePass)})} style={styles.EyeButton}>
                <Image source={require('../../assets/crosseye.png')} style={styles.imageStyle}/>
                </TouchableOpacity>}
                
               </View>
               {this.state.is_loading?<ActivityIndicator color="blue" size="large"/>:null}
            <TouchableOpacity onPress={this.ChangePassword} style={styles.ContinueButton}>
                    <Text style={styles.ContinueButtonText}>Continue</Text>
            </TouchableOpacity>

                </View>
            </SafeAreaView>
            </TouchableWithoutFeedback>
        )
    }
}

export default CreateNewPassword;