import React from 'react'
import { StyleSheet, Text, View ,TextInput as TextInputRN} from 'react-native'

const TextInput = ({label,placeholder, secureTextEntry = true}) => {
    return (
        <View>
            <Text style={styles.label}>{label}</Text>
            <TextInputRN style={styles.input} placeholder={placeholder} secureTextEntry={secureTextEntry}></TextInputRN>
        </View>
    )
}

export default TextInput;

const styles = StyleSheet.create({
    label:{
        fontSize:20,
        color:'#FFFFFF',
        marginBottom:12,
    },
    input:{
        borderWidth:1,
        backgroundColor:'#FFFFFF',
        borderRadius:8,
        padding:10,
    }
})
