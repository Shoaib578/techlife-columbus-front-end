import React from "react"
import {Text, SafeAreaView, Image, TouchableOpacity, ImageBackground} from 'react-native'
import styles from './styles'

class LoginSignUp extends React.Component{
    SignUp(){
        this.props.navigation.navigate('SignUp')
    }

    SignIn(){
        this.props.navigation.navigate('SignIn')
    }
    render(){
        return(
         
                <ImageBackground style={styles.container} source={require('../../assets/background.jpg')}>
                <SafeAreaView style={styles.LogoAndButtons}>
                    <Image style={styles.Logo} source={require('../../assets/logo.png')}/>
                <TouchableOpacity onPress={() => this.SignIn()} style={styles.LoginButton}>
                    <Text style={styles.LoginText}>Login</Text>
                </TouchableOpacity>

                <TouchableOpacity onPress={() => this.SignUp()} style={styles.SignUpButton}>
                    <Text style={styles.SignUpText}>Sign Up</Text>
                </TouchableOpacity>
                </SafeAreaView>
                </ImageBackground>
                
       
        )
    }
}

export default LoginSignUp