import {StyleSheet,Dimensions} from 'react-native'

const styles = StyleSheet.create({
   container:{
    width:'100%',
    height:Dimensions.get('window').width*2/8,
    alignItems:'center',
    
    justifyContent:'center'
   },
   avatar_container:{
    width:120,
    height:120,
    borderRadius:100,
    backgroundColor:'gray',
    position:'relative',
    borderColor:'gray',
    borderWidth:1,top:60,
   },
   avatar:{
    borderColor:'white',
    borderWidth:5,
    borderRadius:120,
    position:'relative',
    height:120,
    alignItems:'center',
    justifyContent:'center'
   },
    NotFoundContent:{
        alignItems:'center',
        marginTop:30
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