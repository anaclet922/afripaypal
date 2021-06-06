import 'react-native-gesture-handler';
import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  TextInput,
  Button,
  TouchableOpacity,
  FlatList
} from "react-native";


import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { color } from 'react-native-reanimated';



const Stack = createStackNavigator();

export const DATA = [
  {
    id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
    title: 'Mike Rine',
    subtitle: '+$348',
    time: '2 hours ago',
    color: "#67C977",
    icon: "m.png"
  },
  {
    id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
    title: 'Google Drive',
    subtitle: '-$148',
    time: '2 days ago',
    color: "#FF5D30",
    icon: "drive.png"
  },
  {
    id: '58694a0f-3da1-471f-bd96-145571e29d72',
    title: 'Casey Smith',
    subtitle: '+$678',
    time: '2 hours ago',
    color: "#67C977",
    icon: "c.png"
  },
];


export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
 
  image: {
    marginBottom: 15,
    width: "50%",
    height: "50px",
  },
 
  inputView: {
    backgroundColor: "#FFFFFF",
    borderRadius: 15,
    width: "85%",
    height: 45,
    marginBottom: 20, 
    alignItems: "center",
    borderBottomWidth: ".5px",
    borderTopWidth: ".5px",
    borderRightWidth: ".5px",
    borderLeftWidth: ".5px",
    borderColor: "#A6A6A6"
  },
 
  TextInput: {
    height: 50,
    flex: 1,
  },
 
  forgot_button: {
    height: 30,
    marginBottom: 5,
    marginTop: 20,
  },
 
  loginBtn: {
    width: "30%",
    borderRadius: 5,
    height: 30,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 15,
    backgroundColor: "#114DA7"
  },

  loginText: {
    color: "#FFFFFF"
  }
});  


const renderItem = ({ item }) => (
  <Item title={item.title} subtitle={item.subtitle} time={item.time} color={item.color} myicon={item.icon}/>
);
const Item = ({ title, subtitle, time, color, myicon }) => (
  <View style={{ width: "100%", marginRight: "25px", marginLeft: "25px", padding: "10px", flexDirection: "row", borderBottomWidth: "0.06rem", borderBottomColor: "#E1E1E1" }}>
    <Image source={require("./assets/c.png")} style={{ flex: 0.1, width: "25px", height: "25px", borderRadius: "50%"}}/>
    <Text style={styles.title, {flex: 0.5}}>{title}
      <br/>
      <Text style={{ opacity: 0.2, fontSize: "10px" }}>{time}</Text>
    </Text>
    <Text style={{ color: color, flex: 0.2}}>{subtitle}</Text>
  </View>
);
const LoginSreen = ({ navigation }) => {   
      return (  
        <View style={styles.container}>

        <Image style={styles.image} source={require("./assets/pypal.png")} />
  
        <StatusBar style="auto" />
        <View style={styles.inputView}>
          <TextInput
            style={styles.TextInput}
            placeholder="Email or Username"
            placeholderTextColor="#003f5c"
          />
        </View>
  
        <View style={styles.inputView}>
          <TextInput
            style={styles.TextInput}
            placeholder="Password"
            placeholderTextColor="#003f5c"
            secureTextEntry={true}
          />
        </View>
  
        <TouchableOpacity style={styles.loginBtn}>
          <Text 
            style={styles.loginText}
            onPress={() =>
              navigation.navigate('Home')
            }>Log in</Text>
        </TouchableOpacity>
  
        <TouchableOpacity>
          <Text style={styles.forgot_button}>Trouble login!, Forgot Password?</Text>
        </TouchableOpacity>

        <TouchableOpacity>
          <Text style={styles.forgot_button}>Sign up</Text>
        </TouchableOpacity>

      </View>
    
      );
  }  
  

class HomeScreen extends React.Component {  
  render() {  
      return (  
          <View style={{ backgroundColor: "#FFFFFF" }}> 
               
               <View style={{ backgroundColor: "#114DA7", width: "100%", borderBottomRightRadius: "25px"  }}>   
                  <View style={{ flexDirection: "row"}} >             
                      <View style={{ flex: 0.8 }}>
                        <Image style={{ width: "30px", height: "40px", marginRight: "25px", marginTop: "25px", marginLeft: "25px", marginBottom: "5px" }} source={require("./assets/logo.png")} /> 
                        <Text style={{ marginLeft: "25px", color: "#FFFFFF", fontSize: "17px", opacity: 0.5}}>
                           Hello Anaclet!
                        </Text> 
                        <Text style={{ color: "#FFFFFF", fontSize: "20px", marginLeft: "25px", marginTop: "25px", fontWeight: "700" }}>
                            $2,544.87
                        </Text>      
                        <Text style={{ color:"#FFFFFF", marginLeft: "25px", marginBottom: "25px" }}>
                           Your balance
                        </Text>          
                      </View>
                      <View style={{ flex: 0.2 }}>                        
                        <Image style={{ 
                                  width: "40px", 
                                  height: "40px", 
                                  borderRadius: "50%", 
                                  marginTop: "25px",}} source={require("./assets/avatar.png")} />
                      </View>
                  </View>  
               </View>

               <View style={{ flexDirection: "row", padding: "25px" }}>
                    <View style={{ backgroundColor: "#114DA7", 
                                  paddingLeft: "10px",  
                                  paddingRight:"10px", 
                                  borderRadius: "10px", 
                                  width: "70px",
                                  paddingTop: "25px", 
                                  paddingBottom: "25px"  }}>
                        <Text style={{ color: "#FFFFFF", fontSize: "12px" }}>
                            Send Money
                        </Text>
                    </View>
                    <View style={{ backgroundColor: "#FFFFFF", 
                                  paddingLeft: "10px",  
                                  paddingRight:"10px", 
                                  borderRadius: "10px", 
                                  width: "70px",
                                  paddingTop: "25px", 
                                  marginLeft: "13px",
                                  paddingBottom: "25px"  }}>
                        <Text style={{ color: "#114DA7", fontSize: "12px" }}>
                            Send Money
                        </Text>
                    </View>
               </View>

               <View>
                  <FlatList
                      data={DATA}
                      renderItem={renderItem}
                      keyExtractor={item => item.id}
                    />
               </View>

               
              

          </View>  
  );  
  }  
}  

export default class App extends React.Component {  
  render(){
    return (
      <NavigationContainer>
        <Stack.Navigator          
          screenOptions={{headerShown: false}}>
          <Stack.Screen
            name="Login"
            component={LoginSreen}
          />
          <Stack.Screen name="Home" component={HomeScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    );  
  }
} 
 
