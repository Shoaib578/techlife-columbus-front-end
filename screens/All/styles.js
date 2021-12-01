import {StyleSheet} from 'react-native'

const styles = StyleSheet.create({
    container:{
     flex:1,
     width:'100%',
     backgroundColor:'#FFFFFF'  
    },
    Card:{
        flexDirection:'row',
        width:'100%',
        justifyContent:'space-between'
    },

    Information:{
        width:'57%',
        padding:'2.5%'
    },

    PostName:{
        fontSize:14,
        color:'#000000',
        lineHeight:20
    },

    ClockAndCalender:{
        flexDirection:'row',
        alignItems:'center',
        width:'100%',
        marginTop:10

    },

    CalenderAndDate:{
        flexDirection:'row',
        alignItems:'center',
    },

    ClockAndTime:{
        flexDirection:'row',
        alignItems:'center',
        marginLeft:15
    },

    PostImage:{
        width:'40%',
        padding:'2.5%'
    },

    PostImageStyle:{
        width:'100%',
        height:80,
        borderRadius:10
    },

    ClockSize:{
        width:14.34,
        height:14.34
    },

    CalendarSize:{
        width:13.98,
        height:12.97
    },

    Date:{
        fontSize:13,
        marginLeft:5,
        color:'#333333'
    },

    Time:{
        fontSize:13,
        marginLeft:5,
        color:'#333333'
    }
    
})

export default styles