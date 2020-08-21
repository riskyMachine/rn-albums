//Import library for making component
import React from 'react';
import { StyleSheet, Text, View} from 'react-native';

//Make a component
const Header = (props) => {
    const {textStyle, viewStyle} = styles;
    return (
        <View style = {viewStyle}>
            <Text style={textStyle}>{props.headerText}</Text>
        </View>
    );
};

//Make component available to other parts of the app
export default Header;

const styles = StyleSheet.create({
    viewStyle:{
        backgroundColor: '#9eb0f0',
        justifyContent: 'center',
        alignItems: 'center',
        height: 60,
        padding: 15,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 20},
        shadowOpacity: 0.3,
        elevation: 2,
        position: 'relative'
    },
    textStyle:{
        fontSize: 20
    }
});