import React from 'react';
import { TextInput, View, Text } from 'react-native';

const Input = ( { label, value, onChangeText, placeholder, secureTextEntry }) => {
    const { viewStyle, labelStyle, inputStyle } = styles;

    return (
        <View style={viewStyle}>

            <Text style={labelStyle}>{label}</Text>
            <TextInput
                secureTextEntry={secureTextEntry}
                placeholder={placeholder}
                autoCorrect={false}
                style={inputStyle}
                value={value}
                onChangeText={onChangeText}
            />

        </View>
    );
};

const styles = {
    viewStyle: {
        height: 40,
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center'
        },
    labelStyle: {
        fontSize: 18,
        paddingLeft: 20,
        flex: 1
        },
    inputStyle: {
        color: "#000",
        paddingRight: 5,
        paddingLeft: 5,
        fontSize: 18,
        lineHeight: 23,
        flex: 2
        },

};


export { Input };