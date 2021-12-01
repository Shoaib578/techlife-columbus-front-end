import { StyleSheet } from "react-native"

const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:'#FFFFFF',
    },

    Circles:{
        width:'100%',
        flexDirection:'row'
    },

    GreenSideCircle:{
       width:205,
       height:175
    },

    SkyCircle:{
        width:78,
        height:78,
        marginTop:'16%',
        marginRight:'12%'
    },

    GrayCircle:{
        width:26,
        height:26,
    },

    TwoSmallScircles:{
        marginLeft:'7%',
        marginTop:'10%',
        width:'30%',
        height:'30%',
        alignItems:'center',
    },

    LogoAndOtherContent:{
        width:'100%',
        alignItems:'center',
        marginTop:'27%'
    },

    SplashLogo:{
        width:'66%',
        height:80
    },

    WeDreamBuildText:{
        color:'#999999',
        fontSize:17,
        textAlign:'center'

    },

    SloganText:{
        marginTop:'7%',
        width:'65%',
        alignItems:'center',
        justifyContent:'center'
    }

})

export default styles