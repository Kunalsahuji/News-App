import React from "react";
import {Text, View, StyleSheetS, Button,Image, StyleSheet} from "react-native";
class Home extends Component{
    render()
    {
        return(
            <View>
                <Text style= {{fontSize:50, color:"red"}}>Class Component</Text>
                <Button onPress={ () => alert("Welcome to the App")} title="Press"></Button>
                <Image style={{flex:1,width:200,height:200}} source={{uri:'https://static.remove.bg/remove-bg-web/ea3c274e1b7f6fbbfe93fad8b2b13d7ef352f09c/assets/start-1abfb4fe2980eabfbbaaa4365a0692539f7cd2725f324f904565a9a744f8e214.jpg'}}/>
            </View>
        )
    }
}

const style = StyleSheet.create()


export default Home