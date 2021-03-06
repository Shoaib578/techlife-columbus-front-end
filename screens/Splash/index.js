import React from "react"
import {Text, View, SafeAreaView, Image} from 'react-native'
import styles from './styles'
import AsyncStorage from '@react-native-async-storage/async-storage'

class Splash extends React.Component{
    
    componentDidMount(){
        setTimeout(()=>{
            this.props.navigation.reset({
                index:0,
                routes:[{name:'HomeScreen'}],
               
            });
            
        },1000)
    }
    render(){
        
        return(
            <SafeAreaView style={styles.container}>
                <View style={styles.Circles}>
                <Image style={styles.GreenSideCircle} source={require('../../assets/greenCircle.png')}/>
                <View style={styles.TwoSmallScircles}>
                <Image style={styles.GrayCircle} source={require('../../assets/grayCircle.png')}/>
                <Image style={styles.SkyCircle} source={require('../../assets/skyCircle.png')}/>
                </View>
                </View>
                <View style={styles.LogoAndOtherContent}>
                <Image style={styles.SplashLogo} source={require('../../assets/splashLogo.png')}/>
                <View style={styles.SloganText}>
                <Text style={styles.WeDreamBuildText}>We dream, build, and work to build a Better Columbus</Text>
                </View>
                </View>
            </SafeAreaView>
        )
    }
}

export default Splash