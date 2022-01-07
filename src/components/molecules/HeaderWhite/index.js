import React from 'react';
import {Text, View ,Image,StyleSheet, TouchableOpacity} from 'react-native';

const HeaderWhite = ({title,titleColor="black",onBack}) => {
    return (
        <View style={styles.container}>
            {
                onBack && (
                    <TouchableOpacity activeOpacity={0.5}>
                    <View style={styles.backIcon}>
                    <Image source={require('../../../assets/img/ic-back-white.png')}/>
                    </View>
                    </TouchableOpacity>
                )}
            <Text style={styles.title(titleColor)}>{title}</Text>
        </View>
    )
}

export default HeaderWhite;

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
