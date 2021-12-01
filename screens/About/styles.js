import { StyleSheet } from "react-native"

const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:'#FFFFFF',
        paddingLeft:'5%',
        paddingRight:'5%',
        paddingBottom:'25%'
    },

    AboutUsImage:{
        width:'100%',
        height:156,
        marginTop:'5%',
        borderRadius:8
    },

    AboutUsText:{
        width:'100%',
        marginTop:'4%',
        borderRadius:7,
        backgroundColor:'#F5F5F5'
    },

    WhatIsTechLifeColumbus:{
        color:'#393939',
        fontSize:16,
        fontWeight:'bold',
        paddingRight:'3%',
        paddingTop:'3%',
        paddingLeft:'3%',
    },

    Description:{
        paddingTop:'0.5%',
        paddingRight:'3%',
        paddingLeft:'3%',
        paddingBottom:'3%',
        color:'#363636'
    }
})

export default styles