import { StyleSheet } from "react-native"

const styles = StyleSheet.create({
    container:{
        backgroundColor:'#FFFFFF',
        width:'100%',
        paddingRight:'5%',
        paddingLeft:'5%',
        alignItems:'center'
    },

    NotificationCard:{
        flexDirection:'row',
        justifyContent:'space-between',
        width:'100%',
        marginTop:'4%'
    },

    NotificationImageBox:{
        width:'17%',
    },

    NotificationImage:{
        width:'100%',
        height:60,
        borderRadius:8
    },

    NotificationTexts:{
        width:'77%'
    },

    NotificationName:{
        fontSize:16,
        color:'#000000'
    },

    NotificationDescription:{
        color:'#969696',
        fontSize:16
    }
})

export default styles