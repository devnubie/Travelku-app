import React from 'react'
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'

const Button = ({text,color="red", textColor="red", onPress}) => {
    return (
        <TouchableOpacity activeOpacity={0.7} onPress={onPress}>
        <View style={styles.container(color)}>
            <Text style={styles.text(textColor)}>{text}</Text>
        </View>
        </TouchableOpacity>
    )
}

export default Button;

const styles = StyleSheet.create({

    container: (color) => ({
        backgroundColor: color,
        borderRadius:8,
        padding:12,
    }),
    text:(color)=>({
        color:color,
        fontSize:14,
        textAlign:'center',
    }),
})