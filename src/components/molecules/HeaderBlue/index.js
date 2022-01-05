import React from 'react';
import { StyleSheet, Text, View } from 'react-native'

const HeaderBlue = ({title,titleColor="black"}) => {
    return (
        <View style={styles.container}>
            <Text style={styles.title(titleColor)}>{title}</Text>
        </View>
    )
}

export default HeaderBlue;

const styles = StyleSheet.create({
    container:{
        paddingHorizontal:24,
        paddingVertical:24,
    },
    title:(color)=>({
        color: color,
        fontSize:2,
    }),
})
