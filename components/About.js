
import React from 'react';

import {View, Text, StyleSheet,/*  ActivityIndicator */} from 'react-native';


export default class About extends React.Component {
    constructor(props) {
        super(props)
        this.state = {}
    }

    render() {
        return(
            <View>
                <Text style={styles.title}> About me</Text>
                <Text style={styles.text}> Lorem ipsum</Text>
                {/* <ActivityIndicator style={styles.ActivityIndicator} color="blue" size="large"/> */}
            </View>
        );
    }
}

const styles = StyleSheet.create({
    title: {
        fontSize: 22,
        marginBottom: 20,
    },
    text: {

    },
    ActivityIndicator: {
        marginTop: 60
    }
});


