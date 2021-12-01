import { StyleSheet } from "react-native"

const styles = StyleSheet.create({
    container:{
        backgroundColor:'#FFFFFF',
        width:'100%',
        paddingRight:'5%',
        paddingLeft:'5%',
        alignItems:'center'
    },

    StartUpCard:{
        flexDirection:'row',
        justifyContent:'space-between',
        width:'100%',
        marginTop:'4%'
    },

    StartUpImageBox:{
        width:'45%',
    },

    StartUpImage:{
        width:'100%',
        height:100,
        borderRadius:8
    },

    StartUpTexts:{
        width:'50%'
    },

    StartUpName:{
        fontSize:16,
        color:'#000000'
    },

    StartUpDescription:{
        color:'#969696',
        fontSize:16
    }
})

export default styles