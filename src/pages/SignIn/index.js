import React from 'react'
import { StyleSheet, View, Text } from 'react-native'
import { Button, Gap, HeaderWhite ,TextInput } from '../../components';

const SignIn = ({navigation}) => {
    return (
        <View style={styles.page}>
        <HeaderWhite title='Sign In' titleColor="white"/>
        <View style={styles.container}>
        <TextInput label="Email" placeholder="type your email here"/>
        <Gap height ={16}/>
        <TextInput label="password" placeholder="type your password here"/>
        <Gap height={26}/>
        <Button color="#68FF33" text="Sign In" textColor="#355C7D"/>
        <Gap height={18}/>  
        <Button
         color ="#68FF33"
         text="create new account"
         textColor="#355C7D"
         onPress={()=> navigation.navigate('SignUp')} />
        </View>
        </View>
    )
}

export default SignIn;

const styles = StyleSheet.create({
    page:{
        backgroundColor:'#355C7D',
        flex:1,
    },
    container:{
        backgroundColor:'#355c7D',
        paddingHorizontal:24,
        paddingVertical:26,
        flex:1,
    },
})
