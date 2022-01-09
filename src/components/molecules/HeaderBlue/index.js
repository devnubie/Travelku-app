import React from 'react';
import {Text, View ,Image,StyleSheet, TouchableOpacity} from 'react-native';

const HeaderBlue = ({title,titleColor="black",onBack}) => {
    return (
        <View style={styles.container}>
            {
                onBack && (
                    <TouchableOpacity activeOpacity={0.5} onPress={onBack}>
                    <View style={styles.backIcon}>
                    <Image source={require('../../../assets/img/ic-back-blue.png')}/>
                    </View>
                    </TouchableOpacity>
                )}
            <Text style={styles.title(titleColor)}>{title}</Text>
        </View>
    )
}

export default HeaderBlue;

const styles = StyleSheet.create({
    container:{
        paddingHorizontal:14,
        paddingVertical:24,
        flexDirection:'row',
        alignItems:'center',
    },
    
    title:(color)=>({
        color: color,
        fontSize:24,
        marginRight:20,
    }),

    backIcon:{
        padding:13,
        marginleft:13,
    }, 
})