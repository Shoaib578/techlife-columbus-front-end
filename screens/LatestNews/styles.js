import {StyleSheet} from 'react-native'

const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:'#FFFFFF'
    },

    LatestNews:{
        paddingLeft:'5%',
        paddingRight:'5%',
        marginTop:'5%',
        width:'100%',
        flexDirection:'row',
        justifyContent:'space-between',
        alignItems:'center'

    },

    LatestNewsText:{
        color:'#000000',
        fontSize:15,
        fontWeight:'bold'
    },

    ViewAll:{
        color:'#91C73E',
        fontSize:12
    },

    LatestNewsCards:{
        width:'100%',
        paddingRight:'5%',
        paddingLeft:'5%',
        marginTop:'4%'
    },

    NewsCardImage:{
        width:210,
        height:100,
        borderRadius:8
    },

    NewsCard:{
        width:227,
    },

    NewsCardText:{
        fontSize:14,
        fontWeight:'bold',
        color:'#000000',
        marginTop:8
    },

    NewsTypeAndTime:{
        flexDirection:'row',
        marginTop:'2.5%'
    },

    NewsType:{
        color:'#91C73E',
    },

    Time:{
        marginLeft:35
    },

    TodaysNews:{
        marginTop:'4%',
        paddingRight:'5%',
        paddingLeft:'5%'
    },

    TodaysNewsHeaderAndViewAll:{
        flexDirection:'row',
        justifyContent:'space-between',
        alignItems:'center',
    },

    TodaysNewsHeader:{
        color:'#000000',
        fontSize:15,
        fontWeight:'bold'
    },

    TodaysNewsCard:{
        flexDirection:'row',
        width:'100%',
        alignItems:'center',
        justifyContent:'space-between'
    },

    TodaysNewsCardTexts:{
        width:'60%'
    },

    TodaysNewsCardName:{
        fontSize:16,
        color:'#000000',
        fontWeight:'bold',

    },

    ChannelTypeAndTime:{
        flexDirection:'row',
        marginTop:'2%'
    },

    ChannelType:{
        color:'#91C73E',
    },

    TodaysNewsCardImageBox:{
        width:'30%',
        marginTop:'4%'
    },

    TodaysNewsCardImage:{
        width:'100%',
        height:77,
        borderRadius:9
    }
})

export default styles