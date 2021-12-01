import {StyleSheet} from 'react-native'

const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:'#FFFFFF',
        padding:'5%'
    },

    BackArrow:{
        width:8.49,
        height:14
    },

    BackText:{
        color:'#5FA7C0',
        fontSize:16,
        marginLeft:5
    },

    Back:{
        flexDirection:'row',
        alignItems:'center',
        width:'15%'
    },

    SignUpInfo:{
        marginTop:'8%',
        marginBottom:'12%'
    },

    SignUpText:{
        color:'#333333',
        fontSize:28
    },

    EnterInfoText:{
        fontSize:16,
        marginTop:'3%',
        color:'gray'
    },

    EnteringData:{
        width:'100%',

    },

    NameInput:{
        backgroundColor:'#F2F2F7',
        width:'100%',
        height:48,
        fontSize:17,
        borderRadius:6,
        color:'#929292',
        paddingLeft:10
    },

    EmailInput:{
        backgroundColor:'#F2F2F7',
        width:'100%',
        height:48,
        fontSize:17,
        borderRadius:6,
        color:'#929292',
        paddingLeft:10,
        marginTop:'3%'
        
    },

    PasswordInput:{
        backgroundColor:'#F2F2F7',
        width:'100%',
        height:48,
        fontSize:17,
        borderRadius:6,
        marginTop:'3%',
        color:'#929292',
        flexDirection:'row-reverse',
        justifyContent:'space-between'
    },

    ConfirmPasswordInput:{
        backgroundColor:'#F2F2F7',
        width:'100%',
        height:48,
        fontSize:17,
        borderRadius:6,
        marginTop:'3%',
        color:'#929292',
        flexDirection:'row-reverse',
        justifyContent:'space-between'
    },

    imageStyle: {
        padding: 0,
        height: 24,
        width: 24,
        resizeMode: 'stretch',
        alignItems: 'center',
    },

    InputField:{
        flex:1,
        fontSize:17,
        color:'#929292',
        paddingLeft:10
    },

    SignUpButton:{
        width:'100%',
        height:48,
        borderRadius:15,
        backgroundColor:'#5FA7C0',
        justifyContent:'center',
        alignItems:'center',
        marginTop:'15%'
    },

    SignUpButtonText:{
        color:'#fff',
        fontSize:20
    },

    EyeButton:{
        margin:12,
        marginRight:20,
    },

    SignInLink:{
        marginLeft:5
    },

    AlreadyHaveAccount:{
        flexDirection:'row',
        width:'100%',
        justifyContent:'center',
        alignItems:'center',
        marginTop:'15%',
        marginBottom:'10%'
    },

    AlreadyHaveAccountSignInLink:{
        color:'#5FA7C0',
        fontSize:17
    },

    AlreadyHaveAccountText:{
        fontSize:17
    },
})

export default styles;