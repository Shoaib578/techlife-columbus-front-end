import React from "react";
import { Image, Text, TouchableOpacity, View} from 'react-native'
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer, DrawerActions } from '@react-navigation/native';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createDrawerNavigator, DrawerContentScrollView, DrawerItemList } from '@react-navigation/drawer';
import LinearGradient from 'react-native-linear-gradient';
import Icon from 'react-native-vector-icons/Fontisto';
import LoginSignUp from '../screens/LoginSignUp/index'
import SignUp from '../screens/SignUp/index'
import SignIn from '../screens/SignIn/index'
import ForgotPassword from '../screens/ForgotPassword/index'
import CreateNewPassword from '../screens/CreateNewPassword/index'
import Splash from '../screens/Splash/index'
import OTP from '../screens/OTP/index'
import Interests from '../screens/Interests/index'
import Home from '../screens/Home/index'
import All from "../screens/All/index";
import Going from "../screens/Going/index";
import Saved from "../screens/Saved/index";
import LatestNews from "../screens/LatestNews/index";
import StartUpLifeScreen from "../screens/StartUpLifeScreen/index";
import Notification from "../screens/Notification/index";
import EventDetails from "../screens/EventDetails/index";
import About from '../screens/About/index'
import Profile from '../screens/Profile/index'
import Support from '../screens/Support/index'
import TechLifeColubusChannels from '../screens/TechlifeColumbsChannel/index'
import TechnologyUpdates from '../screens/TechnologyUpdates/index'
import styles from './styles'
import AsyncStorage from '@react-native-async-storage/async-storage'
import PickInterestForLoginwithFacebook from "../screens/PickInterests_for_login_with_facebook";
const Stack = createStackNavigator();
const Tab = createMaterialTopTabNavigator();
const BottomTab = createBottomTabNavigator();
const Drawer = createDrawerNavigator();



function bottomTabNavigations(){
  return(
  <BottomTab.Navigator screenOptions={{
    tabBarStyle: {
      height: 70,
      justifyContent: 'center'
    }}}>

      <BottomTab.Screen options={{
         headerShown: false,
         tabBarShowLabel: false,
         tabBarIcon: () => <Image style={styles.HomeIcon} source={require('../assets/home.png')} />,
       }} name="Home" component={FirstTopNavigator} />

      <BottomTab.Screen options={{
         headerShown: false,
         tabBarShowLabel: false,
         tabBarIcon: () => <Image style={styles.NotificationIcon} source={require('../assets/notification.png')} />,
       }} name="Notification" component={Notification} />

  </BottomTab.Navigator>
  )
}

async function logout(props){
await AsyncStorage.removeItem('user')
props.navigation.reset({
  index:0,
  routes:[{name:'LoginSignUp'}],
 
});
}

function FirstTopNavigator() {
    return (
      <Tab.Navigator tabBarOptions={{
        indicatorStyle: {
          width: 0, height: 0, elevation: 0,      
      }
      }}>
        <Tab.Screen options={ ({route}) => ({
          tabBarLabel:({focused}) => {
            if (focused) {
              return(
                <View style={styles.SkyTabBar}>
                  <Image style={styles.UpcomingEventsIcon} source={require('../assets/upcomingEventsIcon.png')}/>
                <Text style={styles.UpcomingEventsBarText}>  Upcoming Events</Text>
                </View>
              )
            }else{
              return(
                <View style={styles.TabarWithNoSkyButton}>
                  <Image style={styles.UpcomingEventsBlackIcon} source={require('../assets/upcomingEventsBlackIcon.png')}/>
                <Text style={styles.UpcomingEventsBarBlackText}>  Upcoming Events</Text>
                </View>
              )
            }
          }
        })} name="UpcomingEvents" component={UpComingEvents} />
        <Tab.Screen options={ ({route}) => ({
          tabBarLabel:({focused}) => {
            if (focused) {
              return(
                <View style={styles.SkyTabBar}>
                  <Image style={styles.NewsLetterWhiteIcon} source={require('../assets/NewsLetterWhiteIcon.png')}/>
                <Text style={styles.NewsLetterWhiteBarText}>  News Letter</Text>
                </View>
              )
            }else{
              return(
                <View style={styles.TabarWithNoSkyButton}>
                  <Image style={styles.NewsLetterBlackIcon} source={require('../assets/NewsLetterBlackIcon.png')}/>
                <Text style={styles.NewsLetterBarBlackText}>  News Letter</Text>
                </View>
              )
            }
          }
        })}  name="NewsLetter" component={NewsLetter} />
        <Tab.Screen options={ ({route}) => ({
          tabBarLabel:({focused}) => {
            if (focused) {
              return(
                <View style={styles.SkyTabBar}>
                  <Image style={styles.StartUpLifeWhiteIcon} source={require('../assets/StartUpLifeWhiteIcon.png')}/>
                <Text style={styles.StartUpLifeWhiteBarText}>  Startuplife</Text>
                </View>
              )
            }else{
              return(
                <View style={styles.TabarWithNoSkyButton}>
                  <Image style={styles.StartUpLifeBlackIcon} source={require('../assets/StartUpLifeBlackIcon.png')}/>
                <Text style={styles.StartUpLifeBarBlackText}>  Startuplife</Text>
                </View>
              )
            }
          }
        })} name="StartUpLife" component={StartUpLife} />
      </Tab.Navigator>
    );
  }

  function UpComingEvents() {
    return (
      <Tab.Navigator >
        <Tab.Screen options={{tabBarLabel:() => (
          <Text style={styles.AllBar}>All</Text>
        )}} name="All" component={All} />
        <Tab.Screen options={{tabBarLabel:() => (
          <Text style={styles.GoingBar}>Going</Text>
        )}} name="Going" component={Going} />
        <Tab.Screen options={{tabBarLabel:() => (
          <Text style={styles.SavedBar}>Saved</Text>
        )}} name="Saved" component={Saved} />
      </Tab.Navigator>
    );
  }

  function NewsLetter() {
    return (
      <Stack.Navigator>
        <Stack.Screen options={{headerShown:false}} name="LatestNews" component={LatestNews}/>
      </Stack.Navigator>
    );
  }

  function StartUpLife() {
    return (
      <Stack.Navigator>
        <Stack.Screen options={{headerShown:false}} name="StartUpLifeScreen" component={StartUpLifeScreen}/>
      </Stack.Navigator>
    );
  }

  function CustomDrawer (props) {
    return(
    <DrawerContentScrollView {...props}>
      <View style={styles.DrawerHeader}>
        <View style={{width:90, height:90, backgroundColor:'#91C73E', alignSelf:'flex-end', borderTopRightRadius:90}}></View>
        <View style={{width:60, height:60, borderRadius:30, backgroundColor:'#969696', alignSelf:'center', justifyContent:'center', alignItems:'center'}}>
          <Image style={{width:23.34, height:24}} source={require('../assets/profileIcon.png')}/>
        </View>
        <View style={{width:80, height:80, backgroundColor:'#5FA7C0', alignSelf:'flex-start', borderBottomLeftRadius:80}}></View>
      </View>
      <DrawerItemList {...props}/>
      <View style={{width:'100%', height:56, backgroundColor:'#F9F9F9', marginTop:150, justifyContent:'center', alignItems:'center'}}>
        <TouchableOpacity onPress={()=>logout(props)}>
        <Image style={styles.LogoutIcon} source={require('../assets/logoutIcon.png')}/>
        </TouchableOpacity>
      </View>
    </DrawerContentScrollView>
    )
  }


class Routes extends React.Component{
  header_right(navigation){
    return(
      <TouchableOpacity onPress={() => navigation.navigate('Profile') }>
      <Image style={{ width:22,height:22}} source={require('../assets/settings.png')} />
      </TouchableOpacity>
    )
  }
drawer_navigator(navigation){
  return(
    <TouchableOpacity onPress={() =>navigation.dispatch(DrawerActions.openDrawer())}>
        <Image style={{ width:20,height:16}} source={require('../assets/hamburger.png')} />
    </TouchableOpacity>
  )
}

  homeStackScreen = ({navigation}) => (
    <Drawer.Navigator drawerContent={(props) => <CustomDrawer {...props}/>}>
    <Drawer.Screen options={{
      headerStyle: {
        elevation: 0,
        shadowOpacity: 0,
        borderBottomWidth: 0,
      },
      headerTitleStyle:{
        color:'#FFFFFF'
      },
      headerLeftContainerStyle: {
        paddingLeft: '5%'
      },
      headerRightContainerStyle: {
        paddingRight: '5%'
      },
      headerRight:() => this.header_right(navigation),
      headerLeft:() => this.drawer_navigator(navigation),
      drawerLabel: () => (
        <View style={{flexDirection:'row', alignItems:'center'}}>
          <Icon style={{marginLeft:7}} name="home" color="#969696" size={18} />
          <Text style={{color:'#363636', fontSize:17, marginLeft:30}}>Home</Text>
        </View>
      ),
      drawerActiveBackgroundColor:'#FFFFFF',
  }} name="HomeStack" component={bottomTabNavigations}/>
  <Drawer.Screen options={{
    headerShown:false,
    drawerLabel: () => (
      <View style={{flexDirection:'row', alignItems:'center'}}>
        <Image style={styles.AboutIcon} source={require('../assets/aboutIcon.png')}/>
        <Text style={{color:'#363636', fontSize:17, marginLeft:30}}>About</Text>
      </View>
    ),
    drawerActiveBackgroundColor:'#FFFFFF',
  }} name="About" component={About}/>
  <Drawer.Screen options={{
    headerShown:false,
    drawerLabel: () => (
      <View style={{flexDirection:'row', alignItems:'center'}}>
        <Image style={styles.userIcon} source={require('../assets/userIcon.png')}/>
        <Text style={{color:'#363636', fontSize:17, marginLeft:30}}>Support</Text>
      </View>
    ),
    drawerActiveBackgroundColor:'#FFFFFF',
  }} name="Support" component={Support}/>
  <Drawer.Screen options={{
    drawerLabel: () => (
      <View style={{flexDirection:'row', alignItems:'center'}}>
        <Image style={styles.channelIcon} source={require('../assets/channelIcon.png')}/>
        <Text style={{color:'#363636', fontSize:17, marginLeft:30}}>Channels</Text>
      </View>
    ),
    headerShown:false,
    drawerActiveBackgroundColor:'#FFFFFF'
  }} name="Channel" component={TechLifeColubusChannels}/>
  </Drawer.Navigator>
  )

    render(){
        return(
            <NavigationContainer>
                <Stack.Navigator initialRouteName="Splash">
                    <Stack.Screen options={{headerShown:false}} name="Splash" component={Splash}/>
                    <Stack.Screen options={{headerShown:false}} name="LoginSignUp" component={LoginSignUp}/>
                    <Stack.Screen options={{headerShown:false}} name="SignUp" component={SignUp}/>
                    <Stack.Screen options={{headerShown:false}} name="SignIn" component={SignIn}/>
                    <Stack.Screen options={{headerShown:false}} name="ForgotPass" component={ForgotPassword}/>
                    <Stack.Screen options={{headerShown:false}} name="Otp" component={OTP}/>
                    <Stack.Screen options={{headerShown:false}} name="CreateNewPass" component={CreateNewPassword}/>
                    <Stack.Screen options={{headerShown:false}} name="Interest" component={Interests}/>
                    <Stack.Screen options={{headerShown:false,headerTitle:"Interest"}} name="PickInterestForLoginWithFacebook" component={PickInterestForLoginwithFacebook}/>

                    <Stack.Screen options={{headerShown:false}} name="HomeScreen" component={this.homeStackScreen}/>
                    <Stack.Screen options={{headerShown:false}} name="EventDetails" component={EventDetails}/>
                    <Stack.Screen options={{headerShown:false}} name="Profile" component={Profile}/>
                    <Stack.Screen options={{headerShown:false}} name="TechnologyUpdates" component={TechnologyUpdates}/>
                </Stack.Navigator>
            </NavigationContainer>
        )
    }
}

export default Routes;