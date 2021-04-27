import React from 'react';
import {Button, Image, StyleSheet, Text, View} from "react-native";


const User = ({item}) => {
    return (
        <View style={[styles.box, styles.item]}>
            <Image source={{
                url: 'https://cdn.dribbble.com/users/56874/screenshots/1504502/rick-_rick-and-morty-cartoon_-pixel-art-by-dimaaaa-400_300_still.gif?compress=1&resize=400x300'
            }}/>
            <Text>{item.id}--{item.name}</Text>
            <Button
                title={'some button'}
                onPress={() => alert('press')}
            />
        </View>
    )
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
