import {Dimensions, StyleSheet} from 'react-native'

const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:'#FFFFFF',
    },

    InterestInfo:{
        width:'70%',
        padding:'5%'
    },

    PickInterests:{
        fontSize:24,
        color:'#393939',
    },

    InfoToPersonalizeFeed:{
        fontSize:14,
        lineHeight:19,
        color:'#363636',
        marginTop:'5%'
    },

    Cards:{
        flexDirection:'row',
        flexWrap:'wrap',
        width:'100%',
        marginTop:-7
    },

    CardName:{
        fontSize:16,
        color:'#FFFFFF'
    },

    SingleCard:{
        width:'50%',
        height:99,
        paddingRight:'5%',
        paddingLeft:'5%',
        paddingBottom:'2.5%',
        alignItems:'center',
        justifyContent:'center',
      

    },

    CardImage:{
        width:'100%', 
        height:'100%',
        borderRadius:8,
    },

    ContinueButton:{
        justifyContent:'center',
        alignItems:'center',
        backgroundColor:'#5FA7C0',
        width:'90%',
        height:48,
        marginRight:'5%',
        marginLeft:'5%',
        borderRadius:10,
        marginBottom:'10%',
        marginTop:'10%'
    },

    ContinueButtonText:{
        color:'#FFFFFF',
        fontSize:17
    },

    
})

export default styles;