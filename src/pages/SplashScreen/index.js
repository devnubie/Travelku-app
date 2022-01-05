import React, { useEffect } from 'react'
import { View, Text, Image, StyleSheet} from 'react-native'
import Logo from '../../assets/img/Logo.png'



const SplashScreen = ({navigation}) => {
    useEffect(() => {
        setTimeout(()=>{
            navigation.replace('SignIn');
        },2000)
    },[] )
    return (
        <View style={Styles.page}>
        <Image style={Styles.image} source={Logo}/>
        <Text style={{color:'#FFFFFF',fontSize:24}}>Welcome to Travelku </Text>
        </View>
    );
};

const Styles = StyleSheet.create({
    page:{
        backgroundColor:'#355C7D',
        alignItems:'center',
        justifyContent:'center',
        flexDirection:'column',
        flex:1,
    },
    image:{
        height:100,
        width:100},
});

export default SplashScreen;
