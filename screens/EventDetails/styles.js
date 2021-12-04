import { StyleSheet } from "react-native"

const styles = StyleSheet.create({
    container:{
        backgroundColor:'#FFFFFF',
        flex:1
    },

    Card:{
        paddingLeft:'5%',
        paddingRight:'5%',
        marginTop:'5%',
    },

    EventDetailsStyle:{
        color:'#000000',
        fontSize:16,
        fontWeight:'bold',
    },

    DetailImage:{
        width:'100%',
        height:141,
        borderRadius:8,
        marginTop:'3%'
    },

    Name:{
        color:'#000000',
        fontSize:16,
        lineHeight:19,
        marginTop:'2%',
    },

    EventDescription:{
        fontSize:16,
        color:'#000000',
        marginTop:'3%'
    },

    FirstSectionOfText:{
        fontSize:15,
        marginTop:'2%'
    },

    VisitOurSite:{
        flexDirection:'row',
        marginTop:'2%'
    },

    SecondSectionOfText:{
        fontSize:15,
    },

    fcccolumbusDotCom:{
        fontSize:15,
        color:'#5FA7C0',
        textDecorationLine:'underline'
    },

    FollowUsOnFaceBook:{
        flexDirection:'row'
    },

    ThirdSectionOfText:{
        fontSize:15,
    },

    freeCodeCampColumbs:{
        fontSize:15,
        color:'#5FA7C0',
        textDecorationLine:'underline'
    },

    WorkTogetherOnProjects:{
        flexDirection:'row',
        marginTop:'2%'
    },

    WeAreMeetingUp:{
        fontSize:15,
    },

    SeeMore:{
        color:'#94c43c',
        fontSize:15,
        textDecorationLine:'underline'
    },

    SimilarEvent:{
        marginTop:'2.5%',
        width:'100%',
        marginBottom:'2.5%'
    },

    SimilarEventCard:{
        width:'27%'
    },

    SimilarEventsNearBy:{
        fontSize:17,
        color:'#000000',
        marginTop:'3%',

    },

    SimilarEventImage:{
        width:180,
        height:100,
        borderRadius:5
    },
    going_button:{
        borderColor:'#90ee90',
        borderWidth:1,
        borderRadius:8,
        padding:10,
        alignItems:'center',
        justifyContent:'center',
        backgroundColor:'#90ee90',
        width:'45%',
        marginLeft:20,
        marginTop:20

    },
    save_button:{
        borderColor:'#90ee90',
        borderWidth:1,
        borderRadius:8,
        padding:10,
        alignItems:'center',
        justifyContent:'center',
        backgroundColor:'#90ee90',
        width:'40%',
        marginLeft:20,
        marginTop:20
    },
    NotFoundContent:{
        alignItems:'center'
    },
    NothingFoundImage:{
        width:90, 
        height:90
    },

    OOPs:{
        color:'#565656', 
        fontSize:48, 
        marginTop:'7%', 
        fontWeight:'bold'
    },

    NoSavedEventsText:{
        color:'#565656', 
        fontSize:16, 
        marginTop:'5%', 
        fontWeight:'bold'
    },

    GoHomeAndSaveEvents:{
        color:'#C1BEBE', 
        fontSize:15, 
        marginTop:'2%', 
        fontWeight:'bold'
    },
})

export default styles