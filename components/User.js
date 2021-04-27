import React from 'react';
import {StyleSheet, Text, View} from "react-native";


const User = ({item}) => {
    return <View style={[styles.box, styles.item]}>
        <Text>{item.id}--{item.name}</Text>
    </View>
}

export default User;

let styles = StyleSheet.create({
    box: {
        height: 100,
        marginBottom: 15
    },
    item: {
        backgroundColor: 'red'
    }
})
