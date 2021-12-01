import {StyleSheet} from 'react-native'

const styles = StyleSheet.create({
    container:{
        flex:1,
    },

    Logo:{
        width:221,
        height:65
    },
    LoginButton:{
        width:'90%',
        height:'7.7%',
        borderRadius:15,
        backgroundColor:'#5FA7C0',
        justifyContent:'center',
        alignItems:'center',
        marginTop:'10%'
    },

    LoginText:{
        color:'#fff',
        fontSize:20
    },

    SignUpButton:{
        width:'90%',
        height:'7.7%',
        borderRadius:15,
        backgroundColor:'#91C73E',
        justifyContent:'center',
        alignItems:'center',
        marginTop:'2.5%'

    },

    SignUpText:{
        color:'#fff',
        fontSize:20
    },

    LogoAndButtons:{
        width:'100%',
        height:'100%',
        marginTop:'80%',
        alignItems:'center'
    }

})

export default styles;